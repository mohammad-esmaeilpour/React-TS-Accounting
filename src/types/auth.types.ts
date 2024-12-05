export type TLogin = {
  title: string;
  inputs: { placeholder: string; key: string }[];
  captcha: string;
  loginTitle: string;
  options: {
    title: string;
    link: string;
  }[];
};

export type TRegister = {
  title: string;
  inputs: { placeholder: string; key: string; gridColumn?: string }[];
  captcha: string;
  registerTitle: string;
  option: {
    title: string;
    link: string;
  };
};

export type TConfirm = {
  title: string;
  goBack: string;
  description: string;
  resend: string;
  inputs: {
    id: string;
    key: string;
    counter:number
  }[];
};
