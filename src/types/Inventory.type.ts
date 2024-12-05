import { TInputs } from "./global.types";

export type TInventoryData = {
  title: string;
  not_found: string;
  search_placeholder: string;
  filter: {
    title: string;
    inputs: TInputs[];
    submitButton: string;
  };
  table: {
    thead: string[];
    tbody: string[];
  };
};

export type TInventory = {
  count: number;
  product_id: number;
  business_id: number;
  warehouse_id: number;
  product_name: string;
  product_code: string;
  product_barcode: string;
  product_sell_price: number;
  product_purchase_price: number;
  product_unit: string;
  category_title: string;
};
