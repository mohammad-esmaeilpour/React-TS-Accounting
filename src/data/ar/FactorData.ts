import { TFactorData } from "src/types/Factor.types";

export const PurchaseFactorData: TFactorData = {
  title: "فواتير الشراء",
  add_btn: "إضافة فاتورة",
  input_placeholder: "ابحث عن الفاتورة",
  not_found: "الفاتورة غير موجودة.",
  filter: {
    title: "تصفية الفواتير",
    inputs: [
      {
        key: "start_issue_date",
        label: "تاريخ إصدار الفاتورة من",
        required: false,
        type: "date",
      },
      {
        key: "end_issue_date",
        label: "تاريخ إصدار الفاتورة إلى",
        required: false,
        type: "date",
      },
      {
        key: "start_due_date",
        label: "تاريخ استحقاق الفاتورة من",
        required: false,
        type: "date",
      },
      {
        key: "end_due_date",
        label: "تاريخ استحقاق الفاتورة إلى",
        required: false,
        type: "date",
      },
      {
        key: "customer",
        label: "البائع",
        required: false,
      },
    ],
    submit_btn: "تطبيق التصفية",
  },
  sort: [
    {
      title: "عرض الكل",
      status: null,
      is_delivered: null,
      is_payed_fully: null,
    },
    {
      title: "تم التسليم",
      status: 3,
      is_delivered: null,
      is_payed_fully: null,
    },
    {
      title: "مدفوع",
      status: 3,
      is_delivered: null,
      is_payed_fully: null,
    },
    {
      title: "مسودة",
      status: 1,
      is_delivered: null,
      is_payed_fully: null,
    },
    {
      title: "صدر",
      status: 3,
      is_delivered: null,
      is_payed_fully: null,
    },
    {
      title: "ملغاة",
      status: 1,
      is_delivered: null,
      is_payed_fully: null,
    },
    {
      title: "بانتظار التسليم",
      status: 3,
      is_delivered: false,
      is_payed_fully: null,
    },
    {
      title: "بانتظار الدفع",
      status: 3,
      is_payed_fully: false,
      is_delivered: null,
    },
  ],
  table: {
    thead: [
      "#",
      "عنوان الفاتورة",
      "رقم الفاتورة",
      "البائع",
      "إجمالي مبلغ الفاتورة",
      "المبلغ المدفوع",
      "المبلغ المتبقي",
      "التاريخ",
      "الحالة",
    ],
    tbody: [
      "title",
      "factor_number",
      "sub_user",
      "final_amount",
      "payed_amount",
      "remaining_amount",
      "due_date",
      "status",
    ],
    status_0: "ملغاة",
    status_1: "مسودة",
    status_2: "معتمدة",
    status_3: "مكتملة",
  },
  table_setting: {
    title: "إعدادات الجدول",
    inputs: [
      {
        key: "",
        label: "صف",
        required: false,
        type: "checkbox",
      },
      {
        key: "",
        label: "تاريخ الفاتورة",
        required: false,
        type: "checkbox",
      },
      {
        key: "",
        label: "رقم الفاتورة",
        required: false,
        type: "checkbox",
      },
      {
        key: "",
        label: "تاريخ الاستحقاق",
        required: false,
        type: "checkbox",
      },
      {
        key: "",
        label: "البائع",
        required: false,
        type: "checkbox",
      },
      {
        key: "",
        label: "المبلغ المدفوع",
        required: false,
        type: "checkbox",
      },
    ],
    submit_btn: "حفظ الإعدادات",
  },

  // create
  create: {
    title: "إضافة فاتورة شراء",
    pickWarehouse: "اختيار المستودع",
    saveButton: "حفظ",
    notFound: "يرجى البحث عن المنتج المطلوب.",
    inputs: [
      {
        key: "factor_number",
        label: "رقم الفاتورة",
        required: false,
        generator: "توليد رقم الفاتورة",
      },
      {
        key: "customer",
        label: "العميل",
        placeholder: "متنوع",
        required: false,
      },
      {
        key: "title",
        label: "العنوان",
        required: true,
      },
      {
        key: "account_id",
        label: "الحساب أو الصندوق المرتبط",
        placeholder: "اختيار الحساب أو الصندوق",
        required: false,
      },
    ],
    more_details: [
      {
        key: "payment_method",
        label: "طريقة الدفع",
        required: false,
        options: {
          list: [
            {
              key: "check",
              title: "شيك",
            },
            {
              key: "cash",
              title: "نقدي",
            },
            {
              key: "transfer",
              title: "تحويل بنكي",
            },
            {
              key: "ATM",
              title: "صراف آلي",
            },
          ],
        },
      },
      {
        key: "payment_kind",
        label: "نوع الدفع",
        options: {
          list: [
            {
              key: "full",
              title: "كامل",
            },
          ],
        },
        required: false,
      },
      {
        key: "sub_user_id",
        label: "بائع المنتج",
        required: false,
      },
      {
        key: "referral",
        label: "الإحالة",
        type: "number",
        required: false,
      },
      {
        key: "issue_date",
        label: "تاريخ الإصدار",
        type: "date",
        required: false,
      },
      {
        key: "due_date",
        label: "تاريخ الاستحقاق",
        type: "date",
        required: false,
      },
      {
        key: "is_payed_fully",
        label: "تكلفة المنتج",
        type: "boolean",
        required: false,
        options: {
          list: [
            {
              key: "true",
              title: "مدفوع",
            },
            {
              key: "false",
              title: "غير مدفوع",
            },
          ],
        },
      },
      {
        key: "is_delivered",
        label: "حالة تسليم المنتج",
        type: "boolean",
        required: false,
        options: {
          list: [
            {
              key: "true",
              title: "تم التسليم",
            },
            {
              key: "false",
              title: "لم يتم التسليم",
            },
          ],
        },
      },
      {
        key: "description",
        label: "الوصف",
        required: false,
      },
    ],
    more_details_button: "تطبيق مزيد من التفاصيل",
    less_details_button: "تطبيق تفاصيل أقل",
    proudctsTable: {
      count: "العدد",
      number_unit: "الوحدة",
      total_price: "الإجمالي",
      tax: "الضريبة",
      discount: "الخصم",
      final_price: "المبلغ النهائي",
      table: {
        thead: [
          "#",
          "المنتج أو الخدمة",
          "الباركود",
          "الوحدة",
          "العدد",
          "المستودع",
          "سعر الوحدة",
          "الضريبة",
          "الخصم",
          "الإجمالي",
        ],
        tbody: [
          "product_name",
          "barcode",
          "unit",
          "count",
          "warehouse_id",
          "unit_price",
          "tax_price",
          "discount_price",
          "total_price",
        ],
      },
      add_product_btn: "بحث عن منتج",
      discount_btn: "تطبيق الخصم",
      tax_btn: "تطبيق الضريبة",
      sell_price_btn: {
        title: "سعر البيع",
        options: [
          {
            key: "sell_price",
            title: "سعر البيع",
          },
          {
            key: "purchase_price",
            title: "سعر الشراء",
          },
        ],
      },
      file_btn: "تحميل ملف مرفق",
      print_btn: "طباعة للعميل",
      expence_btn: "تسجيل المصروفات",
      publish_btn: "إصدار",
      save_demo: "حفظ كمسودة",
    },
  },
};

