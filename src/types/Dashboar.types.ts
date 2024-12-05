import { TInputs } from "./global.types";

export type TProductsLogData = {
  title: string;
  kind: string;
  purchase: string;
  sale: string;
  service: string;
  good: string;
};

export type TCashFlowsLogData = {
  title: string;
  notFound: string;
  filter: {
    label: string;
    inputs: TInputs[];
    submitBtn: string;
  };
  link: string;
};

export type TFactorsLogData = {
  title: string;
  notFound: string;
  filter: {
    label: string;
    inputs: TInputs[];
    submitBtn: string;
  };
  link:string
};

export type TRemittancesLogsData = {
  title: string;
  count: string;
  notFound: string;
  count_remittance: string;
  labels: { key: string; title: string }[];
};

export type TBankLogsData = {
  tabs: { id: number; title: string }[];
};

export type TPeopleLogsData = {
  count: string;
  unit: string;
  purchase_amout: string;
  purchase_products_amout: string;
  mobile: string;
  tel: string;
};

export type TCustomerLogs = {
  customersLogs: {
    id: number;
    business_id: number;
    customer_id: number;
    amount: number;
    count: number;
    created_at: string;
    updated_at: string;
    image_src: string;
    nick_name: string;
    first_name: string;
    last_name: string;
    company: string;
    phone_number: number;
    telephone: number;
  }[];
  logCount: number;
  totalAmount: number;
};

export type TProviderLogs = {
  customersLogs: {
    id: number;
    business_id: number;
    customer_id: number;
    amount: number;
    count: number;
    created_at: string;
    updated_at: string;
    image_src: string;
    nick_name: string;
    first_name: string;
    last_name: string;
    company: string;
    phone_number: number;
    telephone: number;
  }[];
  logCount: number;
  totalAmount: number;
};

export type TIncomeLogs = {
  incomesLogs: {
    id: number;
    business_id: number;
    kind: string;
    amount: number;
    percent: number;
  }[];
  totalAmount: number;
};

export type TExpenceLogs = {
  expensesLogs: {
    id: number;
    business_id: number;
    kind: string;
    amount: number;
    percent: number;
  }[];
  totalAmount: number;
};

export type TProductsLogs = {
  business_id: number;
  image_src: string;
  product_id: number;
  product_name: string;
  purchases: number;
  sales: number;
  type: string;
};

export type TProfitLogs = {
  profitLog: {
    business_id: number;
    sales: number;
    purchases: number;
    expenses: number;
    incomes: number;
  }
  totalAmount: number;
};

export type TPurchaseLogs = {
  purchasesLogs: {
    business_id: number;
    amount: number;
    created_at: string;
  }[];
  totalAmount: number;
};

export type TSalesLogs = {
  salesLogs: {
    business_id: number;
    amount: number;
    created_at: string;
  }[];
  totalAmount: number;
};

export type TRemittancesLogs = {
  remittancesLogs: {
    business_id: number;
    kind: string;
    count: number;
  }[];
  totalAmount: number;
};

export type TWarehousesLogs = {
  title: string;
  totalCount: number;
  warehouseCount: number;
  warehousesesLogs: [
    {
      business_id: number;
      warehouse_id: number;
      warehouse_title: string;
      count: number;
    }
  ];
};
