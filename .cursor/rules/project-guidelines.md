# angel.rent - Project Guidelines

## Project Overview

**angel.rent** is a Next.js 14 waitlist landing page for El Ángel, a boutique hospitality property on Reforma 326, CDMX. The application features a responsive landing page with email collection, SendGrid email notifications, and Vercel KV storage.

## Technology Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Fonts**: Inter (body), Italianno (headings) via Google Fonts
- **Email**: SendGrid
- **Storage**: Vercel KV (production), Local JSON (development)
- **Hosting**: Vercel
- **Analytics**: Google Analytics 4

## Project Structure

```
angel-rent/
├── app/                    # Next.js app directory
│   ├── api/waitlist/      # API route for form submission
│   ├── layout.tsx         # Root layout with fonts and GA
│   ├── page.tsx           # Landing page
│   └── globals.css        # Design system CSS variables
├── components/            # React components
│   ├── BackgroundImage.tsx
│   └── WaitlistForm.tsx
├── lib/                   # Utilities and services
│   ├── design-system.ts  # Design constants
│   ├── email.ts          # SendGrid integration
│   └── storage.ts        # Storage abstraction
├── data/                  # Local development data
│   └── waitlist.json     # Development waitlist storage
├── public/images/         # Static assets
└── prep/                  # Documentation and designs
```

## Design System

### Colors
- **Primary Gold**: `#C89B5D` - Primary CTAs and accents
- **Secondary Midnight**: `#2D2D2D` - Dark overlay and text
- **Accent Terracotta**: `#C77A5A` - Secondary accents

### Typography
- **Headings**: Italianno (script font, minimum 36px)
- **Body**: Inter (sans-serif, 16px base)
- **Spacing**: Multiples of 4px (design system scale)

### Responsive Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## Development Guidelines

### Code Style
- TypeScript strict mode enabled
- Follow Next.js App Router conventions
- Use Tailwind CSS classes over inline styles
- Client components: Mark with `'use client'` directive
- Server components: Default (no directive needed)

### Component Patterns
- **Client Components**: Interactive elements (forms, state management)
- **Server Components**: Static content, data fetching
- **File Naming**: PascalCase for components, camelCase for utilities

### API Routes
- Located in `app/api/`
- Use Next.js Route Handlers (App Router)
- Include error handling and validation
- Implement rate limiting for public endpoints

### Environment Variables
- **Development**: Use `.env.local` (gitignored)
- **Production**: Configure via Vercel dashboard
- **Public vars**: Prefix with `NEXT_PUBLIC_`

## Vercel CLI Usage

### Common Commands
```bash
# Development
npm run dev              # Start dev server

# Deployment
vercel                   # Deploy to preview
vercel --prod           # Deploy to production

# Environment
vercel env ls           # List environment variables
vercel env add KEY      # Add environment variable

# Logs & Monitoring
vercel logs [URL]       # View deployment logs
vercel domains ls       # List configured domains
```

### Deployment Workflow
1. Make changes locally
2. Test with `npm run dev`
3. Deploy to preview: `vercel`
4. Test preview deployment
5. Deploy to production: `vercel --prod`

## Storage Abstraction

### Development
- Uses local JSON file: `data/waitlist.json`
- File created automatically on first submission
- Data persists between restarts

### Production
- Uses Vercel KV (Redis)
- Configured automatically via Vercel dashboard
- Environment variables auto-injected

### Functions
```typescript
// Save new entry
await saveWaitlistEntry(email: string)

// Get all entries
await getWaitlistEntries()

// Check if email exists
await isEmailInWaitlist(email: string)
```

## Email Notifications

### SendGrid Configuration
- API Key stored in environment variables
- Sender: `trevor@vangalder.com` (must be verified in SendGrid)
- Recipient: `trevor@vangalder.com`
- Notifications sent asynchronously (non-blocking)

### Email Template
- HTML formatted with branding
- Includes email address and timestamp
- Formatted for Mexico City timezone

## Monitoring Requirements

### Vercel Analytics
- Enable Web Analytics for page views
- Enable Speed Insights for performance
- Track custom events (form submissions)

### Alert Configuration
- **Recipient**: `trevor@vangalder.com`
- **Triggers**:
  - Deployment failures
  - High error rates (> 5%)
  - Function timeouts
  - Build errors

### Google Analytics
- Property ID: `G-7VXBQY7W2F`
- Tracks page views automatically
- Custom event: `waitlist_signup` on form submission

## Testing

### Local Testing
```bash
# Start development server
npm run dev

# Test form submission
# Check console for logs
# Verify data/waitlist.json is created
# Note: Email sending requires SENDGRID_API_KEY
```

### Production Testing
1. Submit test email via form
2. Verify success message displayed
3. Check Vercel KV for entry (via dashboard)
4. Confirm email received at `trevor@vangalder.com`
5. Verify GA tracking in real-time reports

## Security

### Rate Limiting
- 3 requests per minute per IP
- Implemented in-memory (resets on function cold start)
- Returns 429 status for exceeded limits

### Input Validation
- Zod schema validation for email format
- Sanitization of user input
- Error messages don't expose system details

### Environment Variables
- Never commit `.env.local` file
- Use Vercel environment variable encryption
- Rotate API keys if exposed

## DNS & SSL

### Domain Configuration
- **Domain**: angel.rent
- **Registrar**: Namecheap
- **DNS**: A records pointing to Vercel IPs
- **SSL**: Automatic via Vercel (Let's Encrypt)

### Namecheap DNS Settings
```
Type: A Record
Host: @
Value: 76.76.19.19

Type: A Record
Host: www
Value: 76.76.19.19
```

## Troubleshooting

### Form Not Submitting
1. Check browser console for errors
2. Verify API route is responding: `curl -X GET https://angel.rent/api/waitlist`
3. Check Vercel function logs
4. Verify environment variables set

### Email Not Sending
1. Verify SendGrid API key configured
2. Check `trevor@vangalder.com` is verified sender
3. Review SendGrid dashboard for errors
4. Check Vercel function logs for email errors

### Storage Issues
1. **Development**: Check `data/` directory exists and is writable
2. **Production**: Verify Vercel KV is enabled and connected
3. Check environment variables: `KV_REST_API_URL`, `KV_REST_API_TOKEN`

### Domain Not Working
1. Check DNS propagation: `dig angel.rent`
2. Verify domain added in Vercel: `vercel domains ls`
3. Check SSL certificate status in Vercel dashboard
4. Wait up to 48 hours for full DNS propagation

## Maintenance

### Regular Tasks
- Monitor waitlist submissions weekly
- Review Vercel analytics monthly
- Check for Next.js updates quarterly
- Rotate SendGrid API key annually

### Backup & Export
- Waitlist data stored in Vercel KV
- Export via: `getWaitlistEntries()` function
- Consider periodic exports to backup storage
- Store in `data/backups/` for archival

## Future Enhancements

Per business plan phases:
1. **Phase 2**: Full booking system, guest authentication
2. **Phase 3**: Creative community features, loyalty tokens
3. **Phase 4**: Multi-property expansion, white-label platform

## Support Contacts

- **Developer**: (Project architect)
- **Owner**: Abril (TÉLLEZ)
- **Alert Email**: trevor@vangalder.com
- **Domain Registrar**: Namecheap
- **Hosting**: Vercel

---

**Last Updated**: December 10, 2024

