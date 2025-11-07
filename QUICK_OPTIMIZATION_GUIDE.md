# ⚡ Quick Optimization Guide

## 🎯 Những gì đã làm xong

### ✅ 1. Tạo Core Optimization Utilities

**Files đã tạo:**
- `app/lib/animations.ts` - Thư viện animations tối ưu
- `app/lib/optimization-config.ts` - Config chung
- `app/components/OptimizedImage.tsx` - Image component tối ưu

### ✅ 2. Đã tối ưu BenefitsSection

**Improvements:**
- ✅ GPU acceleration
- ✅ Optimized animations
- ✅ Responsive images
- ✅ Smooth hover effects

---

## 🚀 Cách áp dụng tối ưu cho sections còn lại

### **Template để tối ưu bất kỳ section nào:**

```tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
// Import animations đã tối ưu
import { 
  fadeInUp, 
  gridContainer, 
  gridItem, 
  viewport,
  buttonHover,
  buttonTap 
} from "@/app/lib/animations";

export default function YourSection() {
  return (
    <section className="relative w-full">
      {/* Header với fadeInUp */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        <h2>Your Heading</h2>
      </motion.div>

      {/* Grid với stagger effect */}
      <motion.div
        className="grid grid-cols-2 gap-8"
        variants={gridContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        {items.map((item, index) => (
          <motion.div
            key={index}
            className="transform-gpu will-change-transform" // GPU acceleration
            variants={gridItem}
            whileHover={{ y: -8, scale: 1.02 }}
          >
            {/* Optimized Image */}
            <Image
              src={item.image}
              alt={item.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={85}
              loading="lazy"
              className="object-cover transition-transform duration-500 hover:scale-110"
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Button với animation */}
      <motion.button
        whileHover={buttonHover}
        whileTap={buttonTap}
      >
        Click Me
      </motion.button>
    </section>
  );
}
```

---

## 📦 Available Animations

### **Fade Animations**
```tsx
fadeIn          // Simple fade
fadeInUp        // Fade + slide up
fadeInDown      // Fade + slide down
```

### **Scale Animations**
```tsx
scaleIn         // Smooth scale with fade
scaleInSpring   // Bouncy scale effect
```

### **Grid/List Animations**
```tsx
gridContainer   // Parent container
gridItem        // Grid items
staggerContainer // Generic stagger parent
staggerItem      // Stagger children
fastStagger     // Faster stagger (many items)
```

### **Slide Animations**
```tsx
slideInLeft     // From left
slideInRight    // From right
```

### **Interactive**
```tsx
buttonHover     // Button hover effect
buttonTap       // Button press effect
cardHover       // Card lift effect
```

---

## 🖼️ Image Optimization Checklist

### **For ALL images:**
```tsx
<Image
  src="/assets/images/your-image.png"
  alt="Descriptive alt text"
  // Size props (choose one)
  width={500} height={300}  // OR
  fill                       // For responsive containers
  
  // Required optimizations
  sizes="(max-width: 768px) 100vw, 50vw"
  quality={85}
  loading="lazy"  // hoặc priority={true} cho above-fold
  
  // Bonus: hover effect
  className="transition-transform duration-500 hover:scale-110"
/>
```

### **Above-the-fold images (Hero section):**
```tsx
<Image
  priority  // Load immediately
  quality={90}  // Higher quality for hero
  loading={undefined}  // Don't lazy load
/>
```

---

## 🎨 GPU Acceleration Classes

Add these to animated elements:

```tsx
className="transform-gpu will-change-transform"
```

**When to use:**
- Elements with `whileHover`, `whileTap`
- Cards with hover effects
- Any transformed elements
- Smooth scroll animations

---

## ⚡ Quick Wins cho từng section

### **HeroSection (Priority #1)**
```tsx
// Navbar animation
<motion.nav
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>

// Hero content
<motion.div
  variants={fadeInUp}
  initial="hidden"
  animate="visible"  // Not whileInView, vì above-fold
>

// Hero image - PRIORITY!
<Image
  priority  
  quality={90}
/>
```

### **StatsHeroSection**
```tsx
// Stats grid với fast stagger
<motion.div
  variants={fastStagger}
  initial="hidden"
  whileInView="visible"
  viewport={viewport}
>
  {stats.map((stat) => (
    <motion.div variants={staggerItem} />
  ))}
</motion.div>
```

### **CaseStudiesSlider**
```tsx
// Lazy load slider component
const Slider = dynamic(() => import('./Slider'), {
  loading: () => <div>Loading...</div>,
  ssr: false
});
```

### **VisualSolutionsSection**
```tsx
// Bento grid với nhiều images
<motion.div variants={gridContainer}>
  {images.map((img, i) => (
    <motion.div 
      key={i}
      variants={gridItem}
      className="transform-gpu"
    >
      <Image
        sizes="(max-width: 768px) 100vw, 33vw"
        quality={85}
        loading="lazy"
      />
    </motion.div>
  ))}
</motion.div>
```

---

## 🔥 Performance Tips

### **1. Viewport Config**
```tsx
// Import từ lib
import { viewport } from "@/app/lib/animations";

// Sử dụng thay vì inline
viewport={{ once: true, margin: "-50px" }}
```

### **2. Reuse Variants**
```tsx
// ❌ BAD - Inline variants
variants={{
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
}}

// ✅ GOOD - Imported variants
variants={fadeInUp}
```

### **3. GPU Acceleration**
```tsx
// Add to animated elements
className="transform-gpu will-change-transform"
```

### **4. Lazy Loading**
```tsx
// Images below fold
loading="lazy"

// Heavy components
const Heavy = dynamic(() => import('./Heavy'));
```

---

## 📊 Measuring Performance

### **Before Testing:**
```bash
npm run build
npm start
```

### **Tools:**
1. **Lighthouse** (Chrome DevTools)
   - Performance score
   - LCP, FID, CLS metrics

2. **React DevTools Profiler**
   - Component render time
   - Re-render count

3. **Network Tab**
   - Image load time
   - Bundle size

---

## ✅ Optimization Checklist

```
[✅] BenefitsSection - Optimized
[ ] HeroSection - Priority #1
[ ] StatsHeroSection
[ ] CaseStudiesSlider  
[ ] VisualSolutionsSection
[ ] ScalecraftComparisonSection
[ ] FeatureCardsSection
[ ] FAQSection
[ ] CTASection
[ ] CaseStudySection
[ ] StatsSection
```

---

## 🎯 Expected Results

**Sau khi tối ưu tất cả sections:**
- ⚡ LCP < 2.5s
- 🎨 Smooth 60 FPS animations
- 📦 Smaller bundle size
- 🚀 Faster page load
- ✨ Better user experience

---

## 💡 Pro Tips

1. **Test on mobile** - Performance matters most on mobile
2. **Use Chrome DevTools** - Performance tab để debug
3. **Measure before/after** - Document improvements
4. **Gradual optimization** - One section at a time
5. **Keep backups** - Git commit sau mỗi optimization

---

**Ready to optimize?** Bắt đầu với HeroSection (most critical)!
