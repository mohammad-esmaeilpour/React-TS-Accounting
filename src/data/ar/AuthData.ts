import { TConfirm, TLogin, TRegister } from "src/types/auth.types";

const LoginData: TLogin = {
  title: "تسجيل الدخول إلى الحساب",
  inputs: [
    {
      placeholder: "البريد الإلكتروني أو رقم الهاتف",
      key: "identifier",
    },
    {
      placeholder: "كلمة المرور",
      key: "password",
    },
  ],
  captcha: "رمز الأمان",
  loginTitle: "تسجيل الدخول إلى الحساب",
  options: [
    {
      title: "نسيت كلمة المرور",
      link: "",
    },
    {
      title: "تسجيل مستخدم جديد",
      link: "",
    },
  ],
};

const RegisterData: TRegister = {
  title: "تسجيل مستخدم جديد",
  inputs: [
    {
      placeholder: "الاسم الأول",
      key: "first_name",
    },
    {
      placeholder: "اسم العائلة",
      key: "last_name",
    },
    {
      placeholder: "رقم الهاتف المحمول",
      key: "phone_number",
      gridColumn: "col-span-2",
    },
    {
      placeholder: "البريد الإلكتروني",
      key: "email",
      gridColumn: "col-span-2",
    },
    {
      placeholder: "كلمة المرور",
      key: "password",
      gridColumn: "col-span-2",
    },
    {
      placeholder: "تأكيد كلمة المرور",
      key: "confirm-password",
      gridColumn: "col-span-2",
    },
  ],
  captcha: "رمز الأمان",
  registerTitle: "تسجيل مستخدم جديد",
  option: {
    title: "هل لديك حساب بالفعل؟",
    link: "",
  },
};

const ConfirmCodeData: TConfirm = {
  title: "استلام الرمز",
  goBack: "الخطوة السابقة",
  description: "تم إرسال رمز مكون من 5 أرقام إلى رقم هاتفك المحمول",
  resend: "إعادة إرسال الرمز:",
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
