# Avanty Frontier — Hero Section (React/TS/Tailwind/Vite)

A standalone, full-viewport hero section for Avanty Frontier Limited's landing page, built as a React component system. This is a separate exploration from the plain-HTML `avanty-frontier-website` repo — same brand palette and copy, different stack, for evaluating a React-based rebuild.

## Stack

React 19 + TypeScript + Tailwind CSS 3 + Vite. Icons via `lucide-react`. No other UI libraries.

## Structure

```
src/
  App.tsx                    -- renders <Hero />
  main.tsx                   -- React root
  index.css                  -- Tailwind directives + fade-up/fade-down/hero-rise keyframes
  components/
    Hero.tsx                 -- headline, quick-quote field, CTAs, field texture, mockup
    Navbar.tsx                -- sticky nav with mobile drawer
    Logo.tsx                  -- placeholder wordmark (swap for a real mark in one file)
    WhatsAppMockup.tsx         -- ScaledMockup-wrapped phone chat thread
```

## Run locally

```
npm install
npm run dev
```

## What's real vs. placeholder

- Every CTA resolves to a real Avanty channel: `wa.me/260950611757` or `mailto:info@avantyfrontier.com`.
- The quick-quote field builds a pre-filled WhatsApp deep link from what's typed — it's a live entry point into the inbound Lead Generation SOP, not a decorative search bar.
- The WhatsApp mockup shows a plausible exchange pattern matching the SOP's actual flow (qualify → written quote → confirm), not a real transcript and not dressed up with invented stats.
- The logo is a text placeholder pending Avanty's real mark. The field texture is a self-authored low-opacity SVG pattern, not a licensed or third-party image.
- No fabricated stats, testimonials, or client counts appear anywhere in this component.

## Next steps

Fold into the main site once a rebuild direction (static HTML vs. React) is decided — see the sibling `avanty-frontier-website` repo for the current live landing page.
