import {
  TBankLogsData,
  TCashFlowsLogData,
  TFactorsLogData,
  TPeopleLogsData,
  TProductsLogData,
  TRemittancesLogsData,
} from "src/types/Dashboar.types";

const filter = {
  label: "فیلتر تاریخ",
  inputs: [
    {
      key: "start_date",
      label: "از تاریخ",
      required: false,
      type: "date",
    },
    {
      key: "end_date",
      label: "الی تاریخ",
      required: false,
      type: "date",
    },
  ],
  submitBtn: "اعمال تاریخ",
};

export const ProductsLogData: TProductsLogData = {
  title: "کالاها و خدمات",
  kind: "نوع",
  purchase: "خرید",
  sale: "فروش",
  good: "کالا",
  service: "خدمات",
};

export const BankLogsData: TBankLogsData = {
  tabs: [
    {
      id: 0,
      title: "بانکداری",
    },
    {
      id: 1,
      title: "تنخواه گردانان",
    },
    {
      id: 2,
      title: "صندوق ها",
    },
  ],
};

export const PeopleLogsData: TPeopleLogsData = {
  count: "عدد",
  unit: "مورد",
  purchase_amout: "میزان خرید",
  purchase_products_amout: "تعداد خرید محصولات",
  mobile: "شماره همراه",
  tel: "تلفن ثابت",
};

export const RemittanceLogsData: TRemittancesLogsData = {
  title: "انواع حواله",
  count: "عدد",
  notFound: "حواله ای یافت نشد",
  count_remittance: "عدد حواله ثبت شده",
  labels: [
    { title: "خرید", key: "purchase" },
    { title: "فروش", key: "sales" },
    { title: "انتقال", key: "transfer" },
    { title: "تولید", key: "production" },
    { title: "تعمیرات", key: "fix" },
    { title: "ضایعات", key: "waste" },
    { title: "اضافیات ضروری", key: "essentialExtras" },
    { title: "کسریات ضروری", key: "essentialDeficits" },
  ],
};

export const ProfitLogsData: TRemittancesLogsData = {
  title: "سود و زیان",
  count: "عدد",
  count_remittance: "عدد حواله ثبت شده",
  notFound: "مبلغی یافت نشد.",
  labels: [
    { title: "فروش", key: "sales" },
    { title: "خرید", key: "purchases" },
    { title: "هزینه", key: "expenses" },
    { title: "درآمد", key: "incomes" },
  ],
};

export const WarehouseLogsData: TRemittancesLogsData = {
  title: "اطلاعات انبار",
  count: "عدد حواله",
  notFound: "انبار یافت نشد",
  count_remittance: "انبار ثبت شده",
  labels: [
    { title: "فروش", key: "sales" },
    { title: "خرید", key: "purchases" },
    { title: "هزینه", key: "expenses" },
  ],
};

export const ExpenseLogsData: TCashFlowsLogData = {
  title: "نمودار هزینه ها",
  notFound: "هزینه ای یافت نشد",
  filter,
  link: "ثبت هزینه",
};

export const IncomeLogsData: TCashFlowsLogData  = {
  title: "نمودار درآمد",
  notFound: "درآمدی یافت نشد",
  filter,
  link:'ثبت درآمد'
};

export const SalesLogData: TFactorsLogData = {
  title: "نمودار فروش",
  notFound: "داده هزینه یافت نشد",
  filter,
  link: "ثبت فاکتور فروش",
};

export const PurchaseLogData: TFactorsLogData = {
  title: "نمودار خرید",
  notFound: "داده خرید یافت نشد",
  filter,
  link: "ثبت فاکتور خرید",
};