Code Architecture

This document defines the code structure, conventions, and best practices for the project, ensuring maintainable, modular, and scalable React + TypeScript applications.

1. Project Principles

Feature-based (MCV) modules: Each feature contains its own API, components, hooks, utils, and types.

Atomic Design Components: Reusable UI components are organized into atoms, molecules, organisms, templates.

Centralized API client: All API calls go through a single client with error handling, caching, and token management.

Strict separation of concerns: UI, logic, data, and services are clearly separated.

Theme & i18n ready: Components support dark/light mode and multi-language text.

2. Folder Structure
   src/
   ├─ assets/ # Static resources: images, icons, Lottie animations
   ├─ animations/ # Page & UI animation helpers
   ├─ app/ # App entry, routers, layouts
   ├─ components/ # Atomic Design components
   │ ├─ atoms/
   │ ├─ molecules/
   │ ├─ organisms/
   │ ├─ templates/
   ├─ modules/ # Feature-based modules (MCV)
   │ ├─ auth/
   │ │ ├─ api/ # Endpoints
   │ │ ├─ components/ # JSX components
   │ │ ├─ hooks/ # Feature hooks
   │ │ ├─ utils/ # Validators, helpers
   │ │ ├─ types/ # TypeScript types
   ├─ services/ # API client layer & token management
   ├─ utils/ # Global reusable utilities
   ├─ styles/ # Global styles & design tokens
   ├─ config/ # Environment & project configs
   ├─ hooks/ # Global hooks (e.g., useApiQuery, useApiMutation)
   ├─ core/ # Error boundaries, UI states, error classes
   ├─ guard/ # Route guards, role-based access
   ├─ i18n/ # Internationalization
   ├─ lib/ # Utility helpers (clsx, tailwind-merge)

3. Components (Atomic Design)

Atoms: smallest reusable elements (Button, Input, Text, Icon)

Molecules: combination of atoms (Cards, Navbar sections)

Organisms: full UI sections (Navbar, Sidebar, Footer)

Templates: page layouts (AuthLayout, DashboardLayout)

Rules:

Stateless whenever possible

Theme-aware (dark/light)

i18n ready

Variant and size props for flexibility

4. Modules (Feature-based / MCV)

Each module is self-contained with:

api/ → API endpoints

components/ → JSX components

hooks/ → feature-specific hooks

utils/ → helpers, validators

types/ → TypeScript types

pages/ → page components using templates

Example: auth/ handles login, register, OTP, forget/reset flows

5. Services

Central API client (apiClient.ts) handles:

GET, POST, PUT, DELETE

Error normalization

Caching & retry

Token injection & refresh

axiosConfig.ts: Axios wrapper with interceptors

tokenService.ts: secure storage & refresh strategy

6. Hooks

Global hooks in hooks/:

useApiQuery → GET requests with caching

useApiMutation → POST/PUT/DELETE with status management

Feature-specific hooks inside modules:

e.g., useLogin, useRegister, useResetFlow

Hooks should be pure and reusable

7. Utilities

Global helpers in utils/:

validators.ts → form & data validation

constants.ts → app-wide constants

routes.tsx → navigation routes

storage.ts → localStorage/session helpers

Animations in animations/ (fade, slide, scale, stagger)

lib/cn.ts → class merging utility (clsx + tailwind-merge)

8. Guards

Route & access control in guard/:

AuthInitializer.tsx → initialize auth on app load

ProtectedRoute.tsx → authenticated route protection

RoleGuard.tsx → role-based access control

9. Core & Error Handling

Error boundaries:

GlobalErrorBoundary.tsx, QueryErrorBoundary.tsx, ErrorFallback.tsx

Error classes:

ApiError.ts, AppError.ts, ValidationError.ts, errorMapper.ts

UI state components:

EmptyState.tsx, LoadingState.tsx, ErrorState.tsx, NetworkState.tsx, NotFoundState.tsx

10. Best Practices

Keep features isolated and reusable.

Use design tokens from Figma; never hardcode styles.

Reuse atomic components; avoid duplication.

Keep components stateless wherever possible.

Ensure i18n & responsive design from start.

Maintain consistent naming (PascalCase components, kebab-case folders)

Always document dynamic behavior and API dependencies in modules.
