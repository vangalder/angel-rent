import sgMail from '@sendgrid/mail'

export interface GeolocationData {
    city?: string
    region?: string
    country?: string
    countryCode?: string
    timezone?: string
    lat?: number
    lon?: number
}

export interface WaitlistNotificationData {
    email: string
    timestamp: string
    ipAddress?: string
    geolocation?: GeolocationData
}

/**
 * Initialize SendGrid API key (called at runtime to ensure env vars are available)
 */
function initializeSendGrid(): boolean {
    const apiKey = process.env.SENDGRID_API_KEY

    if (!apiKey) {
        console.error('[SendGrid] API key not found in environment variables')
        console.error('[SendGrid] Check that SENDGRID_API_KEY is set in Vercel environment variables')
        return false
    }

    // Trim whitespace (common issue with environment variables)
    const trimmedKey = apiKey.trim()

    if (!trimmedKey.startsWith('SG.')) {
        console.error('[SendGrid] API key format appears invalid (should start with SG.)')
        return false
    }

    try {
        sgMail.setApiKey(trimmedKey)
        console.log('[SendGrid] API key initialized successfully')
        return true
    } catch (error) {
        console.error('[SendGrid] Failed to set API key:', error)
        return false
    }
}

/**
 * Send email notification when someone joins the waitlist
 */
export async function sendWaitlistNotification(
    data: WaitlistNotificationData
): Promise<boolean> {
    // Initialize SendGrid at runtime (not module load) to ensure env vars are available
    if (!initializeSendGrid()) {
        console.error('[SendGrid] Cannot send email - API key not configured')
        return false
    }

    const formattedDate = new Date(data.timestamp).toLocaleString('es-MX', {
        dateStyle: 'full',
        timeStyle: 'long',
        timeZone: 'America/Mexico_City',
    })

    // Format geolocation string
    const locationParts: string[] = []
    if (data.geolocation?.city) locationParts.push(data.geolocation.city)
    if (data.geolocation?.region) locationParts.push(data.geolocation.region)
    if (data.geolocation?.country) locationParts.push(data.geolocation.country)
    const locationString = locationParts.length > 0 ? locationParts.join(', ') : 'No disponible'

    const msg = {
        to: 'trevor@vangalder.com',
        from: 'trevor@vangalder.com', // Must be a verified sender in SendGrid
        subject: 'Nueva Inscripción a la Lista de Espera - angel.rent',
        text: `
¡Nueva inscripción a la lista de espera recibida!

Correo electrónico: ${data.email}
Hora: ${formattedDate}
${data.ipAddress ? `Dirección IP: ${data.ipAddress}` : ''}
${data.geolocation ? `Ubicación: ${locationString}` : ''}

---
angel.rent - The Art of Staying
    `.trim(),
        html: `
      <!DOCTYPE html>
      <html>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Italianno&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
      </head>
      <body style="margin: 0; padding: 0; background-color: #ffffff;">
        <div style="font-family: 'Inter', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h1 style="color: #C89B5D; font-family: 'Italianno', cursive; font-size: 48px; margin-bottom: 10px; margin-top: 0;">
            angel.rent
          </h1>
          <h2 style="color: #2D2D2D; font-size: 24px; margin-bottom: 20px; font-weight: 600;">
            Nueva Inscripción a la Lista de Espera
          </h2>
          
          <div style="background-color: #F5F5F5; border-left: 4px solid #C89B5D; padding: 20px; margin: 20px 0;">
            <p style="margin: 10px 0; color: #2D2D2D;"><strong>Correo electrónico:</strong> <a href="mailto:${data.email}" style="color: #0057FF; text-decoration: none;">${data.email}</a></p>
            <p style="margin: 10px 0; color: #2D2D2D;"><strong>Hora:</strong> ${formattedDate}</p>
            ${data.ipAddress ? `<p style="margin: 10px 0; color: #2D2D2D;"><strong>Dirección IP:</strong> ${data.ipAddress}</p>` : ''}
            ${data.geolocation ? `<p style="margin: 10px 0; color: #2D2D2D;"><strong>Ubicación:</strong> ${locationString}</p>` : ''}
            ${data.geolocation?.timezone ? `<p style="margin: 10px 0; color: #2D2D2D;"><strong>Zona horaria:</strong> ${data.geolocation.timezone}</p>` : ''}
          </div>
          
          <p style="color: #666; font-size: 14px; margin-top: 30px; line-height: 1.5;">
            Esta notificación fue enviada desde el sistema de lista de espera de angel.rent.
          </p>
        </div>
      </body>
      </html>
    `,
    }

    try {
        console.log('[SendGrid] Attempting to send email notification...')
        console.log('[SendGrid] From:', msg.from)
        console.log('[SendGrid] To:', msg.to)

        await sgMail.send(msg)
        console.log('[SendGrid] ✅ Email sent successfully to', msg.to)
        return true
    } catch (error: any) {
        console.error('[SendGrid] ❌ Error sending email:', error.message || error)

        // Log detailed SendGrid error information
        if (error.response) {
            const { body, statusCode } = error.response
            console.error('[SendGrid] Status Code:', statusCode)
            console.error('[SendGrid] Error Body:', JSON.stringify(body, null, 2))

            // Common SendGrid errors
            if (statusCode === 403) {
                console.error('[SendGrid] ⚠️ 403 Forbidden - Check API key permissions')
            } else if (statusCode === 401) {
                console.error('[SendGrid] ⚠️ 401 Unauthorized - Invalid API key')
            } else if (statusCode === 400 && body?.errors) {
                body.errors.forEach((err: any) => {
                    console.error(`[SendGrid] Error: ${err.message}`)
                    if (err.message?.includes('sender')) {
                        console.error('[SendGrid] ⚠️  Sender email must be verified in SendGrid dashboard')
                        console.error('[SendGrid] ⚠️  Go to: Settings > Sender Authentication > Verify a Single Sender')
                    }
                })
            }
        } else {
            console.error('[SendGrid] Full error object:', error)
        }

        return false
    }
}

