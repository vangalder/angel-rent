# angel.rent

**The Art of Staying** - A boutique hospitality platform for El Ángel, Reforma 326, CDMX.

## Overview

This is the official waitlist landing page for angel.rent, a luxury boutique short-term rental property targeting premium digital nomads, international creatives, and luxury travelers.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Fonts**: Inter & Italianno (Google Fonts)
- **Email**: SendGrid
- **Storage**: Vercel KV (production) / Local JSON (development)
- **Hosting**: Vercel
- **Analytics**: Google Analytics 4 (G-7VXBQY7W2F)

## Quick Start

### Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

### Environment Setup

Create `.env.local` file:

```env
SENDGRID_API_KEY=your_sendgrid_api_key
NEXT_PUBLIC_GA_ID=G-7VXBQY7W2F
NODE_ENV=development
```

## Features

### Current (MVP)
- ✅ Responsive landing page (mobile/tablet/desktop)
- ✅ Email waitlist with validation
- ✅ SendGrid email notifications
- ✅ Dual storage (local JSON + Vercel KV)
- ✅ Rate limiting (3 req/min per IP)
- ✅ Google Analytics integration
- ✅ Design system implementation

### Planned
- 🔄 Full booking system
- 🔄 Guest authentication portal
- 🔄 Creative community features
- 🔄 Loyalty token system

## Project Structure

```
angel-rent/
├── app/                    # Next.js app directory
│   ├── api/waitlist/      # Form submission API
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Landing page
│   └── globals.css        # Design system
├── components/            # React components
├── lib/                   # Utilities
│   ├── design-system.ts
│   ├── email.ts
│   └── storage.ts
├── data/                  # Local storage
├── public/images/         # Static assets
└── prep/                  # Documentation
```

## Deployment

### Vercel Deployment

```bash
# Deploy to production
vercel --prod

# View logs
vercel logs --follow

# Check domain
vercel domains ls
```

### Status

See [DEPLOYMENT-STATUS.md](DEPLOYMENT-STATUS.md) for current deployment status and pending tasks.

## Documentation

- **Configuration**: [prep/CONFIGURATION-AND-CLI.md](prep/CONFIGURATION-AND-CLI.md)
- **Project Guidelines**: [.cursor/rules/project-guidelines.md](.cursor/rules/project-guidelines.md)
- **Business Plan**: [prep/business-plan-angel-rent.md](prep/business-plan-angel-rent.md)
- **Design System**: [prep/design-system-angel-rent.md](prep/design-system-angel-rent.md)

## Key Information

- **Domain**: angel.rent
- **Production**: https://angel-rent-csw04lz82-vangalder-com.vercel.app
- **Alert Email**: trevor@vangalder.com
- **Property**: El Ángel, Reforma 326, CDMX

## Development Notes

### Storage Behavior
- **Development**: Saves to `data/waitlist.json`
- **Production**: Uses Vercel KV (Redis)
- Abstraction layer switches automatically

### Email Notifications
- Sent via SendGrid to trevor@vangalder.com
- Non-blocking (doesn't delay form submission)
- Includes email + timestamp

### Rate Limiting
- 3 submissions per minute per IP
- In-memory (resets on function restart)
- Returns 429 status when exceeded

## Testing

```bash
# Build for production
npm run build

# Run linter
npm run lint

# Test API endpoint
curl -X POST http://localhost:3000/api/waitlist \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com"}'
```

## Support

For issues or questions:
1. Check documentation in `prep/` directory
2. Review [DEPLOYMENT-STATUS.md](DEPLOYMENT-STATUS.md)
3. Contact project owner

---

**Built with** ❤️ **for creative travelers**

