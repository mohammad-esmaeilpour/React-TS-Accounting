import { TConfirm, TLogin, TRegister } from "src/types/auth.types";

const LoginData: TLogin = {
  title: "ورود به حساب کاربری",
  inputs: [
    {
      placeholder: "ایمیل یا شماره تلفن",
      key: "identifier",
    },
    {
      placeholder: "رمز عبور",
      key: "password",
    },
  ],
  captcha: "کد امنیتی",
  loginTitle: "ورود به حساب کاربری",
  options: [
    {
      title: "فراموشی رمز عبور",
      link: "",
    },
    {
      title: "ثبت نام کاربر جدید",
      link: "",
    },
  ],
};

const RegisterData: TRegister = {
  title: "ثبت نام کاربر جدید",
  inputs: [
    {
      placeholder: "نام",
      key: "first_name",
    },
    {
      placeholder: "نام خانوادگی",
      key: "last_name",
    },
    {
      placeholder: "شماره تلفن همراه",
      key: "phone_number",
      gridColumn: "col-span-2",
    },
    {
      placeholder: "آدرس ایمیل",
      key: "email",
      gridColumn: "col-span-2",
    },
    {
      placeholder: "رمز عبور",
      key: "password",
      gridColumn: "col-span-2",
    },
    {
      placeholder: "تکرار رمز عبور",
      key: "confirm-password",
      gridColumn: "col-span-2",
    },
  ],
  captcha: "کد امنیتی",
  registerTitle: "ثبت نام کاربر جدید",
  option: {
    title: "حساب کاربری دارید؟",
    link: "",
  },
};

const ConfirmCodeData: TConfirm = {
  title: "دریافت کد",
  goBack: "مرحله قبل",
  description: "کد 5 رقمی به شماره موبایل شماارسال گردید",
  resend: "ارسال مجدد کد :",
  inputs: [
    {
      key: "otpcode",
      id: "otpcode 1",
      counter: 1,
    },
    {
      key: "otpcode",
      id: "otpcode 2",
      counter: 2,
    },
    {
      key: "otpcode",
      id: "otpcode 3",
      counter: 3,
    },
    {
      key: "otpcode",
      id: "otpcode 4",
      counter: 4,
    },
    {
      key: "otpcode",
      id: "otpcode 5",
      counter: 5,
    },
  ],
};

export { LoginData, RegisterData, ConfirmCodeData };
