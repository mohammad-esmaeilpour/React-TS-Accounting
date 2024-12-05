import {
  TCreateProductData,
  TFindProductsData,
  TProductsData,
} from "src/types/Product.types";

export const CreateGoodData: TCreateProductData = {
  title: "افزودن کالا",
  saveButton: "ذخیره",
  searchPlaceholder: "جستوجو محصولات",
  notFound:
    "برای ساخت محصول یا خدمات به صفحه ی افزودن خدمات یا محصول مراجعه کنید.",
  imageUpload: {
    key: "image_src",
    label: "انتخاب تصویر کالا",
    alt: "انتخاب تصویر کالا",
  },
  inputs: [
    {
      key: "product_code",
      label: "کد کالا",
      generator: "ساختن کد کالا",
      required: false,
    },
    {
      key: "product_name",
      label: "نام کالا",
      required: true,
    },
    {
      key: "barcode",
      label: "بار کد",
      required: true,
    },
    {
      key: "category_id",
      label: "دسته بندی",
      required: true,
    },
  ],
  tabs: [
    {
      id: 0,
      title: "قیمت کالا",
      inputs: [
        {
          key: "sell_price",
          label: "قیمت فروش",
          currency: true,
          type: "number",
          required: true,
        },
        {
          key: "purchase_price",
          label: "قیمت خرید",
          currency: true,
          type: "number",
          required: true,
        },
        {
          key: "wholesale_price",
          label: "قیمت عمده",
          currency: true,
          type: "number",
          required: true,
        },
        {
          key: "retail_price",
          label: "قیمت خرده",
          currency: true,
          type: "number",
          required: true,
        },
      ],
    },
    {
      id: 1,
      title: "اطلاعات عمومی",
      inputs: [
        {
          key: "unit",
          label: "واحد",
          required: true,
        },
        {
          key: "manufacturer",
          label: "سازنده کالا",
          required: false,
        },
        {
          key: "product_model",
          required: false,
          label: "مدل کالا",
        },
      ],
    },
    {
      id: 2,
      title: "موجودی کالا",
      inputs: [
        {
          key: "inventory_control",
          label: "کنترل موجودی",
          checkbox: "موجودی انبار کنترل شود",
          type: "boolean",
          required: false,
          dependentOnInput: "order_point",
        },
        {
          key: "order_point",
          label: "نقطه سفارش",
          type: "number",
          required: false,
          dependentOnCheckbox: "inventory_control",
        },
        {
          key: "base_count",
          label: "مقدار/تعداد موجودی اولیه",
          type: "number",
          required: false,
        },
        {
          key: "base_warehouse",
          label: "انبار موجودی اولیه",
          required: false,
        },
      ],
    },
    {
      id: 3,
      title: "مالیات کالا",
      inputs: [
        {
          key: "subject_to_sales_tax",
          label: "مالیات فروش",
          checkbox: "کالا مشمول مالیات فروش باشد",
          type: "boolean",
          required: false,
          dependentOnInput: "sales_tax_percent",
        },
        {
          key: "sales_tax_percent",
          label: "درصد مالیات فروش",
          placeholder: "%",
          type: "number",
          required: false,
          dependentOnCheckbox: "subject_to_sales_tax",
        },
        {
          key: "subject_to_purchase_tax",
          label: "مالیات خرید",
          checkbox: "کالا مشمول مالیات خرید باشد",
          type: "boolean",
          required: false,
          dependentOnInput: "purchase_tax_percent",
        },
        {
          key: "purchase_tax_percent",
          label: "درصد مالیات خرید",
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
  title: "افزودن خدمات",
  saveButton: "ذخیره",
  searchPlaceholder: "جستوجو محصولات",

  notFound: "محصولی یافت نشد.",
  imageUpload: {
    key: "image_src",
    label: "انتخاب تصویر خدمات",
    alt: "انتخاب تصویر خدمات",
  },
  inputs: [
    {
      key: "product_code",
      label: "کد خدمات",
      generator: "ساختن کد خدمات",
      required: false,
    },
    {
      key: "product_name",
      label: "نام خدمات",
      required: true,
    },
    {
      key: "category_id",
      label: "دسته بندی",
      required: true,
    },
  ],
  tabs: [
    {
      id: 0,
      title: "قیمت خدمات",
      inputs: [
        {
          key: "sell_price",
          label: "قیمت فروش",
          required: true,
          type: "number",
          currency: true,
        },
        {
          key: "purchase_price",
          required: true,
          label: "قیمت خرید",
          type: "number",
          currency: true,
        },
      ],
    },
    {
      id: 1,
      title: "اطلاعات عمومی",
      inputs: [
        {
          key: "unit",
          label: "واحد اصلی",
          required: true,
        },
        {
          key: "manufacturer",
          label: "سازنده خدمات",
          required: false,
        },
        {
          key: "product_model",
          required: false,
          label: "مدل خدمات",
        },
      ],
    },
    {
      id: 2,
      title: "مالیات کالا",
      inputs: [
        {
          key: "subject_to_sales_tax",
          label: "مالیات فروش",
          checkbox: "خدمات مشمول مالیات فروش باشد",
          type: "boolean",
          required: false,
          dependentOnInput: "sales_tax_percent",
        },
        {
          key: "sales_tax_percent",
          label: "درصد مالیات فروش",
          placeholder: "%",
          type: "number",
          required: false,
          dependentOnCheckbox: "subject_to_sales_tax",
        },
        {
          key: "subject_to_purchase_tax",
          label: "مالیات خرید",
          checkbox: "خدمات مشمول مالیات خرید باشد",
          type: "boolean",
          required: false,
          dependentOnInput: "purchase_tax_percent",
        },
        {
          key: "purchase_tax_percent",
          label: "درصد مالیات خرید",
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
  title: "لیست کالا و خدمات",
  saveButton: "ذخیره",
  searchPlaceholder: "جستوجو محصولات",
  excelButton: "وارد کردن اکسل",
  notFound: "محصول یافت نشد.",
  sort: [
    { title: "نمایش خدمات", key: "services" },
    { title: "نمایش کالا", key: "goods" },
  ],
  filter: {
    title: "فیلتر محصولات",
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
      {
        key: "category",
        label: "انتخاب دسته بندی",
        required: false,
      },
    ],
    submitFilter: "اعمال فیلتر",
  },
  table: {
    thead: [
      "#",
      "کد",
      "نام",
      "دسته بندی",
      "بارکد",
      "قیمت فروش",
      "قیمت خرید",
      "تعداد",
      "واحد",
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
  title: "اضافه کردن محصول",
  counter: "عدد",
  add_to_quick: "اضافه کردن به دسترسی سریع",
  remove_from_quick: "پاک کردن از دسترسی سریع",
  add_to_product: "اضافه کردن به لیست محصولات",
  remove_from_product: "پاک کردن از لیست محصولات",
  tabs: [
    {
      id: 0,
      title: "دسترسی سریع",
    },
    {
      id: 1,
      title: "دسته بندی",
    },
    {
      id: 2,
      title: "جستوجو",
    },
  ],
  quick_access: {
    id: 0,
    default_view: "برای انتخاب کالا از بخش دسته بندی یا جستوجواقدم نمایید.",
    addButton: "ثبت محصولات در فاکتور",
  },
  category: {
    id: 1,
    category_goods: "کالا",
    category_services: "خدمات",
  },
  search: {
    id: 2,
    inputs: [
      {
        key: "productCode",
        label: "کد کالا",
        required: false,
      },
      {
        key: "productName",
        label: "نام کالا",
        required: false,
      },
      {
        key: "barcode",
        label: "بار کد",
        required: false,
      },
      {
        key: "category_id",
        label: "دسته بندی",
        required: false,
      },
    ],
    searchButton: "جستوجوی کالا",
  },
};
