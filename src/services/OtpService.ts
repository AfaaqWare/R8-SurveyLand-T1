import Cookies from "js-cookie";

export const OtpService = {
  setEmail: (email: string) => Cookies.set("otp_email", email, { sameSite: "strict" }),
  getEmail: () => Cookies.get("otp_email"),

  setOtp: (otp: string) => Cookies.set("otp", otp, { expires: 1 / 288, sameSite: "strict" }),
  getOtp: () => Cookies.get("otp"),
  clear: () => {
    Cookies.remove("otp_email");
    Cookies.remove("otp");
  },
};
