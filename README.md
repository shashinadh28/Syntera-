# Syntera Solutions — Premium Animated Landing Page

A modern, animation-rich, Awwwards-style landing page for **Syntera Solutions**, built from scratch with **React**, **Tailwind CSS**, and **Framer Motion**.

> Premium SaaS / agency feel · deep navy + brand blue (`#2f5fb3`) · large typography · clean 8px spacing · soft gradients, glow shapes, and tasteful motion.

---

## Tech Stack

- **React 18** (functional components + hooks)
- **Vite 5** (lightning-fast dev server + build)
- **Tailwind CSS 3** (utility-first styling, custom theme)
- **Framer Motion 11** (entrance, scroll, hover, parallax animations)
- **Plus Jakarta Sans** + **Inter** (Google Fonts)

---

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run the dev server

```bash
npm run dev
```

Opens at <http://localhost:5173>

### 3. Build for production

```bash
npm run build
npm run preview
```

---

## Folder Structure

```
.
├── index.html                 # Entry HTML, fonts, meta
├── package.json
├── postcss.config.js
├── tailwind.config.js         # Custom theme: navy/brand colors, fonts, shadows, keyframes
├── vite.config.js
├── public/
│   └── favicon.svg
└── src/
    ├── main.jsx               # React mount point
    ├── App.jsx                # Page composition
    ├── index.css              # Tailwind layers + global theme
    ├── utils/
    │   └── motion.js          # Shared Framer Motion variants
    └── components/
        ├── Navbar.jsx         # Sticky nav, transparent → solid on scroll
        ├── Hero.jsx           # Hero with staggered entrance + parallax cards
        ├── FeatureCards.jsx   # 3 service entry-point cards
        ├── FindTalents.jsx    # Parallax image grid
        ├── Insights.jsx       # Blog cards with hover zoom + overlay fade
        ├── Foundation.jsx     # Slide-in image + text
        ├── StudyAbroadCTA.jsx # Full-width gradient CTA with floating shapes
        ├── Footer.jsx         # Structured columns: brand, links, services, addresses
        ├── SectionWrapper.jsx # Reusable section header (eyebrow / title / desc)
        ├── Button.jsx         # Reusable button (primary / secondary / ghost / light)
        └── Card.jsx           # Reusable glass card with hover tilt
```

---

## Sections (in order)

1. **Navbar** — sticky, transitions from transparent to glass-blur on scroll. Logo + 6 menu links + CTA. Mobile drawer included.
2. **Hero** — large display heading with word-by-word stagger, animated chip, dual CTAs, stat row, animated right-side composition (main hero card + 2 floating glass chips + notification + animated progress bar). Parallax on scroll. Trusted-by marquee.
3. **Feature Cards** — three service entry points with image cap, icon badge, hover tilt + scale.
4. **Find Talents** — left text with bullet list + CTA, right 3-column parallax grid (each column moves at a different speed) with hover zoom cards.
5. **Insights** — three editorial blog cards with hover image zoom and overlay fade-in of excerpt.
6. **Foundation** — slide-in image (left) with floating mission badge, slide-in text (right) with stat tiles + CTA.
7. **Study Abroad CTA** — full-width gradient panel with parallax background, floating decorative shapes, image collage, and stat chip.
8. **Footer** — brand + newsletter, link columns (Company, Services), US + India addresses, socials, legal.

---

## Animation System

All animations use Framer Motion through a shared variant library (`src/utils/motion.js`):

- **Stagger** — `staggerChildren: 0.18–0.22` on every section group
- **Scroll Reveal** — `whileInView="visible"` with `viewport={{ once: true, margin: '-100px' }}`
- **Parallax** — `useScroll` + `useTransform` for background, image, and shape layers
- **Easing** — custom `easeOutSoft = [0.22, 1, 0.36, 1]` for that premium ease curve
- **Durations** — 0.6–1.0s for entrances; spring physics for hover

Hover micro-interactions (lift, scale, image zoom, underline reveal, arrow translate) are applied with Tailwind's `group-hover:` utilities + Framer's `whileHover`.

---

## Design Tokens

Defined in `tailwind.config.js`:

- **Colors:** `navy.{900–950}`, `brand.{50–900}` (primary `#2f5fb3` = `brand.500`)
- **Fonts:** `font-display` (Plus Jakarta Sans), `font-sans` (Inter)
- **Shadows:** `shadow-glow`, `shadow-card`, `shadow-soft`
- **Keyframes:** `float`, `float-slow`, `blob`, `marquee`
- **Spacing:** Tailwind's default 8px scale (4 = 16px, 6 = 24px, 8 = 32px, etc.)

---

## Responsiveness

Mobile-first throughout. Layouts collapse from 12-column grids to single-column at `lg` breakpoint. The mobile navbar uses an accessible animated drawer.

---

## Replacing Content

Most copy and assets live as constants at the top of each component file (e.g. `FEATURES`, `TALENTS`, `POSTS`, `ADDRESSES`). Drop in your real images and copy without touching layout code.

Images currently use Unsplash placeholders — swap the URLs for your brand assets when ready.
