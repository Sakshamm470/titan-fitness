# Titan Fitness Gym — Final V1 Build Plan

Premium dark-themed gym site (black/charcoal/crimson) on TanStack Start + Tailwind v4 + shadcn + Framer Motion. Trimmed to highest-value sections; deferred items scaffolded for V2.

## Design language
- Palette: near-black `oklch(0.12 0 0)`, charcoal surfaces, white foreground, **crimson** primary `oklch(0.58 0.22 25)` + glow, used sparingly.
- Type: **Bebas Neue / Oswald** display (uppercase, tight), **Inter** body.
- Motion: Framer Motion scroll-reveals, animated counters, hover scale, smooth in-page scrolling.

## Section order (V1)
1. **Navbar** — sticky, transparent over hero → solid on scroll, mobile drawer, theme toggle.
2. **Hero** — full-screen video bg (autoplay/muted/loop/playsInline) with poster image. <768px or `prefers-reduced-motion` → poster only. Headline, subheading, "Join Now" + "Free Trial" (modal).
3. **Why Choose Us** — 6 icon cards.
4. **About** — copy + 4 animated counters.
5. **Facilities** — 8 cards.
6. **Equipment** — 8-item gallery, click → lightbox Dialog with description + usage. Lazy-loaded.
7. **Gym Tour** — masonry image gallery (virtual-tour video deferred to V2).
8. **CTA Banner #1** — "Ready to start your fitness journey?" → Join Now / Free Trial.
9. **Trainers** — 4 cards opening Trainer Detail Dialog (bio, certs, experience, specialties). Mini transformation galleries deferred to V2.
10. **Class Schedule** — Tabs by weekday, time / class / trainer rows.
11. **Membership Plans** — Basic / Premium / Elite cards with monthly↔annual toggle.
12. **Membership Comparison Table** ★ new — full feature-by-feature matrix directly below pricing (Gym Access, Locker, Group Classes, Personal Trainer, Diet Plan, Advanced Tracking, Priority Support, etc.) with check/cross icons; mobile stacks per plan.
13. **CTA Banner #2**.
14. **Programs** — 6 cards with duration, benefits, difficulty badge.
15. **Transformations** — before/after pairs with name + weight delta + story.
16. **Transformation Journey CTA** ★ new — full-bleed band with side-by-side before/after image, headline "Join 5,000+ members who transformed their lives at Titan Fitness.", subline, Join Now + Free Trial buttons. Crimson gradient, prominent.
17. **Testimonials** — shadcn Carousel.
18. **Calculators** — Tabs: **BMI** | **Calories** (Mifflin-St Jeor + activity multiplier).
19. **FAQ** — Accordion.
20. **CTA Banner #3**.
21. **Contact** — zod + react-hook-form, toast on submit, phone/email/address, embedded Google Map iframe.
22. **Footer** — quick links, services, socials, copyright.
23. **Floating WhatsApp button** — bottom-right.

## Deferred to V2 (folders scaffolded, README placeholders only)
- Instagram Feed
- Achievements / Awards
- Trainer mini transformation galleries
- Virtual Tour video walkthrough
- Newsletter signup
- Member Login, Trainer Dashboard, Online Payments, Attendance, Diet Portal, AI Assistant

## Folder structure
```
src/
  routes/index.tsx                 (composes all sections, SEO head, hero preload)
  components/site/
    Navbar.tsx  Hero.tsx  WhyChooseUs.tsx  About.tsx  Facilities.tsx
    Equipment.tsx  GymTour.tsx  CtaBanner.tsx
    Trainers.tsx  TrainerDialog.tsx
    ClassSchedule.tsx  Membership.tsx  MembershipComparison.tsx
    Programs.tsx  Transformations.tsx  TransformationJourneyCta.tsx
    Testimonials.tsx  Calculators.tsx  Faq.tsx
    Contact.tsx  Footer.tsx
    FreeTrialDialog.tsx  WhatsAppFab.tsx  ThemeToggle.tsx
  hooks/  use-theme.ts  use-count-up.ts  use-reveal.ts
  lib/    site-data.ts  leads-store.ts
  assets/ (generated images + hero poster + hero video)
  features/ (auth, dashboard, payments, attendance, diet, ai-assistant — READMEs only)
```

## Key interactive pieces
- **FreeTrialDialog** — Name, Phone, Email, Fitness Goal (Select). Zod validation, in-memory `leads-store`, success state inside the dialog. Shared by every "Free Trial" CTA.
- **TrainerDialog** — bio, cert badges, years, specialties chips.
- **Equipment lightbox** — shadcn Dialog with description + usage.
- **Membership comparison** — single source of truth in `site-data.ts`, drives both pricing cards and the matrix.
- **Calculators** — Tabs panel with BMI + Calories (Mifflin-St Jeor), color-coded result cards.

## Tokens (added to `src/styles.css`)
Override `:root` + `.dark` with gym palette; add `--gym-red`, `--gym-red-glow`, `--gradient-red`, `--gradient-hero`, `--shadow-red`, `--surface-elevated`. All component styling via semantic tokens — no raw color classes.

## Performance
- Hero `<video preload="metadata" poster>`, suppressed on mobile / reduced motion.
- All non-hero images `loading="lazy" decoding="async"`; static imports get WebP via `vite-imagetools` where it helps.
- Skeleton loaders for equipment + gym-tour grids.
- Hero preload via per-route `head().links` (`rel=preload as=image fetchpriority=high`).
- Counters mount via IntersectionObserver.
- TanStack Router auto-code-splits route components.

## SEO + accessibility
Route `head()` with title/description/og:title/og:description/og:image (hero poster). Single H1, semantic landmarks, alt on every image, aria-labels on icon buttons, focus rings, sufficient dark-surface contrast.

## Assets to generate (~22 images + 1 video)
1 hero video + 1 hero poster, 8 equipment shots, 6–8 gym-tour shots, 4 trainer portraits, 3 before/after pairs (6), 1 transformation-journey hero pair.

## Out of scope for V1 (flagged)
No backend: Free Trial leads + contact form are in-memory with toast confirmation. Lovable Cloud can persist them in V2. Google Map is iframe to a placeholder address — swap to your real one after build.

## Deliverable
After approval: install `framer-motion`, add missing shadcn primitives (dialog, carousel, accordion, tabs, form, sonner, select), generate images + hero video in parallel, wire tokens, build components, verify the page renders cleanly end-to-end at the 457×616 mobile viewport you're previewing on.