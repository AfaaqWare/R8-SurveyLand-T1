import en from "./en.json";
import ar from "./ar.json";

export const messagesMap = {
  en,
  ar,
};

export type Locale = keyof typeof messagesMap;
