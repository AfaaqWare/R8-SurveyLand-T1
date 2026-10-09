Figma → Dev Handoff

1. Inspect Design

Use Figma inspect to get spacing, color, border-radius, font sizes, and typography.

Verify responsive layouts and grids for each breakpoint.

2. Component Mapping

Follow naming convention mapping Figma → Front-End:

Figma Component Front-End Location
F_Button atoms/Button
F_Input atoms/Input
F_Card molecules/Card
F_Modal organisms/Modal
F_Icon atoms/Icon

Components should support variant, size, disabled props where applicable.

3. Design Tokens

Extract spacing, color, typography tokens manually before implementation.

Use tokens instead of hardcoding values.

Keep tokens consistent with Tailwind theme extensions.

4. Assets & Icons

Export all icons as SVG.

Optimize before use.

Import icons explicitly in components, do not rely on global imports.

5. Handoff Notes

Annotate interactions and states (hover, focus, disabled, loading).

Include Lottie/animations references if needed.

Add notes for dynamic/API-driven content.

Check i18n requirements (text length in multiple languages).

6. Best Practices

Keep Figma and code in sync; update devs if design changes.

Reuse components; do not duplicate unless necessary.

Follow Atomic Design hierarchy: atoms → molecules → organisms → layouts → pages.

Use design tokens for all styles; never hardcode spacing, color, or typography.
