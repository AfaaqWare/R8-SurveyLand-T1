# Folder Structure Guide

This document explains the **official, final project structure**.
This structure is **immutable** and must be followed by all team members.

---

## 🎯 Structure Philosophy

This project follows:

- **Clean Architecture** (separation of concerns)
- **Feature-based modularity**
- **Atomic Design** for UI
- **Scalability for large teams & products**

Goals:

- Predictable navigation
- Easy onboarding
- Clear ownership per feature
- Zero folder chaos

---

## 📁 High-Level Structure

```
src/
├─ app/                # Next.js App Router (pages & layouts)
├─ modules/            # Feature-based business logic
├─ components/         # Reusable Atomic UI components
├─ services/           # API & HTTP layer
├─ core/               # Core logic (errors, guards, helpers)
├─ hooks/              # Shared hooks
├─ providers/          # App-wide providers
├─ config/             # Environment & app config
├─ styles/             # Design system & global styles
├─ assets/             # Icons, images, static assets
├─ lib/                # Utilities (cn, helpers)
├─ i18n/               # Localization setup
└─ messages/           # Translation files
```

---

## 📦 `app/` – Routing Layer

```
app/
├─ [locale]/
│  ├─ layout.tsx
│  ├─ page.tsx
│  ├─ auth/
│  ├─ dashboard/
│  └─ public/
```

Rules:

- **No business logic here**
- Only composition, layouts, and page-level wiring
- Data comes from `modules/` hooks

---

## 🧩 `modules/` – Feature Layer (Most Important)

Each feature is **fully isolated**.

```
modules/
└─ feature-name/
   ├─ api/            # Feature endpoints only
   │  └─ featureApi.ts
   ├─ hooks/          # React Query hooks
   ├─ components/     # Feature-specific UI
   ├─ types/          # DTOs & feature types
   └─ index.ts
```

Rules:

- No cross-feature imports
- Feature owns its API, hooks, and types
- UI here is **not reusable globally**

---

## 🧱 `components/` – Atomic Design System

```
components/
├─ atoms/
├─ molecules/
├─ organisms/
└─ templates/
```

Rules:

- Components here are **reusable across features**
- Styling uses `ds-*` utilities only
- Support: `variant`, `size`, `disabled` where applicable

---

## 🌐 `services/` – API Layer

```
services/
├─ ApiClient.ts
├─ AxiosConfig.ts
└─ tokenService.ts
```

Rules:

- Single Axios instance only
- No direct Axios usage outside this folder
- Error handling mapped to `ApiError`

---

## 🧠 `core/` – Core Logic

```
core/
├─ errors/
│  ├─ ApiError.ts
│  └─ errorMapper.ts
├─ guards/
└─ constants/
```

Rules:

- App-wide logic only
- No UI or feature code

---

## 🪝 `hooks/` – Shared Hooks

```
hooks/
├─ useApiQuery.ts
├─ useApiMutation.ts
```

Rules:

- Generic hooks only
- Feature hooks belong to `modules/feature/hooks`

---

## ⚙️ `config/` – Configuration

```
config/
└─ env.ts
```

Rules:

- Environment keys only
- No logic
- Never hardcode values elsewhere

---

## 🎨 `styles/` – Design System

```
styles/
├─ variables.css   # Design tokens
└─ globals.css     # Base styles & utilities
```

Rules:

- All colors, spacing, fonts come from tokens
- `ds-*` prefix is mandatory
- Dark mode via `.dark` class

---

## 🖼 `assets/` – Static Assets

```
assets/
├─ icons/
│  └─ icons.tsx
└─ images/
   └─ images.tsx
```

Rules:

- Icons imported explicitly
- No `import * as Icons`
- Images optimized & centralized

---

## 🧰 `lib/` – Utilities

```
lib/
└─ cn.ts
```

Rules:

- Shared helpers only
- No React or UI here

---

## 🌍 `i18n/` & `messages/`

```
i18n/
└─ routing.ts

messages/
├─ en.json
└─ ar.json
```

Rules:

- Locale-aware routing
- No hardcoded text in components

---

## 🚨 Golden Rules (Must Read)

❌ No random folders
❌ No cross-feature coupling
❌ No hardcoded styles or colors
❌ No Axios outside services

✅ Follow structure strictly
✅ Ask before adding new folders

---

## ✅ Final Note

This structure is **final and enforced**.

If something feels missing:

> The solution is **inside the structure**, not outside it.
