import { TInputs } from "./global.types";

export type TBankAccountData = {
  title: string;
  seccondTitle: string;
  addButton: string;
  editButton: string;
  modalTitle: string;
  notFound: string;
  circulationNotFound: string;
  circulationsButton: string;
  table: {
    thead: string[];
    tbody: string[];
  };
  create: {
    title: string;
    saveButton: string;
    imageUpload: {
      key: string;
      label: string;
      alt: string;
    };
    inputsTop: TInputs[];
    inputsBottom: TInputs[];
  };
  update: {
    title: string;
    edit: string;
  };
};

export type TBankAccounts = {
  id: number;
  image_src: string;
  bank_name: string;
  account_owner: string;
  card_number: number;
  shaba_number: string;
  is_active: boolean;
  business: number;
  balance: number;
};

export type TSingleBankAccount = {
  id: string;
  created_at: string;
  updated_at: string;
  image_src: string;
  finantial_code: number;
  bank_name: string;
  account_owner: string;
  account_number: string;
  card_number: string;
  shaba_number: string;
  payment_switch_number: string;
  payment_terminal_number: string;
  store_accepter_number: string;
  description: string;
  balance: number;
  is_active: boolean;
  business: number;
  circulations: any[];
};

export type TCashRegisterData = {
  title: string;
  seccondTitle: string;
  addButton: string;
  editButton: string;
  modalTitle: string;
  notFound: string;
  circulationNotFound: string;
  circulationsButton: string;
  table: {
    thead: string[];
    tbody: string[];
  };
  create: {
    title: string;
    saveButton: string;
    imageUpload: {
      key: string;
      label: string;
      alt: string;
    };
    inputsTop: TInputs[];
    inputsBottom: TInputs[];
  };
  update: {
    title: string;
    edit: string;
  };
};

export type TCashRegisters = {
  id: number;
  image_src: string;
  cash_register_name: string;
  is_active: boolean;
  business: number;
  balance: number;
  finantial_code: number;
};

export type TSingleCashRegister = {
  id: string;
  created_at: string;
  updated_at: string;
  image_src: string;
  finantial_code: number;
  cash_register_name: string;
  payment_switch_number: string;
  payment_terminal_number: string;
  store_accepter_number: string;
  description: string;
  balance: number;
  is_active: boolean;
  business: number;
  circulations: any[];
};

export type TSlandererData = {
  title: string;
  seccondTitle: string;
  addButton: string;
  editButton: string;
  modalTitle: string;
  notFound: string;
  circulationNotFound: string;
  circulationsButton: string;
  table: {
    thead: string[];
    tbody: string[];
  };
  create: {
    title: string;
    saveButton: string;
    imageUpload: {
      key: string;
      label: string;
      alt: string;
    };
    inputsTop: TInputs[];
    inputsBottom: TInputs[];
  };
  update: {
    title: string;
    edit: string;
  };
};

export type TSlanderers = {
  id: number;
  image_src: string;
  slanderer_name: string;
  is_active: boolean;
  business: number;
  balance: number;
  finantial_code: number;
};

export type TSingleSlanderer = {
  id: string;
  created_at: string;
  updated_at: string;
  image_src: string;
  finantial_code: number;
  slanderer_name: string;
  description: string;
  balance: number;
  is_active: boolean;
  business: number;
  circulations: any[];
};

export type TAllAccounts = {
  id: number;
  image_src: string;
  account_name: string;
  account_type: string;
  business: number;
};


export type TCirculationData = {
  searchPlaceholder: string;
  thead: string[];
  tbody: string[];
};