import { TCashFlowData } from "src/types/CashFlow.type";

export const ExpenceData: TCashFlowData = {
  title: "لیست هزینه ها",
  filter: {
    title: "فیلتر هزینه ها",
    inputs: [
      {
        key: "start_date",
        type: "date",
        label: "از تاریخ",
        required: false,
      },
      {
        key: "end_date",
        type: "date",
        label: "الی تاریخ",
        required: false,
      },
    ],
    submitFilter: "اعمال فیلتر",
  },
  addButton: "افزودن هزینه",
  sort: [
    {
      status: null,
      title: "نمایش همه",
    },
    {
      status: 1,
      title: "تایید شده ها",
    },
    {
      status: 0,
      title: "لغو شده ها",
    },
  ],
  searchPlaceholder: "جستوجوی هزینه",
  notFound: "هزینه ای یافت نشد.",
  table: {
    thead: [
      "#",
      "شماره هزینه",
      "شماره فاکتور",
      "نوع هزینه",
      "شرح",
      "مبلغ",
      "تاریخ ثبت",
      "وضعیت",
    ],
    tbody: [
      "expense_number",
      "factor_number",
      "flow_kind",
      "description",
      "amount",
      "created_at",
      "status",
    ],
  },

  create: {
    title: "ثبت سند هزینه",
    saveButton: "ذخیره",
    inputs: [
      {
        key: "expense_number",
        label: "شماره هزینه",
        required: false,
        generator: "ساخت شماره به صورت دستی",
      },
      {
        key: "date",
        type: "date",
        label: "تاریخ",
        required: false,
      },
      {
        key: "document_number",
        type: "number",
        label: "شماره سند",
        required: true,
      },
      {
        key: "flow_kind",
        label: "نوع هزینه",
        required: true,
      },
      {
        key: "account_id",
        label: "انتخاب حساب",
        required: false,
      },
      {
        key: "amount",
        label: "مبلغ",
        type: "number",
        required: true,
      },
      {
        key: "description",
        label: "توضیحات",
        required: false,
      },
    ],
    createFlowKind: {
      kind: "expense",
      title: "ساخت نوع هزینه",
      inputs: [
        {
          key: "title",
          label: "نام نوع هزینه",
          required: true,
        },
      ],
      saveBtn: "ثبت نوع هزینه",
    },
    updateFlowKind: {
      kind: "expense",
      title: "به روز رسانی نوع هزینه",
      inputs: [
        {
          key: "title",
          label: "نام نوع هزینه",
          required: true,
        },
      ],
      saveBtn: "به روز رسانی نوع هزینه",
    },
  },
};

export const IncomeData: TCashFlowData = {
  title: "لیست درآمد ها",
  filter: {
    title: "فیلتر درآمد ها",
    inputs: [
      {
        key: "start_date",
        label: "از تاریخ",
        required: false,
      },
      {
        key: "end_date",
        label: "الی تاریخ",
        required: false,
      },
    ],
    submitFilter: "اعمال فیلتر",
  },
  addButton: "افزودن درآمد",
  sort: [
    {
      status: null,
      title: "نمایش همه",
    },
    {
      status: 1,
      title: "تایید شده ها",
    },
    {
      status: 0,
      title: "لغو شده ها",
    },
  ],
  searchPlaceholder: "جستوجوی درآمد",
  notFound: "درآمد ای یافت نشد.",
  table: {
    thead: [
      "#",
      "شماره درآمد",
      "شماره سند",
      "نوع درآمد",
      "شرح",
      "مبلغ",
      "تاریخ ثبت",
      "وضعیت",
    ],
    tbody: [
      "income_number",
      "document_number",
      "flow_kind",
      "description",
      "amount",
      "created_at",
      "status",
    ],
  },

  create: {
    title: "ثبت سند درآمد",
    saveButton: "ذخیره",
    inputs: [
      {
        key: "income_number",
        label: "شماره",
        required: false,
        generator: "ساخت شماره به صورت دستی",
      },
      {
        key: "date",
        type: "date",
        label: "تاریخ",
        required: false,
      },
      {
        key: "document_number",
        type: "number",
        label: "شماره سند",
        required: true,
      },
      {
        key: "flow_kind",
        label: "نوع درآمد",
        required: false,
      },
      {
        key: "account_id",
        label: "انتخاب حساب",
        required: true,
      },
      {
        key: "amount",
        label: "مبلغ",
        type: "number",
        required: true,
      },
      {
        key: "description",
        label: "توضیحات",
        required: false,
      },
    ],
    createFlowKind: {
      kind: "income",
      title: "ساخت نوع درآمد",
      inputs: [
        {
          key: "title",
          label: "نام نوع درآمد",
          required: true,
        },
      ],
      saveBtn: "ثبت نوع درآمد",
    },
    updateFlowKind: {
      kind: "income",
      title: "به روز رسانی نوع درآمد",
      inputs: [
        {
          key: "title",
          label: "نام نوع درآمد",
          required: true,
        },
      ],
      saveBtn: "به روز رسانی نوع درآمد",
    },
  },
};
