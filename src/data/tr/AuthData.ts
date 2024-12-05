import { TConfirm, TLogin, TRegister } from "src/types/auth.types";

const LoginData: TLogin = {
  title: "Hesaba Giriş Yap",
  inputs: [
    {
      placeholder: "E-posta veya Telefon Numarası",
      key: "identifier",
    },
    {
      placeholder: "Şifre",
      key: "password",
    },
  ],
  captcha: "Güvenlik Kodu",
  loginTitle: "Hesaba Giriş Yap",
  options: [
    {
      title: "Şifremi Unuttum",
      link: "",
    },
    {
      title: "Yeni Kullanıcı Kaydı",
      link: "",
    },
  ],
};

const RegisterData: TRegister = {
  title: "Yeni Kullanıcı Kaydı",
  inputs: [
    {
      placeholder: "Ad",
      key: "first_name",
    },
    {
      placeholder: "Soyad",
      key: "last_name",
    },
    {
      placeholder: "Cep Telefonu Numarası",
      key: "phone_number",
      gridColumn: "col-span-2",
    },
    {
      placeholder: "E-posta Adresi",
      key: "email",
      gridColumn: "col-span-2",
    },
    {
      placeholder: "Şifre",
      key: "password",
      gridColumn: "col-span-2",
    },
    {
      placeholder: "Şifreyi Onayla",
      key: "confirm-password",
      gridColumn: "col-span-2",
    },
  ],
  captcha: "Güvenlik Kodu",
  registerTitle: "Yeni Kullanıcı Kaydı",
  option: {
    title: "Zaten bir hesabınız var mı?",
    link: "",
  },
};

const ConfirmCodeData : TConfirm = {
  title: "Kodu Al",
  goBack: "Önceki Adım",
  description: "5 haneli bir kod telefon numaranıza gönderildi",
  resend: "Kodu Yeniden Gönder:",
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
