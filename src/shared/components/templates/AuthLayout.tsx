import type { ReactNode } from "react";
import AuthHeader from "./AuthHeader";
import AuthPanel from "./AuthPanel";
import AuthSheet, { type AuthSheetProps } from "./AuthSheet";

export interface AuthLayoutProps {
  children: ReactNode;
  /** When provided, renders the two-panel row; when omitted, renders a single centered column. */
  sheet?: AuthSheetProps;
  /** Places the sheet before the form in DOM order (Create Account). Defaults to form-first (Sign In). */
  sheetFirst?: boolean;
  showHeaderCta?: boolean;
}

// How to use this layout:
//
// Auth pages don't import this component directly — the `(auth)` route-group layout
// (src/app/(auth)/layout.tsx) wraps every page in it and picks the mode per route:
//   - `/sign-in`  → two-panel, form panel first, sheet second.
//   - `/sign-up`  → two-panel, sheet first, form panel second (`sheetFirst`).
//   - every other auth route → single centered column (no sheet).
//
// To compose it manually, the props are:
//   <AuthLayout sheet={{ title, subtitle, ctaLabel, ctaHref }}>
//     ...form panel content...
//   </AuthLayout>
//   - Add `sheetFirst` to place the sheet before the form in DOM order.
//   - Omit `sheet` to render a single column, centered horizontally and vertically.
//   - Set `showHeaderCta={false}` to hide the "Apply Now" link.
//
// Do NOT pass a literal "left"/"right" — the sheet side comes from DOM order only,
// and `dir="rtl"` mirrors the flex row natively. Panels stack on mobile and switch
// to a side-by-side row from the `md` breakpoint up.
export default function AuthLayout({
  children,
  sheet,
  sheetFirst = false,
  showHeaderCta = true,
}: AuthLayoutProps) {
  return (
    <div className="ds-bg flex min-h-screen flex-col">
      <AuthHeader showCta={showHeaderCta} />
      {sheet ? (
        // Two-panel mode: a flex row whose order follows `sheetFirst`.
        // The main axis follows the inline direction, so `dir="rtl"` mirrors it natively.
        <main className="flex flex-1">
          <div className="flex w-full flex-col md:flex-row">
            {sheetFirst ? <AuthSheet {...sheet} /> : <AuthPanel>{children}</AuthPanel>}
            {sheetFirst ? <AuthPanel>{children}</AuthPanel> : <AuthSheet {...sheet} />}
          </div>
        </main>
      ) : (
        // Single-centered-column mode: used when there is no sheet.
        <main className="flex flex-1 items-center justify-center px-6 py-16">
          <div className="w-full max-w-md">{children}</div>
        </main>
      )}
    </div>
  );
}
