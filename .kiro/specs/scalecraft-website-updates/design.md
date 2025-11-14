# Design Document

## Overview

This design document outlines the technical approach for implementing updates to the Scalecraft landing page. The project is built with Next.js 14+ using the App Router, TypeScript, and Tailwind CSS. The implementation will focus on component-level modifications to the Footer, Hero section, Case Study section, and Stats section, along with creating new legal subpages and improving responsive design.

## Architecture

### Technology Stack
- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom utility classes
- **Image Optimization**: Next.js Image component
- **Animation**: Framer Motion (for sections requiring animation)
- **Component Structure**: React functional components with client/server component separation

### Project Structure
```
app/
├── components/
│   ├── Footer.tsx (existing - to be modified)
│   └── sections/
│       ├── hero/
│       │   ├── RatingBadge.tsx (existing - to be modified)
│       │   ├── LogoMarquee.tsx (existing - to be modified)
│       │   └── CTAButton.tsx (existing - to be modified)
│       ├── CaseStudySection.tsx (existing - to be modified)
│       └── StatsSection.tsx (existing - to be modified)
├── impressum/
│   └── page.tsx (new)
├── datenschutz/
│   └── page.tsx (new)
├── agb/
│   └── page.tsx (new)
└── page.tsx (existing - no changes needed)
```

## Components and Interfaces

### 1. Footer Component Updates

**File**: `app/components/Footer.tsx`

**Changes Required**:
1. Remove "Rechtsdokumente" column entirely
2. Update "Kontakt" column to use a button component instead of text
3. Update footer text underneath logo
4. Update LinkedIn logos with proper labels
5. Update copyright text

**Design Decisions**:
- Maintain existing responsive grid structure (3 columns mobile, 4 columns desktop)
- After removing "Rechtsdokumente", adjust to 3 columns on desktop
- Reuse CTAButton component pattern for consistency
- LinkedIn icons already exist, just need label updates via title/alt attributes
- All CTAs will link to Calendly URL with `target="_blank"` and `rel="noopener noreferrer"`

**Component Structure**:
```tsx
<footer>
  <div className="grid">
    {/* Logo + Description Column */}
    <div>
      <Logo />
      <p>Crafted with ❤️ since 2020 – empowering agencies and brands to scale smarter</p>
      <LinkedInIcons /> {/* Scalecraft + Hoa labels */}
    </div>
    
    {/* Unternehmen Column */}
    <div>
      <Link href="/impressum">Impressum</Link>
      <Link href="/datenschutz">Datenschutz</Link>
      <Link href="/agb">AGB</Link>
    </div>
    
    {/* Kontakt Column - Button instead of text */}
    <div>
      <a href="https://calendly.com/dhventuresvietnam/30min" target="_blank">
        <button>Termin Vereinbaren</button>
      </a>
    </div>
  </div>
  
  <div className="copyright">
    Copyright ® 2025 Scalecraft. Alle Rechte Vorbehalten
  </div>
</footer>
```

### 2. Legal Subpages

**Files**: 
- `app/impressum/page.tsx`
- `app/datenschutz/page.tsx`
- `app/agb/page.tsx`

**Design Decisions**:
- Create simple, clean layout with consistent styling
- Include company details: "Công Ty TNHH DH Ventures Vietnam, Số 31 ngõ 5 Lê Trọng Tấn Phường La Khê, Quận Hà Đông, Hanoi, 12122, Vietnam"
- Use same header/footer as main page for consistency
- Responsive typography matching main site
- Include back-to-home navigation

**Page Structure**:
```tsx
export default function LegalPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 py-16">
        <h1>[Page Title]</h1>
        <section>
          <h2>Company Information</h2>
          <p>Công Ty TNHH DH Ventures Vietnam</p>
          <p>Số 31 ngõ 5 Lê Trọng Tấn Phường La Khê, Quận Hà Đông</p>
          <p>Hanoi, 12122, Vietnam</p>
        </section>
        {/* Additional legal content */}
      </main>
      <Footer />
    </div>
  );
}
```

### 3. CTA Button Updates

**Files**: 
- `app/components/sections/hero/CTAButton.tsx`
- All sections with CTA buttons

**Changes Required**:
- Wrap button in anchor tag linking to Calendly
- Add `target="_blank"` and `rel="noopener noreferrer"`
- Update button text to "Termin Vereinbaren" where applicable

