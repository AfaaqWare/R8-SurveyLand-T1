"use client";
import { ReactNode } from "react";
import ThemeProvider from "./ThemeProvider";
import ReactQueryProvider from "@/providers/ReactQueryProvider";

interface Props {
  children: ReactNode;
}

export default function AppProviders({ children }: Props) {
  return (
    <ReactQueryProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </ReactQueryProvider>
  );
}
