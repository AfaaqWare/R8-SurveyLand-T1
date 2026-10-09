📝 SurveyLand Frontend

A modern and scalable frontend application for SurveyLand, a platform that enables users to create surveys, manage questions, publish survey links, collect responses, and analyze results efficiently.

Built with Next.js, TypeScript, and a modular feature-based architecture, the application focuses on performance, maintainability, accessibility, and a smooth user experience

---

## Installation

1. Clone the repository:
   ```sh
   https://github.com/AfaaqWare/Level1-Round6-Team6
   cd Level1-Round6-Team6
   ```
2. Install dependencies:
   ```sh
   npm install
   # or
   yarn install
   ```
3. Configure environment variables:
   - Copy `.env.example` to `.env` and update values as needed.

### Running the App

- Development mode (with hot reload):
  ```sh
  npm run dev
  ```
- Production build:
  ```sh
  npm run build
  npm start
  ```

---

## ✨ Features

- Authentication
- Login & Registration
- Email Verification (OTP)
- Forgot Password
- Reset Password
- JWT Authentication
- Role-Based Access Control

## Survey Management

- Create Surveys
- Update Surveys
- Delete Surveys
- Publish Surveys
- Manage Survey Status
- Generate Shareable Survey Links

## Question Management

- Add Questions
- Edit Questions
- Delete Questions
- Support Multiple Question Typesveys

## Response Management

- Submit Survey Responses
- View Survey Responses
- Track Survey Participation

## Response Management

- Submit Survey Responses
- View Survey Responses
- Track Survey Participation

## User Profile

- Update Profile Information
- Change Password
- Upload Profile Image

## User Experience

- Multi-language Support (i18n)
- Responsive Design
- Dark / Light Theme
- Form Validation
- Loading, Error, and Empty States

## Architecture

- Feature-Based Modular Structure
- Reusable UI Components
- React Query Data Fetching
- Axios API Layer
- Centralized Authentication Management

---

## 🧩 Tech Stack

| Category    | Technologies                                             |
| ----------- | -------------------------------------------------------- |
| Framework   | **Next.js (App Router)**                                 |
| Language    | **TypeScript**                                           |
| Styling     | **Tailwind CSS**, **class-variance-authority**, **clsx** |
| Animations  | **GSAP**                                                 |
| API & State | **React Query**, **Axios**, **Zustand**                  |
| Forms       | **React Hook Form**, **Zod**                             |
| Icons       | **Lucide React**, **iconify**, **Tabler Icons**          |
| i18n        | **next-intl** , **LanguageDetector**                     |
| Auth        | **Custom Auth API (JWT tokens)**                         |
| Utilities   | **js-cookie**, **tailwind-merge**                        |

---

## 🎯 Project Goals

SurveyLand aims to simplify the process of:

- Creating surveys
- Publishing surveys
- Collecting responses
- Managing participants
- Analyzing survey data

through an intuitive and scalable user interface.

---

# 👥 Roles

## User

Can:

- Create surveys
- Manage questions
- Share survey links
- View survey responses
- Update personal profile

## Admin

Can:

- Manage all users
- Update user roles
- Remove users
- Monitor platform activity

---

## 📌 Survey Lifecycle

Draft → Published → Closed

- Draft: Survey is being prepared.
- Published: Survey is available for responses.
- Closed: Survey no longer accepts responses.

## 🤝 Contributing

- Pull requests are welcome!
- Before submitting, ensure:
- Code passes linting and build checks.
- Follows project structure and naming conventions.
- Uses existing design system components when possible.
- For major changes, open an issue first to discuss the update.

---

## 🧱 Folder Structure

