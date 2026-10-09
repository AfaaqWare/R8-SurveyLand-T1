🤝 Contributing Guide

This document defines **mandatory rules** for contributing to this project.
Any PR that violates these rules will be **rejected without review**.

---

## 🚀 Before You Start Coding

1. Read **all** documents in `/docs`:
   - `/docs/folder-structure.md`
   - `/docs/code-architecture.md`
   - `/docs/design-system.md`
   - `/docs/checklist.md`

2. Make sure you understand:
   - Atomic Design (Atoms / Molecules / Organisms / Templates)
   - Feature-based (MCV) architecture
   - Route Guards & Auth flow
   - Global error & loading handling

---

## 🧱 Project Architecture Rules (STRICT)

### 🔒 Import Rules

- ❌ **NO relative parent imports**
  ```ts
  ❌ ../../../components/Button
  ✅ Use path aliases only
  ```

ts
Copy code
import { Button } from "@components/atoms/Button";
❌ A feature must NOT import another feature

ts
Copy code
❌ auth → dashboard

---

🧩 Component Rules (Atomic Design)
Atoms
Small, reusable, no business logic

No API calls

No feature-specific logic

Example:

Button

Input

Text

Icon

ThemeToggle

Molecules
Combine atoms

Handle simple UI logic only

❌ No API calls

❌ No routing logic

Organisms
Section-level UI

Can accept data via props

❌ No direct API calls

Templates
Page-level layout only

Handle structure, not logic

Used only inside pages

---

🧠 Feature (Module) Rules
Each feature MUST be self-contained:

markdown
Copy code
modules/
└─ auth/
├─ api/
├─ components/
├─ hooks/
├─ guards/
├─ utils/
├─ types/
Rules:
❌ Feature cannot access another feature

❌ Feature cannot access global config directly

✅ Feature uses:

services/apiClient

hooks/useApiQuery

hooks/useApiMutation

🌐 API & React Query Rules
❌ No direct axios usage inside components

❌ No fetch inside JSX

✅ All requests go through:

services/apiClient.ts

Feature api/ files

React Query hooks:

Must live inside modules/\*/hooks

Must use centralized hooks

🔐 Authentication & Guards
❌ Do not handle auth logic inside components

✅ Use:

AuthInitializer

ProtectedRoute

Feature Guards (OTPGuard, ResetGuard)

Tokens:

Managed only by tokenService

Never stored manually

🚨 Error & Loading Handling
❌ No inline loading spinners in pages

❌ No try/catch inside components

✅ Use:

core/ui-state/LoadingState

core/ui-state/ErrorState

core/errors/errorMapper

🎨 Styling Rules
Tailwind only (no inline styles)

No magic values

Use design tokens from:

styles/variables.css

utils/theme.ts

🌍 i18n Rules

❌ No hardcoded text

✅ All text must use i18n keys

Support RTL / LTR layouts

Components must be direction-safe

🧹 Code Quality Rules

ESLint errors = ❌ PR rejected

Prettier formatting is mandatory

Remove unused imports & variables

Use TypeScript types strictly (no any)
