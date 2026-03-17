# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Eco Terapia institutional website - a static single-page application built with React 18, TypeScript, and Tailwind CSS. The project prioritizes **100% pixel-perfect fidelity to the approved Figma design**.

## Essential Commands

```bash
# Development
npm install              # Install dependencies
npm run dev             # Start dev server (http://localhost:5173)
npm run build           # Build for production (TypeScript compilation + Vite bundling)
npm run preview         # Preview production build locally
npm run lint            # Run ESLint checks
npm run lint -- --fix   # Auto-fix ESLint issues
```

**Pre-deployment checklist**: Always run `npm run build` and `npm run lint` before committing changes. Build must succeed with zero TypeScript errors.

## Architecture

### Application Structure

This is a **static SPA with no backend** - all components are client-side only. The architecture follows a simple linear component composition pattern:

**App.tsx** is the single root component that composes all page sections in a specific, fixed order. Each section is wrapped in container divs with precise width constraints:
- Standard sections: `max-w-[1280px] mx-auto` with `px-10` padding
- Full-width sections: `w-full flex justify-center` (no max-width constraint)

**Component rendering sequence** (must be maintained):
1. Navigation (sticky header)
2. Header (hero section)
3. Partners → HeadlineWithIcons → HeroImageSection → Hero3 → Hero2 → Quote → AboutUsCards → Testimonials → CTASection → SocialIcons → Footer

This ordering is intentional and matches the Figma design flow.

### Design System Architecture

The entire visual language is encoded in **tailwind.config.js** as custom theme extensions:

**Colors** (prefixed with `eco-`):
- `eco-accent`: #CFEE0C (lime green - primary brand color)
- `eco-headline`: #00160A (dark green for headings)
- `eco-caption`: #485C11 (green for captions)
- `eco-divider`: #E9E9E9 (light gray borders)
- `eco-paragraph`: #6F6F6F (secondary text)
- `eco-bg`: #FFFFFF (backgrounds)
- `eco-on-accent`: #FFFFFF (text on accent backgrounds)

**Typography hierarchy**:
- Headings use `font-heading` (Oswald 700) - substitute for BentonSans Cond Bold
- Body text uses `font-body` (DM Sans 400/700)
- Captions use `font-mono` (Roboto Mono 400)
- Custom font sizes with specific line-heights and letter-spacing (e.g., `text-display-2`, `text-heading-1`)

**Border radius**: `rounded-eco` (112.23px) - used specifically for hero images

**Critical constraint**: Never introduce arbitrary color values or spacing that don't exist in the Figma design. All new UI must reference the defined design tokens.

### Image Path Convention

Images live in `public/` and are referenced with **absolute paths from root**:
```tsx
<img src="/image-name.png" alt="..." />  // ✅ Correct (works in production)
<img src="./image-name.png" alt="..." /> // ❌ Incorrect (breaks on Vercel)
```

This is critical for Vercel deployment - relative paths will break in production.

### Navigation Component Architecture

The **Navigation component** implements a world-class adaptive scroll system with performance and accessibility optimizations:

**Scroll Detection System**:
- Debounced scroll handler (10ms) with passive event listeners for 60 FPS performance
- Multiple scroll states: `isScrolled` (>50px), `isVisible` (direction-based), `scrollProgress` (0-100%)
- Smart hide/show: navigation hides on scroll down (>100px), shows on scroll up
- Menu override: navigation always visible when menu is open

**Adaptive Behaviors**:
- **Top of page** (scrollY < 50px): Transparent navigation, logo 40px, button 48px, padding py-5
- **Scrolled** (scrollY > 50px): Semi-transparent background (bg-white/90), logo 32px, button 40px, padding py-3
- **Scroll down**: Navigation slides up (translateY(-100%)) to maximize reading space
- **Scroll up**: Navigation slides down (translateY(0)) for instant access

**Performance Optimizations**:
```typescript
// Debounce helper for smooth 60 FPS
const debounce = (func: (...args: unknown[]) => void, wait: number) => {
  let timeout: number; // Browser-safe type
  return (...args: unknown[]) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

// Passive listener for scroll performance
window.addEventListener('scroll', debouncedHandleScroll, { passive: true });
```

**Accessibility (WCAG 2.1 AA Compliant)**:
- Detects `prefers-reduced-motion` system preference via MediaQuery API
- Conditionally disables all transitions/animations when motion is reduced
- Maintains full keyboard navigation and screen reader support

**Additional Features**:
- Scroll progress indicator (2px eco-accent bar at top, visible when scrolled)
- Hardware-accelerated transforms for smooth animations
- TypeScript strict typing with proper browser types (number for setTimeout, not NodeJS.Timeout)

**Critical Implementation Notes**:
- All animations use conditional classes based on `prefersReducedMotion` state
- Menu state overrides hide/show behavior to ensure accessibility
- Scroll handler uses `useRef` for `lastScrollY` to avoid re-render triggers
- Progress calculation: `(currentScrollY / totalHeight) * 100`

### Component Patterns

All components are **functional components with TypeScript interfaces**:
```tsx
interface ComponentProps {
  // Define props with explicit types
}

export default function Component({}: ComponentProps) {
  return <div className="...">...</div>;
}
```

**No global state management** - components are stateless presentational components. Props are passed down from App.tsx when needed.

**Exception**: Navigation component uses local state hooks (useState, useRef) for scroll-aware behavior, but does not share state globally.

