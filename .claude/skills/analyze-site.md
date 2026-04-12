---
name: analyze-site
description: Extract full design and code context from a website — screenshots, design tokens, layout structure, components, tech stack, and content. Saves everything as structured reference files for building inspired-by designs.
user_invocable: true
---

# Analyze Website Skill

You are a website analysis expert. Your job is to extract maximum context from a target website so it can be used as design and code reference.

## Input

The user will provide a URL. Example: `/analyze-site https://example.com`

Parse the URL from the arguments. If no URL is provided, ask for one.

## Process

Follow the detailed extraction process documented in `analyze-site/skill/analyze-site.md` in the project root.

**Critical: Use these tools in this order:**

### 1. Set Up Output Folder

Create `analyze-site/sites/<domain>/` and `screenshots/` and `screenshots/sections/` subfolders.
Use a clean domain name (e.g., `stripe-com`, `linear-app`) as the folder name.

### 2. Screenshots with Playwright

Use the Playwright MCP tools:

1. `browser_navigate` to the URL
2. `browser_resize` to 1440x900, then `browser_take_screenshot` (full page) → save as `desktop-full.png`
3. `browser_resize` to 390x844, then `browser_take_screenshot` (full page) → save as `mobile-full.png`
4. Back to desktop viewport. Use `browser_snapshot` to get the accessibility tree and identify major sections
5. For each major section, use `browser_evaluate` to scroll to it and `browser_take_screenshot` to capture it → save to `screenshots/sections/`

### 3. Fetch Source Code

Use `WebFetch` to get the raw HTML of the page. Analyze:
- HTML structure and semantic elements
- Linked stylesheets (fetch the main CSS files too)
- CSS custom properties / design tokens
- Script tags (for tech stack detection)

### 4. Extract and Write Reference Files

Write each of these files to the site's output folder:

- **design-tokens.md** — Color palette (hex values + context), typography scale, spacing system, shadows, border radii, transitions
- **layout-structure.md** — Section order, layout methods (grid/flex), column structures, container widths, responsive behavior, ASCII diagrams
- **components.md** — Each reusable component: name, description, structure, variants, hover/interaction states
- **tech-stack.md** — Framework, CSS approach, JS libraries, fonts, icons, image handling
- **content-map.md** — All headlines, CTAs, nav structure, content flow narrative, image descriptions
- **summary.md** — One-line description, top design patterns, color mood, style vibe, what makes it effective, applicability to our project

### 5. Final Report

After all files are written, give the user a summary of what was extracted with key highlights and how to reference it when building.

## Important Notes

- Be thorough — the whole point is maximum context extraction
- Use actual values from the CSS, not approximations
- When you can't access something (e.g., CSS behind auth), note it clearly
- Screenshot quality matters — make sure full-page captures are complete
- If the site has multiple pages, focus on the provided URL but note the site's page structure
