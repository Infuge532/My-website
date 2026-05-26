# BuiltForSmallBiz — Project Overview

A marketing/landing page for a web development business targeting small businesses. Built with Next.js 15, React 19, Tailwind CSS v4, and deployed to Netlify.

**Live domain (placeholder):** `https://clearsite.dev`
**Stack:** Next.js 16 · React 19 · TypeScript · Tailwind v4 · shadcn/ui · Netlify

---

## Business Context

The business specializes in:
- Small-to-midsize websites for small businesses
- Affordable one-time pricing (not recurring retainers)
- Zero server/infrastructure management for customers

---

## Architecture

### Tech Stack

| Layer | Choice | Notes |
|---|---|---|
| Framework | Next.js 16 (App Router) | Server Components by default |
| Language | TypeScript 5 (strict) | |
| Styling | Tailwind CSS v4 | Uses `@theme inline` block, `oklch()` colors — different from v3 |
| Components | shadcn/ui structure | `/components/ui/` folder |
| Icons | lucide-react | |
| Font | Plus Jakarta Sans | Loaded via `next/font/google`, mapped to `--font-sans` |
| Forms | React 19 `useActionState` | Server action in `app/actions.ts` |
| Deployment | Netlify | `@netlify/plugin-nextjs` |

### Color Palette (Dark, Navy/Indigo)

The site forces dark mode unconditionally (`.dark` class on `<html>`). Color system lives in `app/globals.css`.

```
--brand:      oklch(0.62 0.22 265)   /* indigo */
--background: oklch(0.08 0.03 265)   /* deep navy */
--card:       oklch(0.13 0.04 265)
--primary:    oklch(0.62 0.22 265)
--border:     oklch(0.28 0.05 265 / 0.6)
```

---

## File Map

```
app/
  layout.tsx          — Root layout: dark mode forced, SEO metadata, Plus Jakarta Sans
  page.tsx            — Composes all page sections
  globals.css         — Tailwind v4 config, dark palette, custom utilities
  actions.ts          — Server action for contact form (stub — logs only, no email yet)
  opengraph-image.tsx — Edge runtime OG image (indigo scheme)
  sitemap.ts          — Auto sitemap
  robots.ts           — Robots.txt config
  favicon.ico         — Placeholder favicon

components/
  navbar.tsx          — Sticky nav, glass effect on scroll, mobile hamburger
  hero.tsx            — Thin wrapper passing props to AnimatedShaderHero
  services.tsx        — 4 service cards (Custom Design, Zero Infrastructure, Mobile-First, Support)
  features.tsx        — Value props + 4-stat grid
  how-it-works.tsx    — 3-step process with gradient step numbers
  pricing.tsx         — 3 tiers: Starter $599 / Business $1,299 (highlighted) / Growth $2,499
  contact.tsx         — Contact form using useActionState + submitContact server action
  footer.tsx          — Logo, quick links, contact info
  json-ld.tsx         — Schema.org ProfessionalService + WebSite structured data

  ui/
    animated-shader-hero.tsx  — WebGL2 nebula shader hero (ACTIVE — indigo/violet palette)
    button.tsx                — shadcn Button with Radix Slot (supports asChild)
    canvas.tsx                — Original rainbow trail canvas hero (UNUSED — kept for reference)
    hero.tsx                  — Original non-shader hero wrapper (UNUSED)

lib/
  utils.ts            — cn() helper (clsx + tailwind-merge)
```

---

## Hero: WebGL2 Nebula Shader

The hero (`components/ui/animated-shader-hero.tsx`) renders a full-viewport WebGL2 canvas via a GLSL fragment shader. Key implementation details:

- **Shader:** Cosmic nebula based on Matthias Hurrle's work, recolored to indigo/violet
- **Key GLSL lines:**
  ```glsl
  col += .00125/d * (cos(sin(i) * vec3(1.5, 0.5, 3.0)) + 1.);   /* blue-purple streaks */
  col = mix(col, vec3(bg*.08, bg*.04, bg*.25), d);               /* indigo cloud tint */
  ```
- **Uniforms:** `resolution`, `time`, `move` (mouse position)
- **Resize:** Respects `devicePixelRatio` (capped at 0.5x for performance)
- **Cleanup:** Cancels RAF, removes event listeners, deletes GL objects on unmount

---

## SEO Setup

- `app/layout.tsx` — Comprehensive `Metadata` object (OG tags, Twitter card, robots)
- `app/opengraph-image.tsx` — Edge runtime OG image
- `app/sitemap.ts` — Auto-generated sitemap
- `app/robots.ts` — Robots.txt
- `components/json-ld.tsx` — Schema.org `ProfessionalService` + `WebSite` + all 3 pricing tiers as `Offer` entries
- All URLs derived from `NEXT_PUBLIC_SITE_URL` env var (defaults to `https://clearsite.dev`)

---

## Pricing

| Plan | Price | Highlights |
|---|---|---|
| Starter | $599 one-time | Single page, contact form, SSL, 1yr hosting |
| Business | $1,299 one-time | Up to 5 pages, analytics, blog-ready, priority support |
| Growth | $2,499 one-time | Up to 15 pages, booking/e-commerce, monthly maintenance |

---

## Custom Tailwind Utilities

Defined in `app/globals.css`:

| Class | Effect |
|---|---|
| `.text-gradient` | Indigo→violet gradient text |
| `.dot-grid` | Subtle dot-grid background pattern |
| `.glow-brand` | Brand-colored box shadow glow |
| `.shader-fade-down` | Fade-in from above (trust badge) |
| `.shader-fade-up` | Fade-in from below (headline, subtitle, buttons) |
| `.shader-delay-{200,400,600,800}` | Staggered animation delays |

---

## Deployment

Deploys to Netlify via `netlify.toml`:
- Build command: `npm run build`
- Publish dir: `.next`
- Node version: 20
- Plugin: `@netlify/plugin-nextjs`

Set `NEXT_PUBLIC_SITE_URL` in the Netlify dashboard to the real domain before going live.

---

## Outstanding TODOs

- [ ] Wire up real email delivery in `app/actions.ts` (Resend, SendGrid, or Postmark)
- [ ] Replace placeholder name "BuiltForSmallBiz" with real business name across all files
- [ ] Replace `eli@builtforsmallbiz.com` placeholder email in `components/footer.tsx`
- [ ] Add real favicon (replace `app/favicon.ico`)
- [ ] Submit sitemap to Google Search Console after first deploy
- [ ] Update `NEXT_PUBLIC_SITE_URL` in Netlify environment to real domain
- [ ] Delete unused files: `components/ui/canvas.tsx`, `components/ui/hero.tsx`
- [ ] Add real social links in footer (currently placeholder `#`)
