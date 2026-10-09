Design System Rules

1. Component Principles

UI components must be stateless and reusable.

Follow Atomic Design hierarchy:

atoms/ → smallest elements (Button, Input, Text, Icon, etc.)

molecules/ → combinations of atoms (Card, Navbar sections)

organisms/ → larger UI sections (Navbar, Sidebar, Footer)

templates/ → page-level structures (AuthLayout, DashboardLayout)

Components should support variants, sizes, and disabled states.

2. Folder & Naming Conventions

Components: PascalCase (e.g., Button.tsx, Input.tsx)

Folders: kebab-case (e.g., user-profile/, login-form/)

Exports: all atoms exported from atoms/index.ts

Icons & Images: export explicitly from icons.tsx / images.tsx

3. Styling & CSS

Do not mix CSS per component; use Tailwind CSS utilities only.

Use design tokens for:

Spacing

Colors

Typography

Border-radius

Maintain theme awareness (light/dark mode) using tokens.

Avoid hardcoding styles; rely on theme.ts or Tailwind theme extensions.

4. Logic & Hooks

Reusable logic should live in hooks/ (e.g., useApiQuery, useApiMutation)

Feature-specific hooks go inside the corresponding module (e.g., auth/hooks/useLogin.ts)

5. Components & Assets Rules

Buttons, Inputs, Cards, Modals must be in /atoms or /molecules depending on size.

Lottie files in /assets/Lottie with meaningful names.

All icons should be SVG and optimized before use.

6. Best Practices

Keep Figma design tokens synced with code.

Components should be composable, accessible, and i18n-ready.

Avoid duplicate components; reuse wherever possible.

Variants over multiple similar components.

Always check responsive layouts (mobile, tablet, desktop).

7. References

Core hooks & services: src/hooks/, src/services/

Global utilities: src/utils/

Error & UI states: src/core/ui-state/

Animations & transitions: src/animations/
