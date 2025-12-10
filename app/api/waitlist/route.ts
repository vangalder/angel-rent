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

        // Send email notification (non-blocking, fire and forget)
        console.log('[Waitlist API] ===== EMAIL NOTIFICATION TRIGGERED =====')
        console.log('[Waitlist API] Email:', entry.email)
        console.log('[Waitlist API] IP address:', ip)
        console.log('[Waitlist API] Timestamp:', entry.timestamp)

        // Send email immediately - don't wait for geolocation
        // This ensures email always sends in serverless environment
        const emailPromise = sendWaitlistNotification({
            email: entry.email,
            timestamp: entry.timestamp,
            ipAddress: ip !== 'unknown' ? ip : undefined,
            geolocation: undefined, // Send without geolocation to ensure reliability
        })
            .then(success => {
                if (success) {
                    console.log('[Waitlist API] ✅✅✅ EMAIL NOTIFICATION SENT SUCCESSFULLY ✅✅✅')
                } else {
                    console.error('[Waitlist API] ❌❌❌ EMAIL NOTIFICATION FAILED - check SendGrid logs ❌❌❌')
                }
                return success
            })
            .catch(error => {
                console.error('[Waitlist API] ❌❌❌ EXCEPTION SENDING EMAIL:', error)
                console.error('[Waitlist API] Error stack:', error instanceof Error ? error.stack : 'No stack')
                return false
            })

        // Keep reference to promise to prevent garbage collection
        // In serverless, we can't await, but we can ensure it's tracked
        emailPromise.catch(() => { }) // Swallow errors to prevent unhandled rejection

        // Start geolocation lookup in background (non-blocking, for future use)
        getGeolocationFromIP(ip)
            .then(geo => {
                console.log('[Waitlist API] ✅ Geolocation completed:', geo)
            })
            .catch(err => {
                console.error('[Waitlist API] Geolocation failed:', err)
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

