import Swal from "sweetalert2";

type ToastType = "success" | "error" | "warning" | "info";

interface ToastOptions {
  type: ToastType;
  message: string;
  locale: string;
}

export const showToast = ({ type, message, locale }: ToastOptions) => {
  Swal.fire({
    customClass: {
      popup: "!h-[70px]",
      icon: "!text-sm",
    },
    toast: true,
    position: locale === "ar" ? "top-right" : "top-left",
    icon: type,
    title: message,
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    draggable: true,
  });
};
