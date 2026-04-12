# Tech Stack — uppitai.com

## Framework

- **React** (v18.3.1) — SPA, functional components with hooks
- **Build tool:** Vite — asset filenames use Vite hash pattern (`index-B4asVF-V.js`)

## CSS Approach

- **Tailwind CSS** — utility classes throughout (`flex`, `items-center`, `rounded-2xl`, `bg-card`, etc.)
- **shadcn/ui design system** — CSS custom properties pattern (`--background`, `--foreground`, `--primary`, `--card`, `--border`, `--muted`, `--radius`) matches shadcn/ui convention
- **CSS variables in HSL** — colors defined as HSL values without `hsl()` wrapper (shadcn pattern)
- **cn() utility** — class merging (Tailwind Merge + clsx)

## 3D / Animation

- **Three.js r182** — WebGL particle system for animated dot grid background
  - `THREE.Points` with `THREE.PointsMaterial`
  - `THREE.BufferGeometry` with position + color attributes
  - `THREE.Fog` for depth fading
  - `THREE.PerspectiveCamera` (FOV 60, position 0/600/1400)
  - `THREE.WebGLRenderer` with alpha + antialias
  - Animation: `requestAnimationFrame` loop with sine wave displacement

## UI Components

- **shadcn/ui** — Button, Card components (based on CSS variable naming and class patterns)
- **Sonner** — Toast notification library (CSS found in bundle for `.sonner-*` classes)
- **Lucide React** — Icon library (SVG icons for search, wrench, zap)

## Fonts

- **Primary:** `"DM Sans"` — Google Fonts
  - Weights: 400, 500, 700, 800
  - Fallback: `system-ui, sans-serif`

## Icons

- **Lucide React** — SVG icon components
- **Custom SVGs** — Quote marks in testimonials, logo

## Image Handling

- **Founder photo:** Standard `<img>` tag
- **No lazy loading detected** on main images
- **SVG logo:** Inline or imported

## Analytics / Tracking

- **Flock.js** — `https://uppitai.com/~flock.js` (analytics/tracking script)

## SEO / Meta

- Page title: "Uppit AI - AI Automation to Scale Without Limits"
- Standard meta viewport

## Notable Patterns

- **Single-page app** — No visible router/navigation (logo only in nav)
- **Contact page** — `/contact` route exists (linked from CTAs)
- **External links** — nateherk.com for founder bio, cal.com likely for booking
