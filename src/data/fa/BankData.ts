import {
  TBankAccountData,
  TCashRegisterData,
  TCirculationData,
  TSlandererData,
} from "src/types/Bank.types";

export const BankAccountData: TBankAccountData = {
  title: "لیست بانک ها",
  seccondTitle: "موجودی",
  addButton: "افزودن بانک",
  editButton: "ویرایش",
  modalTitle: "گردش صندوق",
  notFound: "برای ساخت حساب بانکی به صفحه ی افزودن بانک مراجعه کنید.",
  circulationNotFound: "گردش حساب یافت نشد.",
  circulationsButton: "گردش حساب",
  table: {
    thead: ["#", "کد", "شرح گردش", "بدهکار", "بستانکار", "تراز"],
    tbody: ["circulation_code", "description", "debtor", "creditor", "balance"],
  },
  create: {
    title: "افزودن بانک",
    saveButton: "ذخیره",
    imageUpload: {
      key: "image_src",
      label: "تصویر بانک",
      alt: "انتخاب تصویر بانک",
    },
    inputsTop: [
      {
        key: "finantial_code",
        label: "کد حسابداری",
        required: true,
        generator: "ساخت کد به صورت دستی",
        type: "number",
      },
      {
        key: "bank_name",
        label: "نام بانک",
        required: true,
      },
      {
        key: "account_owner",
        label: "نام صاحب حساب",
        required: true,
      },
      // {
      //   key: "default",
      //   label: "پیش فرض",
      //   required: true,
      //   type: "boolean",
      // },
    ],
    inputsBottom: [
      {
        key: "account_number",
        label: "شماره حساب",
        required: true,
      },
      {
        key: "card_number",
        label: "شماره کارت",
        required: true,
      },
      {
        key: "shaba_number",
        label: "شماره شبا",
        required: true,
      },
      {
        key: "payment_switch_number",
        label: "شماره سوئیچ پرداخت",
        required: true,
      },
      {
        key: "payment_terminal_number",
        label: "شماره ترمینال پرداخت",
        required: true,
      },
      {
        key: "store_accepter_number",
        label: "شماره پذیرنده فروشگاهی",
        required: true,
      },
      {
        key: "description",
        label: "توضیحات",
        required: true,
      },
    ],
  },
  update: {
    title: "به روز رسانی حساب بانکی",
    edit: "ویرایش",
  },
};

export const CashRegisterData: TCashRegisterData = {
  title: "لیست صندوق ها",
  seccondTitle: "موجودی",
  addButton: "افزودن صندوق",
  editButton: "ویرایش",
  modalTitle: "گردش صندوق",
  notFound: "برای ساخت صندوق به صفحه ی افزودن صندوق مراجعه کنید.",
  circulationNotFound: "گردش حساب یافت نشد.",
  circulationsButton: "گردش حساب",
  table: {
    thead: ["#", "کد", "شرح گردش", "پروژه", "بدهکار", "بستانکار", "تراز"],
    tbody: ["circulation_code", "description", "debtor", "creditor", "balance"],
  },
  create: {
    title: "افزودن صندوق",
    saveButton: "ذخیره",
    imageUpload: {
      key: "image_src",
      label: "تصویر صندوق",
      alt: "انتخاب تصویر صندوق",
    },
    inputsTop: [
      {
        key: "finantial_code",
        label: "کد حسابداری",
        required: true,
        generator: "ساخت کد به صورت دستی",
        type: "number",
      },
      {
        key: "cash_register_name",
        label: "نام صندوق",
        required: true,
      },
      // {
      //   key: "default",
      //   label: "پیش فرض",
      //   required: true,
      //   type: "boolean",
      // },
    ],
    inputsBottom: [
      {
        key: "payment_switch_number",
        label: "شماره سوییچ پرداخت",
        required: true,
      },
      {
        key: "payment_terminal_number",
        label: "شماره ترمینال پرداخت",
        required: true,
      },
      {
        key: "store_accepter_number",
        label: "شماره پذیرنده فروشگاهی",
        required: true,
      },
      {
        key: "description",
        label: "توضیحات",
        required: true,
      },
    ],
  },
  update: {
    title: "به روز رسانی صندوق",
    edit: "ویرایش",
  },
};

export const SlandererData: TSlandererData = {
  title: "لیست  تنخواه گردان ها",
  seccondTitle: "موجودی",
  editButton: "ویرایش",
  addButton: "افزودن تنخواه گردان",
  modalTitle: "گردش صندوق",
  notFound: "برای ساخت تنخواه گردان به صفحه ی افزودن تنخواه گردان مراجعه کنید.",
  circulationNotFound: "گردش حساب یافت نشد.",
  circulationsButton: "گردش حساب",
  table: {
    thead: ["#", "کد", "شرح گردش", "پروژه", "بدهکار", "بستانکار", "تراز"],
    tbody: ["circulation_code", "description", "debtor", "creditor", "balance"],
  },
  create: {
    title: "افزودن تنخواه گردان",
    saveButton: "ذخیره",
    imageUpload: {
      key: "image_src",
      label: "تصویر تنخواه گردان",
      alt: "انتخاب تصویر تنخواه گردان",
    },
    inputsTop: [
      {
        key: "finantial_code",
        label: "کد حسابداری",
        required: true,
        generator: "ساخت کد به صورت دستی",
        type: "number",
      },
      {
        key: "slanderer_name",
        label: "نام تنخواه گردان",
        required: true,
      },
      // {
      //   key: "default",
      //   label: "پیش فرض",
      //   required: true,
      //   type: "boolean",
      // },
    ],
    inputsBottom: [
      {
        key: "description",
        label: "توضیحات",
        required: true,
      },
    ],
  },
  update: {
    title: "به روز رسانی تنخواه گردان",
    edit: "ویرایش",
  },
};

export const CirculationData: TCirculationData = {
  searchPlaceholder: "جستوجو گردش حساب",
  thead: ["#", "کد", "شرح گردش", "بدهکار", "بستانکار", "تراز", "وضعیت"],
  tbody: [
    "circulation_code",
    "description",
    "debtor",
    "creaditor",
    "balance",
    "status",
  ],
};
