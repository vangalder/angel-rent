import type { GeolocationData } from './email'

/**
 * Look up geolocation data for an IP address
 * Uses ipapi.co free tier (no API key required for basic lookups)
 */
export async function getGeolocationFromIP(ip: string): Promise<GeolocationData | null> {
    // Skip lookup for localhost, private IPs, or unknown
    if (!ip || ip === 'unknown' || ip.startsWith('127.') || ip.startsWith('192.168.') || ip.startsWith('10.')) {
        console.log('[Geolocation] Skipping lookup for IP:', ip)
        return null
    }

    try {
        // Extract first IP if multiple (x-forwarded-for can contain multiple IPs)
        const cleanIP = ip.split(',')[0].trim()

        console.log('[Geolocation] Looking up IP:', cleanIP)

        // Use ipapi.co free tier (no API key required, 1000 requests/day)
        const response = await fetch(`https://ipapi.co/${cleanIP}/json/`, {
            headers: {
                'User-Agent': 'angel.rent-waitlist/1.0',
            },
        })

        if (!response.ok) {
            console.warn('[Geolocation] Lookup failed with status:', response.status)
            return null
        }

        const data = await response.json()

        // Check for error response
        if (data.error) {
            console.warn('[Geolocation] API error:', data.reason)
            return null
        }

        const geolocation: GeolocationData = {
            city: data.city || undefined,
            region: data.region || undefined,
            country: data.country_name || undefined,
            countryCode: data.country_code || undefined,
            timezone: data.timezone || undefined,
            lat: data.latitude || undefined,
            lon: data.longitude || undefined,
        }

        console.log('[Geolocation] ✅ Lookup successful:', geolocation)
        return geolocation
    } catch (error) {
        console.error('[Geolocation] ❌ Error during lookup:', error)
        return null
    }
}
