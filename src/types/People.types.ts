import { TInputs } from "./global.types";

export type TCreatePeopleData = {
  title: string;
  saveButton: string;
  imageUpload: {
    key: string;
    label: string;
    alt: string;
  };
  inputs: TInputs[];
  tabs: {
    id: number;
    title: string;
    inputs: TInputs[];
  }[];
};

export type TPeopleAccountData = {
  title: string;
  notFound: string;
  create: {
    title: string;
    inputs: TInputs[];
  };
  saveButton: string;
};

export type TPeopleData = {
  title: string;
  searchPlaceholder: string;
  notFound: string;
  accounts: TPeopleAccountData;
  finationalNumber: string;
  table: {
    thead: string[];
  };
  create: TCreatePeopleData;
  update: {
    title: string;
    edit: string;
  };
};

export type TSinglePeople = {
  id: number;
  created_at: string;
  updated_at: string;
  image_src: string;
  finantial_code: number;
  nick_name: string;
  first_name: string;
  last_name: string;
  national_code: string;
  economic_code: string;
  company: string;
  registration_number: string;
  branch_code: string;
  country: string;
  province: string;
  city: string;
  postal_code: string;
  address: string;
  description: string;
  telephone: string;
  phone_number: string;
  second_phone_number: string;
  email: string;
  website: string;
  type: string;
  business: number;
  accounts: [];
};

export type TSinglePeopleAccount = {
  id: number;
  created_at: string;
  updated_at: string;
  bank: string;
  account_number: string;
  card_number: number;
  shaba_number: number;
  customer_id: number;
  business: number;
};
