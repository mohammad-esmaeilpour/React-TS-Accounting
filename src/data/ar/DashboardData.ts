import {
  TBankLogsData,
  TCashFlowsLogData,
  TFactorsLogData,
  TPeopleLogsData,
  TProductsLogData,
  TRemittancesLogsData,
} from "src/types/Dashboar.types";

const filter = {
  label: "فلتر التاريخ",
  inputs: [
    {
      key: "start_date",
      label: "من تاريخ",
      required: false,
      type: "date",
    },
    {
      key: "end_date",
      label: "إلى تاريخ",
      required: false,
      type: "date",
    },
  ],
  submitBtn: "تطبيق التاريخ",
};

export const ProductsLogData: TProductsLogData = {
  title: "المنتجات والخدمات",
  kind: "النوع",
  purchase: "شراء",
  sale: "بيع",
  good: "سلعة",
  service: "خدمة",
};

export const BankLogsData: TBankLogsData = {
  tabs: [
    {
      id: 0,
      title: "البنوك",
    },
    {
      id: 1,
      title: "النقدية الصغيرة",
    },
    {
      id: 2,
      title: "الأموال",
    },
  ],
};

export const PeopleLogsData: TPeopleLogsData = {
  count: "العدد",
  unit: "عنصر",
  purchase_amout: "مبلغ الشراء",
  purchase_products_amout: "عدد المنتجات المشتراة",
  mobile: "رقم الجوال",
  tel: "الهاتف الثابت",
};

export const RemittanceLogsData: TRemittancesLogsData = {
  title: "أنواع الحوالات",
  count: "العدد",
  notFound: "لا توجد حوالة",
  count_remittance: "عدد الحوالات المسجلة",
  labels: [
    { title: "الشراء", key: "purchase" },
    { title: "المبيعات", key: "sales" },
    { title: "التحويل", key: "transfer" },
    { title: "الإنتاج", key: "production" },
    { title: "الإصلاحات", key: "fix" },
    { title: "النفايات", key: "waste" },
    { title: "الإضافات الأساسية", key: "essentialExtras" },
    { title: "العيوب الأساسية", key: "essentialDeficits" },
  ],
};

export const ProfitLogsData: TRemittancesLogsData = {
  title: "الأرباح والخسائر",
  count: "العدد",
  count_remittance: "عدد الحوالات المسجلة",
  notFound: "لا توجد مبالغ.",
  labels: [
    { title: "المبيعات", key: "sales" },
    { title: "المشتريات", key: "purchases" },
    { title: "المصروفات", key: "expenses" },
    { title: "الإيرادات", key: "incomes" },
  ],
};

export const WarehouseLogsData: TRemittancesLogsData = {
  title: "معلومات المستودع",
  count: "عدد الحوالات",
  notFound: "المستودع غير موجود",
  count_remittance: "عدد المستودعات المسجلة",
  labels: [
    { title: "المبيعات", key: "sales" },
    { title: "المشتريات", key: "purchases" },
    { title: "المصروفات", key: "expenses" },
  ],
};

export const ExpenseLogsData: TCashFlowsLogData = {
  title: "مخطط المصاريف",
  notFound: "لا توجد مصاريف",
  filter,
  link: "تسجيل مصاريف",
};

export const IncomeLogsData: TCashFlowsLogData  = {
  title: "مخطط الإيرادات",
  notFound: "لا توجد إيرادات",
  filter,
  link: "تسجيل إيرادات"
};

export const SalesLogData: TFactorsLogData = {
  title: "مخطط المبيعات",
  notFound: "بيانات المصاريف غير موجودة",
  filter,
  link: "تسجيل فاتورة المبيعات",
};

export const PurchaseLogData: TFactorsLogData = {
  title: "مخطط المشتريات",
  notFound: "بيانات المشتريات غير موجودة",
  filter,
  link: "تسجيل فاتورة الشراء",
};
