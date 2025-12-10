import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { saveWaitlistEntry, isEmailInWaitlist } from '@/lib/storage'
import { sendWaitlistNotification } from '@/lib/email'
import { getGeolocationFromIP } from '@/lib/geolocation'

// Rate limiting map (in-memory, resets on server restart)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>()

const RATE_LIMIT_WINDOW = 60 * 1000 // 1 minute
const MAX_REQUESTS_PER_WINDOW = 3

// Email validation schema
const emailSchema = z.object({
    email: z.string().email('Invalid email address'),
})

/**
 * Simple rate limiting check
 */
function checkRateLimit(identifier: string): boolean {
    const now = Date.now()
    const record = rateLimitMap.get(identifier)

    if (!record || now > record.resetTime) {
        // Reset or create new record
        rateLimitMap.set(identifier, {
            count: 1,
            resetTime: now + RATE_LIMIT_WINDOW,
        })
        return true
    }

    if (record.count >= MAX_REQUESTS_PER_WINDOW) {
        return false
    }

    record.count++
    return true
}

/**
 * POST /api/waitlist
 * Add email to waitlist
 */
export async function POST(request: NextRequest) {
    try {
        // Get client IP for rate limiting and geolocation
        const ip = request.headers.get('x-forwarded-for')?.split(',')[0].trim() ||
            request.headers.get('x-real-ip') ||
            request.headers.get('cf-connecting-ip') || // Cloudflare
            'unknown'

        // Check rate limit
        if (!checkRateLimit(ip)) {
            return NextResponse.json(
                { error: 'Too many requests. Please try again later.' },
                { status: 429 }
            )
        }

        // Parse and validate request body
        const body = await request.json()
        const result = emailSchema.safeParse(body)

        if (!result.success) {
            return NextResponse.json(
                { error: 'Invalid email address' },
                { status: 400 }
            )
        }

        const { email } = result.data

        // Check if email already exists
        const exists = await isEmailInWaitlist(email)
        if (exists) {
            return NextResponse.json(
                { error: 'This email is already on the waitlist' },
                { status: 409 }
            )
        }

        // Save to storage
        const entry = await saveWaitlistEntry(email)

        // Get geolocation (non-blocking, with timeout)
        console.log('[Waitlist API] Triggering email notification for:', entry.email)
        console.log('[Waitlist API] IP address:', ip)

        // Function to send email with or without geolocation
        const sendEmailWithGeolocation = (geolocation: any) => {
            sendWaitlistNotification({
                email: entry.email,
                timestamp: entry.timestamp,
                ipAddress: ip !== 'unknown' ? ip : undefined,
                geolocation: geolocation || undefined,
            })
                .then(success => {
                    if (success) {
                        console.log('[Waitlist API] ✅ Email notification sent successfully')
                    } else {
                        console.error('[Waitlist API] ❌ Email notification failed (check logs above for details)')
                    }
                })
                .catch(error => {
                    console.error('[Waitlist API] ❌ Exception while sending email notification:', error)
                })
        }

        // Get geolocation with 2 second timeout
        const geolocationPromise = getGeolocationFromIP(ip).catch(error => {
            console.error('[Waitlist API] Geolocation lookup failed:', error)
            return null
        })

        const timeoutPromise = new Promise<null>(resolve =>
            setTimeout(() => {
                console.log('[Waitlist API] Geolocation lookup timeout, sending email without geolocation')
                resolve(null)
            }, 2000)
        )

        // Wait for geolocation (with timeout) before sending email
        // Always send email, even if geolocation fails or times out
        Promise.race([geolocationPromise, timeoutPromise])
            .then(geolocation => {
                sendEmailWithGeolocation(geolocation)
            })
            .catch(error => {
                console.error('[Waitlist API] ❌ Error in geolocation flow, sending email without geolocation:', error)
                // Always send email, even if geolocation completely fails
                sendEmailWithGeolocation(null)
            })

        return NextResponse.json(
            {
                success: true,
                message: 'Successfully joined the waitlist',
                data: {
                    email: entry.email,
                    timestamp: entry.timestamp,
                },
            },
            { status: 201 }
        )
    } catch (error) {
        console.error('Error processing waitlist submission:', error)
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        )
    }
}

/**
 * GET /api/waitlist
 * Health check / info endpoint
 */
export async function GET() {
    const sendGridApiKey = process.env.SENDGRID_API_KEY
    const hasApiKey = !!sendGridApiKey
    const apiKeyPrefix = sendGridApiKey ? sendGridApiKey.substring(0, 5) + '...' : 'not set'

    return NextResponse.json({
        service: 'angel.rent waitlist API',
        version: '1.0.0',
        sendGrid: {
            configured: hasApiKey,
            apiKeyPrefix: hasApiKey ? apiKeyPrefix : null,
            senderEmail: 'trevor@vangalder.com',
            recipientEmail: 'trevor@vangalder.com',
            note: hasApiKey
                ? 'API key is set. Ensure sender email is verified in SendGrid dashboard.'
                : 'SENDGRID_API_KEY environment variable is not set. Add it in Vercel dashboard.',
        },
    })
}

