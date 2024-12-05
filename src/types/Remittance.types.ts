import { TInputs } from "./global.types";

export type TRemittanceData = {
  title: string;
  add_button: string;
  notFound: string;
  searchPlaceholder: string;
  filter: {
    title: string;
    inputs: TInputs[];
  };
  sort: { title: string; key: string }[];
  table: {
    thead: string[];
    tbody: string[];
  };
};

export type TRemittances = {
  id: string;
  description: string;
  delivery_date: string;
  remittance_kind: string;
  status: number;
  origin_warehouse: null | string | number;
  destination_warehouse: number;
  sub_user: number;
  business: number;
  factor: null | string | number;
};

export type TSingleRemittance = {
  id: string;
  description: string;
  delivery_date: string;
  remittance_kind: string;
  status: number;
  origin_warehouse: null | string | number;
  destination_warehouse: number;
  sub_user: number;
  business: number;
  factor: null | string | number;
  products: {
    id: number;
    remittance_id: number;
    product_id: number;
    count: number;
  }[];
  created_at: string;
  updated_at: string;
};

export type TCreateRemittanceData = {
  title: string;
  saveButton: string;
  inputs: TInputs[];
  more_details: TInputs[];
  details_button: string;
  proudctsTable: {
    count: string;
    number_unit: string;
    table: {
      thead: string[];
      tbody: string[];
    };
    add_button: string;
  };
};