**Implementation Pattern**:
```tsx
<a 
  href="https://calendly.com/dhventuresvietnam/30min" 
  target="_blank" 
  rel="noopener noreferrer"
  className="inline-block"
>
  <button className="...">
    Termin Vereinbaren
  </button>
</a>
```

### 4. Customer Rating Badge Enhancement

**File**: `app/components/sections/hero/RatingBadge.tsx`

**Changes Required**:
1. Increase overall component size (height from 50px to 60px on desktop, 32px to 38px on mobile)
2. Update text to "4.8 Sterne aus 35+ Kundenerfahrungen" with proper German capitalization
3. Increase avatar sizes proportionally
4. Maintain glassmorphism styling

**Design Decisions**:
- Scale up by ~20% to improve visibility
- Ensure proper German capitalization: "Sterne" and "Kundenerfahrungen" capitalized
- Maintain existing gradient background and blur effects
- Keep responsive scaling ratio

### 5. Logo Marquee Adjustments

**File**: `app/components/sections/hero/LogoMarquee.tsx`

**Changes Required**:
1. Identify "Snocksulting" logo (likely `imgImage6` - Frame 1707480419.png)
2. Increase its size from 120px to 160px width/height
3. Adjust spacing if needed to maintain visual balance

**Design Decisions**:
- Only scale the specific Snocksulting logo
- Maintain animation timing and smoothness
- Keep grayscale filter on all logos
- Ensure no layout shift during animation

### 6. Hero Section Spacing

**File**: `app/components/sections/HeroSection.tsx` (needs to be reviewed)

**Changes Required**:
- Reduce vertical spacing between CTA button and Logo Marquee
- Adjust from current gap to smaller value (reduce by ~20-30%)

**Implementation**:
- Modify gap or margin-bottom on CTA container
- Test on both mobile and desktop viewports

### 7. Case Study Section Mobile Enhancement

**File**: `app/components/sections/CaseStudySection.tsx`

**Changes Required**:
1. Add "Case ansehen" text underneath navigation arrows on mobile
2. Increase arrow size and prominence on mobile
3. Show navigation on mobile (currently hidden with `hidden md:flex`)

**Design Decisions**:
- Display navigation buttons on mobile with smaller size
- Add text label below arrow icon
- Increase button size from hidden to visible with appropriate mobile sizing
- Maintain glassmorphism button styling
- Ensure touch targets meet minimum 44x44px standard

**Mobile Navigation Structure**:
```tsx
<button className="flex flex-col items-center md:hidden">
  <div className="w-12 h-12 rounded-full ...">
    <ArrowIcon />
  </div>
  <span className="text-xs mt-1">Case ansehen</span>
</button>
```

### 8. BAT Method Quote Mobile Enhancement

**File**: `app/components/sections/VisualSolutionsSection.tsx` or similar (needs to be identified)

**Changes Required**:
- Locate "BAT Method" quote element
- Increase font size on mobile viewport
- Ensure text doesn't overflow

**Design Decisions**:
- Increase mobile font size by 20-30%
- Add responsive line-height adjustment
- Test on various mobile screen sizes (320px - 428px)

### 9. Desktop Half-Screen Responsiveness

**Files**: Multiple components, primarily layout and section components

**Changes Required**:
- Add responsive breakpoint for ~800px width (half of 1600px desktop)
- Adjust grid layouts to prevent horizontal scroll
- Scale down font sizes and spacing proportionally

**Design Decisions**:
- Add custom Tailwind breakpoint: `@media (min-width: 768px) and (max-width: 1024px)`
- Use `clamp()` for fluid typography where appropriate
- Test all sections at 800px, 900px, 1000px widths
- Ensure images scale properly without distortion

### 10. Über Uns Section Content Updates

**File**: `app/components/sections/StatsSection.tsx` or dedicated "Über Uns" section

**Changes Required**:
1. Update introductory text to "Stärkeres Agenturprodukt. Zufriedenheit, die sich auf deine Kunden überträgt."
2. Replace or add timeline with company milestones
3. Ensure timeline is visually clear with proper hierarchy

