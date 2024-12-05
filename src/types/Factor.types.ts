import { TProductWithExtras } from "src/store/slice/factorProducts-slice";
import { TInputs } from "./global.types";
import { TProduct } from "./Product.types";

export type TFactorData = {
  title: string;
  add_btn: string;
  input_placeholder: string;
  not_found: string;
  filter: {
    title: string;
    inputs: TInputs[];
    submit_btn: string;
  };
  sort: {
    title: string;
    status: number | null;
    is_payed_fully: boolean | null
    is_delivered: boolean | null
  }[];
  table: {
    thead: string[];
    tbody: string[];
    status_0: string;
    status_1: string;
    status_2: string;
    status_3: string;
  };
  table_setting: {
    title: string;
    inputs: TInputs[];
    submit_btn: string;
  };
  create: TCreateFactorData;
};

export type TCreateFactorData = {
  title: string;
  saveButton: string;
  notFound: string;
  pickWarehouse: string;
  inputs: TInputs[];
  more_details: TInputs[];
  more_details_button: string;
  less_details_button: string;
  proudctsTable: {
    count: string;
    number_unit: string;
    total_price: string;
    tax: string;
    discount: string;
    final_price: string;
    add_product_btn: string;
    discount_btn: string;
    tax_btn: string;
    sell_price_btn: {
      title: string;
      options: {
        title: string;
        key: string;
      }[];
    };
    file_btn: string;
    print_btn: string;
    expence_btn: string;
    publish_btn: string;
    save_demo: string;
    table: {
      thead: string[];
      tbody: string[];
    };
  };
};

export type TSingleFactor = {
  id: number;
  created_at: string;
  updated_at: string;
  factor_number: string;
  title: string;
  referral: number;
  payment_method: string;
  payment_kind: string;
  issue_date: string;
  due_date: string;
  status: number;
  is_payed_fully: boolean;
  is_delivered: boolean;
  count: number;
  full_amount: number;
  tax_amount: number;
  discount_amount: number;
  final_amount: number;
  payed_amount: number;
  description: string;
  installments: [];
  account_type: string;
  account_id: number;
  phases: {
    id: number;
    factor_id: number;
    phase: number;
    title: string;
    start_date: string;
    end_date: string;
    amount: number;
    is_payed: true;
    description: string;
    business_id: number;
  }[];
  people_id: number;
  sub_user_id: number;
  circulation_id: number;
  business_id: number;
  products: TProductWithExtras[];
};

export interface TFactorProduct extends TProduct {
  tax_price: number;
};