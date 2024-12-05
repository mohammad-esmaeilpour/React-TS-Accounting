import { TCreateProductData, TFindProductsData, TProductsData } from "src/types/Product.types";

export const CreateGoodData: TCreateProductData = {
  title: "إضافة منتج",
  saveButton: "حفظ",
  searchPlaceholder: "ابحث عن المنتجات",
  notFound:
    "لإنشاء منتج أو خدمة، يرجى الانتقال إلى صفحة إضافة الخدمة أو المنتج.",
  imageUpload: {
    key: "image_src",
    label: "اختر صورة المنتج",
    alt: "اختر صورة المنتج",
  },
  inputs: [
    {
      key: "product_code",
      label: "رمز المنتج",
      generator: "توليد رمز المنتج",
      required: false,
    },
    {
      key: "product_name",
      label: "اسم المنتج",
      required: true,
    },
    {
      key: "barcode",
      label: "الرمز الشريطي",
      required: true,
    },
    {
      key: "category_id",
      label: "الفئة",
      required: true,
    },
  ],
  tabs: [
    {
      id: 0,
      title: "سعر المنتج",
      inputs: [
        {
          key: "sell_price",
          label: "سعر البيع",
          currency: true,
          type: "number",
          required: true,
        },
        {
          key: "purchase_price",
          label: "سعر الشراء",
          currency: true,
          type: "number",
          required: true,
        },
        {
          key: "wholesale_price",
          label: "سعر الجملة",
          currency: true,
          type: "number",
          required: true,
        },
        {
          key: "retail_price",
          label: "سعر التجزئة",
          currency: true,
          type: "number",
          required: true,
        },
      ],
    },
    {
      id: 1,
      title: "المعلومات العامة",
      inputs: [
        {
          key: "unit",
          label: "الوحدة",
          required: true,
        },
        {
          key: "manufacturer",
          label: "الشركة المصنعة",
          required: false,
        },
        {
          key: "product_model",
          required: false,
          label: "نموذج المنتج",
        },
      ],
    },
    {
      id: 2,
      title: "المخزون",
      inputs: [
        {
          key: "inventory_control",
          label: "تحكم المخزون",
          checkbox: "تحكم في مخزون المستودع",
          type: "boolean",
          required: false,
          dependentOnInput: "order_point",
        },
        {
          key: "order_point",
          label: "نقطة الطلب",
          type: "number",
          required: false,
          dependentOnCheckbox: "inventory_control",
        },
        {
          key: "base_count",
          label: "مقدار/عدد المخزون الأولي",
          type: "number",
          required: false,
        },
        {
          key: "base_warehouse",
          label: "مستودع المخزون الأولي",
          required: false,
        },
      ],
    },
    {
      id: 3,
      title: "ضريبة المنتج",
      inputs: [
        {
          key: "subject_to_sales_tax",
          label: "ضريبة المبيعات",
          checkbox: "المنتج خاضع لضريبة المبيعات",
          type: "boolean",
          required: false,
          dependentOnInput: "sales_tax_percent",
        },
        {
          key: "sales_tax_percent",
          label: "نسبة ضريبة المبيعات",
          placeholder: "%",
          type: "number",
          required: false,
          dependentOnCheckbox: "subject_to_sales_tax",
        },
        {
          key: "subject_to_purchase_tax",
          label: "ضريبة الشراء",
          checkbox: "المنتج خاضع لضريبة الشراء",
          type: "boolean",
          required: false,
          dependentOnInput: "purchase_tax_percent",
        },
        {
          key: "purchase_tax_percent",
          label: "نسبة ضريبة الشراء",
          placeholder: "%",
          type: "number",
          required: false,
          dependentOnCheckbox: "subject_to_purchase_tax",
        },
      ],
    },
  ],
};

