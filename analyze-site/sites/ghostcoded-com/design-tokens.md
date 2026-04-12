# Design Tokens — ghostcoded.com

## Color Palette

| Token | Value | Usage |
|-------|-------|-------|
| Black | `#000000` / `rgb(0,0,0)` | Primary text, CTA button bg, footer bg |
| White | `#FFFFFF` | Page background, review card bg, CTA text |
| Black/60 | `rgba(0,0,0,0.6)` | Hero subtitle text |
| Black/70 | `rgba(0,0,0,0.7)` | Secondary button text, nav links |
| Black/5 | `rgba(0,0,0,0.05)` | Nav border, subtle separators |
| Black/12 | `rgba(17,24,39,0.1)` | Secondary button border |
| Mint-400 (Primary) | `#14b8a6` / `--p-primary-color` | Accent color, social icons, hover states |
| Mint-400/20 | `rgba(20,184,166,0.2)` | Hero background blobs |
| Mint-400/10 | `rgba(20,184,166,0.1)` | Review card border |
| Mint-50 | `#f0fdf9` | Nav hover background |
| Slate-900 | `rgb(15,23,42)` | Review title, author name |
| Slate-600 | `rgb(71,85,105)` | Review body text |
| Amber-400 | `rgb(251,191,36)` / `#FBBF24` | Star rating icons |
| White/60 | `rgba(255,255,255,0.6)` | Footer body text |
| White/10 | `rgba(255,255,255,0.1)` | Footer button bg |
| White/20 | `rgba(255,255,255,0.2)` | Footer button border |
| White/40 | `rgba(255,255,255,0.4)` | Footer separator dots |
| White/5 | `rgba(255,255,255,0.05)` | Social icon bg |

## Typography

| Element | Font | Size | Weight | Line-Height | Letter-Spacing |
|---------|------|------|--------|-------------|----------------|
| Base font | `Lexend, -apple-system, system-ui, "Segoe UI", sans-serif` | 16px | 400 | normal | — |
| H1 (Hero) | Lexend | 72px (desktop) / 44px (mobile) | 600 (semibold) | 1.08 (72px computed) | -1.8px (tight) |
| H2 (Section) | Lexend | 40px | 700 (bold) | normal | — |
| Hero subtitle | Lexend | 20px | 400 | 28px (relaxed) | tight |
| Body / Review | Lexend | 16px | 400 | 27.2px (1.7) | — |
| Author name | Lexend | 16px | 600 | normal | — |
| Nav links | Lexend | 14px | 600 | — | — |
| CTA Primary | Lexend | 16px | 500 | 24px | — |
| CTA Secondary | Lexend | 14px | 500 | 20px | — |
| Footer text | Lexend | 16px | 400 | normal | — |

**Font source:** Google Fonts `https://fonts.googleapis.com/css2?family=Lexend:wght@400;700&display=swap`

## Spacing System

| Context | Value |
|---------|-------|
| Nav padding | `px-6 py-4` (24px / 16px) |
| Hero section padding-top | `pt-20` (80px, accounts for fixed nav) |
| Hero bottom margin (subtitle → CTA) | `mb-14` (56px) |
| CTA primary padding | `py-3.5 px-10` (14px / 40px) |
| CTA secondary padding | `py-2.5 px-5` (10px / 20px) |
| Review section padding | `80px 24px` |
| Review card padding | `32px` |
| Footer padding | `64px 0` |
| Container max-width | `max-w-7xl` (nav), `max-w-4xl` (hero), `max-w-6xl` (footer) |
| Section gap (buttons) | `gap-3` (12px) |

## Shadows

| Element | Value |
|---------|-------|
| CTA Primary | `rgba(0,0,0,0.12) 0px 2px 12px` |
| CTA Primary hover | `rgba(0,0,0,0.18) 0px 4px 20px` |
| Nav pill | `shadow-lg shadow-black/5` |
| Review card | `rgba(0,0,0,0.08) 0px 4px 20px` |
| Mobile menu button | `shadow-md shadow-black/10` |

## Border Radii

| Element | Value |
|---------|-------|
| CTA buttons | `9999px` (full pill) |
| Nav pill | `rounded-full` (9999px) |
| Review cards | `20px` |
| Social icons (footer) | `rounded-full` |
| Mobile menu button | `rounded-full` |

## Transitions & Animations

| Effect | Value |
|--------|-------|
| General transition | `duration-300` (300ms) |
| CTA transitions | `duration-200` (200ms) |
| Nav backdrop | `backdrop-blur-xl` |
| Hero blobs | `animate-float-slow` (custom), `blur-3xl` |
| CTA active state | `active:scale-[0.98]` |
| Footer hover | `hover:scale-105`, `hover:scale-110` |
| PrimeVue ripple | `data-pd-ripple="true"` on buttons |

## Breakpoints

| Name | Usage |
|------|-------|
| `md` (768px) | Nav switches from hamburger to pill, H1 scales to 60px→72px |
| `lg` (1024px) | H1 reaches full 72px (`lg:text-7xl`) |