**Timeline Design**:
```tsx
<div className="timeline">
  <div className="timeline-item">
    <span className="year">10/2021</span>
    <p>Start als Freelancer</p>
  </div>
  <div className="timeline-item">
    <span className="year">2022</span>
    <p>Erste Agenturkunden – Aufbau eines kleinen Teams (4 MA)</p>
  </div>
  {/* ... more items */}
</div>
```

**Styling Approach**:
- Vertical timeline on mobile, horizontal on desktop
- Use gradient accent color for year markers
- Arrow indicators between items
- Responsive font sizing

## Data Models

No database or complex data models required. All content is static and component-based.

### Content Constants

```typescript
// Legal page company details
export const COMPANY_INFO = {
  name: "Công Ty TNHH DH Ventures Vietnam",
  address: "Số 31 ngõ 5 Lê Trọng Tấn Phường La Khê, Quận Hà Đông",
  city: "Hanoi",
  postalCode: "12122",
  country: "Vietnam"
};

// CTA configuration
export const CALENDLY_URL = "https://calendly.com/dhventuresvietnam/30min";

// Timeline data
export const TIMELINE_MILESTONES = [
  { date: "10/2021", description: "Start als Freelancer" },
  { date: "2022", description: "Erste Agenturkunden – Aufbau eines kleinen Teams (4 MA)" },
  { date: "2023", description: "Zusammenarbeit mit weiteren Agenturen – Team wächst auf 10 MA" },
  { date: "2024", description: "Skalierung & Prozessaufbau – 35 MA im Team" },
  { date: "2025", description: "Fokus auf Optimierung, Automatisierung & Qualitätssicherung" }
];
```

## Error Handling

### Link Validation
- All external links (Calendly, LinkedIn) should open in new tabs with proper security attributes
- Implement error boundaries for dynamic sections
- Add fallback for failed image loads

### Responsive Design
- Test all breakpoints: 320px, 375px, 428px (mobile), 768px, 1024px, 1440px, 1920px
- Ensure no horizontal scroll at any viewport width
- Validate touch targets on mobile (minimum 44x44px)

### Accessibility
- Maintain proper heading hierarchy
- Add ARIA labels to navigation buttons
- Ensure sufficient color contrast (WCAG AA minimum)
- Test keyboard navigation
- Add alt text to all images

## Testing Strategy

### Unit Testing
- Not required for this implementation (primarily UI updates)

### Visual Regression Testing
- Manual testing at key breakpoints
- Compare before/after screenshots for each section

### Browser Testing
- Chrome, Firefox, Safari, Edge (latest versions)
- Mobile browsers: Safari iOS, Chrome Android

### Responsive Testing
- Mobile: 320px, 375px, 390px, 428px
- Tablet: 768px, 834px, 1024px
- Desktop: 1280px, 1440px, 1920px
- Half-screen desktop: 800px, 960px

### Functional Testing Checklist
1. Footer "Rechtsdokumente" removed ✓
2. Legal pages accessible and display correct company info ✓
3. All CTAs link to Calendly and open in new tab ✓
4. Customer box displays correct text with proper capitalization ✓
5. Customer box size increased appropriately ✓
6. Snocksulting logo larger in marquee ✓
7. Spacing reduced between CTA and logo scroller ✓
8. Case study navigation visible on mobile with "Case ansehen" text ✓
9. BAT Method quote larger on mobile ✓
10. No horizontal scroll at half-screen desktop width ✓
11. Über Uns text updated ✓
12. Timeline displays correctly on all viewports ✓
13. LinkedIn icons have proper labels ✓
14. Copyright text updated ✓
15. Footer text underneath logo updated ✓

### Performance Considerations
- Ensure no layout shift (CLS) from size changes
- Maintain lazy loading for images
- Keep bundle size minimal (no new dependencies)
- Test animation performance on mobile devices

## Implementation Notes

### Tailwind Configuration
May need to add custom breakpoint for half-screen desktop:

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      screens: {
        'md-lg': '896px', // Half-screen desktop breakpoint
      }
    }
  }
}
```

### Component Reusability
- Create shared Button component if multiple CTA styles needed
- Extract timeline component for potential reuse
- Consider creating LegalPageLayout wrapper for consistency

### SEO Considerations
- Add proper meta tags to legal pages
- Update sitemap.xml to include new pages
- Ensure proper heading structure (h1, h2, h3)
- Add structured data if applicable

### Deployment
- No environment variables needed
- Static generation for all pages
- No API routes required
- Can deploy as static export if needed
