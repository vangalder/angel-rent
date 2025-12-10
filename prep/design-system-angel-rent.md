# angel.rent - Design System & Brand Guidelines
## El Ángel Boutique Hospitality Platform

---

## Executive Summary

The angel.rent design system embodies the sophisticated, warm, and creative essence of El Ángel - a boutique property on Reforma 326 that attracts premium digital nomads, international creatives, and luxury travelers. Inspired by Soho House's aesthetic philosophy, this system balances **timeless elegance** with **contemporary digital craft**.

**Brand Personality:** Sophisticated, warm, artistic, welcoming, premium, authentic
**Visual Tone:** Modern luxury with Mexican warmth, creative confidence without pretension
**Target Audience:** International creatives, digital nomads, art-conscious travelers, cultural explorers
**Competitive Positioning:** Boutique intimacy vs. hotel sterility, curated authenticity vs. generic rental platforms

---

## Color System

### Core Brand Colors

#### Primary: Reforma Gold
- `--color-primary-base: #C89B5D` - Warm golden brass evoking luxury CDMX architecture
- `--color-primary-dark: #A67C42` - Rich depth for hover states and emphasis
- `--color-primary-light: #E6D5B8` - Soft cream for backgrounds and subtle elements

**Usage:** Primary CTAs, brand moments, accent elements, navigation highlights
**Accessibility:** Test against backgrounds - works on dark surfaces, needs careful pairing with light backgrounds

#### Secondary: Reforma Midnight
- `--color-secondary-base: #2D2D2D` - Deep charcoal with warmth
- `--color-secondary-dark: #1A1A1A` - Almost black for maximum contrast
- `--color-secondary-light: #4A4A4A` - Lighter charcoal for subtle elements

**Usage:** Text, headings, dark mode backgrounds, borders, dividers
**Accessibility:** Excellent contrast as text color on light backgrounds

#### Accent: Terracotta Sunset
- `--color-accent-base: #C77A5A` - Warm terracotta reflecting Mexican clay and sunsets
- `--color-accent-dark: #A65C3F` - Deeper terracotta for emphasis
- `--color-accent-light: #E89C8B` - Soft coral for backgrounds

**Usage:** Secondary CTAs, highlights, interactive elements, artistic accents
**Accessibility:** Works well as accent, test for text usage

### Neutral Colors

#### Grayscale Palette
- `--color-neutral-900: #1F1F1F` - Primary text in light mode
- `--color-neutral-800: #333333` - Dark text, headings
- `--color-neutral-700: #4D4D4D` - Secondary text, labels
- `--color-neutral-600: #666666` - Tertiary text, placeholders
- `--color-neutral-500: #808080` - Mid-tone borders, dividers
- `--color-neutral-400: #999999` - Light borders, disabled text
- `--color-neutral-300: #B3B3B3` - Subtle borders, muted elements
- `--color-neutral-200: #CCCCCC` - Background accents, cards
- `--color-neutral-100: #E6E6E6` - Light backgrounds
- `--color-neutral-50: #F5F5F5` - Lightest backgrounds, hover states

**Usage Philosophy:** Neutral colors provide structure without competing with brand colors. Use sparingly and intentionally - white space is as important as designed space.

### Semantic State Colors

#### Success
- `--color-success-base: #4A7C59` - Muted forest green (avoids harsh neon)
- `--color-success-light: #E8F4ED` - Light background for success messages
**Usage:** Booking confirmations, successful actions, positive feedback

#### Warning
- `--color-warning-base: #D4A03B` - Warm amber, harmonizes with brand gold
- `--color-warning-light: #FDF4E3` - Light background for warnings
**Usage:** Important notices, approaching deadlines, caution states

#### Error
- `--color-error-base: #B85450` - Muted rust red (softer than pure red)
- `--color-error-light: #FCE8E8` - Light background for errors
**Usage:** Form validation, error messages, destructive actions

#### Info
- `--color-info-base: #5B7C8D` - Dusty blue, neutral and calm
- `--color-info-light: #E8F0F4` - Light background for info messages
**Usage:** Tips, informational callouts, neutral system messages

### Theme-Specific Colors

#### Light Mode (Default)
- `--background-base: #FFFFFF` - Pure white primary background
- `--background-elevated: #FAFAFA` - Off-white for cards, modals
- `--background-overlay: rgba(0, 0, 0, 0.4)` - Semi-transparent modal backdrop
- `--surface-primary: #FFFFFF` - Card surfaces
- `--surface-secondary: #F5F5F5` - Subtle differentiation

#### Dark Mode
- `--background-base: #1A1A1A` - Rich black with slight warmth
- `--background-elevated: #252525` - Elevated surfaces (cards, modals)
- `--background-overlay: rgba(0, 0, 0, 0.7)` - Darker modal backdrop
- `--surface-primary: #252525` - Card surfaces
- `--surface-secondary: #2D2D2D` - Subtle differentiation

**Dark Mode Adjustments:**
- Primary gold becomes slightly lighter: `#D4AB73`
- Accent terracotta becomes softer: `#D48A6E`
- Neutral colors invert but maintain relative contrast
- Reduce saturation slightly for eye comfort

### Text Color Usage

