import Swal from "sweetalert2";
import Toast from "./toast";

export const SuccessAlert = (title: string, text: string) => {
  Swal.fire({
    icon: 'success',
    title: title,
    text: text
  })
};

export const ErrorAlert = (title: string, text: string) => {
  Swal.fire({
    icon: 'error',
    title: title,
    text: text
  })
};

export const InfoAlert = (title: string, text: string) => {
  Swal.fire({
    icon: 'info',
    title: title,
    text: text
  })
};

export const QuestionAlert = (title: string, text: string) => {
  Swal.fire({
    icon: 'question',
    title: title,
    text: text
  })
};

export const WarningAlert = (title: string, text: string) => {
  Swal.fire({
    icon: 'warning',
    title: title,
    text: text
  })
};

export const SuccessToast = (title: string, text: string) => {
  Toast.fire({
    icon: 'success',
    title: title,
    text: text
  })
};

export const ErrorToast = (title: string, text: string) => {
  Toast.fire({
    icon: 'error',
    title: title,
    text: text
  })
}