**Tailwind class organization pattern** (group logically for readability):
```tsx
<div className={`
  // Layout
  flex flex-col items-center
  // Spacing
  px-10 py-8
  // Typography
  text-headline font-dm-sans
  // Background & Border
  bg-white rounded-eco
`}>
```

**Dynamic styling pattern** (for scroll-aware components):
```tsx
<div
  className={`base-classes ${condition ? 'conditional-classes' : ''}`}
  style={{
    transform: dynamicValue,
    transition: prefersReducedMotion ? 'none' : 'all 0.3s ease-in-out',
  }}
>
```

### Container Width Logic

Two container patterns are used throughout:

**1. Constrained containers** (1280px max with padding):
```tsx
<div className="w-full max-w-[1280px] mx-auto px-10">
  <Component />
</div>
```

**2. Full-width containers** (no max-width):
```tsx
<div className="w-full flex justify-center">
  <Component />
</div>
```

The choice between these is dictated by the Figma design - check the mockup before wrapping components.

## Figma Fidelity Requirements

**Non-negotiable**: All visual implementations must match the Figma design pixel-perfectly. Before committing any UI changes:

1. Open Figma design side-by-side with browser
2. Verify spacing, colors, fonts, and layout match exactly
3. Use browser DevTools to inspect computed styles
4. Take screenshots and overlay for comparison if needed

**Common fidelity checks**:
- Container widths: 1280px with 40px horizontal padding
- Color values match `tailwind.config.js` definitions
- Font families and weights match design system
- Border radius uses `rounded-eco` for hero images
- Letter spacing and line heights use defined text sizes

## Development Constraints

**TypeScript strict mode** is enabled - no implicit `any` types allowed. All component props must have explicit interfaces.

**Current status**:
- ✅ Mobile-first responsive design implemented (all 14 components)
- ✅ 100% Figma fidelity validated (desktop + mobile)
- ✅ World-class adaptive navigation with scroll optimizations (60 FPS, WCAG 2.1 AA)
- ✅ Performance optimizations: debounced scroll, passive listeners, hardware-accelerated transforms
- No testing framework configured (planned: Jest + React Testing Library)
- No automated deployment pipeline (manual deployment via Vercel)

**Responsive Design**:
- Mobile breakpoints: `xs` (320px), `sm` (375px) - matches Figma mobile artboard
- Desktop breakpoint: `md` (768px+)
- All components use mobile-first typography tokens (`text-mobile-*` with `md:text-*` overrides)
- Container pattern: `max-w-[343px] sm:max-w-[360px] md:max-w-[1200px]`
- Padding pattern: `px-4 py-20 md:px-10 md:py-[120px]`

**Deployment target**: Vercel with automatic HTTPS and CDN distribution. See `DEPLOY_VERCEL.md` for deployment procedures.

## File Organization

```
src/components/     # All React components (flat structure)
public/            # Static assets (images from Figma)
.context/docs/     # Project documentation (AI-context guides)
.context/agents/   # Agent playbooks for specialized tasks
```

Components are co-located in a flat directory structure - no nested folders. This is intentional for the current project size.

## Performance & Accessibility Standards

**Navigation Performance Metrics** (as of latest implementation):
- ✅ 60 FPS scroll performance with debounced handlers (10ms)
- ✅ WCAG 2.1 Level AA accessibility compliance
- ✅ Prefers-reduced-motion support for system preferences
- ✅ Bundle impact: < 6% increase for world-class UX features
- ✅ Hardware-accelerated transforms (GPU-optimized)

**TypeScript & Linting**:
- Always use browser-safe types (e.g., `number` for setTimeout, not `NodeJS.Timeout`)
- Passive event listeners for scroll: `{ passive: true }`
- MediaQuery API for accessibility features: `window.matchMedia('(prefers-reduced-motion: reduce)')`

## Figma Fidelity Audit

**Latest Audit:** 2025-10-26 - ✅ **APPROVED**

A comprehensive Figma-to-code audit was completed covering:
- ✅ Assets: 26 validated (2 exported during audit)
- ✅ Typography: 100% using mobile-first tokens
- ✅ Colors: 7 eco-* tokens, zero hard-coded values
- ✅ Spacing: All using Tailwind scale or defined tokens
- ✅ Components: All 14 components pixel-perfect and responsive
- ✅ Build: Zero TypeScript errors, zero ESLint warnings

**Audit Report:** See `.context/docs/figma-audit-report.md` for complete findings
**Asset Inventory:** See `.context/docs/figma-asset-manifest.csv` for asset catalog
**Figma Sources:**
- Desktop: [node-id=1-152](https://www.figma.com/design/rNgMfTWO2esIRdUBCl2FdO/ECO--Copy-?node-id=1-152)
- Mobile: [node-id=1-395](https://www.figma.com/design/rNgMfTWO2esIRdUBCl2FdO/ECO--Copy-?node-id=1-395)

## Important References

- **Design system**: All values in `tailwind.config.js`
- **Component sequence**: Order in `App.tsx` must match Figma flow
- **Figma audit**: `.context/docs/figma-audit-report.md` - complete fidelity validation
- **Asset inventory**: `.context/docs/figma-asset-manifest.csv` - 26 assets cataloged
- **Future roadmap**: See `PROXIMOS_PASSOS.md` for planned features
- **Deployment guide**: `DEPLOY_VERCEL.md` for production deployment
- **Documentation**: `.context/docs/` for architecture, workflow, testing strategy
