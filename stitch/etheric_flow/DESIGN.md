# Design System Specification: The Fluid Onboarding Experience

## 1. Overview & Creative North Star
**Creative North Star: "The Ethereal Architect"**

The design system moves away from the rigid, boxed-in layouts of traditional SaaS. Instead, it embraces a high-end editorial feel characterized by **Atmospheric Depth**. By leveraging intentional asymmetry, oversized typography, and a "borderless" philosophy, we create an onboarding experience that feels less like a form and more like a guided conversation.

We break the "template" look through:
- **Intentional Asymmetry:** Off-setting headlines or floating elements to create a dynamic sense of motion.
- **Micro-Layering:** Using color shifts rather than lines to define space.
- **High-Contrast Scale:** Dramatically different sizes between `display-lg` and `body-md` to signal authority and clarity.

---

## 2. Colors & Surface Philosophy
The palette is rooted in deep slates and electric purples, balanced by an expansive use of "Air" (Surface colors).

### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid borders to section content. Boundaries must be defined through background color shifts.
- To separate a sidebar from a main stage, use `surface` (#faf8ff) against `surface-container-low` (#f2f3ff).
- This creates a sophisticated, "app-as-a-canvas" feel rather than a grid of boxes.

### Surface Hierarchy & Nesting
Treat the UI as physical layers of fine paper and frosted glass. Use the following hierarchy for depth:
1.  **Base Layer:** `surface` (#faf8ff) - The background of the entire screen.
2.  **Section Layer:** `surface-container-low` (#f2f3ff) - Defining large functional areas.
3.  **Content Cards:** `surface-container-lowest` (#ffffff) - Highlighting the primary interactive container.
4.  **Interactive Elements:** `primary-container` (#4f46e4) - Used for focused selection states.

### The "Glass & Gradient" Rule
To elevate the "Future-Chat" identity, use Glassmorphism for floating overlays (e.g., chat bubbles or tooltips). Apply `surface-container-lowest` at 70% opacity with a `24px` backdrop blur. 

**Signature Texture:** Primary CTAs must use a linear gradient: `primary` (#3626cc) to `primary-container` (#4f46e4) at a 135-degree angle.

---

## 3. Typography
We utilize a dual-font strategy to balance architectural strength with functional readability.

*   **Display & Headlines (Manrope):** Bold and confident. The tight tracking and geometric builds of Manrope convey a "future-forward" tech aesthetic. Use `display-lg` for welcome screens to make a high-impact statement.
*   **Body & Labels (Inter):** Highly legible and neutral. Inter acts as the "functional voice," providing clarity in chat bubbles and input instructions.

**Hierarchy Note:** Always maintain a minimum 2:1 ratio between headline and body size to ensure an editorial, high-contrast look.

---

## 4. Elevation & Depth
Depth is achieved through **Tonal Layering** rather than traditional structural shadows.

*   **The Layering Principle:** Place a card of `surface-container-lowest` onto a background of `surface-dim` (#d2d9f4). This creates a "natural lift" that feels premium and integrated.
*   **Ambient Shadows:** For "floating" components (modals/popovers), use the following shadow spec:
    *   `Y: 24px, Blur: 48px, Color: rgba(19, 27, 46, 0.06)`. (Tinted with `on-surface`).
*   **The "Ghost Border" Fallback:** If a border is required for accessibility, use `outline-variant` (#c7c4d8) at **15% opacity**. Never use 100% opaque borders.

---

## 5. Components

### Large Rounded Cards
The signature of this system. 
- **Radius:** Use `lg` (2rem/32px) for main onboarding containers.
- **Styling:** No borders. Use `surface-container-lowest` and an Ambient Shadow.

### Primary CTAs (Buttons)
- **Shape:** `full` (pill-shaped) to contrast against the `lg` card radius.
- **Color:** Signature Gradient (`primary` to `primary-container`).
- **Typography:** `title-sm` (Inter), Uppercase with 0.05em letter spacing for an "action-oriented" feel.

### The Chat Interface Style
For the preview/demo chat elements:
- **User Bubbles:** `primary` background with `on-primary` text. Radius: `md` (1.5rem) except for the bottom-right corner (set to `sm`).
- **AI/System Bubbles:** `surface-container-highest` background. No borders.
- **Spacing:** Use `spacing-3` (1rem) between bubbles to maintain a "breathable" conversation.

### Integrated Video Containers
- **Radius:** `md` (1.5rem).
- **Treatment:** Should always be nested within a `surface-container-low` parent to create a "set-in" look.

### Input Fields
- **Background:** `surface-container-high` (#e2e7ff).
- **Active State:** Change background to `surface-container-lowest` and apply a 2px "Ghost Border" using `primary` at 30% opacity.

---

## 6. Do's and Don'ts

### Do
- **Do** use white space as a structural element. If in doubt, increase spacing by one level on the scale.
- **Do** overlap elements slightly (e.g., a chat bubble overlapping a video container) to create a sense of three-dimensional space.
- **Do** use `manrope` for numbers and data visualizations to maintain the premium "Future-Chat" brand.

### Don't
- **Don't** use dividers or horizontal rules. Use `spacing-8` or background color shifts to separate content blocks.
- **Don't** use pure black (#000000) for text. Always use `on-surface` (#131b2e) to maintain the sophisticated slate-to-charcoal aesthetic.
- **Don't** use standard "Material" shadows. Stick to the diffuse, low-opacity Ambient Shadows specified in Section 4.