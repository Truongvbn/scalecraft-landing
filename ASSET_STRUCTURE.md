# 📁 Asset Structure Documentation

## Overview

Assets are organized by section for better maintainability and clarity.

## Folder Structure

```
public/assets/images/
├── hero/                    (24 files) - HeroSection assets
├── stats-hero/              (7 files)  - StatsHeroSection assets
├── case-study/              (24 files) - CaseStudySection assets
├── comparison/              (6 files)  - ScalecraftComparisonSection assets
├── stats/                   (3 files)  - StatsSection assets
├── benefits/                (4 files)  - BenefitsSection assets
├── features/                (14 files) - FeatureCardsSection assets
├── visual-solutions/        (9 files)  - VisualSolutionsSection assets
├── faq/                     (2 files)  - FAQSection assets
├── cta/                     (6 files)  - CTASection assets
└── shared/                  (0 files)  - Shared assets across sections
```

## Section Details

### 1. Hero Section (`/hero/`)

**Component:** `app/components/sections/HeroSection.tsx`

**Assets:**

- Navigation logos: `hero-nav-logo-1.svg`, `hero-nav-logo-2.svg`
- Partner logos: `hero-logo-1.png` through `hero-logo-9.png`
- User avatars: `hero-image24.png`, `hero-image25.png`, `hero-image27.png`, `hero-image28.png`, `hero-image291.png`
- Icons & decorations: `hero-frame2.svg`, `hero-group.svg`, `hero-group1.svg`, `hero-group13681.svg`, `hero-icon.svg`, `hero-intersect.svg`, `hero-nav-frame.svg`
- Texture: `hero-texture.svg`

**Total:** 24 files

---

### 2. Stats Hero Section (`/stats-hero/`)

**Component:** `app/components/sections/StatsHeroSection.tsx`

**Assets:**

- Gradients: `stats-hero-gradient.svg`, `stats-hero-gradient1.svg`
- Icons: `stats-hero-icon1.svg`, `stats-hero-icon2.svg`, `stats-hero-icon3.svg`, `stats-hero-icon4.svg`
- Texture: `stats-hero-texture.svg`

**Total:** 7 files

---

### 3. Case Study Section (`/case-study/`)

**Component:** `app/components/sections/CaseStudySection.tsx`

**Assets:**

- Main images: `case-study-main.png`, `case-study-icon.png`
- Overlays: `case-study-overlay1.png`, `case-study-overlay2.png`
- Slider 1: `case-slider-1-*.png/svg` (9 files)
- Slider 2: `case-slider-2-*.png/svg` (9 files)

**Total:** 24 files

---

### 4. Comparison Section (`/comparison/`)

**Component:** `app/components/sections/ScalecraftComparisonSection.tsx`

**Assets:**

- Agenturen: `comparison-agenturen-1.png`, `comparison-agenturen-2.png`, `comparison-agenturen-3.png`
- Mitarbeiter: `comparison-mitarbeiter-1.png`, `comparison-mitarbeiter-2.png`
- Systeme: `comparison-systeme.png`

**Total:** 6 files

---

### 5. Stats Section (`/stats/`)

**Component:** `app/components/sections/StatsSection.tsx`

**Assets:**

- Background: `stats-gradient-bg.png`
- Illustration: `stats-illustration.png`
- Texture: `stats-texture.png`

**Total:** 3 files

---

### 6. Benefits Section (`/benefits/`)

**Component:** `app/components/sections/BenefitsSection.tsx`

**Assets:**

- Benefit images: `benefit-1.png`, `benefit-2.png`, `benefit-3.png`, `benefit-4.png`

**Total:** 4 files

---

### 7. Features Section (`/features/`)

**Component:** `app/components/sections/FeatureCardsSection.tsx`

**Assets:**

- Card illustrations: `card1-illustration-0.png` through `card1-illustration-4.png` (5 files)
- Icons: `feature-icon-1.svg`, `feature-icon-2.svg`
- Timeline dots: `feature-timeline-dot-1.svg` through `feature-timeline-dot-4.svg` (4 files)
- Profile: `feature-profile.png`
- Text: `feature-scalecraft-text.svg`
- Texture: `feature-texture.png`

**Total:** 14 files

---

### 8. Visual Solutions Section (`/visual-solutions/`)

**Component:** `app/components/sections/VisualSolutionsSection.tsx`

**Assets:**

- Main image: `visual-main.png`
- Bento grid: `visual-bento-1.png` through `visual-bento-5.png` (5 files)
- Check icons: `visual-check-icon-1.svg`, `visual-check-icon-2.svg`, `visual-check-icon-3.svg`

**Total:** 9 files

---

### 9. FAQ Section (`/faq/`)

**Component:** `app/components/sections/FAQSection.tsx`

**Assets:**

- Icons: `faq-collapse-icon.svg`, `faq-expand-icon.svg`

**Total:** 2 files

---

### 10. CTA Section (`/cta/`)

**Component:** `app/components/sections/CTASection.tsx`

**Assets:**

- Avatars: `cta-avatar-1.png` through `cta-avatar-6.png`

**Total:** 6 files

---

### 11. Shared Assets (`/shared/`)

**Component:** Multiple sections

**Assets:**

- Common assets used across multiple sections
- Currently empty - to be populated as needed

**Total:** 0 files

---

## Asset Naming Convention

### Pattern

```
{section}-{type}-{variant}.{ext}
```

### Examples

- `hero-logo-1.png` - Hero section, logo type, variant 1
- `stats-hero-icon2.svg` - Stats Hero section, icon type, variant 2
- `visual-bento-3.png` - Visual Solutions section, bento grid type, variant 3

### File Types

- **PNG**: Raster images (photos, complex graphics)
- **SVG**: Vector graphics (icons, logos, simple shapes)

---

## Usage in Components

### Import Pattern

```typescript
// Old (before organization)
import heroLogo from "/assets/images/hero-logo-1.png";

// New (after organization)
import heroLogo from "/assets/images/hero/hero-logo-1.png";
```

### Next.js Image Component

```typescript
<Image
  src="/assets/images/hero/hero-nav-logo-1.svg"
  alt="Scalecraft Logo"
  width={45}
  height={50}
/>
```

---

## Maintenance

### Adding New Assets

1. Identify the section the asset belongs to
2. Name the file following the convention: `{section}-{type}-{variant}.{ext}`
3. Place in the appropriate folder: `public/assets/images/{section}/`

### Reorganizing Assets

Run the organize script:

```powershell
.\scripts\organize-assets.ps1
```

---

## Benefits of This Structure

### 1. **Better Organization**

- Easy to find assets by section
- Clear ownership of assets

### 2. **Maintainability**

- Easy to add/remove section assets
- Clear what assets belong to what component

### 3. **Performance**

- Can lazy load section assets
- Easier to optimize per-section

### 4. **Collaboration**

- Designers know where to place assets
- Developers know where to find assets

---

## Total Assets

- **Total Files:** 99 files
- **Total Size:** ~200MB (approximate)
- **Sections:** 11 folders

---

## Next Steps

1. ✅ Assets organized into folders
2. ⏳ Update component imports to use new paths
3. ⏳ Optimize images (WebP conversion)
4. ⏳ Add shared assets folder usage
5. ⏳ Document asset optimization guidelines
