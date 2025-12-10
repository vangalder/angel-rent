// Temporary in-memory storage for production until database is configured
// This will reset on deployment but allows the form to work
let inMemoryWaitlist: WaitlistEntry[] = []
const inMemoryEmails = new Set<string>()

export interface WaitlistEntry {
  id: string
  email: string
  timestamp: string
}

/**
 * Save a new waitlist entry
 * Currently uses in-memory storage in production
 * TODO: Set up Vercel KV or Postgres for persistent storage
 */
export async function saveWaitlistEntry(email: string): Promise<WaitlistEntry> {
  const entry: WaitlistEntry = {
    id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    email,
    timestamp: new Date().toISOString(),
  }

  // Add to in-memory storage
  inMemoryWaitlist.push(entry)
  inMemoryEmails.add(email.toLowerCase())

  // Log to console so we can see signups in Vercel logs
  console.log('New waitlist signup:', {
    email: entry.email,
    timestamp: entry.timestamp,
    totalSignups: inMemoryWaitlist.length
  })

  return entry
}

/**
 * Get all waitlist entries
 */
export async function getWaitlistEntries(): Promise<WaitlistEntry[]> {
  return [...inMemoryWaitlist]
}

/**
 * Check if an email is already in the waitlist
 */
export async function isEmailInWaitlist(email: string): Promise<boolean> {
  return inMemoryEmails.has(email.toLowerCase())
}

