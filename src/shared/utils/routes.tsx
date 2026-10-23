
export const Routes = [
  { id: 1, key: "item1", path: "/" },
  { id: 2, key: "item2", path: "/about" },
  { id: 3, key: "item3", path: "/faqs" },
  { id: 4, key: "item4", path: "/contact" },
  { id: 5, key: "item5", path: "/pricing" },
];

type AuthRoute = {
  path: string;
  i18nKey?: string;
  ctaPath?: string;
  sheetFirst?: boolean;
};

// Auth routes rendered by the `(auth)` layout (src/app/(auth)/layout.tsx).
// Entries WITH `i18nKey` render the two-panel layout (form + sheet);
// entries without it render as a single centered column.
// i18nKey -> translations under `auth.sheets.<i18nKey>` in src/messages/en.json & ar.json.
export const authSheetRoutes: AuthRoute[] = [
  { path: "/sign-in", i18nKey: "signIn", ctaPath: "/sign-up", sheetFirst: false },
  { path: "/sign-up", i18nKey: "signUp", ctaPath: "/sign-in", sheetFirst: true },
];

export const footerList1 = [
  { id: 1, key: "footerLists.footerList1.element1.key", path: "/" },
  { id: 2, key: "footerLists.footerList1.element2.key", path: "/templates" },
  { id: 3, key: "footerLists.footerList1.element3.key", path: "/pricing" },
  { id: 4, key: "footerLists.footerList1.element4.key", path: "/integrations" },
];

export const footerList2 = [
  { id: 1, key: "footerLists.footerList2.element1.key", path: "/help-center" },
  { id: 2, key: "footerLists.footerList2.element2.key", path: "/Terms-of-services" },
  { id: 3, key: "footerLists.footerList2.element3.key", path: "/privacy-policy" },
  { id: 4, key: "footerLists.footerList2.element4.key", path: "/refund-policy" },
  { id: 5, key: "footerLists.footerList2.element5.key", path: "/faqs" },
];
