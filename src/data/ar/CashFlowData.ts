import { TCashFlowData } from "src/types/CashFlow.type";

export const ExpenceData: TCashFlowData = {
  title: "قائمة النفقات",
  filter: {
    title: "فلتر النفقات",
    inputs: [
      {
        key: "start_date",
        type: "date",
        label: "من تاريخ",
        required: false,
      },
      {
        key: "end_date",
        type: "date",
        label: "إلى تاريخ",
        required: false,
      },
    ],
    submitFilter: "تطبيق الفلتر",
  },
  addButton: "إضافة نفقة",
  sort: [
    {
      status: null,
      title: "عرض الكل",
    },
    {
      status: 1,
      title: "مapproved",
    },
    {
      status: 0,
      title: "ملغاة",
    },
  ],
  searchPlaceholder: "ابحث عن نفقة",
  notFound: "لا توجد نفقات.",
  table: {
    thead: [
      "#",
      "رقم النفقة",
      "رقم الفاتورة",
      "نوع النفقة",
      "الوصف",
      "المبلغ",
      "تاريخ التسجيل",
      "الحالة",
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
    title: "تسجيل وثيقة النفقة",
    saveButton: "حفظ",
    inputs: [
      {
        key: "expense_number",
        label: "رقم النفقة",
        required: false,
        generator: "إنشاء يدويًا",
      },
      {
        key: "date",
        type: "date",
        label: "التاريخ",
        required: false,
      },
      {
        key: "document_number",
        type: "number",
        label: "رقم الوثيقة",
        required: true,
      },
      {
        key: "flow_kind",
        label: "نوع النفقة",
        required: true,
      },
      {
        key: "account_id",
        label: "اختر الحساب",
        required: false,
      },
      {
        key: "amount",
        label: "المبلغ",
        type: "number",
        required: true,
      },
      {
        key: "description",
        label: "الوصف",
        required: false,
      },
    ],
    createFlowKind: {
      kind: "expense",
      title: "إنشاء نوع النفقة",
      inputs: [
        {
          key: "title",
          label: "اسم نوع النفقة",
          required: true,
        },
      ],
      saveBtn: "تسجيل نوع النفقة",
    },
    updateFlowKind: {
      kind: "expense",
      title: "تحديث نوع النفقة",
      inputs: [
        {
          key: "title",
          label: "اسم نوع النفقة",
          required: true,
        },
      ],
      saveBtn: "تحديث نوع النفقة",
    },
  },
};

export const IncomeData: TCashFlowData = {
  title: "قائمة الدخل",
  filter: {
    title: "فلتر الدخل",
    inputs: [
      {
        key: "start_date",
        label: "من تاريخ",
        required: false,
      },
      {
        key: "end_date",
        label: "إلى تاريخ",
        required: false,
      },
    ],
    submitFilter: "تطبيق الفلتر",
  },
  addButton: "إضافة دخل",
  sort: [
    {
      status: null,
      title: "عرض الكل",
    },
    {
      status: 1,
      title: "مapproved",
    },
    {
      status: 0,
      title: "ملغاة",
    },
  ],
  searchPlaceholder: "ابحث عن دخل",
  notFound: "لا توجد إيرادات.",
  table: {
    thead: [
      "#",
      "رقم الدخل",
      "رقم الوثيقة",
      "نوع الدخل",
      "الوصف",
      "المبلغ",
      "تاريخ التسجيل",
      "الحالة",
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
    title: "تسجيل وثيقة الدخل",
    saveButton: "حفظ",
    inputs: [
      {
        key: "income_number",
        label: "رقم",
        required: false,
        generator: "إنشاء يدويًا",
      },
      {
        key: "date",
        type: "date",
        label: "التاريخ",
        required: false,
      },
      {
        key: "document_number",
        type: "number",
        label: "رقم الوثيقة",
        required: true,
      },
      {
        key: "flow_kind",
        label: "نوع الدخل",
        required: false,
      },
      {
        key: "account_id",
        label: "اختر الحساب",
        required: true,
      },
      {
        key: "amount",
        label: "المبلغ",
        type: "number",
        required: true,
      },
      {
        key: "description",
        label: "الوصف",
        required: false,
      },
    ],
    createFlowKind: {
      kind: "income",
      title: "إنشاء نوع الدخل",
      inputs: [
        {
          key: "title",
          label: "اسم نوع الدخل",
          required: true,
        },
      ],
      saveBtn: "تسجيل نوع الدخل",
    },
    updateFlowKind: {
      kind: "income",
      title: "تحديث نوع الدخل",
      inputs: [
        {
          key: "title",
          label: "اسم نوع الدخل",
          required: true,
        },
      ],
      saveBtn: "تحديث نوع الدخل",
    },
  },
};
