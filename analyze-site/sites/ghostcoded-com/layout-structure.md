# Layout Structure — ghostcoded.com

## Page Sections (in order)

1. **Header / Nav** — Fixed, full-width
2. **Hero Section** — Full viewport height, centered content
3. **Testimonials / Reviews** — Grid of review cards
4. **Footer** — Black background, centered content

## Section Details

### 1. Header (Fixed Nav)

```
┌─────────────────────────────────────────────────────────┐
│  [Ghost Logo] Ghostcoded          [Blog] [Arcade] [Browse] │
└─────────────────────────────────────────────────────────┘
```

- **Position:** `fixed top-0 left-0 w-full z-50`
- **Background:** `bg-white/80 backdrop-blur-xl`
- **Border:** `border-b border-black/5`
- **Layout:** Flexbox, `justify-between items-center`
- **Container:** `max-w-7xl mx-auto px-6 py-4`
- **Nav pills:** Grouped in a `rounded-full` container with `bg-white/70 border border-black/5 shadow-lg shadow-black/5`
- **Mobile:** Hamburger button replaces nav pills (`md:hidden`)

### 2. Hero Section

```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│              ○ blob (mint, blurred)                     │
│                                                         │
│          Find Your Perfect                              │
│        Automation Solution                              │
│                                                         │
│     Answer a few quick questions...                     │
│                                                         │
│            [ Start Discovery ]                          │
│                                                         │
│        [Newsletter]  [Community]                        │
│        Book an automation consult                       │
│                                                         │
│                    ○ blob                                │
└─────────────────────────────────────────────────────────┘
```

- **Layout:** `min-h-screen flex items-center justify-center`
- **Content container:** `container mx-auto px-6 text-center max-w-4xl`
- **Background effects:** 3 absolutely positioned mint-colored blobs with `blur-3xl`, animated with custom `animate-float-slow`
- **Dot pattern overlay:** `radial-gradient(circle, rgba(20,184,166,0.5) 1px, transparent 1px)` at `24px 24px` spacing, `opacity-[0.12]`
- **Stacking:** Background blobs at z-0, content at z-10
- **Responsive:** H1 scales from `text-[2.75rem]` → `md:text-6xl` → `lg:text-7xl`

### 3. Testimonials Section

```
┌─────────────────────────────────────────────────────────┐
│           What Our Clients Say                          │
│          Real feedback from real clients                │
│         ★★★★★ Average Rating: 5.0                      │
│                                                         │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐              │
│  │ ★★★★★    │  │ ★★★★★    │  │ ★★★★★    │              │
│  │ [S] Name │  │ [G] Name │  │ [R] Name │              │
│  │ Review   │  │ Review   │  │ Review   │              │
│  │ text...  │  │ text...  │  │ text...  │              │
│  └──────────┘  └──────────┘  └──────────┘              │
│  ┌──────────┐  ┌──────────┐                             │
│  │ Card 4   │  │ Card 5   │                             │
│  └──────────┘  └──────────┘                             │
└─────────────────────────────────────────────────────────┘
```

- **Section padding:** `80px 24px`
- **Layout:** CSS class `.reviews-grid` — appears to be a responsive grid (3 columns desktop)
- **Card styling:** `bg-white rounded-[20px] p-8 border-2 border-mint/10 shadow`
- **Cards have staggered animation:** `animation-delay: 0s, 0.1s, 0.2s...`

### 4. Footer

```
┌─────────────────────────────────────────────────────────┐
│  bg: black                                              │
│                                                         │
│          [Ghost Logo] Ghostcoded                        │
│      © 2025 Ghostcoded. All rights reserved.            │
│   Phone: 972-369-2241 | Email: tanner@ghostcoded.com    │
│          Privacy Policy · Terms & Conditions            │
│                                                         │
│     [Newsletter]  [Community]  [Browse]                 │
│                                                         │
│              [LinkedIn]  [Twitter/X]                    │
└─────────────────────────────────────────────────────────┘
```

- **Background:** `bg-black` solid
- **Padding:** `64px 0`
- **Container:** `max-w-6xl mx-auto text-center px-6`
- **Text color:** `text-white/60` for body, `text-white` for logo
- **Buttons:** `bg-white/10 border border-white/20 rounded-full`
- **Social icons:** `w-10 h-10 rounded-full bg-white/5 border border-white/10`, mint-colored icon

## Global Background

- A fixed dot pattern covers the entire page: `radial-gradient(circle, rgba(20,184,166,0.5) 1px, transparent 1px)` at `24px` spacing, `opacity-[0.12]`
- Creates a subtle textured/grid feel throughout

## Responsive Behavior

| Breakpoint | Changes |
|------------|---------|
| Mobile (<768px) | Hamburger menu, H1 at 44px, single-column reviews, stacked CTAs |
| md (768px+) | Nav pills visible, H1 at 60px, multi-column review grid |
| lg (1024px+) | H1 at 72px |
