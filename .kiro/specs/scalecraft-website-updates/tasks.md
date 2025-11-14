# Implementation Plan

- [x] 1. Create legal subpages with company information



  - Create three new Next.js pages: Impressum, Datenschutz, and AGB
  - Include company details: "Công Ty TNHH DH Ventures Vietnam, Số 31 ngõ 5 Lê Trọng Tấn Phường La Khê, Quận Hà Đông, Hanoi, 12122, Vietnam"
  - Implement consistent layout with navbar and footer
  - Add responsive typography and spacing
  - _Requirements: 1.1, 1.2, 1.3, 1.4_

- [x] 2. Update Footer component structure and content




  - [x] 2.1 Remove "Rechtsdokumente" column from Footer


    - Delete the "Rechtsdokumente" column div from both mobile and desktop layouts
    - Adjust grid layout from 4 columns to 3 columns on desktop
    - _Requirements: 1.1_

  - [x] 2.2 Update footer text underneath logo

    - Replace existing description text with "Crafted with ❤️ since 2020 – empowering agencies and brands to scale smarter"
    - Apply to both mobile and desktop versions
    - _Requirements: 3.1_


  - [x] 2.3 Update LinkedIn icon labels and links

    - Update first LinkedIn icon title/alt to "Scalecraft Company LinkedIn"
    - Update second LinkedIn icon title/alt to "Hoa Nguyen - CEO LinkedIn"
    - Verify both links are correct
    - _Requirements: 3.2_

  - [x] 2.4 Update copyright text

    - Replace copyright text with "Copyright ® 2025 Scalecraft. Alle Rechte Vorbehalten"
    - _Requirements: 3.3_



  - [x] 2.5 Convert Kontakt column to button-based CTA

    - Replace text content in Kontakt column with a button component
    - Style button to match existing CTA button design
    - Wrap button in anchor tag linking to Calendly
    - _Requirements: 2.1_

  - [x] 2.6 Update Unternehmen column links to legal pages

    - Update Impressum link to point to `/impressum`
    - Update Datenschutz link to point to `/datenschutz`
    - Update AGB link to point to `/agb`
    - _Requirements: 1.4_
-

- [x] 3. Implement global CTA linking to Calendly




  - [x] 3.1 Update CTAButton component with Calendly link


    - Wrap button in anchor tag with href="https://calendly.com/dhventuresvietnam/30min"
    - Add target="_blank" and rel="noopener noreferrer" attributes
    - _Requirements: 2.2_

  - [x] 3.2 Update all "Termin Vereinbaren" CTAs across sections


    - Locate all CTA instances in HeroSection, CTASection, and other sections
    - Apply Calendly link with new window behavior
    - Ensure consistent styling across all CTAs
    - _Requirements: 2.2, 2.3_
-

- [x] 4. Enhance Customer Rating Badge component





  - [x] 4.1 Increase component size

    - Increase height from 50px to 60px on desktop
    - Increase height from 32px to 38px on mobile
    - Scale avatar sizes proportionally (28px to 34px desktop, 20px to 24px mobile)
    - _Requirements: 4.1_


  - [ ] 4.2 Update rating text with correct German capitalization
    - Replace text with "4.8 Sterne aus 35+ Kundenerfahrungen"
    - Ensure "Sterne" and "Kundenerfahrungen" are capitalized
    - Maintain existing text styling and color scheme
    - _Requirements: 4.2, 4.3_

- [x] 5. Adjust Logo Marquee component



  - [x] 5.1 Increase Snocksulting logo size


    - Identify Snocksulting logo (Frame 1707480419.png / imgImage6)
    - Increase size from 120px to 160px for width and height
    - Maintain aspect ratio and animation smoothness
    - _Requirements: 5.1, 5.3_

  - [x] 5.2 Reduce spacing between CTA and Logo Scroller


    - Locate HeroSection or parent component containing both elements
    - Decrease vertical gap/margin between CTA button and Logo Marquee by 20-30%
    - Test on both mobile and desktop viewports
    - _Requirements: 5.2_

