import { TInputs } from "./global.types";

export type TCreateProductData = {
  title: string;
  saveButton: string;
  searchPlaceholder: string;
  notFound: string;

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

export type TProductsData = {
  title: string;
  saveButton: string;
  excelButton: string;
  searchPlaceholder: string;
  notFound: string;
  sort: { key: "goods" | "services"; title: string }[];
  filter: {
    title: string;
    submitFilter: string;
    inputs: TInputs[];
  };
  table: { thead: string[]; tbody: string[] };
};

export type TFindProductsData = {
  title: string;
  counter: string;
  add_to_quick: string;
  remove_from_quick: string;
  add_to_product: string;
  remove_from_product: string;
  tabs: { id: number; title: string }[];
  quick_access: {
    id: number;
    default_view: string;
    addButton: string;
  };
  category: {
    id: number;
    category_goods: string;
    category_services: string;
  };
  search: {
    id: number;
    inputs: TInputs[];
    searchButton: string;
  };
};

export type TProduct = {
  business: number;
  category_id: number | null;
  id: number;
  count:number
  is_for_sale: boolean;
  product_code: string;
  product_name: string;
  inventory_count: number;
  barcode: string;
  image_src: string;
  purchase_price: number;
  sell_price: number;
  type: "services" | "goods";
  unit: string;
  purchase_tax_percent: number;
  sales_tax_percent: number;
};

export type TSingleProduct = {
  id: number;
  created_at: string;
  updated_at: string;
  image_src: string;
  product_code: string;
  product_name: string;
  manufacturer: string;
  product_model: string;
  barcode: string;
  unit: string;
  purchase_price: number;
  sell_price: number;
  wholesale_price: number;
  retail_price: number;
  inventory_control: boolean;
  order_point: number;
  minimum_order: number;
  subject_to_sales_tax: boolean;
  sales_tax_percent: number;
  subject_to_purchase_tax: string;
  purchase_tax_percent: string;
  is_for_sale: boolean;
  type: string;
  category_id: string;
  category: string;
  business: number;
  count: number;
};
