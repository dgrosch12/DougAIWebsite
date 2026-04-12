# Tech Stack — ghostcoded.com

## Framework

- **Vue.js 3** (Composition API) — evidenced by `data-v-*` scoped style attributes, `data-v-app`
- **Build tool:** Vite — asset filenames use Vite hash pattern (`index-BDoRelFi.js`, `index-CdndnNmu.css`)

## CSS Approach

- **Tailwind CSS** — utility classes throughout (`flex`, `items-center`, `rounded-full`, `bg-white/80`, etc.)
- **CSS Layers:** `@layer tailwind-base, primevue, tailwind-utilities` — layered ordering for Tailwind + PrimeVue coexistence
- **PrimeVue Design Tokens** — extensive CSS custom properties (`--p-primary-color`, `--p-surface-*`, `--p-border-radius-*`, etc.)
- **Custom CSS classes** for review section (`.reviews-section`, `.review-card`, `.star-icon`, etc.)
- **Scoped styles** via Vue SFC (`data-v-a328d680`, `data-v-9f1cc2e4`)

## UI Component Library

- **PrimeVue** — Button component with ripple effect (`data-pc-name="button"`, `data-pd-ripple="true"`)
- **PrimeIcons** — Icon library (`pi pi-star-fill`, `pi pi-bars`, `pi pi-linkedin`, `pi pi-twitter`)

## Fonts

- **Primary:** [Lexend](https://fonts.google.com/specimen/Lexend) (Google Fonts)
  - Weights loaded: 400, 700
  - Fallback stack: `-apple-system, system-ui, "Segoe UI", sans-serif`
  - Set via `--p-font-family-sans`

## Icons

- **PrimeIcons** — icon font (`pi pi-*` classes)
  - Used for: stars, hamburger menu, LinkedIn, Twitter/X
- **Custom SVG** — Ghost logo loaded from DigitalOcean Spaces CDN

## Image Handling

- **CDN:** DigitalOcean Spaces (`ghostcoded.sfo3.cdn.digitaloceanspaces.com`)
- **Logo:** SVG format, filtered with CSS `brightness-0` to make it black
- **No lazy loading detected** on visible images

## Analytics

- **Google Analytics 4** — tracking ID `G-LZ2CMC4ZGC`

## SEO / Meta

- Open Graph tags (Facebook)
- Twitter Card tags (`summary_large_image`)
- Schema.org Organization structured data (JSON-LD)
- Favicon: SVG format served from CDN

## Hosting / Infrastructure

- Assets served from same domain (Vite build output)
- Images/logos from DigitalOcean Spaces CDN
- Cal.com for booking integration (external link)
