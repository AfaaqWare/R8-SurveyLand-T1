import Cookies from "js-cookie";
import { ENV } from "@/config/env";
const TOKEN_KEY = ENV.ACCESS_TOKEN_KEY || "access_token";

export const TokenService = {
  // حفظ التوكن
  setToken: (token: string, expiresDays = 1) => {
    Cookies.set(TOKEN_KEY, token, { expires: expiresDays, secure: true, sameSite: "strict" });
  },

  // قراءة التوكن
  getToken: () => {
    return Cookies.get(TOKEN_KEY);
  },

  // مسح التوكن
  removeToken: () => {
    Cookies.remove(TOKEN_KEY);
  },

  // تحقق إذا في توكن
  hasToken: () => {
    return !!Cookies.get(TOKEN_KEY);
  },
};
