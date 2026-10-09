//  Validation Rules
export const isEmail = (value: string): boolean => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

export const isStrongPassword = (value: string): boolean =>
  /^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{8,}$/.test(value);

export const isPhoneNumber = (value: string): boolean => /^(\+?\d{1,3}[- ]?)?\d{10}$/.test(value);

//  Generic Required Check
export const isRequired = (value: string | null | undefined): boolean =>
  Boolean(value && value.trim().length > 0);

//  URL Validation
export const isValidURL = (value: string): boolean => {
  try {
    new URL(value);
    return true;
  } catch {
    return false;
  }
};

export const isValidFullName = (name: string) => {
  const parts = name.trim().split(/\s+/);

  return parts.length >= 2 && parts.every(part => /^[\p{L}]+$/u.test(part));
};
