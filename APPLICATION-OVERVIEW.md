# angel.rent - Application Overview

**Generated**: December 10, 2024  
**Status**: ✅ Production Ready (MVP Complete)

---

## 1. Application Overview

### Purpose
**angel.rent** is a boutique hospitality platform serving as the official waitlist landing page for El Ángel, a luxury short-term rental property located at Reforma 326, CDMX (Mexico City). The platform targets premium digital nomads, international creatives, and luxury travelers.

### Core Functionality
- **Waitlist Management**: Email collection with validation and duplicate prevention
- **Email Notifications**: Multi-recipient Spanish-language notifications via SendGrid
- **Responsive Landing Page**: Mobile-first design with responsive background images
- **Analytics Integration**: Google Analytics 4 tracking for user engagement
- **Rate Limiting**: Protection against spam and abuse (3 requests/minute per IP)

### Business Goals
From the business plan, the platform supports:
- **Investment Context**: $1.5M MXN annual investment with guaranteed monthly returns
- **Target Occupancy**: 50-80% at $10,000-$16,000 MXN per night
- **Market Focus**: Premium digital nomads, international creatives, luxury travelers
- **Future Vision**: Full booking system, guest authentication portal, creative community features, loyalty token system

### Current Stage
**MVP Phase Complete** - Waitlist landing page is fully functional and deployed. Next phase includes full booking system and guest portal.

---

## 2. Architecture Overview

### Technology Stack

**Frontend Framework**:
- Next.js 14.2.18 (App Router)
- React 18.3.1
- TypeScript 5
- Tailwind CSS 3.4.1 with custom design system

**Backend & API**:
- Next.js API Routes (serverless functions)
- Node.js runtime
- Zod for schema validation
- React Hook Form for form management

**Email Service**:
- SendGrid (@sendgrid/mail 8.1.4)
- Spanish-language email templates
- Multi-recipient support (3 addresses)
- HTML and plain text formats

**Storage**:
- **Development**: Local JSON file (`data/waitlist.json`)
- **Production**: Vercel KV (Redis) - configured but using in-memory fallback
- Storage abstraction layer for seamless switching

**Analytics**:
- Google Analytics 4 (Property ID: G-7VXBQY7W2F)
- Custom event tracking for waitlist signups

**Fonts**:
- Inter (Google Fonts) - Body text and UI
- Italianno (Google Fonts) - Headings and branding

**Build Tools**:
- Next.js built-in build system
- ESLint for code quality
- PostCSS with Autoprefixer
- TypeScript compiler

### Project Structure

```
angel-rent/
├── app/                          # Next.js App Router
│   ├── api/waitlist/            # API endpoint
│   │   └── route.ts             # POST/GET handlers
│   ├── layout.tsx                # Root layout (fonts, GA, metadata)
│   ├── page.tsx                 # Landing page component
│   └── globals.css              # Design system CSS variables
├── components/                   # React components
│   ├── BackgroundImage.tsx      # Responsive background handler
│   └── WaitlistForm.tsx         # Email form with validation
├── lib/                          # Utility modules
│   ├── design-system.ts        # Design token constants
│   ├── email.ts                 # SendGrid email service
│   ├── geolocation.ts           # IP geolocation lookup
│   └── storage.ts               # Storage abstraction layer
├── public/                       # Static assets
│   ├── images/                 # Background images (desktop/mobile/tablet)
│   └── favicon files           # Favicon and app icons
├── scripts/                      # Utility scripts
│   └── test-sendgrid.js        # SendGrid configuration tester
├── prep/                         # Documentation and assets
│   ├── business-plan-angel-rent.md
│   ├── design-system-angel-rent.md
│   └── prototypes/             # Design mockups
└── Configuration files          # vercel.json, package.json, etc.
```

### Deployment Infrastructure

**Hosting Platform**: Vercel
- **Project**: angel-rent
- **Account**: vangalder-com
- **Region**: Washington, D.C., USA (iad1)
- **Framework Detection**: Next.js (automatic)
- **Build Command**: `npm run build`
- **Deployment Method**: Git-based with Vercel CLI