```sh

src/
├─assets /                                 # Static assets
│  ├─ images/
│  │  └─ images.tsx                        # import and export all images in this file
│  ├─ Lottie/                              # all images lottie files
│  │  └─ loading.json
│  │  └─ No-Data.json
│  │  └─ network.json
│  │  └─ error.json
│  └─ icons/
│     └─ icons.tsx                          # import and export all icons in this file

├─animations/
│ ├─ Reveal.ts
│ ├─ Floating.ts

├─app/
│ ├─ [locale]        ├─ (auth)
│ ├─ not-found.tsx   ├─ (client)
│                    ├─ (guest)
│                    ├─ (protected)
│ ├─ globals.css                    # Global styles take design system and convert to utilites

├─ config/
│  ├─ env.ts                        # PROJECT INFO ,  API CONFIG , AUTH CONFIG
│  └─ .env                           # some env.ts but for esay imports

├─ core/
│  ├─ ui-state ├─ EmptyState.tsx
│              ├─ ErrorState.tsx
│              ├─ LoadingState.tsx
│              ├─ NetworkState.tsx
│              ├─ NotFoundState.tsx
│
├─ seo         ├─ seo.config.ts
│              ├─ Seo.tsx
│              ├─ seo.types.ts
│              ├─ useSeo.ts

├─ guard/
│  ├─ AuthInitializer.tsx
│  ├─ ProtectedRoute.tsx

├─ shared/
├─ components/                             # Reusable UI Components (Atomic Design)
│           ├─ atoms/                               # Smallest elements
│                 ├─ navbar/
│                 ├─ NavIconButton.tsx
│                 ├─ NavLink.tsx
│                 ├─ NavLogo.tsx
│                 ├─ Button.tsx
│                 ├─ CopyRight.tsx
│                 ├─ HighLightWord.tsx
│                 ├─ Images.tsx
│                 ├─ Input.tsx
│                 ├─ LangToggle.tsx
│                 ├─ Link.tsx
│                 ├─ Logo.tsx
│                 ├─ SeperatorLink.tsx
│                 ├─ SoicalIcon.tsx
│                 ├─ Text.tsx
│                 ├─ ThemeToggle.tsx
│                 └─ Title.tsx
│           ├─ molecules/                           # Combination of atoms
│                 ├─ Navbar/
│                 ├─ DesktopNavActions.tsx
│                 ├─ DesktopNavLinks.tsx
│                 ├─ MobileNavHeader.tsx
│                 ├─ MobileNavLinks.tsx
│                 └─ NavDropdown.tsx
│           ├─ organisms/                           # Larger sections
│                 ├─ Navbar.tsx
│                 ├─ Sidebar.tsx
│                 └─ Footer.tsx
│           ├─ templates/                           # Page-level structures
│                 ├─ AuthLayout.tsx
│                 └─ DashboardLayout.tsx
│                 └─ LandingLayout.tsx
│  ├─ hooks/
│        ├─ useApiQuery.ts           # hook Query
│        ├─ useApiMutation.ts        # hook Mutation
|        ├─ index.ts
│  ├─ types/
│        ├─ api.d.ts        # global types in project
│        ├─ global.d.ts
│
│  ├─ utils/                                   # Global utilities
│        ├─ constants.ts
│        ├─ index.tx
│        ├─ routes.tsx                         # routes in navbar

├─ i18n/
│  ├─ index.ts

├─ lib/
│   ├─ cn.ts  # incude tailwind-merge ,  clsx, type ClassValue

├─ styles/
│  └─ variables.css                         # file for design system form figma

│
├─ modules/                               # Feature-based modules (MCV)
│  ├─ auth/
│  │  ├─ api/           # EndPoint
│  │  │  ├─ loginApi.ts
│  │  │  └─ registerApi.ts
│  │  ├─ components/    # JSX
│  │  │  ├─ LoginForm.tsx
│  │  │  └─ RegisterForm.tsx
│  │  ├─ hooks/                 # Hook React Query ( useApiMutation.ts , useApiQuery.ts )
│  │  │  └─ uselogin.tsx
│  │  │  └─ useRegister.tsx
│  │  │
│  │  ├─ guards/
│  │  │  ├─ DoneGuard.tsx
│  │  │  ├─ OTPGuard.tsx
│  │  │  ├─ ResetGuard.tsx
│  │  │  ├─ useResetFlow.ts
│  │  │
│  │  ├─ utils/
│  │  │  └─ authValidators.ts
│  │  ├─ types/            # types for features
│  │
│  ├─ Landing/              # landing pages
│  └─ Dashboard/            # dashboard pages

├─ services/                                # API clients layer
│  ├─ axiosConfig.ts                        # inculde axios , tokens
│  ├─ apiClient.ts                          # inculde method ( get , post ) and Errors Handling
│  ├─ tokenService.ts                       # inculde tokens

├─ stories/

```

---

## 📄 License

This project is licensed under the ISC License.
