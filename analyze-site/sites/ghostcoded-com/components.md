# Components — ghostcoded.com

## 1. Navigation Bar

- **Description:** Fixed top nav with logo left, pill-shaped nav buttons right
- **Structure:** `<header>` → flex container → logo group + nav pill
- **Logo:** Ghost SVG icon (filtered to black with `brightness-0`) + "Ghostcoded" text
- **Nav items:** Buttons inside a pill container (`rounded-full bg-white/70 border shadow-lg`)
- **Hover:** Nav items get `hover:bg-mint-50 hover:text-black`
- **Mobile variant:** Hamburger button (`rounded-full border bg-white/70 shadow-md`)
- **Backdrop:** `bg-white/80 backdrop-blur-xl` for frosted glass effect

## 2. Hero CTA Button (Primary)

- **Description:** Large pill-shaped black button
- **Structure:** PrimeVue `<Button>` with ripple effect
- **Style:** `bg-black text-white rounded-full py-3.5 px-10`
- **Shadow:** `0px 2px 12px rgba(0,0,0,0.12)`
- **Hover:** `hover:bg-black/90`, shadow increases to `0px 4px 20px rgba(0,0,0,0.18)`
- **Active:** `active:scale-[0.98]`
- **Interaction:** PrimeVue ripple animation on click

## 3. Hero CTA Button (Secondary)

- **Description:** Ghost/outline pill buttons (Newsletter, Community, Book consult)
- **Structure:** PrimeVue `<Button>` or `<a>` tag
- **Style:** `bg-transparent border border-black/12 rounded-full py-2.5 px-5 text-sm text-black/70`
- **Hover:** `hover:text-black hover:border-black/20`

## 4. Review Card

- **Description:** White card with star rating, author info, and review text
- **Structure:**
  ```
  .review-card
  ├── .review-header
  │   ├── .review-rating (5 star icons)
  │   └── .review-author
  │       ├── .author-avatar (letter initial, colored circle)
  │       └── .author-info (name + date)
  └── .review-content
      └── .review-text
  ```
- **Card style:** `bg-white rounded-[20px] p-8 border-2 border-teal/10 shadow`
- **Shadow:** `rgba(0,0,0,0.08) 0px 4px 20px`
- **Stars:** PrimeIcons `pi-star-fill`, color `#FBBF24` (amber), 20px
- **Avatar:** Circle with initial letter, colored background
- **Author name:** 16px, weight 600, color slate-900
- **Date:** Muted text below name
- **Review text:** 16px, color slate-600, line-height 27.2px
- **Animation:** Cards appear with staggered `animation-delay` (0s, 0.1s, 0.2s...)

## 5. Average Rating Badge

- **Description:** Centered badge showing "Average Rating:" with 5 stars and "5.0"
- **Structure:** Inline flex with label, star icons, and numeric value
- **Located in:** Reviews section header

## 6. Footer Buttons

- **Description:** Ghost buttons on dark background
- **Style:** `bg-white/10 border border-white/20 rounded-full px-6 py-2.5 text-white text-sm font-medium`
- **Hover:** `hover:bg-white/20 hover:border-mint-400/50 hover:text-mint-400 hover:scale-105`

## 7. Social Icon Links

- **Description:** Round icon buttons for LinkedIn and Twitter/X
- **Style:** `w-10 h-10 rounded-full bg-white/5 border border-white/10`
- **Icons:** PrimeIcons (`pi-linkedin`, `pi-twitter`), colored mint-400
- **Hover:** `hover:bg-mint-500 hover:border-mint-500 hover:scale-110`

## 8. Floating Background Blobs

- **Description:** Large blurred circles that create ambient color in the hero
- **Count:** 3 blobs
- **Style:** `w-[28rem] h-[28rem] bg-mint-400/20 rounded-full blur-3xl`
- **Animation:** `animate-float-slow` (custom keyframes), one with `animate-pulse-slow`
- **Positioning:** Absolutely positioned, `pointer-events-none`, z-0

## 9. Dot Pattern Overlay

- **Description:** Subtle dot grid covering the entire page
- **Style:** `radial-gradient(circle, rgba(20,184,166,0.5) 1px, transparent 1px)` at `24px 24px`
- **Opacity:** `0.12`
- **Position:** Fixed, covers full viewport, `pointer-events-none`
