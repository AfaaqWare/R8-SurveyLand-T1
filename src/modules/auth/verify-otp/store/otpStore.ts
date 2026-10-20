import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type OtpState = {
  email: string;
  setEmail: (email: string) => void;
  clear: () => void;
};

export const useOtpStore = create<OtpState>()(
  persist(
    (set) => ({
      email: "",
      setEmail: (email) => set({ email }),
      clear: () => set({ email: "" }),
    }),
    { name: "otp-email", storage: createJSONStorage(() => sessionStorage) }
  )
);