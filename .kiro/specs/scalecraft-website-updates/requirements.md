# Requirements Document

## Introduction

This document outlines the requirements for updating the Scalecraft landing page website. The changes include footer modifications, above-the-fold improvements, mobile responsiveness adjustments, and content updates across multiple sections. The goal is to improve user experience, update company information, and enhance visual presentation across both mobile and desktop platforms.

## Glossary

- **Landing Page**: The main Scalecraft website homepage
- **Footer Component**: The bottom section of the website containing legal links, contact information, and company details
- **Above the Fold**: The portion of the webpage visible without scrolling
- **CTA (Call-to-Action)**: Interactive elements (buttons/links) that prompt user action
- **Logo Scroller**: A horizontal scrolling component displaying client/partner logos
- **Customer Box**: A UI component displaying customer ratings and testimonials
- **Responsive Design**: Website layout that adapts to different screen sizes (mobile/desktop)

## Requirements

### Requirement 1: Footer Legal Pages Management

**User Story:** As a website visitor, I want to access legal information pages (Impressum, Datenschutz, AGB) so that I can review company legal details and policies

#### Acceptance Criteria

1. THE Landing Page SHALL remove the existing "Rechtsdokumente" section from the Footer Component
2. THE Landing Page SHALL create three separate subpages: Impressum, Datenschutz, and AGB
3. THE Landing Page SHALL display company details "Công Ty TNHH DH Ventures Vietnam, Số 31 ngõ 5 Lê Trọng Tấn Phường La Khê, Quận Hà Đông, Hanoi, 12122, Vietnam" on each legal subpage
4. THE Landing Page SHALL provide navigation links to each legal subpage in the Footer Component

### Requirement 2: Footer Contact Button Update

**User Story:** As a website visitor, I want to easily schedule a meeting with Scalecraft so that I can discuss potential collaboration

#### Acceptance Criteria

1. THE Landing Page SHALL replace the "Kontakt" text link with a button element in the Footer Component
2. WHEN a user clicks any CTA button labeled "Kontakt" or "Termin Vereinbaren", THE Landing Page SHALL open the URL "https://calendly.com/dhventuresvietnam/30min" in a new browser window
3. THE Landing Page SHALL apply consistent button styling to all CTA elements across the website

### Requirement 3: Footer Branding Updates

**User Story:** As a website visitor, I want to see updated company branding and social media links so that I can connect with Scalecraft on professional networks

#### Acceptance Criteria

1. THE Landing Page SHALL display the text "Crafted with ❤️ since 2020 – empowering agencies and brands to scale smarter" underneath the logo in the Footer Component
2. THE Landing Page SHALL display LinkedIn logos for both "Scalecraft" and "Hoa" with clickable links in the Footer Component
3. THE Landing Page SHALL display the copyright text "Copyright ® 2025 Scalecraft. Alle Rechte Vorbehalten" in the Footer Component

### Requirement 4: Above the Fold Customer Box Enhancement

**User Story:** As a website visitor, I want to see prominent customer ratings so that I can quickly assess Scalecraft's reputation

#### Acceptance Criteria

1. THE Landing Page SHALL increase the visual size of the Customer Box component
2. THE Landing Page SHALL display the text "4.8 Sterne aus 35+ Kundenerfahrungen" in the Customer Box with correct German capitalization
3. THE Landing Page SHALL maintain readability of the Customer Box on both mobile and desktop viewports

### Requirement 5: Above the Fold Logo Scroller Adjustments

**User Story:** As a website visitor, I want to clearly see all partner logos so that I can identify Scalecraft's client portfolio

#### Acceptance Criteria

1. THE Landing Page SHALL increase the size of the "Snocksulting" logo within the Logo Scroller component
2. THE Landing Page SHALL decrease the vertical spacing between the CTA elements and the Logo Scroller component
3. THE Landing Page SHALL maintain visual balance and alignment of all logos in the Logo Scroller

### Requirement 6: Cases Section Mobile Enhancement

**User Story:** As a mobile user, I want to easily navigate case studies so that I can review Scalecraft's work examples

#### Acceptance Criteria

1. WHEN viewing the Cases section on mobile devices, THE Landing Page SHALL display the text "Case ansehen" underneath navigation arrows
2. WHEN viewing the Cases section on mobile devices, THE Landing Page SHALL increase the visual prominence of navigation arrows
3. THE Landing Page SHALL ensure touch targets for case navigation meet mobile usability standards

### Requirement 7: Zusammenarbeit Section Mobile Quote Enhancement

**User Story:** As a mobile user, I want to easily read important methodology quotes so that I can understand Scalecraft's approach

#### Acceptance Criteria

1. WHEN viewing the Zusammenarbeit section on mobile devices, THE Landing Page SHALL increase the font size of the "BAT Method" quote
2. THE Landing Page SHALL maintain quote readability without causing text overflow on mobile viewports

### Requirement 8: Desktop Responsiveness Optimization

**User Story:** As a desktop user with a half-screen browser window, I want the website to display correctly so that I can browse comfortably in split-screen mode

#### Acceptance Criteria

1. WHEN the browser window is resized to half-screen width on desktop, THE Landing Page SHALL adjust layout elements to maintain readability
2. WHEN the browser window is resized to half-screen width on desktop, THE Landing Page SHALL prevent horizontal scrolling
3. THE Landing Page SHALL apply responsive breakpoints appropriate for half-screen desktop viewing

### Requirement 9: Über Uns Section Content Updates

**User Story:** As a website visitor, I want to learn about Scalecraft's value proposition and history so that I can understand their expertise and growth

#### Acceptance Criteria

1. THE Landing Page SHALL display the text "Stärkeres Agenturprodukt. Zufriedenheit, die sich auf deine Kunden überträgt." in the Über Uns section
2. THE Landing Page SHALL display a timeline with the following milestones in the Über Uns section:
   - "10/2021 → Start als Freelancer"
   - "2022 → Erste Agenturkunden – Aufbau eines kleinen Teams (4 MA)"
   - "2023 → Zusammenarbeit mit weiteren Agenturen – Team wächst auf 10 MA"
   - "2024 → Skalierung & Prozessaufbau – 35 MA im Team"
   - "2025 → Fokus auf Optimierung, Automatisierung & Qualitätssicherung"
3. THE Landing Page SHALL format the timeline with clear visual hierarchy and readability on both mobile and desktop viewports
