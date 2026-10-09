import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { cookies } from "next/headers";
import "./globals.css";
import AppProviders from "@/providers/AppProviders";
import { changeLocaleAction } from "@/i18n/locale";
import { NextIntlClientProvider } from "next-intl";
import LocaleSwitcher from "@/shared/components/atoms/LocalSwitcher";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Survey Land",
  description: "Built by @AfaaqWare team",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const store = await cookies();
  const locale = store.get("locale")?.value || "en";
  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <html lang={locale} dir={dir} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <NextIntlClientProvider>
          <AppProviders>
            {children}

            <LocaleSwitcher changeLocaleAction={changeLocaleAction} />
          </AppProviders>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
