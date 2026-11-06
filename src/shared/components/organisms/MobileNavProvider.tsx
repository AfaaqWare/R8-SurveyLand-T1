"use client";

import {
  createContext,
  useCallback,
  useContext,
  useId,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type MobileNavContextValue = {
  isOpen: boolean;
  sidebarId: string;
  open: () => void;
  close: () => void;
  toggle: () => void;
};

const MobileNavContext = createContext<MobileNavContextValue | null>(null);

type Props = {
  children: ReactNode;
};

/**
 * Shares the dashboard mobile drawer state between the Navbar (trigger) and
 * the MobileSidebar (drawer), so both public and dashboard navigation can be
 * reached from a single hamburger.
 */
export function MobileNavProvider({ children }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarId = useId();

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  const toggle = useCallback(() => setIsOpen(value => !value), []);

  const value = useMemo(
    () => ({ isOpen, sidebarId, open, close, toggle }),
    [isOpen, sidebarId, open, close, toggle]
  );

  return <MobileNavContext.Provider value={value}>{children}</MobileNavContext.Provider>;
}

/** Returns the drawer state when inside a dashboard layout, or null elsewhere. */
export function useMobileNavOptional() {
  return useContext(MobileNavContext);
}

export function useMobileNav() {
  const context = useContext(MobileNavContext);

  if (!context) {
    throw new Error("useMobileNav must be used within a MobileNavProvider");
  }

  return context;
}