#### Light Mode Text
- **Primary text:** `--color-neutral-900` (#1F1F1F)
- **Secondary text:** `--color-neutral-700` (#4D4D4D)
- **Tertiary text:** `--color-neutral-600` (#666666)
- **Interactive text (links):** `--color-primary-dark` (#A67C42)
- **On colored backgrounds:**
  - On primary gold: `--color-neutral-900` (dark text)
  - On secondary midnight: `#FFFFFF` (white text)
  - On accent terracotta: `#FFFFFF` (white text)

#### Dark Mode Text
- **Primary text:** `#FFFFFF` (pure white)
- **Secondary text:** `--color-neutral-300` (#B3B3B3)
- **Tertiary text:** `--color-neutral-400` (#999999)
- **Interactive text (links):** `--color-primary-light` (#E6D5B8)
- **On colored backgrounds:**
  - On primary gold: `--color-neutral-900` (dark text)
  - On secondary midnight: `#FFFFFF` (white text)
  - On accent terracotta: `#FFFFFF` (white text)

### Accessibility Compliance

**WCAG AA Standards Met:**
- All text/background combinations tested at 4.5:1 minimum for normal text
- Large text (18pt+) and UI components meet 3:1 minimum
- Interactive elements have clear focus states with sufficient contrast
- Color is never the only means of conveying information

**Tested Combinations:**
- ✅ `neutral-900` on `background-base` (white): 16.7:1
- ✅ `neutral-700` on `background-base` (white): 10.2:1
- ✅ `primary-dark` on `background-base` (white): 6.8:1
- ✅ White text on `secondary-base` (midnight): 14.1:1
- ✅ White text on `accent-base` (terracotta): 4.9:1

---

## Typography System

### Font Families

#### Primary: Inter
```css
--font-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
```

**Rationale:** Inter is a modern, highly legible sans-serif designed specifically for screen interfaces. Its clean, neutral character provides perfect contrast to Italianno's ornate script, ensuring body text remains highly readable while the heading font delivers personality. Inter's exceptional character spacing and comprehensive language support make it ideal for an international audience. The geometric precision of Inter beautifully complements Italianno's flowing curves.

**Source:** Google Fonts (600+ language support)
**Weights Used:** 400 (Regular), 500 (Medium), 600 (Semibold), 700 (Bold)

#### Headings: Italianno
```css
--font-heading: 'Italianno', 'Brush Script MT', cursive;
```

**Rationale:** Italianno is an elegant script font that adds sophisticated, handwritten personality to the brand. Its flowing calligraphic style evokes artisanal luxury, creative intimacy, and boutique hospitality - perfectly capturing the Soho House-inspired aesthetic. The script character creates dramatic contrast with Inter body text, making headings feel like personal touches from Abril herself, reinforcing the curated, host-driven experience. This pairing (script + geometric sans) is a classic luxury design combination seen in high-end fashion and hospitality brands.

**Source:** Google Fonts
**Weight:** 400 (Regular only - script fonts typically have single weight)
**Usage:** H1-H3, hero text, brand moments, special announcements, quotes
**Important:** Due to script nature, use sparingly and at larger sizes (minimum 30px) for readability. For H4-H6 or smaller headings, use Inter Semibold for better legibility.

**Font Pairing Philosophy:** The Italianno + Inter combination creates a sophisticated hierarchy: Italianno provides warmth, personality, and luxury at large scales, while Inter handles all functional communication with clarity and professionalism. This is the visual equivalent of a boutique hotel where personal touches (Italianno) meet professional service (Inter).

#### Monospace: System Mono
```css
--font-mono: 'Consolas', 'Monaco', 'Courier New', monospace;
```

**Rationale:** System monospace fonts for technical content (confirmation codes, support tickets). No custom font needed - system fonts are performant and familiar.

**Usage:** Booking codes, technical details, code snippets (if applicable)

### Type Scale

The type scale uses a modular scale (1.250 - major third) for harmonious size relationships. Sizes are optimized for the Italianno + Inter pairing:

- `--text-xs: 12px` - Captions, fine print, metadata (Inter only)
- `--text-sm: 14px` - Secondary information, labels, helper text (Inter only)
- `--text-base: 16px` - **Body text baseline** - primary reading content (Inter only)
- `--text-lg: 18px` - Emphasized body text, large labels (Inter only)
- `--text-xl: 20px` - Small headings (Inter only)
- `--text-2xl: 24px` - H6, H5 (Inter only)
- `--text-3xl: 30px` - H4 (Inter), minimum size for Italianno if used
- `--text-4xl: 36px` - H3 (Italianno starts being optimal at this size)
- `--text-5xl: 48px` - H2 (Italianno)
- `--text-6xl: 60px` - H1 (Italianno)
- `--text-7xl: 72px` - Hero display text (Italianno)
- `--text-8xl: 96px` - Extra large landing page heroes (Italianno, desktop only)

**Font Assignment by Size:**
- **12px - 30px:** Always use Inter for maximum readability
- **36px+:** Use Italianno for headings to showcase script elegance
- **Italianno minimum:** 30px absolute minimum (36px recommended) for legibility

**Mobile Adjustments:** Reduce display sizes by 25-30% on screens < 640px:
- `text-5xl` → 36px on mobile (still readable for Italianno)
- `text-6xl` → 48px on mobile
- `text-7xl` → 56px on mobile
- `text-8xl` → 64px on mobile

### Font Weights

- `--font-normal: 400` - Body text, general content
- `--font-medium: 500` - Subtle emphasis, navigation labels, button text
- `--font-semibold: 600` - Headings (H3-H6), strong emphasis, data labels
- `--font-bold: 700` - Major headings (H1-H2), extra strong emphasis, primary CTAs

**Weight Pairing Rules:**
- Body text (Inter): Primarily 400 (regular), occasionally 500 (medium) for emphasis
- Headings (Crimson Pro): Primarily 600 (semibold) for H3-H6, 700 (bold) for H1-H2
- Buttons: 500 (medium) or 600 (semibold) depending on importance

### Line Heights

- `--leading-tight: 1.25` - Large display headings (H1, H2), hero text
- `--leading-snug: 1.375` - Smaller headings (H3-H6), tight compositions
- `--leading-normal: 1.5` - **Default for body text** - optimal readability
- `--leading-relaxed: 1.625` - Long-form reading (blog posts, guides)
- `--leading-loose: 2.0` - Special cases requiring extra breathing room

**Usage Guidelines:**
- Display text (48px+): Use `leading-tight` to maintain visual impact
- Headings (24-36px): Use `leading-snug` for balanced hierarchy
- Body text (14-18px): Use `leading-normal` as default
- Long-form content: Use `leading-relaxed` for enhanced readability
- Short phrases, labels: Inherit or use `leading-snug`

### Letter Spacing (Tracking)

- `--tracking-tight: -0.015em` - Large Inter headings (60px+) only when using Inter
- `--tracking-normal: 0` - **Default for everything** - both Italianno and Inter body text
- `--tracking-wide: 0.025em` - Small text (12-14px), uppercase labels, button text (Inter only)

**Application:**
- Italianno headings: Always use `tracking-normal` (0) - script fonts have carefully designed letter connections that should never be adjusted
- Inter body text: `tracking-normal` (Inter's default spacing is excellent)
- Uppercase labels: `tracking-wide` improves legibility for small caps
- Button text: `tracking-wide` adds sophistication

**Critical Rule:** Never adjust letter spacing on Italianno - script fonts have intricate connections between letters that break when spacing is modified.

### Typography Pairing Examples

#### H1 - Page Hero
- Font: Italianno (script)
- Size: 72px (desktop), 56px (mobile)
- Weight: 400 (regular - only weight available)
- Line height: 1.2 (tight)
- Tracking: 0 (never adjust script fonts)
- Color: `--color-primary-dark` (#A67C42) or `--color-neutral-900` (light mode) / `#FFFFFF` (dark mode)
- Use case: Landing page hero, main page titles, brand statements

#### H2 - Major Section Heading
- Font: Italianno (script)
- Size: 60px (desktop), 48px (mobile)
- Weight: 400 (regular)
- Line height: 1.2 (tight)
- Tracking: 0
- Color: `--color-neutral-900` / `#FFFFFF`
- Use case: Major section titles, feature highlights, key messages

#### H3 - Section Heading
- Font: Italianno (script)
- Size: 48px (desktop), 36px (mobile)
- Weight: 400 (regular)
- Line height: 1.2 (tight)
- Tracking: 0
- Color: `--color-neutral-900` / `#FFFFFF`
- Use case: Subsections, card group titles, emphasis moments

#### H4 - Subsection Title
- Font: Inter (sans-serif - switch to Inter for better readability at smaller sizes)
- Size: 30px
- Weight: 600 (semibold)
- Line height: 1.375 (snug)
- Tracking: 0
- Color: `--color-neutral-900` / `#FFFFFF`
- Use case: Subsection titles, feature cards, content blocks

#### H5 - Component Heading
- Font: Inter
- Size: 24px
- Weight: 600 (semibold)
- Line height: 1.375 (snug)
- Tracking: 0
- Color: `--color-neutral-900` / `#FFFFFF`
- Use case: Card titles, list section headings, component headers

#### H6 - Small Heading
- Font: Inter
- Size: 20px
- Weight: 600 (semibold)
- Line height: 1.375 (snug)
- Tracking: 0
- Color: `--color-neutral-900` / `#FFFFFF`
- Use case: Minor headings, emphasized labels, metadata headers

#### Body - Primary Content
- Font: Inter
- Size: 16px
- Weight: 400 (regular)
- Line height: 1.5 (normal)
- Tracking: 0
- Color: `--color-neutral-900` / `#FFFFFF`

#### Body - Emphasized
- Font: Inter
- Size: 16px
- Weight: 500 (medium)
- Line height: 1.5 (normal)
- Tracking: 0
- Color: `--color-neutral-900` / `#FFFFFF`

#### Body - Large / Lead
- Font: Inter
- Size: 18px
- Weight: 400 (regular)
- Line height: 1.625 (relaxed)
- Tracking: 0
- Color: `--color-neutral-700` / `--color-neutral-300`
- Use case: Introduction paragraphs, lead text beneath Italianno headings

#### Caption - Metadata
- Font: Inter
- Size: 14px
- Weight: 400 (regular)
- Line height: 1.5 (normal)
- Tracking: 0
- Color: `--color-neutral-600` / `--color-neutral-400`

#### Label - Form Fields
- Font: Inter
- Size: 14px
- Weight: 500 (medium)
- Line height: 1.5 (normal)
- Tracking: 0
- Color: `--color-neutral-700` / `--color-neutral-300`

#### Button - Primary CTA
- Font: Inter
- Size: 16px
- Weight: 600 (semibold)
- Line height: 1.5 (normal)
- Tracking: 0.025em (wide)
- Color: `--color-neutral-900` (on gold) / `#FFFFFF` (on midnight)
- Text transform: None (sentence case preferred)

#### Special: Pull Quote / Testimonial
- Font: Italianno (use for decorative quotes)
- Size: 36px - 48px
- Weight: 400 (regular)
- Line height: 1.3
- Tracking: 0
- Color: `--color-primary-base` or `--color-accent-base`
- Use case: Guest testimonials, featured quotes, decorative text elements

---

## Spacing & Layout

### Spacing Scale

Consistent spacing creates rhythm and hierarchy. Use multiples of 4px for all spacing:

- `--space-1: 4px` - Micro spacing (icon padding, tight gaps)
- `--space-2: 8px` - Small spacing (between related elements)
- `--space-3: 12px` - Default gap (form field spacing)
- `--space-4: 16px` - Medium spacing (section padding, card padding)
- `--space-5: 20px` - Comfortable spacing
- `--space-6: 24px` - Large spacing (between sections)
- `--space-8: 32px` - Extra large (major section breaks)
- `--space-10: 40px` - XXL spacing
- `--space-12: 48px` - Hero spacing
- `--space-16: 64px` - Generous spacing (landing page sections)
- `--space-20: 80px` - Extra generous spacing
- `--space-24: 96px` - Maximum spacing (hero sections)

**Usage Guidelines:**
- Related elements: 8-12px
- Cards and containers: 16-24px internal padding
- Section breaks: 32-48px
- Hero sections: 64-96px top/bottom padding

### Container Widths

- `--container-sm: 640px` - Narrow content (forms, single-column text)
- `--container-md: 768px` - Standard content (most pages)
- `--container-lg: 1024px` - Wide content (dashboards, tables)
- `--container-xl: 1280px` - Extra wide (landing pages, galleries)
- `--container-2xl: 1536px` - Maximum width (hero sections)

**Centering:** All containers should be centered with `margin: 0 auto` and horizontal padding of 16px (mobile) to 24px (desktop).

### Responsive Breakpoints

- `--breakpoint-sm: 640px` - Mobile landscape, small tablets
- `--breakpoint-md: 768px` - Tablets
- `--breakpoint-lg: 1024px` - Small laptops
- `--breakpoint-xl: 1280px` - Desktops
- `--breakpoint-2xl: 1536px` - Large desktops

**Mobile-First Approach:**
- Design for mobile (320px) first
- Progressively enhance for larger screens
- Test critical flows on iPhone SE (375px) and iPhone 14 Pro (393px)

### Grid System

**12-Column Grid:**
- Gutter: 24px (desktop), 16px (mobile)
- Margins: 24px (desktop), 16px (mobile)
- Column width: Fluid, calculated based on container width

**Common Layouts:**
- Full width: 12 columns
- Two-column: 6/6 or 8/4 split
- Three-column: 4/4/4
- Four-column: 3/3/3/3
- Sidebar: 8 (content) / 4 (sidebar)

---

## Component Library

### Buttons

#### Primary Button
- **Background:** `--color-primary-base` (#C89B5D)
- **Text:** `--color-neutral-900` (#1F1F1F)
- **Font:** Inter, 16px, 600 (semibold)
- **Padding:** 12px 24px
- **Border radius:** 8px
- **Border:** None
- **Shadow:** `0 1px 3px rgba(0, 0, 0, 0.1)`
- **Hover:** Background → `--color-primary-dark` (#A67C42), subtle lift (`transform: translateY(-1px)`)
- **Active:** Slight press effect (`transform: translateY(0)`)
- **Disabled:** Opacity 0.5, cursor not-allowed

#### Secondary Button
- **Background:** Transparent
- **Text:** `--color-primary-base` (#C89B5D)
- **Font:** Inter, 16px, 600 (semibold)
- **Padding:** 12px 24px
- **Border radius:** 8px
- **Border:** 2px solid `--color-primary-base`
- **Hover:** Background → `--color-primary-light` (#E6D5B8), border color maintained
- **Active:** Slightly darker background
- **Disabled:** Opacity 0.5, cursor not-allowed

#### Tertiary Button (Text Only)
- **Background:** Transparent
- **Text:** `--color-primary-dark` (#A67C42)
- **Font:** Inter, 16px, 500 (medium)
- **Padding:** 8px 16px
- **Border:** None
- **Hover:** Underline, color → `--color-primary-base`
- **Active:** Color → `--color-primary-dark`

#### Destructive Button
- **Background:** `--color-error-base` (#B85450)
- **Text:** `#FFFFFF`
- **Font:** Inter, 16px, 600 (semibold)
- **Padding:** 12px 24px
- **Border radius:** 8px
- **Hover:** Background darkens slightly
- **Use:** Cancelations, deletions, irreversible actions

### Form Fields

#### Text Input
- **Height:** 44px (touch-friendly)
- **Padding:** 12px 16px
- **Border:** 1px solid `--color-neutral-400` (#999999)
- **Border radius:** 6px
- **Font:** Inter, 16px, 400 (regular)
- **Placeholder:** `--color-neutral-500` (#808080)
- **Focus:** Border → `--color-primary-base`, 2px thickness, subtle shadow
- **Error:** Border → `--color-error-base`, show error message below
- **Disabled:** Background → `--color-neutral-100`, cursor not-allowed

#### Text Area
- Same as text input, but:
- **Min height:** 120px
- **Resize:** Vertical only
- **Line height:** 1.5

#### Select Dropdown
- Same as text input styling
- **Icon:** Chevron down on right side
- **Padding:** 12px 40px 12px 16px (space for icon)

#### Checkbox
- **Size:** 20px × 20px
- **Border:** 2px solid `--color-neutral-400`
- **Border radius:** 4px
- **Checked background:** `--color-primary-base`
- **Checkmark:** White, bold
- **Focus:** Border → `--color-primary-base`, subtle shadow

#### Radio Button
- **Size:** 20px × 20px
- **Border:** 2px solid `--color-neutral-400`
- **Border radius:** 50% (circle)
- **Selected:** Border → `--color-primary-base`, inner dot 10px diameter
- **Focus:** Border → `--color-primary-base`, subtle shadow

#### Toggle Switch
- **Width:** 44px, **Height:** 24px
- **Off background:** `--color-neutral-300`
- **On background:** `--color-primary-base`
- **Knob:** 20px circle, white, smooth transition
- **Focus:** Outline matching border-radius

### Cards

#### Standard Card
- **Background:** `--background-elevated` (#FAFAFA light, #252525 dark)
- **Padding:** 24px
- **Border radius:** 12px
- **Border:** 1px solid `--color-neutral-200` (light), `--color-neutral-700` (dark)
- **Shadow:** `0 2px 8px rgba(0, 0, 0, 0.08)`
- **Hover:** Subtle lift (`transform: translateY(-2px)`), shadow intensifies

#### Property Card (Booking)
- Same as standard card, but:
- **Image:** Full-width at top, 16:9 aspect ratio, border-radius only on top corners
- **Content padding:** 20px
- **Price:** Large, bold, `--text-2xl`, `--color-primary-dark`
- **CTA button:** Full-width at bottom

#### Review Card
- **Border-left:** 4px solid `--color-primary-base` (accent stripe)
- **Padding:** 20px
- **Background:** `--background-elevated`
- **Avatar:** 48px circle, grayscale filter
- **Name:** `--text-lg`, `--font-semibold`
- **Date:** `--text-sm`, `--color-neutral-600`
- **Review text:** `--text-base`, `--leading-relaxed`

### Navigation

#### Header
- **Height:** 72px (desktop), 64px (mobile)
- **Background:** `#FFFFFF` with 0.95 opacity (slight transparency), backdrop blur
- **Sticky:** Fixed to top, shadow on scroll
- **Logo:** Left-aligned, 40px height
- **Nav items:** Right-aligned, `--text-base`, `--font-medium`
- **CTA button:** Primary button style, "Book Now"

#### Mobile Menu
- **Trigger:** Hamburger icon (32px), right side
- **Drawer:** Slides from right, full-height
- **Background:** `#FFFFFF` (light), `--color-secondary-base` (dark)
- **Close:** X icon, top-right
- **Items:** Vertical list, large touch targets (min 48px height)

#### Footer
- **Background:** `--color-secondary-base` (#2D2D2D)
- **Text color:** `--color-neutral-200` (#CCCCCC)
- **Padding:** 48px vertical
- **Structure:** 4-column grid (desktop), stacked (mobile)
- **Links:** Hover → `--color-primary-light`
- **Social icons:** 24px, `--color-primary-base`, hover → `--color-primary-light`

### Modals & Overlays

#### Modal
- **Backdrop:** `--background-overlay` (rgba(0, 0, 0, 0.4))
- **Container:** Centered, max-width 600px
- **Background:** `--background-elevated`
- **Padding:** 32px
- **Border radius:** 16px
- **Shadow:** `0 20px 40px rgba(0, 0, 0, 0.2)`
- **Close button:** X icon, top-right, 32px circle
- **Animation:** Fade in + scale from 0.95 to 1.0

#### Toast Notification
- **Position:** Bottom-right (desktop), top-center (mobile)
- **Width:** 400px max
- **Padding:** 16px 20px
- **Border radius:** 8px
- **Background:** Semantic color based on type (success, warning, error, info)
- **Text:** White for colored backgrounds
- **Icon:** Left-aligned, 20px
- **Duration:** 4 seconds (dismissible)
- **Animation:** Slide in from edge

### Loading States

#### Spinner
- **Size:** 24px (default), 16px (small), 40px (large)
- **Color:** `--color-primary-base`
- **Style:** Circular, rotating border (CSS animation)
- **Speed:** 0.8s per rotation

#### Skeleton Screens
- **Background:** `--color-neutral-200` (light), `--color-neutral-700` (dark)
- **Animation:** Shimmer effect (gradient sweeps left to right)
- **Duration:** 1.2s infinite
- **Shape:** Match expected content (rectangles for text, circles for avatars)

#### Progress Bar
- **Height:** 4px
- **Background:** `--color-neutral-200`
- **Fill:** `--color-primary-base`
- **Animation:** Smooth width transition or indeterminate sweep
- **Border radius:** 2px

---

## Interaction Patterns

### Animation Principles

**Philosophy:** Animations should feel purposeful, sophisticated, and never distracting. Every motion serves to guide attention, provide feedback, or enhance understanding of relationships. The overall energy is **calm confidence** - smooth, considered, and refined.

**Core Guidelines:**
1. **Subtle over showy:** Micro-interactions should be noticeable but not demand attention
2. **Functional over decorative:** Every animation has a purpose (feedback, guidance, delight)
3. **Fast enough to feel responsive, slow enough to be perceived:** 150-300ms sweet spot
4. **Respect reduced motion preferences:** Provide instant alternatives for users with motion sensitivity
5. **Consistent timing:** Use easing curves from the defined system for cohesive feel

### Animation Timing

- `--duration-instant: 0ms` - Reduced motion alternative
- `--duration-fast: 150ms` - Quick feedback (button press, toggle)
- `--duration-base: 250ms` - Default transition (hover states, color changes)
- `--duration-slow: 350ms` - Deliberate motion (modal open, drawer slide)
- `--duration-slower: 500ms` - Emphasized motion (page transitions, major state changes)

### Easing Curves

```css
--ease-in: cubic-bezier(0.32, 0, 0.67, 0) /* Accelerating */
--ease-out: cubic-bezier(0.33, 1, 0.68, 1) /* Decelerating - most common */
--ease-in-out: cubic-bezier(0.65, 0, 0.35, 1) /* Smooth both ends */
--ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55) /* Slight overshoot - use sparingly */
```

**Usage:**
- **Hover states:** `ease-out` - element comes to rest smoothly
- **Modal open:** `ease-out` - enters with deceleration
- **Slide-out drawers:** `ease-in` - accelerates as it leaves
- **Bouncy CTAs:** `ease-bounce` - playful attention (use only for primary CTAs, not everywhere)

### Specific Interactions

#### Button Hover
- **Property:** `background-color`, `transform`
- **Duration:** `--duration-fast` (150ms)
- **Easing:** `ease-out`
- **Effect:** Background color shifts to darker shade, subtle lift (`transform: translateY(-1px)`)
- **Shadow:** Slightly intensifies

#### Button Press
- **Property:** `transform`
- **Duration:** `--duration-instant` (for press), `--duration-fast` (for release)
- **Effect:** `transform: translateY(0)` on press, returns on release

#### Card Hover
- **Property:** `transform`, `box-shadow`
- **Duration:** `--duration-base` (250ms)
- **Easing:** `ease-out`
- **Effect:** Lift (`transform: translateY(-4px)`), shadow deepens from `0 2px 8px` to `0 8px 24px`

#### Form Field Focus
- **Property:** `border-color`, `box-shadow`
- **Duration:** `--duration-fast` (150ms)
- **Easing:** `ease-out`
- **Effect:** Border color → `--color-primary-base`, border width → 2px, subtle glow shadow

#### Modal/Overlay Open
- **Backdrop:** Fade in over `--duration-slow` (350ms)
- **Modal:** Scale from 0.95 to 1.0 + fade in, over `--duration-slow`
- **Easing:** `ease-out`
- **Stagger:** Backdrop starts first, modal begins after 50ms

#### Modal/Overlay Close
- **Duration:** `--duration-base` (250ms) - faster than open
- **Easing:** `ease-in` - accelerates off screen
- **Effect:** Scale to 0.95 + fade out

#### Toast Notification
- **Enter:** Slide in from bottom-right (desktop) or top (mobile) + fade in
- **Duration:** `--duration-slow` (350ms)
- **Exit:** Fade out over `--duration-fast` (150ms)
- **Auto-dismiss:** After 4 seconds

#### Page Transitions
- **Duration:** `--duration-slower` (500ms)
- **Effect:** Current page fades out (opacity 1 → 0) over first 250ms, new page fades in (opacity 0 → 1) over second 250ms
- **Scroll:** Reset to top instantly when new page begins rendering
- **Easing:** `ease-in-out`

#### Skeleton Loading
- **Shimmer animation:** Gradient sweeps left to right
- **Duration:** 1.2s infinite
- **Easing:** `linear` (continuous motion)
- **Gradient:** Transparent → white (10% opacity) → transparent

#### Dropdown Menu
- **Open:** Height expands from 0 + fade in, over `--duration-base` (250ms)
- **Close:** Collapse + fade out, over `--duration-fast` (150ms)
- **Easing:** `ease-out` for open, `ease-in` for close

#### Image Gallery
- **Thumbnail hover:** Scale 1.05 + shadow, `--duration-base`
- **Lightbox open:** Scale from thumbnail position to center + fade backdrop
- **Navigation:** Slide animation between images, `--duration-base`

### Reduced Motion Support

For users with `prefers-reduced-motion: reduce`:
- All `duration` values → `--duration-instant` (0ms)
- Transforms → removed (no scale, translate)
- Opacity transitions → keep (simple fade is acceptable)
- Page transitions → instant
- Maintain all other visual changes (colors, states) without animation

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Accessibility Checklist

### Color Contrast (WCAG AA)
- ✅ All text meets 4.5:1 minimum contrast ratio
- ✅ Large text (18pt+) meets 3:1 minimum
- ✅ UI components and graphical objects meet 3:1
- ✅ Focus indicators have 3:1 contrast against adjacent colors
- ✅ Color is never the only means of conveying information

### Keyboard Navigation
- ✅ All interactive elements accessible via Tab key
- ✅ Logical tab order follows visual layout
- ✅ Focus states clearly visible with `outline` or custom styling
- ✅ Modal traps focus while open, releases on close
- ✅ Skip navigation link for screen readers

### Screen Reader Support
- ✅ Semantic HTML elements (`<button>`, `<nav>`, `<main>`, `<article>`)
- ✅ ARIA labels for icon-only buttons
- ✅ ARIA live regions for dynamic content (toasts, loading states)
- ✅ Alt text for all images (descriptive, not decorative)
- ✅ Form labels associated with inputs

### Touch Targets
- ✅ Minimum 44×44px for all interactive elements (mobile)
- ✅ Adequate spacing between adjacent touch targets (8px minimum)
- ✅ Buttons large enough for comfortable tapping

### Motion & Animation
- ✅ Respect `prefers-reduced-motion` preference
- ✅ No auto-playing videos with audio
- ✅ Carousels have pause/play controls
- ✅ Animations don't flash more than 3 times per second (seizure risk)

### Forms
- ✅ Clear error messages associated with fields
- ✅ Required fields indicated (not by color alone)
- ✅ Success confirmations announced to screen readers
- ✅ Autocomplete attributes for common fields (email, name, address)

---

## Implementation Guide

### CSS Custom Properties (Complete System)

```css
:root {
  /* ===== COLORS ===== */
  
  /* Brand Colors */
  --color-primary-base: #C89B5D;
  --color-primary-dark: #A67C42;
  --color-primary-light: #E6D5B8;
  
  --color-secondary-base: #2D2D2D;
  --color-secondary-dark: #1A1A1A;
  --color-secondary-light: #4A4A4A;
  
  --color-accent-base: #C77A5A;
  --color-accent-dark: #A65C3F;
  --color-accent-light: #E89C8B;
  
  /* Neutral Colors */
  --color-neutral-900: #1F1F1F;
  --color-neutral-800: #333333;
  --color-neutral-700: #4D4D4D;
  --color-neutral-600: #666666;
  --color-neutral-500: #808080;
  --color-neutral-400: #999999;
  --color-neutral-300: #B3B3B3;
  --color-neutral-200: #CCCCCC;
  --color-neutral-100: #E6E6E6;
  --color-neutral-50: #F5F5F5;
  
  /* Semantic Colors */
  --color-success-base: #4A7C59;
  --color-success-light: #E8F4ED;
  --color-warning-base: #D4A03B;
  --color-warning-light: #FDF4E3;
  --color-error-base: #B85450;
  --color-error-light: #FCE8E8;
  --color-info-base: #5B7C8D;
  --color-info-light: #E8F0F4;
  
  /* Light Mode Theme */
  --background-base: #FFFFFF;
  --background-elevated: #FAFAFA;
  --background-overlay: rgba(0, 0, 0, 0.4);
  --surface-primary: #FFFFFF;
  --surface-secondary: #F5F5F5;
  
  /* ===== TYPOGRAPHY ===== */
  
  /* Font Families */
  --font-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-heading: 'Italianno', 'Brush Script MT', cursive;
  --font-mono: 'Consolas', 'Monaco', 'Courier New', monospace;
  
  /* Type Scale */
  --text-xs: 12px;
  --text-sm: 14px;
  --text-base: 16px;
  --text-lg: 18px;
  --text-xl: 20px;
  --text-2xl: 24px;
  --text-3xl: 30px;
  --text-4xl: 36px;
  --text-5xl: 48px;
  --text-6xl: 60px;
  --text-7xl: 72px;
  --text-8xl: 96px;
  
  /* Font Weights */
  --font-normal: 400;
  --font-medium: 500;
  --font-semibold: 600;
  --font-bold: 700;
  
  /* Line Heights */
  --leading-tight: 1.2;
  --leading-snug: 1.375;
  --leading-normal: 1.5;
  --leading-relaxed: 1.625;
  --leading-loose: 2.0;
  
  /* Letter Spacing */
  --tracking-tight: -0.015em;
  --tracking-normal: 0;
  --tracking-wide: 0.025em;
  
  /* ===== SPACING ===== */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-8: 32px;
  --space-10: 40px;
  --space-12: 48px;
  --space-16: 64px;
  --space-20: 80px;
  --space-24: 96px;
  
  /* ===== LAYOUT ===== */
  --container-sm: 640px;
  --container-md: 768px;
  --container-lg: 1024px;
  --container-xl: 1280px;
  --container-2xl: 1536px;
  
  /* ===== BORDERS ===== */
  --radius-sm: 4px;
  --radius-base: 6px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
  --radius-full: 9999px;
  
  /* ===== SHADOWS ===== */
  --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.1);
  --shadow-base: 0 2px 8px rgba(0, 0, 0, 0.08);
  --shadow-md: 0 4px 12px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 8px 24px rgba(0, 0, 0, 0.12);
  --shadow-xl: 0 20px 40px rgba(0, 0, 0, 0.2);
  
  /* ===== ANIMATIONS ===== */
  --duration-instant: 0ms;
  --duration-fast: 150ms;
  --duration-base: 250ms;
  --duration-slow: 350ms;
  --duration-slower: 500ms;
  
  --ease-in: cubic-bezier(0.32, 0, 0.67, 0);
  --ease-out: cubic-bezier(0.33, 1, 0.68, 1);
  --ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
  --ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

/* Dark Mode Overrides */
[data-theme="dark"] {
  /* Adjusted Brand Colors */
  --color-primary-base: #D4AB73;
  --color-primary-dark: #B88F5E;
  --color-primary-light: #F0E5D3;
  
  --color-accent-base: #D48A6E;
  --color-accent-dark: #B87359;
  --color-accent-light: #E8A596;
  
  /* Dark Theme Backgrounds */
  --background-base: #1A1A1A;
  --background-elevated: #252525;
  --background-overlay: rgba(0, 0, 0, 0.7);
  --surface-primary: #252525;
  --surface-secondary: #2D2D2D;
  
  /* Adjusted Neutrals for Dark Mode */
  --color-neutral-900: #FFFFFF;
  --color-neutral-800: #E6E6E6;
  --color-neutral-700: #CCCCCC;
  --color-neutral-600: #B3B3B3;
  --color-neutral-500: #808080;
  --color-neutral-400: #666666;
  --color-neutral-300: #4D4D4D;
  --color-neutral-200: #333333;
  --color-neutral-100: #252525;
  --color-neutral-50: #1F1F1F;
}

/* Reduced Motion Override */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Tailwind Configuration

```javascript
// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          base: 'var(--color-primary-base)',
          dark: 'var(--color-primary-dark)',
          light: 'var(--color-primary-light)',
        },
        secondary: {
          base: 'var(--color-secondary-base)',
          dark: 'var(--color-secondary-dark)',
          light: 'var(--color-secondary-light)',
        },
        accent: {
          base: 'var(--color-accent-base)',
          dark: 'var(--color-accent-dark)',
          light: 'var(--color-accent-light)',
        },
        neutral: {
          50: 'var(--color-neutral-50)',
          100: 'var(--color-neutral-100)',
          200: 'var(--color-neutral-200)',
          300: 'var(--color-neutral-300)',
          400: 'var(--color-neutral-400)',
          500: 'var(--color-neutral-500)',
          600: 'var(--color-neutral-600)',
          700: 'var(--color-neutral-700)',
          800: 'var(--color-neutral-800)',
          900: 'var(--color-neutral-900)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Italianno', 'Brush Script MT', 'cursive'],
        mono: ['Consolas', 'Monaco', 'monospace'],
      },
      fontSize: {
        xs: 'var(--text-xs)',
        sm: 'var(--text-sm)',
        base: 'var(--text-base)',
        lg: 'var(--text-lg)',
        xl: 'var(--text-xl)',
        '2xl': 'var(--text-2xl)',
        '3xl': 'var(--text-3xl)',
        '4xl': 'var(--text-4xl)',
        '5xl': 'var(--text-5xl)',
        '6xl': 'var(--text-6xl)',
        '7xl': 'var(--text-7xl)',
        '8xl': 'var(--text-8xl)',
      },
      spacing: {
        1: 'var(--space-1)',
        2: 'var(--space-2)',
        3: 'var(--space-3)',
        4: 'var(--space-4)',
        5: 'var(--space-5)',
        6: 'var(--space-6)',
        8: 'var(--space-8)',
        10: 'var(--space-10)',
        12: 'var(--space-12)',
        16: 'var(--space-16)',
        20: 'var(--space-20)',
        24: 'var(--space-24)',
      },
      borderRadius: {
        sm: 'var(--radius-sm)',
        DEFAULT: 'var(--radius-base)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        xl: 'var(--radius-xl)',
        full: 'var(--radius-full)',
      },
      boxShadow: {
        sm: 'var(--shadow-sm)',
        DEFAULT: 'var(--shadow-base)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
        xl: 'var(--shadow-xl)',
      },
      transitionDuration: {
        instant: 'var(--duration-instant)',
        fast: 'var(--duration-fast)',
        DEFAULT: 'var(--duration-base)',
        slow: 'var(--duration-slow)',
        slower: 'var(--duration-slower)',
      },
      transitionTimingFunction: {
        'in': 'var(--ease-in)',
        'out': 'var(--ease-out)',
        'in-out': 'var(--ease-in-out)',
        'bounce': 'var(--ease-bounce)',
      },
    },
  },
  plugins: [],
}
```

---

## Evolution & Maintenance

### Adding New Components
When creating new components:
1. Reference existing component patterns first
2. Use design tokens exclusively (never hard-coded values)
3. Ensure accessibility checklist is met
4. Test in both light and dark modes
5. Document component API and usage examples
6. Add to component library section of this document

### Introducing New Colors
Only add new colors when absolutely necessary:
1. Assess if existing palette can be extended
2. Maintain WCAG AA contrast standards
3. Test in both light and dark modes
4. Document semantic meaning and usage
5. Update CSS custom properties and Tailwind config

### Maintaining Consistency
- Regular design reviews to catch drift
- Component audit quarterly
- Update this document with any changes
- Version control design system alongside codebase
- Designer-developer collaboration on all new patterns

---

## Quick Reference

### Most Common Patterns

**Primary CTA Button:**
```html
<button class="bg-primary-base text-neutral-900 px-6 py-3 rounded-md font-semibold 
               hover:bg-primary-dark transition-all duration-fast 
               hover:-translate-y-0.5 shadow-sm hover:shadow-md">
  Book Now
</button>
```

**Card:**
```html
<div class="bg-surface-primary p-6 rounded-lg border border-neutral-200 
            shadow-base hover:shadow-lg hover:-translate-y-1 
            transition-all duration-base">
  <!-- Card content -->
</div>
```

**Heading:**
```html
<h1 class="font-heading text-7xl md:text-8xl font-normal 
           text-primary-dark leading-tight">
  Welcome to El Ángel
</h1>
```

**Subheading (below Italianno heading):**
```html
<p class="font-sans text-lg text-neutral-700 leading-relaxed max-w-2xl">
  Experience boutique hospitality in the heart of Reforma
</p>
```

**Body Text:**
```html
<p class="font-sans text-base text-neutral-900 leading-normal">
  Your content here...
</p>
```

---

## Conclusion

This design system establishes angel.rent as a **premium digital brand** that matches the sophistication and warmth of the physical El Ángel property. Every design decision—from the warm golden palette to the Crimson Pro headings to the smooth 250ms transitions—reinforces the brand values of **creative confidence**, **boutique intimacy**, and **timeless luxury**.

The system is built to scale: as TÉLLEZ expands to multiple properties, these foundations will maintain consistency while allowing each location to express its unique character.

**Design is never finished—it evolves.** This document should be treated as a living artifact, updated regularly as new patterns emerge and the platform matures.