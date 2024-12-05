import { TConfirm, TLogin, TRegister } from "src/types/auth.types";

const LoginData: TLogin = {
  title: "Login to Account",
  inputs: [
    {
      placeholder: "Email or Phone Number",
      key: "identifier",
    },
    {
      placeholder: "Password",
      key: "password",
    },
  ],
  captcha: "Security Code",
  loginTitle: "Login to Account",
  options: [
    {
      title: "Forgot Password",
      link: "",
    },
    {
      title: "Register New User",
      link: "",
    },
  ],
};

const RegisterData: TRegister = {
  title: "Register New User",
  inputs: [
    {
      placeholder: "First Name",
      key: "first_name",
    },
    {
      placeholder: "Last Name",
      key: "last_name",
    },
    {
      placeholder: "Mobile Phone Number",
      key: "phone_number",
      gridColumn: "col-span-2",
    },
    {
      placeholder: "Email Address",
      key: "email",
      gridColumn: "col-span-2",
    },
    {
      placeholder: "Password",
      key: "password",
      gridColumn: "col-span-2",
    },
    {
      placeholder: "Confirm Password",
      key: "confirm-password",
      gridColumn: "col-span-2",
    },
  ],
  captcha: "Security Code",
  registerTitle: "Register New User",
  option: {
    title: "Already have an account?",
    link: "",
  },
};

const ConfirmCodeData : TConfirm = {
    title: "Receive Code",
    goBack: "Previous Step",
    description: "A 5-digit code was sent to your mobile number",
    resend: "Resend Code:",
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
}

export { LoginData, RegisterData, ConfirmCodeData };

