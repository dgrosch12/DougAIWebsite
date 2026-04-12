# Layout Structure — uppitai.com

## Page Sections (in order)

1. **Header / Nav** — Fixed, minimal (logo only)
2. **Hero** — Full viewport, centered, with Three.js animated dots background
3. **Our Process** — 3-column card grid with step numbers
4. **Testimonials** — 3-column quote cards
5. **Meet the Founder** — Bio section with photo + text
6. **Footer** — Minimal, copyright only

## Section Details

### 1. Header (Fixed Nav)

```
┌─────────────────────────────────────────────────────────┐
│  [Logo] Uppit AI                                        │
└─────────────────────────────────────────────────────────┘
```

- **Position:** `fixed top-0 left-0 right-0 z-50`
- **Background:** `bg-background/80 backdrop-blur-md`
- **Border:** `border-b border-border/50`
- **Note:** Nav has NO navigation links — just a logo. Very minimal.

### 2. Hero Section

```
┌─────────────────────────────────────────────────────────┐
│  ╔═══════════════════════════════════════════╗           │
│  ║  Three.js animated dot grid (canvas)     ║           │
│  ╚═══════════════════════════════════════════╝           │
│                                                         │
│          AI Automation  (gradient blue text)             │
│      Scale without increasing headcount.                │
│                                                         │
│    Turn your everyday bottlenecks into...               │
│                                                         │
│     20M+          |    Founded by                       │
│    Global Views   |    Nate Herk                        │
│                                                         │
│           [ Get in Touch → ]                            │
│                                                         │
│   ○ large blurred blue blob (bg-primary/5)              │
└─────────────────────────────────────────────────────────┘
```

- **Layout:** `min-h-[calc(100vh-4rem)] flex items-center justify-center px-6 relative overflow-hidden`
- **Canvas:** Absolutely positioned behind content (`absolute inset-0 -z-10 pointer-events-none overflow-hidden`)
- **Content:** `text-center max-w-3xl mx-auto relative z-10`
- **Stats row:** Flex with a `w-px h-10 bg-border` divider between items
- **Background blob:** `w-[600px] h-[400px] bg-primary/5 rounded-full blur-[100px]`

### 3. Our Process Section

```
┌─────────────────────────────────────────────────────────┐
│              HOW WE WORK                                │
│              Our Process                                │
│    A methodical, low-risk approach...                   │
│                                                         │
│  ─────────── timeline line (desktop) ──────────         │
│                                                         │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐                 │
│  │ (🔍) 01 │  │ (🔧) 02 │  │ (⚡) 03 │                 │
│  │ Discover │  │ Design  │  │ Launch  │                 │
│  │ • point  │  │ • point │  │ • point │                 │
│  │ • point  │  │ • point │  │ • point │                 │
│  │ • point  │  │ • point │  │ • point │                 │
│  └─────────┘  └─────────┘  └─────────┘                 │
│                                                         │
│    Ready to see where AI can help your business?        │
│             [ Get in Touch → ]                          │
└─────────────────────────────────────────────────────────┘
```

- **Section:** `py-24 px-6 bg-background relative`
- **Header:** Section label (uppercase, tracking-wider, primary color) + H2 + subtitle
- **Timeline line:** `hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-border` (horizontal on desktop)
- **Mobile timeline:** `lg:hidden absolute left-6 top-16 w-0.5 h-[calc(100%+2rem)] bg-border` (vertical)
- **Cards:** 3-column grid (`grid lg:grid-cols-3`), `bg-card border border-border rounded-2xl p-6 h-full`
- **Step icon:** `w-12 h-12 rounded-full bg-primary/10 border-2 border-primary` with SVG icon
- **Step number:** `absolute -top-2 -right-2 text-xs font-bold text-primary bg-background px-2 py-0.5 rounded-full border border-primary/30`
- **Bullet points:** Small `w-1.5 h-1.5 rounded-full bg-primary/60` dots

### 4. Testimonials Section

```
┌─────────────────────────────────────────────────────────┐
│              TESTIMONIALS                               │
│          What Our Clients Say                           │
│    Trusted by founders and executives...                │
│                                                         │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐              │
│  │ 99 (icon)│  │ 99       │  │ 99       │              │
│  │          │  │          │  │          │              │
│  │ "Quote"  │  │ "Quote"  │  │ "Quote"  │              │
│  │          │  │          │  │          │              │
│  │ ──────── │  │ ──────── │  │ ──────── │              │
│  │ Name     │  │ Name     │  │ Name     │              │
│  │ Title    │  │ Title    │  │ Title    │              │
│  └──────────┘  └──────────┘  └──────────┘              │
└─────────────────────────────────────────────────────────┘
```

- **Layout:** 3-column grid
- **Cards:** `bg-card border border-border rounded-2xl p-6`
- **Quote icon:** SVG quote marks in `text-primary/40`
- **Separator:** `h-px bg-border` between quote and author

### 5. Meet the Founder

```
┌─────────────────────────────────────────────────────────┐
│                  ABOUT                                  │
│            Meet the Founder                             │
│                                                         │
│  ┌──────┐    Nate Herk                                  │
│  │ Photo│    Bio paragraph 1...                         │
│  │      │    Bio paragraph 2...                         │
│  └──────┘    Bio paragraph 3...                         │
│                                                         │
│         [ Learn More About Nate → ]                     │
└─────────────────────────────────────────────────────────┘
```

- **Layout:** 2-column (photo left, text right)
- **Photo:** `w-54 h-54` (216px), circular, with gradient border ring
- **CTA:** Blue filled button → links to nateherk.com

### 6. Footer

```
┌─────────────────────────────────────────────────────────┐
│    © 2026 Uppit AI. All rights reserved.                │
└─────────────────────────────────────────────────────────┘
```

- **Minimal:** Just a copyright line
- **Padding:** `py-8`
- **Border:** `border-t border-border/50`

## Responsive Behavior

| Breakpoint | Changes |
|------------|---------|
| Mobile (<640px) | H1 at 30px, single-column everything, vertical timeline |
| sm (640px) | H1 at 48px |
| md (768px) | H1 at 60px |
| lg (1024px) | H1 at 72px, 3-column grids, horizontal timeline, side-by-side founder layout |
