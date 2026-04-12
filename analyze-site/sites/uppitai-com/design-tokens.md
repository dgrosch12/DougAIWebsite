# Design Tokens — uppitai.com

## Color Palette

### CSS Custom Properties (HSL values)

| Token | HSL | Computed RGB | Usage |
|-------|-----|-------------|-------|
| `--background` | `0 0% 100%` | `#FFFFFF` | Page background |
| `--foreground` | `220 20% 10%` | `rgb(20, 24, 31)` / `#14181F` | Primary text |
| `--primary` | `199 89% 48%` | `rgb(13, 162, 231)` / `#0DA2E7` | Accent blue, labels, icons |
| `--primary-foreground` | `0 0% 100%` | `#FFFFFF` | Text on primary bg |
| `--card` | `0 0% 100%` | `#FFFFFF` | Card backgrounds |
| `--card-foreground` | `220 20% 10%` | `#14181F` | Card text |
| `--border` | `214 32% 91%` | `rgb(225, 231, 239)` / `#E1E7EF` | Card borders, dividers |
| `--ring` | `199 89% 48%` | `#0DA2E7` | Focus rings |
| `--muted` | `210 20% 96%` | Light gray | Muted backgrounds |
| `--muted-foreground` | `215 16% 47%` | `rgb(101, 117, 139)` / `#65758B` | Subtitle/muted text |
| `--secondary` | `210 20% 96%` | Light gray | Secondary backgrounds |
| `--destructive` | `0 84% 60%` | Red | Error states |
| `--radius` | `0.5rem` | `8px` | Base border radius |

### Gradient

| Name | Value | Usage |
|------|-------|-------|
| Text Gradient | `linear-gradient(135deg, #0DA2E7 0%, #0080FF 100%)` | "AI Automation" hero text |

### Additional Colors

| Color | Value | Usage |
|-------|-------|-------|
| Quote icon | `rgba(13, 162, 231, 0.4)` | Testimonial quote marks |
| Primary/10 | `hsl(199 89% 48% / 0.1)` | Process step icon bg |
| Primary/30 | `hsl(199 89% 48% / 0.3)` | Card hover border |
| Primary/60 | `hsl(199 89% 48% / 0.6)` | Bullet dots |
| CTA border | `rgba(20, 24, 31, 0.2)` | "Get in Touch" button |

## Typography

| Element | Font | Size | Weight | Line-Height | Letter-Spacing |
|---------|------|------|--------|-------------|----------------|
| Base | `"DM Sans", system-ui, sans-serif` | 16px | 400 | 24px | normal |
| H1 "AI Automation" | DM Sans | 48px (scales: 30px→48px→60px→72px) | 800 | 48px | normal |
| H2 (Section) | DM Sans | 48px | 700 | 48px | normal |
| H3 (Card title) | DM Sans | 20px | 700 | 28px | normal |
| Hero subtitle | DM Sans | 20px | 400 | 28px | normal |
| Section label | DM Sans | 14px | 500 | 20px | 0.7px (tracking-wider) |
| CTA button | DM Sans | 16px | 500 | 24px | normal |
| Body / Card text | DM Sans | 16px | 400 | 24px | normal |
| Footer | DM Sans | 16px | 400 | 24px | normal |

**Font source:** Self-hosted or system — `"DM Sans"` (Google Fonts family)

### Text Colors

| Context | Color |
|---------|-------|
| Primary text | `rgb(20, 24, 31)` — near-black |
| Subtitle/muted | `rgb(101, 117, 139)` — slate gray |
| Section labels | `rgb(13, 162, 231)` — primary blue |
| Gradient text | Transparent fill, blue gradient background-clip |

## Spacing System

| Context | Value |
|---------|-------|
| Section padding | `py-24 px-6` (96px / 24px) |
| Hero min-height | `min-h-[calc(100vh-4rem)]` |
| Card padding | `p-6` (24px) |
| Container max-width | `max-w-5xl` (1024px) |
| CTA padding | `px-8` (32px), height via inline-flex |
| Footer padding | `py-8` (32px) |
| Gap between cards | Grid gap (3 columns) |

## Shadows

| Element | Value |
|---------|-------|
| Hero blob | None (CSS only, blur-based) |
| Cards | No explicit shadow (border-only design) |
| Founder image | `shadow-xl` on container |

## Border Radii

| Element | Value |
|---------|-------|
| Base (`--radius`) | `0.5rem` (8px) |
| CTA button | `8px` (rounded-lg) |
| Process cards | `16px` (rounded-2xl) |
| Step number icons | `9999px` (rounded-full) |
| Founder image | Circular (rounded-full) |
| Testimonial cards | `16px` (rounded-2xl) |

## Transitions

| Effect | Value |
|--------|-------|
| General | `transition-all duration-300` |
| Card hover border | `transition-colors` → `border-primary/30` |
| CTA hover | `transition-all duration-300` |