- [x] 6. Enhance Case Study Section for mobile











  - [x] 6.1 Make navigation arrows visible on mobile





    - Remove `hidden md:flex` classes from navigation buttons
    - Add mobile-specific sizing (w-10 h-10 on mobile, w-14 h-14 on desktop)

    - Ensure buttons are positioned appropriately for mobile viewport
    - _Requirements: 6.1, 6.2_


  - [x] 6.2 Add "Case ansehen" text below arrows on mobile


    - Add text element below arrow icon in navigation buttons
    - Style with small font size (text-xs) and appropriate spacing
    - Only display on mobile viewports using responsive classes
    - _Requirements: 6.1_


  - [x] 6.3 Increase arrow prominence on mobile

    - Increase arrow icon stroke width or size
    - Enhance button background opacity or add subtle shadow
    - Ensure minimum touch target size of 44x44px
    - _Requirements: 6.2_

- [x] 7. Enhance mobile typography for BAT Method quote





  - Locate "BAT Method" quote in VisualSolutionsSection or related component
  - Increase font size on mobile viewport by 20-30%
  - Adjust line-height to maintain readability
  - Test on various mobile screen sizes (320px - 428px)
  - _Requirements: 7.1, 7.2_

- [x] 8. Implement desktop half-screen responsiveness





  - [x] 8.1 Add custom Tailwind breakpoint for half-screen desktop


    - Add 'md-lg': '896px' breakpoint to tailwind.config.js
    - _Requirements: 8.1, 8.2, 8.3_

  - [x] 8.2 Adjust layouts for 800-1024px viewport range


    - Review and adjust grid layouts in all major sections
    - Implement responsive spacing using clamp() or custom breakpoint classes
    - Scale down font sizes proportionally for medium viewports
    - _Requirements: 8.1, 8.2_

  - [x] 8.3 Test and fix horizontal scroll issues


    - Test all sections at 800px, 900px, 1000px widths
    - Fix any overflow issues in Footer, Hero, Case Study, and other sections
    - Ensure images scale properly without distortion
    - _Requirements: 8.2, 8.3_


- [x] 9. Update Über Uns section content




  - [x] 9.1 Update introductory text


    - Locate Über Uns section (likely in StatsSection or dedicated component)
    - Replace text with "Stärkeres Agenturprodukt. Zufriedenheit, die sich auf deine Kunden überträgt."
    - _Requirements: 9.1_

  - [x] 9.2 Implement company timeline


    - Create timeline component with milestone data
    - Add timeline items: "10/2021 → Start als Freelancer", "2022 → Erste Agenturkunden – Aufbau eines kleinen Teams (4 MA)", "2023 → Zusammenarbeit mit weiteren Agenturen – Team wächst auf 10 MA", "2024 → Skalierung & Prozessaufbau – 35 MA im Team", "2025 → Fokus auf Optimierung, Automatisierung & Qualitätssicherung"
    - Style with gradient accent colors and arrow indicators
    - Implement responsive layout (vertical on mobile, horizontal on desktop)
    - _Requirements: 9.2, 9.3_

- [x] 10. Final testing and validation




  - [x] 10.1 Perform responsive testing across all breakpoints


    - Test on mobile: 320px, 375px, 390px, 428px
    - Test on tablet: 768px, 834px, 1024px
    - Test on desktop: 1280px, 1440px, 1920px
    - Test half-screen desktop: 800px, 960px
    - _Requirements: All_



  - [ ] 10.2 Validate all functional requirements
    - Verify Footer "Rechtsdokumente" removed
    - Verify legal pages accessible with correct company info
    - Verify all CTAs link to Calendly and open in new tab
    - Verify customer box text and size updates
    - Verify Snocksulting logo size increase
    - Verify spacing reduction between CTA and scroller
    - Verify case study mobile navigation enhancements
    - Verify BAT Method quote size on mobile
    - Verify no horizontal scroll at any viewport
    - Verify Über Uns content updates


    - _Requirements: All_

  - [ ] 10.3 Accessibility and performance validation
    - Test keyboard navigation on all interactive elements
    - Verify ARIA labels on navigation buttons
    - Check color contrast ratios (WCAG AA)
    - Validate alt text on all images
    - Test on Chrome, Firefox, Safari, Edge
    - Check for layout shift (CLS) issues
    - _Requirements: All_
