import React from "react";
import Link from "next/link";
import { Nunito } from "next/font/google";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
});

export default function Logo() {
  return (
    <Link href="/" className={`${nunito.className} ds-text-alt ds-title-md !font-bold`}>
      Survey<span className="ds-text-primary">Land</span>
    </Link>
  );
}