**Domain Configuration**:
- **Custom Domain**: angel.rent
- **Registrar**: Namecheap
- **DNS Status**: ⏳ Pending configuration
- **SSL**: Automatic (Let's Encrypt) - will activate after DNS

**Environment Variables**:
- `SENDGRID_API_KEY` - ✅ Configured (Production)
- `NEXT_PUBLIC_GA_ID` - ✅ Configured (G-7VXBQY7W2F)
- `KV_REST_API_URL` - ⏳ Pending (Vercel KV setup)
- `KV_REST_API_TOKEN` - ⏳ Pending (Vercel KV setup)

---

## 3. Component/Module Status

### ✅ Complete Components

**Landing Page (`app/page.tsx`)**:
- Responsive layout with mobile/desktop variants
- Logo positioning (top-center mobile, left desktop)
- Content panel with dark overlay
- Typography using Italianno and Inter fonts
- Decorative star accent element
- Line-height adjustments for heading spacing

**Waitlist Form (`components/WaitlistForm.tsx`)**:
- Email input with validation
- Vertical layout (input above button)
- Success/error state handling
- Google Analytics event tracking
- Loading states and disabled handling
- Form reset after successful submission

**Background Image (`components/BackgroundImage.tsx`)**:
- Responsive image switching (mobile/tablet/desktop)
- Next.js Image optimization
- Viewport-based selection
- Fixed positioning with proper z-index

**Email Service (`lib/email.ts`)**:
- SendGrid integration with API key validation
- Spanish-language email templates
- Multi-recipient support (3 email addresses)
- HTML and plain text formats
- Website link included in emails
- Italianno font for branding in HTML emails
- IP address and geolocation data support
- Comprehensive error logging

**API Route (`app/api/waitlist/route.ts`)**:
- POST endpoint for form submissions
- GET endpoint for health checks
- Rate limiting (3 requests/minute per IP)
- Email validation with Zod
- Duplicate email detection
- IP address capture
- Geolocation lookup (non-blocking)
- Non-blocking email sending
- Comprehensive logging

**Storage Layer (`lib/storage.ts`)**:
- In-memory storage (production fallback)
- Vercel KV support (ready for activation)
- Email deduplication
- Entry timestamping
- Storage abstraction for easy switching

**Geolocation Service (`lib/geolocation.ts`)**:
- IP-based geolocation lookup
- Uses ipapi.co free tier
- Handles private/localhost IPs gracefully
- Returns city, region, country, timezone, coordinates

### ⚠️ Partial/In Progress

**Vercel KV Storage**:
- Code is ready and abstraction layer exists
- Database not yet created in Vercel dashboard
- Currently using in-memory fallback (resets on deployment)

### ❌ Pending Features

**Future Development** (from business plan):
- Full booking system with calendar
- Guest authentication portal
- Creative community features
- Loyalty token system
- Payment processing (Stripe)
- Multi-currency support
- Property showcase gallery
- Virtual tours

---

## 4. Data Flow

### Request/Response Flow

**Waitlist Form Submission**:
1. User enters email in form
2. Client-side validation (React Hook Form + Zod)
3. POST request to `/api/waitlist`
4. Server-side validation (Zod schema)
5. Rate limit check (IP-based, 3 req/min)
6. Duplicate email check (in-memory set)
7. Save entry to storage (in-memory array)
8. Capture IP address from headers
9. Start geolocation lookup (non-blocking)
10. Send email notification (non-blocking, fire-and-forget)
11. Return success response to client
12. Client displays success message
13. Google Analytics event fired

**Email Notification Flow**:
1. `sendWaitlistNotification()` called with entry data
2. Initialize SendGrid API key (runtime, trimmed)
3. Format date in Spanish (es-MX locale, Mexico City timezone)
4. Format geolocation string (if available)
5. Build email message (HTML + text)
6. Send via SendGrid to 3 recipients
7. Log success/failure

**Storage Flow**:
- **Development**: Writes to `data/waitlist.json`
- **Production**: Currently in-memory (ready for Vercel KV)
- Email deduplication via Set data structure
- Entries include: id, email, timestamp

### Build and Deployment Flow

1. **Local Development**:
   - `npm run dev` starts Next.js dev server
   - Hot reload for changes
   - Local storage to JSON file

2. **Production Build**:
   - `npm run build` compiles TypeScript
   - Generates static pages
   - Creates serverless function bundles
   - Optimizes images and assets

3. **Vercel Deployment**:
   - `vercel --prod` triggers deployment
   - Vercel detects Next.js framework
   - Runs build command
   - Deploys to serverless functions
   - Assigns deployment URL
   - Environment variables injected at runtime

---

## 5. Current Capabilities

### ✅ What Works

**User-Facing Features**:
- Responsive landing page (mobile/tablet/desktop)
- Email waitlist form with validation
- Success/error messaging
- Background images switch by viewport
- Google Analytics tracking

**Backend Features**:
- Email validation and storage
- Rate limiting protection
- Duplicate email prevention
- IP address capture
- Email notifications (3 recipients)
- Spanish-language emails
- Website link in emails

**Developer Experience**:
- TypeScript for type safety
- ESLint for code quality
- Design system with CSS variables
- Modular component architecture
- Comprehensive logging

### ⏳ What's Pending

**Infrastructure**:
- Vercel KV database setup (manual step)
- DNS configuration at Namecheap
- Custom domain activation (angel.rent)
- Vercel Analytics enablement

**Features** (Future Phases):
- Full booking system
- Guest portal
- Payment processing
- Property showcase
- Community features

---

## 6. Recent Changes

### Current Session Updates

**Email Notifications**:
- ✅ Added multi-recipient support (3 email addresses)
- ✅ Added website link (https://angel.rent) to email templates
- ✅ Improved logging to show all recipients
- ✅ Spanish-language email content
- ✅ Italianno font for email branding

**UI/UX Improvements**:
- ✅ Changed form layout from side-by-side to vertical stack
- ✅ Adjusted mobile logo size (text-[108px] instead of text-7xl)
- ✅ Reduced heading line-height from 1.1 to 0.8 for tighter spacing
- ✅ Updated metadata and descriptions

**Code Quality**:
- ✅ Improved error handling in email sending
- ✅ Better logging throughout API route
- ✅ Simplified email sending logic for reliability
- ✅ Added geolocation service (ready for future use)

---

## 7. Recommended Next Steps

### Immediate (Critical)

1. **Enable Vercel KV Database**:
   - Go to Vercel dashboard → Storage → Create Database
   - Select KV (Redis)
   - Name: `angel-rent-kv`
   - Region: Washington, D.C., USA (iad1)
   - Connect to project
   - This enables persistent storage (currently in-memory)

2. **Configure DNS at Namecheap**:
   - Add A records pointing to Vercel IPs
   - Wait for DNS propagation (1-6 hours)
   - Verify SSL certificate activation

3. **Verify Email Recipients**:
   - Confirm all 3 recipients are receiving emails
   - Check spam folders if needed
   - Verify SendGrid sender authentication

### Short-term (This Week)

4. **Enable Vercel Analytics**:
   - Web Analytics for page views
   - Speed Insights for performance
   - Configure alerts for errors

5. **Complete Production Testing**:
   - Test form submission end-to-end
   - Verify email delivery to all recipients
   - Test rate limiting
   - Verify Google Analytics tracking
   - Test on multiple devices/browsers

6. **Monitor and Optimize**:
   - Review Vercel function logs
   - Monitor email delivery rates
   - Check for any errors or warnings
   - Optimize if needed

### Medium-term (Next Phase)

7. **Full Booking System** (Phase 2):
   - Calendar integration
   - Availability management
   - Booking API endpoints
   - Payment processing (Stripe)
   - Guest authentication

8. **Guest Portal** (Phase 3):
   - User accounts
   - Booking history
   - Digital guidebook
   - Community features

9. **Property Showcase** (Phase 4):
   - Image gallery
   - Virtual tours
   - Video content
   - Neighborhood guide

### Long-term (Strategic)

10. **Community Features**:
    - Creative network connections
    - Event listings
    - Local recommendations
    - Guest testimonials

11. **Loyalty System**:
    - Token-based rewards
    - Referral program
    - Repeat guest benefits

12. **Advanced Analytics**:
    - Conversion tracking
    - User behavior analysis
    - A/B testing capabilities

---

## Technical Notes

### Design System
- Custom CSS variables for colors, typography, spacing
- Tailwind integration with design tokens
- Responsive breakpoints: mobile (< 768px), tablet (768-1024px), desktop (> 1024px)
- Font pairing: Italianno (headings) + Inter (body)

### Email Configuration
- **Recipients**: trevor@vangalder.com, abriltllz@gmail.com, abril_tellez@icloud.com
- **Sender**: trevor@vangalder.com (must be verified in SendGrid)
- **Language**: Spanish (es-MX locale)
- **Timezone**: America/Mexico_City

### Rate Limiting
- 3 requests per minute per IP address
- In-memory implementation (resets on function restart)
- Returns HTTP 429 when exceeded

### Storage Strategy
- Development: Local JSON file
- Production: Vercel KV (when enabled) or in-memory fallback
- Abstraction layer allows seamless switching

---

**Application Status**: ✅ Production Ready (MVP)  
**Deployment**: ✅ Live on Vercel  
**Next Milestone**: Enable persistent storage and complete DNS configuration