export const CreateServiceData: TCreateProductData = {
  title: "إضافة خدمات",
  saveButton: "حفظ",
  searchPlaceholder: "ابحث عن المنتجات",

  notFound: "لم يتم العثور على المنتج.",
  imageUpload: {
    key: "image_src",
    label: "اختر صورة الخدمة",
    alt: "اختر صورة الخدمة",
  },
  inputs: [
    {
      key: "product_code",
      label: "رمز الخدمة",
      generator: "توليد رمز الخدمة",
      required: false,
    },
    {
      key: "product_name",
      label: "اسم الخدمة",
      required: true,
    },
    {
      key: "category_id",
      label: "الفئة",
      required: true,
    },
  ],
  tabs: [
    {
      id: 0,
      title: "سعر الخدمة",
      inputs: [
        {
          key: "sell_price",
          label: "سعر البيع",
          required: true,
          type: "number",
          currency: true,
        },
        {
          key: "purchase_price",
          required: true,
          label: "سعر الشراء",
          type: "number",
          currency: true,
        },
      ],
    },
    {
      id: 1,
      title: "المعلومات العامة",
      inputs: [
        {
          key: "unit",
          label: "الوحدة الرئيسية",
          required: true,
        },
        {
          key: "manufacturer",
          label: "الشركة المصنعة للخدمة",
          required: false,
        },
        {
          key: "product_model",
          required: false,
          label: "نموذج الخدمة",
        },
      ],
    },
    {
      id: 2,
      title: "ضريبة الخدمة",
      inputs: [
        {
          key: "subject_to_sales_tax",
          label: "ضريبة المبيعات",
          checkbox: "الخدمة خاضعة لضريبة المبيعات",
          type: "boolean",
          required: false,
          dependentOnInput: "sales_tax_percent",
        },
        {
          key: "sales_tax_percent",
          label: "نسبة ضريبة المبيعات",
          placeholder: "%",
          type: "number",
          required: false,
          dependentOnCheckbox: "subject_to_sales_tax",
        },
        {
          key: "subject_to_purchase_tax",
          label: "ضريبة الشراء",
          checkbox: "الخدمة خاضعة لضريبة الشراء",
          type: "boolean",
          required: false,
          dependentOnInput: "purchase_tax_percent",
        },
        {
          key: "purchase_tax_percent",
          label: "نسبة ضريبة الشراء",
          placeholder: "%",
          type: "number",
          required: false,
          dependentOnCheckbox: "subject_to_purchase_tax",
        },
      ],
    },
  ],
};

export const ProductsData: TProductsData = {
  title: "قائمة المنتجات والخدمات",
  excelButton: "أدخل اكسل",
  saveButton: "حفظ",
  searchPlaceholder: "ابحث عن المنتجات",
  notFound: "لم يتم العثور على المنتج.",
  sort: [
    { title: "عرض الخدمات", key: "services" },
    { title: "عرض المنتجات", key: "goods" },
  ],
  filter: {
    title: "فلتر المنتج",
    inputs: [
      {
        key: "start_date",
        type: "date",
        label: "من التاريخ",
        required: false,
      },
      {
        key: "end_date",
        type: "date",
        label: "إلى التاريخ",
        required: false,
      },
      {
        key: "category",
        label: "اختر الفئة",
        required: false,
      },
    ],
    submitFilter: "تطبيق الفلتر",
  },
  table: {
    thead: [
      "#",
      "الرمز",
      "الاسم",
      "الفئة",
      "الرمز الشريطي",
      "سعر البيع",
      "سعر الشراء",
      "الكمية",
      "الوحدة",
    ],
    tbody: [
      "product_code",
      "product_name",
      "category_title",
      "barcode",
      "sell_price",
      "purchase_price",
      "inventory_count",
      "unit",
    ],
  },
};

export const FindProductsData: TFindProductsData = {
  title: "إضافة منتج",
  counter: "رقم",
  add_to_quick: "إضافة إلى الوصول السريع",
  remove_from_quick: "إزالة من الوصول السريع",
  add_to_product: "إضافة إلى قائمة المنتجات",
  remove_from_product: "إزالة من قائمة المنتجات",
  tabs: [
    {
      id: 0,
      title: "الوصول السريع",
    },
    {
      id: 1,
      title: "الفئة",
    },
    {
      id: 2,
      title: "بحث",
    },
  ],
  quick_access: {
    id: 0,
    default_view: "لاختيار منتج، يرجى الانتقال إلى قسم الفئة أو البحث.",
    addButton: "تسجيل المنتجات في الفاتورة",
  },
  category: {
    id: 1,
    category_goods: "البضائع",
    category_services: "الخدمات",
  },
  search: {
    id: 2,
    inputs: [
      {
        key: "productCode",
        label: "رمز المنتج",
        required: false,
      },
      {
        key: "productName",
        label: "اسم المنتج",
        required: false,
      },
      {
        key: "barcode",
        label: "الرمز الشريطي",
        required: false,
      },
      {
        key: "category_id",
        label: "الفئة",
        required: false,
      },
    ],
    searchButton: "بحث عن المنتجات",
  },
};


