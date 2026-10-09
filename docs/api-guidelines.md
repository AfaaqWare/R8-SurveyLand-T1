# API & Data Layer Guidelines

This document explains **how API communication works in this project**  
and **how every team member must interact with the backend**.

This is a **mandatory reference** – violating these rules will cause PR rejection.

---

## 🎯 Goals of the API Layer

- Single, unified way to communicate with backend
- Centralized token & auth handling
- Unified error mapping & UI behavior
- Clean separation between:
  - API
  - Hooks
  - UI Components

---

## 🧱 API Architecture Overview

src/
├─ config/
│ └─ env.ts → Environment & API config
│
├─ services/
│ ├─ AxiosConfig.ts → Axios instance + interceptors
│ ├─ ApiClient.ts → Unified API wrapper
│ └─ tokenService.ts → Token storage logic
│
├─ hooks/
│ ├─ useApiQuery.ts
│ └─ useApiMutation.ts
│
├─ modules/
│ └─ feature/
│ ├─ api/ → Feature endpoints only
│ ├─ hooks/ → Feature React Query hooks
│ ├─ components/ → Forms & JSX
│ └─ types/ → Feature types

yaml

---

## ⚙️ Environment Configuration (`env.ts`)

Location:
src/config/env.ts

markdown

Responsibilities:

- API base URL
- Token keys
- App environment flags

Rules:

- ❌ Never hardcode API URLs
- ✅ Always read values from `ENV`

Example:

```ts
baseURL: ENV.API_URL
🚫 Axios Usage Rules (Critical)
❌ Forbidden
❌ Creating Axios instances

❌ Using Axios inside components

❌ Calling Axios directly in hooks or pages

❌ Handling tokens manually in features

✅ Required
✅ Use the single Axios instance from AxiosConfig.ts

✅ All requests go through ApiClient

✅ Token handling is automatic

🔌 AxiosConfig.ts – Axios Setup
Location:

bash
src/services/AxiosConfig.ts
Responsibilities:

Create Axios instance

Inject Authorization: Bearer <token>

Read token from cookies

Important Notes:

Token comes from js-cookie

Features never access cookies directly

Interceptors are the only place allowed to touch headers

🔐 Token Service (tokenService.ts)
Location:

bash
src/services/tokenService.ts
Responsibilities:

Store token securely in cookies

Read / remove token

Check auth state

Rules:

❌ Do NOT access cookies outside this file

❌ Do NOT duplicate token logic

✅ Always use TokenService

📦 ApiClient.ts – Single API Gateway
Location:

bash
src/services/ApiClient.ts
Responsibilities:

Wrap all HTTP methods

Return response.data only

Convert Axios errors → ApiError

Prevent leaking Axios details to UI

Available methods:

get<T>()

post<T>()

put<T>()

delete<T>()

Rules:

❌ Never use Axios directly

✅ Always call APIs via apiClient

🧩 Feature API Files
Location:

bash
src/modules/{feature}/api/
Rules:

One file per feature or domain

Contains endpoints only

No React logic

No state handling

Example:

ts
export const loginApi = (payload: LoginPayload) =>
  apiClient.post<LoginResponse>('/auth/login', payload);
🎣 React Query Strategy
Global Hooks
Location:

bash
src/hooks/
useApiQuery

useApiMutation

Responsibilities:

Unified error handling

Retry rules

Network error detection

Feature Hooks
Location:

bash
src/modules/{feature}/hooks/
Rules:

Wrap API calls

Contain feature business logic

Used by components only

🔑 Query Key Convention
bash
['feature', 'resource', id?]
Examples:

['auth', 'login']

['users', 'list']

['orders', 'details', orderId]

Rules:

❌ No random keys

✅ Predictable & consistent keys only

⚠️ Error Handling Rules
Error mapping happens in:

bash
src/core/errors/
Rules:

❌ Do NOT catch errors inside components

❌ Do NOT show raw backend messages

✅ UI uses ErrorState components

✅ Errors are typed as ApiError

Handled cases:

Network errors

4xx validation errors

401 / 403 authorization

404 not found

500 server errors

✅ API Checklist (Before PR)
 API call uses apiClient

 Endpoint inside correct feature

 Typed request & response

 Uses React Query hook

 Query key follows convention

 No Axios usage in UI

 No cookie or token access in feature

📌 Final Rule
Components never talk to the backend directly.
Components talk to hooks. Hooks talk to API. API talks to Axios.
```
