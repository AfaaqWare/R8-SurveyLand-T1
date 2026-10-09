// Roles
export const ROLES = {
  ADMIN: "ADMIN",
  USER: "USER",
} as const;

// Regex
export const REGEX = {
  ONLY_NUMBERS: /^[0-9]+$/,
  USERNAME: /^[a-zA-Z0-9_]{3,16}$/,
} as const;

// UI / Default Settings
export const DEFAULTS = {
  LANGUAGE: "en",
  THEME: "light",
} as const;
