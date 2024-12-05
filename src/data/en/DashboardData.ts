import {
  TBankLogsData,
  TCashFlowsLogData,
  TFactorsLogData,
  TPeopleLogsData,
  TProductsLogData,
  TRemittancesLogsData,
} from "src/types/Dashboar.types";

const filter = {
  label: "Date Filter",
  inputs: [
    {
      key: "start_date",
      label: "From Date",
      required: false,
      type: "date",
    },
    {
      key: "end_date",
      label: "To Date",
      required: false,
      type: "date",
    },
  ],
  submitBtn: "Apply Date",
};

export const ProductsLogData: TProductsLogData = {
  title: "Products and Services",
  kind: "Type",
  purchase: "Purchase",
  sale: "Sale",
  good: "Good",
  service: "Service",
};

export const BankLogsData: TBankLogsData = {
  tabs: [
    {
      id: 0,
      title: "Banking",
    },
    {
      id: 1,
      title: "Petty Cash",
    },
    {
      id: 2,
      title: "Funds",
    },
  ],
};

export const PeopleLogsData: TPeopleLogsData = {
  count: "Count",
  unit: "Item",
  purchase_amout: "Purchase Amount",
  purchase_products_amout: "Product Purchase Count",
  mobile: "Mobile Number",
  tel: "Landline",
};

export const RemittanceLogsData: TRemittancesLogsData = {
  title: "Remittance Types",
  count: "Count",
  notFound: "No remittance found",
  count_remittance: "Recorded Remittance Count",
  labels: [
    { title: "Purchase", key: "purchase" },
    { title: "Sales", key: "sales" },
    { title: "Transfer", key: "transfer" },
    { title: "Production", key: "production" },
    { title: "Repairs", key: "fix" },
    { title: "Waste", key: "waste" },
    { title: "Essential Extras", key: "essentialExtras" },
    { title: "Essential Deficits", key: "essentialDeficits" },
  ],
};

export const ProfitLogsData: TRemittancesLogsData = {
  title: "Profit and Loss",
  count: "Count",
  count_remittance: "Recorded Remittance Count",
  notFound: "No amount found.",
  labels: [
    { title: "Sales", key: "sales" },
    { title: "Purchases", key: "purchases" },
    { title: "Expenses", key: "expenses" },
    { title: "Incomes", key: "incomes" },
  ],
};

export const WarehouseLogsData: TRemittancesLogsData = {
  title: "Warehouse Information",
  count: "Remittance Count",
  notFound: "Warehouse not found",
  count_remittance: "Recorded Warehouse",
  labels: [
    { title: "Sales", key: "sales" },
    { title: "Purchases", key: "purchases" },
    { title: "Expenses", key: "expenses" },
  ],
};

export const ExpenseLogsData: TCashFlowsLogData = {
  title: "Expense Chart",
  notFound: "No expense found",
  filter,
  link: "Register Expense",
};

export const IncomeLogsData: TCashFlowsLogData  = {
  title: "Income Chart",
  notFound: "No income found",
  filter,
  link: "Register Income"
};

export const SalesLogData: TFactorsLogData = {
  title: "Sales Chart",
  notFound: "Expense data not found",
  filter,
  link: "Register Sales Invoice",
};

export const PurchaseLogData: TFactorsLogData = {
  title: "Purchase Chart",
  notFound: "Purchase data not found",
  filter,
  link: "Register Purchase Invoice",
};
