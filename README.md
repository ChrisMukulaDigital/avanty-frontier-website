# Avanty Frontier Limited — Website

**Live at [avantyfrontier.com](https://avantyfrontier.com/)**, deployed on Vercel from this repo's `main` branch.

Full landing page for Avanty Frontier Limited, a Lusaka-based procurement and supply company. Built as a React component system.

## Stack

React 19 + TypeScript + Tailwind CSS 3 + Vite. Icons via `lucide-react`. No other UI libraries. No backend — every form/CTA resolves to a `wa.me` or `mailto:` link, matching the Lead Generation SOP's inbound flow.

## Structure

```
src/
  App.tsx                    -- assembles the page: Navbar, Hero, Supply, Process, About, WhyChooseUs, Contact, Footer
  main.tsx                   -- React root
  index.css                  -- Tailwind directives + fade-up/fade-down/hero-rise keyframes
  lib/
    contact.ts                -- single source of truth for the WhatsApp number and email
  components/
    Hero.tsx                  -- headline, quick-quote field, CTAs, background photo, phone mockup
    Navbar.tsx                 -- sticky nav with mobile drawer
    Logo.tsx                   -- placeholder wordmark (swap for a real mark in one file)
    WhatsAppMockup.tsx          -- ScaledMockup-wrapped phone chat thread (iPhone 13 proportions)
    Supply.tsx                  -- "What We Supply" — agricultural inputs & cleaning consumables
    Process.tsx                  -- "How It Works" — 3-step flow
    About.tsx                     -- founding story + operating model
    WhyChooseUs.tsx                -- reliability differentiators
    Contact.tsx                     -- inquiry form (builds a pre-filled WhatsApp/email message) + direct contact card
    ScrollReveal.tsx                 -- IntersectionObserver fade/rise wrapper, respects prefers-reduced-motion
```

## Brand system

Defined in `tailwind.config.js`:

| Token | Hex | Use |
|---|---|---|
| `primary` | `#003F7D` | Nav, footer, hero, Contact section, Services card headings |
| `accent` | `#FF6503` | CTAs, links, icons, hover states |
| `bg` | `#F7F9FC` | Services section background |
| `navy` | `#012348` | Default heading/body text |
| `slate` | `#5B6777` | Secondary/supporting text |
| `line` / `mist` | derived neutrals | Dividers / Why-Choose-Us section tint — not brand colors |

## Run locally

```
npm install
npm run dev
```

## Deploying

Connected to Vercel via the GitHub integration — every push to `main` deploys automatically. Build settings: framework Vite, build command `npm run build`, output directory `dist`.

To build a self-contained single-file export (e.g. for a client-review Artifact, not for production hosting), use `vite.artifact.config.ts`:

```
npx vite build --config vite.artifact.config.ts
```

## What's real vs. placeholder

- Every CTA resolves to a real Avanty channel — see `src/lib/contact.ts` for the current number/email.
- The quick-quote field and the Contact form both build a pre-filled WhatsApp deep link from what's typed — live entry points into the inbound Lead Generation SOP, not decorative.
- The WhatsApp mockup shows a plausible exchange pattern matching the SOP's actual flow (qualify → written quote → confirm), not a real transcript.
- The logo is a text placeholder pending Avanty's real mark — swap it in `src/components/Logo.tsx`.
- Photos in the What We Supply cards and hero background are stock imagery (Unsplash License, free for commercial use), clearly not Avanty's own operations — swap for real photography once available.
- No fabricated stats, testimonials, or client counts appear anywhere on the site. The cleaning/hygiene consumables offer explicitly states it has no delivered-client proof point yet.
