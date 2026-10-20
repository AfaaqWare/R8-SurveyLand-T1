import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { cookies } from "next/headers";
import "./globals.css";
import AppProviders from "@/providers/AppProviders";
import { changeLocaleAction } from "@/i18n/locale";
import { NextIntlClientProvider } from "next-intl";
import LocaleSwitcher from "@/shared/components/atoms/LocalSwitcher";
import ThemeToggle from "@/shared/components/atoms/ThemeToggle";
import { getMessages } from "next-intl/server";
import Navbar from "@/shared/components/organisms/Navbar";
import Footer from "@/shared/components/organisms/Footer/Footer";

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

  const messages = await getMessages();

  return (
    <html lang={locale} dir={dir} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex min-h-screen flex-col antialiased`}
        suppressHydrationWarning
      >
        <NextIntlClientProvider messages={messages}>
          <AppProviders>
            <Navbar
              controls={
                <div className="ds-bg-form ds-border-sm flex items-center gap-1 rounded-full p-1">
                  <ThemeToggle />
                  <span aria-hidden="true" className="ds-border-color h-5 border-s" />
                  <LocaleSwitcher changeLocaleAction={changeLocaleAction} />
                </div>
              }
            />

            <main className="flex-1">{children}</main>

            <Footer />
          </AppProviders>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}