# Website Analyzer Skill — Full Reference

This document defines the complete extraction process for the `/analyze-site` skill.

## Purpose

Extract maximum design and code context from a target website so Claude Code can faithfully reproduce or draw inspiration from it when building pages and components.

## Output Structure

For each analyzed site, create a folder under `analyze-site/sites/<domain>/` with:

```
<domain>/
├── screenshots/
│   ├── desktop-full.png
│   ├── mobile-full.png
│   └── sections/          # Individual section screenshots
│       ├── hero.png
│       ├── nav.png
│       ├── footer.png
│       └── ...
├── design-tokens.md        # Colors, fonts, spacing, shadows, borders, radii
├── layout-structure.md     # Page sections, grid/flex patterns, component hierarchy
├── components.md           # Identified reusable components with descriptions
├── tech-stack.md           # Frameworks, libraries, CSS methodology
├── content-map.md          # Copy, CTAs, image descriptions, content flow
└── summary.md              # Quick-reference overview with key takeaways
```

## Extraction Steps

### Step 1: Screenshots (Playwright)

Use the Playwright MCP tools to capture the site visually.

1. Navigate to the URL
2. **Desktop full-page screenshot** (1440x900 viewport, full page)
3. **Mobile full-page screenshot** (390x844 viewport, full page)
4. **Section screenshots** — identify major page sections (nav, hero, features, pricing, testimonials, CTA, footer) and screenshot each individually
5. Save all to `screenshots/`

### Step 2: Fetch and Parse HTML/CSS

Use WebFetch to get the page source. Extract:

- Full HTML structure (simplified — strip inline scripts, keep semantic structure)
- All linked stylesheets (fetch and save key CSS)
- Inline styles and CSS custom properties (design tokens)

### Step 3: Design Tokens → `design-tokens.md`

Extract and document:

- **Color palette**: All unique colors (hex + usage context: background, text, accent, border)
- **Typography**: Font families, sizes, weights, line-heights, letter-spacing for each heading level and body text
- **Spacing system**: Recurring margin/padding values, gap values
- **Shadows**: Box-shadow values with labels
- **Border radii**: All unique border-radius values
- **Breakpoints**: Media query breakpoints if detectable
- **Transitions/animations**: Duration, easing, transform patterns

Format as a reference table that can be directly used when coding.

### Step 4: Layout Structure → `layout-structure.md`

Document:

- **Page sections** in order (semantic landmark elements)
- **Layout method** per section (CSS Grid, Flexbox, etc.)
- **Grid/column structure** (e.g., "3-column grid on desktop, single column on mobile")
- **Container widths** and max-widths
- **Responsive behavior** (what changes at each breakpoint)
- **Sticky/fixed elements** (nav, CTA bars, etc.)
- **Z-index layers** if notable

Include ASCII diagrams for complex layouts.

### Step 5: Components → `components.md`

Identify and describe each reusable UI component:

- **Component name** (e.g., "Feature Card", "Pricing Tier", "Testimonial Slide")
- **Visual description** (what it looks like)
- **Structure** (HTML elements used)
- **Variants** (if the same component appears in different states/sizes)
- **Interactive behavior** (hover effects, animations, click actions)
- **Responsive changes**

### Step 6: Tech Stack → `tech-stack.md`

Detect and document:

- **Framework** (React, Next.js, Vue, static HTML, etc.)
- **CSS approach** (Tailwind, CSS Modules, styled-components, vanilla CSS, etc.)
- **JS libraries** (GSAP, Framer Motion, Swiper, etc.)
- **Fonts** (Google Fonts, custom, system)
- **Icon system** (SVG, icon font, library)
- **Image handling** (lazy loading, CDN, formats)
- **Notable meta** (OG tags, structured data patterns)

### Step 7: Content Map → `content-map.md`

Document the content strategy:

- **Headlines and subheadlines** (exact copy)
- **CTA text and placement**
- **Navigation structure** (menu items, dropdowns)
- **Content flow** (the narrative order of sections and why it works)
- **Image/media descriptions** (what images show, their role)
- **Social proof elements** (testimonials, logos, stats)

### Step 8: Summary → `summary.md`

A quick-reference overview:

- **One-line description** of the site's design approach
- **Key design patterns** worth replicating (top 3-5)
- **Color mood** (warm, cool, bold, minimal, etc.)
- **Overall vibe/style** (corporate, playful, luxurious, technical, etc.)
- **What makes this site effective** (design strengths)
- **Direct applicability** — how these patterns could apply to our project
