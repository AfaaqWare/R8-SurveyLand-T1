Onboarding Guide

This guide helps new developers understand the project structure, tooling, conventions, and workflow to start contributing efficiently.

1. Project Overview

Tech Stack: React.js + TypeScript + Tailwind CSS + React Query + Axios

Architecture:

Atomic Design → UI components (atoms, molecules, organisms, templates)

Feature-based (MCV) modules → self-contained features with API, hooks, components, utils, types

Centralized API client → Axios wrapper with caching, error handling, and token management

Project goals:

Maintainable, modular, scalable

Multi-language (i18n) & theme-aware (light/dark mode)

Team-friendly structure for up to 10 front-end developers

2. Getting Started
   Clone Repository
   git clone https://github.com/eslam-mohamedl/Structure_React_Typescript.git
   cd Structure_React_Typescript

Install Dependencies
npm install

# or

yarn install

Environment Setup

Copy .env.example → .env

Update values for API, tokens, and project config

Run Project
npm run dev

# or

yarn dev

App runs in hot reload mode at http://localhost:3000

Build & Production
npm run build
npm start

3. Project Structure Highlights
   src/
   ├─ assets/ # Images, icons, Lottie animations
   ├─ animations/ # Page & UI transitions
   ├─ app/ # App entry, routers, layouts
   ├─ components/ # Atomic Design components
   ├─ modules/ # Feature-based modules (auth, dashboard, landing)
   ├─ services/ # API client & token management
   ├─ utils/ # Global utilities
   ├─ hooks/ # Global hooks (useApiQuery, useApiMutation)
   ├─ core/ # Error boundaries, UI states
   ├─ guard/ # Route & role guards
   ├─ i18n/ # Internationalization
   ├─ styles/ # Global styles & design tokens
   └─ lib/ # Utility helpers

4. Code Conventions

Components: PascalCase (Button.tsx, Input.tsx)

Folders: kebab-case (login-form/, user-profile/)

Styling: Tailwind CSS + design tokens only (no separate CSS per component)

Atomic Design:

atoms/ → smallest elements

molecules/ → combinations of atoms

organisms/ → full UI sections

templates/ → layouts for pages

Modules: self-contained with api/, components/, hooks/, utils/, types/, pages/

5. Best Practices

Reuse atomic components; avoid duplication

Keep components stateless wherever possible

Use design tokens for colors, spacing, typography

Feature-specific logic goes in module hooks

Follow i18n and responsive design standards

All icons must be SVG & optimized

Use React Query for API calls (useApiQuery, useApiMutation)

6. Development Workflow

Branch naming: feature/<feature-name> or bugfix/<description>

Use PRs and assign reviewers

Follow code review checklist:

Component reusable and atomic

Uses design tokens

No hardcoded strings (use i18n)

API calls via services layer

Tasks tracked in ClickUp, follow Sprint backlog & statuses

Bugs must be separate tasks linked to original feature

7. Communication & Collaboration

UI/UX Team:

Figma handoff → developers use tokens & variants

Annotate interactions, animations, and responsive behavior

Front-End Team:

Implement atomic components first

Integrate modules feature by feature

Ask clarifying questions during handoff meetings

8. References

/docs/folder-structure.md → project structure

/docs/code-architecture.md → coding guidelines

/docs/ui-guidelines.md → UI components rules

/docs/figma-handoff.md → Figma handoff guide

/docs/design-system-rules.md → design system policies
