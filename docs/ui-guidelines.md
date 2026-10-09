# UI Guidelines

This document defines **how UI is built and styled** in this project. It is mandatory for all team members and is part of the Design System contract.

---

## 1. Design Tokens (Single Source of Truth)

- All colors, spacing, typography, radius, shadows, and states **must come from CSS variables** defined in:

- `src/styles/variables.css`
- **Never hardcode values** like `#fff`, `16px`, `border-radius: 8px` inside components.

Examples:

- ✅ `ds-text-primary`
- ✅ `var(--color-primary)`
- ❌ `#108448`

Dark mode tokens are handled via:

- `:root.dark` variables override (NO duplicated styles).

---

## 2. Design System Utilities (`ds-*` convention)

- All custom utility classes use the **`ds-` prefix** to avoid collision with Tailwind utilities.
- This makes styles:
  - Semantic
  - Predictable
  - Safe from Tailwind overrides

Examples:

- `ds-bg-primary`
- `ds-text`
- `ds-border-sm`
- `ds-rounded-lg`
- `ds-shadow-md`

📍 Defined in:

- `src/styles/globals.css`

---

## 3. Tailwind Usage Rules

- Tailwind is used for:
  - Layout
  - Flex / Grid
  - Spacing composition
  - Responsive behavior

Rules:

- ❌ Do NOT redefine colors inside Tailwind config
- ❌ Do NOT use raw Tailwind colors like `bg-blue-500`
- ✅ Use `ds-*` utilities or CSS variables instead

---

## 4. Class Composition (cn / clsx)

- Always merge classes using the shared helper:
  - `src/lib/cn.ts`

Usage:

- `cn()` → preferred
- `clsx()` → allowed only when `cn` is not imported

Why:

- Prevent class conflicts
- Merge Tailwind classes correctly

---

## 5. Atomic Components Rules

All atomic components (Button, Input, Title, etc.) must:

- Support **variants** (visual style)
- Support **sizes** when applicable
- Accept `className` for extension
- Be **stateless & reusable**

Examples:

- `variant: primary | secondary | error | success`
- `size: sm | md | lg`

❌ No page logic inside atoms
❌ No routing / API logic inside atoms

---

## 6. Inputs & Forms

- Inputs handle variants internally (see `Input.tsx`)
- Validation styles are controlled via variants

Rules:

- ❌ Do not style inputs directly in pages
- ✅ Extend via props only

---

## 7. Typography Components

- Titles and text must use shared components (e.g. `Title.tsx`)
- Font families come from tokens:
  - `--font-sans`
  - `--font-heading`

Rules:

- ❌ No inline font-size definitions
- ❌ No duplicated heading styles

---

## 8. Icons System

Icons are centralized and **explicitly imported** from:

- `src/assets/icons/icons.tsx`

Rules:

- ✅ `import { Sun, Moon } from '@/assets/icons'`
- ❌ `import * as Icons from ...`

Why:

- Tree-shaking
- Predictable bundle size
- Clear ownership

---

## 9. Images Handling

- All images live in:
  - `src/assets/images/`

- Images are exported from `images.tsx`

Rules:

- ✅ Import images explicitly
- ❌ No random image imports inside components

Recommended formats:

- `.webp`
- Optimized `.png` only when needed

---

## 10. Dark Mode Strategy

- Dark mode is handled via:
  - `next-themes`
  - `.dark` class on `:root`

Rules:

- ❌ No separate dark components
- ❌ No duplicated styles
- ✅ Tokens switch automatically

---

## 11. What NOT To Do (Strict)

- ❌ Hardcode colors, spacing, font sizes
- ❌ Mix Tailwind colors with design tokens
- ❌ Add new utility classes without `ds-` prefix
- ❌ Duplicate styles across components

---

## 12. Review Checklist (Before PR)

- [ ] Uses design tokens only
- [ ] Uses `ds-*` utilities
- [ ] Uses `cn()` for class merging
- [ ] No hardcoded UI values
- [ ] Atomic rules respected

---

This file is part of the **official onboarding documentation** and must be followed by all team members.
