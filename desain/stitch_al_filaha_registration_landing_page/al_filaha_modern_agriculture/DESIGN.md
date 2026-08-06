---
name: Al-Filaha Modern Agriculture
colors:
  surface: '#f8f9fa'
  surface-dim: '#d9dadb'
  surface-bright: '#f8f9fa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f4f5'
  surface-container: '#edeeef'
  surface-container-high: '#e7e8e9'
  surface-container-highest: '#e1e3e4'
  on-surface: '#191c1d'
  on-surface-variant: '#404944'
  inverse-surface: '#2e3132'
  inverse-on-surface: '#f0f1f2'
  outline: '#707974'
  outline-variant: '#bfc9c3'
  surface-tint: '#2b6954'
  primary: '#003527'
  on-primary: '#ffffff'
  primary-container: '#064e3b'
  on-primary-container: '#80bea6'
  inverse-primary: '#95d3ba'
  secondary: '#904d00'
  on-secondary: '#ffffff'
  secondary-container: '#fe932c'
  on-secondary-container: '#663500'
  tertiary: '#003623'
  on-tertiary: '#ffffff'
  tertiary-container: '#004f34'
  on-tertiary-container: '#31c98f'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#b0f0d6'
  primary-fixed-dim: '#95d3ba'
  on-primary-fixed: '#002117'
  on-primary-fixed-variant: '#0b513d'
  secondary-fixed: '#ffdcc3'
  secondary-fixed-dim: '#ffb77d'
  on-secondary-fixed: '#2f1500'
  on-secondary-fixed-variant: '#6e3900'
  tertiary-fixed: '#6ffbbe'
  tertiary-fixed-dim: '#4edea3'
  on-tertiary-fixed: '#002113'
  on-tertiary-fixed-variant: '#005236'
  background: '#f8f9fa'
  on-background: '#191c1d'
  surface-variant: '#e1e3e4'
typography:
  display-lg:
    fontFamily: Lexend
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Lexend
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Lexend
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  title-md:
    fontFamily: Lexend
    fontSize: 20px
    fontWeight: '500'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  stack-sm: 12px
  stack-md: 24px
  stack-lg: 48px
---

## Brand & Style
The design system bridges traditional Islamic wisdom with modern agricultural science. The brand personality is grounded, scholarly, and growth-oriented, targeting farmers, agronomists, and students of thematic Islamic studies. 

The aesthetic is **Modern Corporate** with a **Tactile** twist. It utilizes a clean, card-based interface that feels systematic yet organic. Visual interest is driven by high-quality agricultural photography and subtle geometric overlays (Arabesque patterns) used at low opacity (3-5%) to provide texture without compromising legibility. The UI should evoke a sense of "Barakah" (blessing) through orderly layouts, generous whitespace, and a sophisticated, natural color palette.

## Colors
This design system uses a palette rooted in nature and prestige.
- **Primary (Emerald Green):** Used for brand identity, primary navigation, and heavy header sections to convey depth and stability.
- **Secondary (Gold):** Used sparingly as an accent for call-to-actions, highlights, and "premium" academic content.
- **Tertiary (Light Green):** Applied to success states, growth indicators, and interactive elements to signify life and progress.
- **Neutral (Off-White):** The primary background color to ensure a soft, low-strain reading experience for long-form "Kajian" (studies).

## Typography
The system employs a dual-font strategy:
- **Lexend** is used for headlines. Its unique geometric rhythm improves readability and provides a friendly, modern voice that aligns with the theme of "growth."
- **Inter** is used for all body text and UI labels. It provides a highly functional, neutral foundation for complex information and data-heavy agricultural reports.
- **Hierarchy:** Use tight tracking for large displays and increased line height (1.6x) for body text to facilitate scholarly reading.

## Layout & Spacing
The layout follows a **Fluid Grid** model with a maximum container width to prevent line lengths from becoming unreadable on ultra-wide screens.
- **Desktop:** 12-column grid with 24px gutters. Content is typically housed in cards spanning 4, 6, or 8 columns.
- **Mobile:** Single column with 16px side margins.
- **Rhythm:** Spacing follows a base-8 increment system. Vertical "stacking" should be generous (48px+) between major thematic sections to maintain an elegant, unhurried pace.

## Elevation & Depth
This design system utilizes **Tonal Layers** combined with **Ambient Shadows** to create a refined, professional atmosphere.
- **Surface Level 0:** The neutral Off-White background.
- **Surface Level 1 (Cards):** Pure white background with a very soft, diffused shadow (15% opacity Primary color) and a 1px border in a slightly darker neutral tint.
- **Interaction Depth:** On hover, cards should lift slightly using a more pronounced shadow. 
- **Overlays:** Use subtle background blurs (12px) for navigation bars to maintain context of the underlying agricultural imagery.

## Shapes
The shape language is **Rounded**, reflecting the organic nature of agriculture and the softness often found in Islamic calligraphy.
- **Cards & Inputs:** 0.5rem (8px) corner radius.
- **Buttons & Chips:** 1rem (16px) or fully pill-shaped to create a distinct interactive signature.
- **Imagery:** Photography should utilize the `rounded-lg` (16px) setting to appear integrated into the card-based layout.

## Components
- **Buttons:** Primary buttons use the Emerald Green background with white text. Secondary buttons use a Gold border with Gold text for emphasis without visual weight.
- **Cards:** The central component of the design. Cards feature a 1px soft border (#E5E7EB) and house "Kajian" modules, crop data, or theological insights.
- **Input Fields:** Minimalist design with a focus on clear labels (Lexend) and a 2px Emerald Green focus ring.
- **Chips/Tags:** Used for categorizing themes (e.g., #Fiqh, #Hydraulics). These should use light emerald or light gold backgrounds with high-contrast text.
- **Geometric Dividers:** Use subtle, horizontal Islamic geometric patterns to separate long sections of text instead of plain lines.
- **Progress Indicators:** Use the Light Green accent to show completion in learning modules or growth stages in agricultural tracking.