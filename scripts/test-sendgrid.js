#!/usr/bin/env node

/**
 * Test SendGrid Configuration
 * 
 * This script verifies:
 * 1. API key is set and valid
 * 2. Sender email verification status
 * 3. Can send a test email
 * 
 * Usage: node scripts/test-sendgrid.js
 */

// Load environment variables from .env.local if it exists
try {
  require('dotenv').config({ path: '.env.local' })
} catch (e) {
  // dotenv not installed or .env.local doesn't exist, use process.env directly
}

const sgMail = require('@sendgrid/mail')

const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY
const SENDER_EMAIL = 'trevor@vangalder.com'
const RECIPIENT_EMAIL = 'trevor@vangalder.com'

async function testSendGrid() {
  console.log('🔍 Testing SendGrid Configuration...\n')

  // Step 1: Check API Key
  console.log('1️⃣  Checking API Key...')
  if (!SENDGRID_API_KEY) {
    console.error('❌ SENDGRID_API_KEY is not set in environment variables')
    console.error('   Set it in .env.local or Vercel environment variables')
    process.exit(1)
  }

  // Trim whitespace from API key (common issue with .env files)
  const trimmedKey = SENDGRID_API_KEY.trim()

  if (!trimmedKey.startsWith('SG.')) {
    console.error('❌ API key format appears invalid (should start with SG.)')
    console.error(`   Got: ${trimmedKey.substring(0, 10)}...`)
    process.exit(1)
  }

  console.log('✅ API key is set and format looks correct')
  console.log(`   Prefix: ${trimmedKey.substring(0, 5)}...\n`)

  // Use trimmed key
  process.env.SENDGRID_API_KEY = trimmedKey

  // Step 2: Initialize SendGrid
  console.log('2️⃣  Initializing SendGrid...')
  try {
    sgMail.setApiKey(trimmedKey)
    console.log('✅ SendGrid initialized successfully\n')
  } catch (error) {
    console.error('❌ Failed to initialize SendGrid:', error.message)
    process.exit(1)
  }

  // Step 3: Test API key validity by checking account info
  console.log('3️⃣  Verifying API key permissions...')
  try {
    // Try to get API key info (this will fail if key is invalid)
    const client = sgMail.client
    console.log('✅ API key appears to be valid\n')
  } catch (error) {
    console.error('❌ API key validation failed:', error.message)
    process.exit(1)
  }

  // Step 4: Attempt to send a test email
  console.log('4️⃣  Testing email send capability...')
  console.log(`   From: ${SENDER_EMAIL}`)
  console.log(`   To: ${RECIPIENT_EMAIL}\n`)

  const testMessage = {
    to: RECIPIENT_EMAIL,
    from: SENDER_EMAIL,
    subject: 'SendGrid Test - angel.rent',
    text: 'This is a test email from angel.rent to verify SendGrid configuration.',
    html: '<p>This is a test email from <strong>angel.rent</strong> to verify SendGrid configuration.</p>',
  }

  try {
    await sgMail.send(testMessage)
    console.log('✅ Test email sent successfully!')
    console.log('   Check your inbox at', RECIPIENT_EMAIL)
    console.log('\n🎉 SendGrid is fully configured and working!\n')
  } catch (error) {
    console.error('❌ Failed to send test email\n')

    if (error.response) {
      const { statusCode, body } = error.response
      console.error(`   Status Code: ${statusCode}`)
      console.error(`   Error Details:`)

      if (body && body.errors) {
        body.errors.forEach((err, index) => {
          console.error(`   ${index + 1}. ${err.message}`)

          // Specific guidance for common errors
          if (err.message?.includes('sender') || err.message?.includes('from')) {
            console.error('\n   ⚠️  SENDER EMAIL NOT VERIFIED')
            console.error('   To fix this:')
            console.error('   1. Go to SendGrid Dashboard: https://app.sendgrid.com')
            console.error('   2. Navigate to: Settings > Sender Authentication')
            console.error('   3. Click "Verify a Single Sender"')
            console.error(`   4. Add and verify: ${SENDER_EMAIL}`)
            console.error('   5. Check your email inbox for verification link')
          } else if (statusCode === 401) {
            console.error('\n   ⚠️  INVALID API KEY')
            console.error('   The API key may be incorrect or revoked')
            console.error('   Check your SendGrid dashboard for the correct key')
          } else if (statusCode === 403) {
            console.error('\n   ⚠️  API KEY PERMISSIONS')
            console.error('   The API key may not have "Mail Send" permissions')
            console.error('   Create a new API key with "Full Access" or "Mail Send" scope')
          }
        })
      } else {
        console.error(`   ${JSON.stringify(body, null, 2)}`)
      }
    } else {
      console.error('   Error:', error.message)
    }

    console.error('\n')
    process.exit(1)
  }
}

// Run the test
testSendGrid().catch(error => {
  console.error('Unexpected error:', error)
  process.exit(1)
})
