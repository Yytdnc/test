---
name: Vibrant Social
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
  on-surface-variant: '#424754'
  inverse-surface: '#2e3132'
  inverse-on-surface: '#f0f1f2'
  outline: '#727785'
  outline-variant: '#c2c6d6'
  surface-tint: '#005ac2'
  primary: '#0058be'
  on-primary: '#ffffff'
  primary-container: '#2170e4'
  on-primary-container: '#fefcff'
  inverse-primary: '#adc6ff'
  secondary: '#4648d4'
  on-secondary: '#ffffff'
  secondary-container: '#6063ee'
  on-secondary-container: '#fffbff'
  tertiary: '#006947'
  on-tertiary: '#ffffff'
  tertiary-container: '#00855b'
  on-tertiary-container: '#f5fff6'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d8e2ff'
  primary-fixed-dim: '#adc6ff'
  on-primary-fixed: '#001a42'
  on-primary-fixed-variant: '#004395'
  secondary-fixed: '#e1e0ff'
  secondary-fixed-dim: '#c0c1ff'
  on-secondary-fixed: '#07006c'
  on-secondary-fixed-variant: '#2f2ebe'
  tertiary-fixed: '#6ffbbe'
  tertiary-fixed-dim: '#4edea3'
  on-tertiary-fixed: '#002113'
  on-tertiary-fixed-variant: '#005236'
  background: '#f8f9fa'
  on-background: '#191c1d'
  surface-variant: '#e1e3e4'
typography:
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 30px
    fontWeight: '700'
    lineHeight: 38px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Be Vietnam Pro
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Be Vietnam Pro
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Be Vietnam Pro
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Be Vietnam Pro
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Be Vietnam Pro
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.02em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  margin-mobile: 16px
  gutter-mobile: 12px
---

## Brand & Style

The design system is centered on fostering an energetic, trustworthy, and community-driven mobile experience. The brand personality is optimistic and approachable, striking a balance between modern professional reliability and social warmth. 

The design style follows a **Modern Corporate** aesthetic with a **Tactile** twist—utilizing soft elevation, high-contrast typography, and generous white space to create a sense of clarity and breathability. It prioritizes the "Human Element" by using large touch targets and rounded geometry to ensure the interface feels safe and inviting rather than clinical.

## Colors

This design system utilizes a primary "Friendly Blue" to anchor the user’s sense of trust and action. 

- **Primary (#3B82F6):** Used for core actions, active states, and brand presence.
- **Secondary (#6366F1):** An indigo accent used for community features like badges or special notifications to add vibrancy.
- **Surface Background (#F9FAFB):** A soft gray used for the application background to reduce eye strain and provide contrast for white cards.
- **Surface Card (#FFFFFF):** All primary content containers are pure white to ensure maximum legibility and depth separation.
- **Success (#10B981):** A vibrant green for positive feedback and growth-related community metrics.

## Typography

The typography strategy leverages **Plus Jakarta Sans** for headlines to provide a soft, optimistic, and geometric personality. For body copy and labels, **Be Vietnam Pro** is used to maintain high readability in dense social feeds and community discussions.

- **Headlines:** Use tight letter spacing and bold weights to establish a clear information hierarchy.
- **Body:** Use generous line heights (1.5x) to ensure long-form community posts are easy to scan.
- **Labels:** Used for metadata (timestamps, category tags), utilizing medium to semi-bold weights for visibility at smaller sizes.

## Layout & Spacing

This design system uses a **Fluid Grid** model optimized for mobile devices. The rhythm is built on a 4px baseline.

- **Safe Zones:** A standard 16px horizontal margin is applied to all screens.
- **Card Spacing:** Elements within cards use 12px or 16px padding depending on content density.
- **Vertical Rhythm:** Use 24px spacing between distinct content sections (e.g., between a featured post and a list of groups) and 16px between items in a feed.

## Elevation & Depth

Hierarchy is established through **Tonal Layers** and **Ambient Shadows**. 

- **Level 0 (Background):** The `#F9FAFB` surface acts as the canvas.
- **Level 1 (Cards):** Pure white surfaces with a subtle 1px border (`#E5E7EB`) and a soft, diffused shadow.
- **Shadow Profile:** Shadows should use the primary color tinted into the gray to keep them feeling "vibrant." Use a large blur radius (12px - 16px) with very low opacity (4-6%) to avoid a "dirty" look.
- **Level 2 (Active/Floating):** Floating Action Buttons (FABs) and active menus use a more pronounced shadow (10% opacity) to suggest interactability.

## Shapes

The design system adopts a **Rounded** aesthetic to reinforce its friendly and social nature.

- **Core Elements:** Buttons, input fields, and standard cards utilize a 16px (`rounded-lg`) corner radius.
- **Secondary Elements:** Selection chips and small avatars use 8px (`rounded-md`).
- **Interactive Triggers:** Buttons can optionally use a fully pill-shaped (32px+) radius for a more energetic, "bubbly" appearance in marketing contexts.

## Components

### Buttons
- **Primary:** Solid `#3B82F6` with white text. High-density padding (12px top/bottom).
- **Secondary:** Light blue tint background (`#EFF6FF`) with blue text.
- **Tertiary/Ghost:** No background, blue text, used for less urgent actions.

### Cards
- Standard containers for feed items. Always white with 16px rounded corners. Includes 16px internal padding. Avoid heavy borders; rely on the subtle ambient shadow for separation.

### Chips & Tags
- Used for community categories or interests. Use a 12px font size with a semi-bold weight. Backgrounds should be low-opacity versions of the primary or secondary colors.

### Input Fields
- 16px rounded corners. 1px border in `#D1D5DB`. On focus, the border transitions to Primary Blue with a subtle outer glow (2px spread).

### Community Lists
- Profile rows should feature 48px circular avatars. Use 12px spacing between the avatar and the text stack (Username + Status).

### Navigation
- A bottom navigation bar with a blur effect (Glassmorphism) over the background. Active states are indicated by a change in icon fill to the Primary Blue and a small dot indicator below.