export const SalesFactorData: TFactorData = {
  title: "فواتير المبيعات",
  add_btn: "إضافة فاتورة",
  input_placeholder: "ابحث عن الفاتورة",
  not_found: "الفاتورة غير موجودة.",
  filter: {
    title: "تصفية الفواتير",
    inputs: [
      {
        key: "start_issue_date",
        label: "تاريخ إصدار الفاتورة من",
        required: false,
        type: "date",
      },
      {
        key: "end_issue_date",
        label: "تاريخ إصدار الفاتورة إلى",
        required: false,
        type: "date",
      },
      {
        key: "start_due_date",
        label: "تاريخ استحقاق الفاتورة من",
        required: false,
        type: "date",
      },
      {
        key: "end_due_date",
        label: "تاريخ استحقاق الفاتورة إلى",
        required: false,
        type: "date",
      },
      {
        key: "customer",
        label: "العميل",
        required: false,
      },
    ],
    submit_btn: "تطبيق التصفية",
  },
  sort: [
    {
      title: "عرض الكل",
      status: null,
      is_delivered: null,
      is_payed_fully: null,
    },
    {
      title: "تم التسليم",
      status: 3,
      is_delivered: null,
      is_payed_fully: null,
    },
    {
      title: "مدفوع",
      status: 3,
      is_delivered: null,
      is_payed_fully: null,
    },
    {
      title: "مسودة",
      status: 1,
      is_delivered: null,
      is_payed_fully: null,
    },
    {
      title: "صدر",
      status: 3,
      is_delivered: null,
      is_payed_fully: null,
    },
    {
      title: "ملغاة",
      status: 1,
      is_delivered: null,
      is_payed_fully: null,
    },
    {
      title: "بانتظار التسليم",
      status: 3,
      is_delivered: false,
      is_payed_fully: null,
    },
    {
      title: "بانتظار الدفع",
      status: 3,
      is_payed_fully: false,
      is_delivered: null,
    },
  ],
  table: {
    thead: [
      "#",
      "عنوان الفاتورة",
      "رقم الفاتورة",
      "العميل",
      "إجمالي مبلغ الفاتورة",
      "المبلغ المدفوع",
      "المبلغ المتبقي",
      "التاريخ",
      "الحالة",
    ],
    tbody: [
      "title",
      "factor_number",
      "sub_user",
      "final_amount",
      "payed_amount",
      "remaining_amount",
      "due_date",
      "status",
    ],
    status_0: "ملغاة",
    status_1: "مسودة",
    status_2: "معتمدة",
    status_3: "مكتملة",
  },
  table_setting: {
    title: "إعدادات الجدول",
    inputs: [
      {
        key: "",
        label: "صف",
        required: false,
        type: "checkbox",
      },
      {
        key: "",
        label: "تاريخ الفاتورة",
        required: false,
        type: "checkbox",
      },
      {
        key: "",
        label: "رقم الفاتورة",
        required: false,
        type: "checkbox",
      },
      {
        key: "",
        label: "تاريخ الاستحقاق",
        required: false,
        type: "checkbox",
      },
      {
        key: "",
        label: "العميل",
        required: false,
        type: "checkbox",
      },
      {
        key: "",
        label: "المبلغ المدفوع",
        required: false,
        type: "checkbox",
      },
    ],
    submit_btn: "حفظ الإعدادات",
  },

  // create
  create: {
    title: "إضافة فاتورة بيع",
    pickWarehouse: "اختيار المستودع",
    saveButton: "حفظ",
    notFound: "يرجى البحث عن المنتج المطلوب.",
    inputs: [
      {
        key: "factor_number",
        label: "رقم الفاتورة",
        required: false,
        generator: "توليد رقم الفاتورة",
      },
      {
        key: "customer",
        label: "العميل",
        placeholder: "متنوع",
        required: false,
      },
      {
        key: "title",
        label: "العنوان",
        required: true,
      },
      {
        key: "account_id",
        label: "الحساب أو الصندوق المرتبط",
        placeholder: "اختيار الحساب أو الصندوق",
        required: false,
      },
    ],
    more_details: [
      {
        key: "payment_method",
        label: "طريقة الدفع",
        required: false,
        options: {
          list: [
            {
              key: "check",
              title: "شيك",
            },
            {
              key: "cash",
              title: "نقدي",
            },
            {
              key: "transfer",
              title: "تحويل بنكي",
            },
            {
              key: "ATM",
              title: "صراف آلي",
            },
          ],
        },
      },
      {
        key: "payment_kind",
        label: "نوع الدفع",
        options: {
          list: [
            {
              key: "full",
              title: "كامل",
            },
          ],
        },
        required: false,
      },
      {
        key: "sub_user_id",
        label: "بائع المنتج",
        required: false,
      },
      {
        key: "referral",
        label: "الإحالة",
        type: "number",
        required: false,
      },
      {
        key: "issue_date",
        label: "تاريخ الإصدار",
        type: "date",
        required: false,
      },
      {
        key: "due_date",
        label: "تاريخ الاستحقاق",
        type: "date",
        required: false,
      },
      {
        key: "is_payed_fully",
        label: "تكلفة المنتج",
        type: "boolean",
        required: false,
        options: {
          list: [
            {
              key: "true",
              title: "مدفوع",
            },
            {
              key: "false",
              title: "غير مدفوع",
            },
          ],
        },
      },
      {
        key: "is_delivered",
        label: "حالة تسليم المنتج",
        type: "boolean",
        required: false,
        options: {
          list: [
            {
              key: "true",
              title: "تم التسليم",
            },
            {
              key: "false",
              title: "لم يتم التسليم",
            },
          ],
        },
      },
      {
        key: "description",
        label: "الوصف",
        required: false,
      },
    ],
    more_details_button: "تطبيق مزيد من التفاصيل",
    less_details_button: "تطبيق تفاصيل أقل",
    proudctsTable: {
      count: "العدد",
      number_unit: "الوحدة",
      total_price: "الإجمالي",
      tax: "الضريبة",
      discount: "الخصم",
      final_price: "المبلغ النهائي",
      table: {
        thead: [
          "#",
          "المنتج أو الخدمة",
          "الباركود",
          "الوحدة",
          "العدد",
          "المستودع",
          "سعر الوحدة",
          "الضريبة",
          "الخصم",
          "الإجمالي",
        ],
        tbody: [
          "product_name",
          "barcode",
          "unit",
          "count",
          "warehouse_id",
          "unit_price",
          "tax_price",
          "discount_price",
          "total_price",
        ],
      },
      add_product_btn: "بحث عن منتج",
      discount_btn: "تطبيق الخصم",
      tax_btn: "تطبيق الضريبة",
      sell_price_btn: {
        title: "سعر البيع",
        options: [
          {
            key: "sell_price",
            title: "سعر البيع",
          },
          {
            key: "purchase_price",
            title: "سعر الشراء",
          },
        ],
      },
      file_btn: "تحميل ملف مرفق",
      print_btn: "طباعة للعميل",
      expence_btn: "تسجيل المصروفات",
      publish_btn: "إصدار",
      save_demo: "حفظ كمسودة",
    },
  },
};
