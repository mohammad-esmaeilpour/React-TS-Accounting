import { TFactorData } from "src/types/Factor.types";

export const PurchaseFactorData: TFactorData = {
  title: "فاکتور های خرید",
  add_btn: "افزودن فاکتور",
  input_placeholder: "جستوجوی فاکتور",
  not_found: "فاکتوری یافت نشد.",
  filter: {
    title: "فیلتر فاکتورها",
    inputs: [
      {
        key: "start_issue_date",
        label: "تاریخ شروع فاکتور",
        required: false,
        type: "date",
      },
      {
        key: "end_issue_date",
        label: "الی تاریخ اتمام فاکتور",
        required: false,
        type: "date",
      },
      {
        key: "start_due_date",
        label: "تاریخ شروع سررسید",
        required: false,
        type: "date",
      },
      {
        key: "end_due_date",
        label: "الی تاریخ اتمام سررسید",
        required: false,
        type: "date",
      },
      {
        key: "customer",
        label: "فروشنده",
        required: false,
      },
    ],
    submit_btn: "اعمال فیلتر",
  },
  sort: [
    {
      title: "نمایش همه",
      status: null,
      is_delivered: null,
      is_payed_fully: null,
    },
    {
      title: "تحویل داده شده",
      status: 3,
      is_delivered: null,
      is_payed_fully: null,
    },
    {
      title: "پرداخت شده",
      status: 3,
      is_delivered: null,
      is_payed_fully: null,
    },
    {
      title: "پیش نویس",
      status: 1,
      is_delivered: null,
      is_payed_fully: null,
    },
    {
      title: "صادر شده",
      status: 3,
      is_delivered: null,
      is_payed_fully: null,
    },
    {
      title: "ابطال شده",
      status: 1,
      is_delivered: null,
      is_payed_fully: null,
    },
    {
      title: "در انتطار تحویل",
      status: 3,
      is_delivered: false,
      is_payed_fully: null,
    },
    {
      title: "در انتظار پرداخت",
      status: 3,
      is_payed_fully: false,
      is_delivered: null,
    },
  ],
  table: {
    thead: [
      "#",
      "عنوان فاکتور",
      "شماره فاکتور",
      "فروشنده",
      "مبلغ کل فاکتور",
      "مبلغ پرداخت شده",
      "مبلغ باقی مانده",
      "تاریخ",
      "وضعیت",
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
    status_0: "شده لغو",
    status_1: "پیش نویس",
    status_2: "تایید شده",
    status_3: "انجام شده",
  },
  table_setting: {
    title: "تنظیمات جدول",
    inputs: [
      {
        key: "",
        label: "ردیف",
        required: false,
        type: "checkbox",
      },
      {
        key: "",
        label: "تاریخ فاکتور",
        required: false,
        type: "checkbox",
      },
      {
        key: "",
        label: "شماره فاکتور",
        required: false,
        type: "checkbox",
      },
      {
        key: "",
        label: "تاریخ سررسید",
        required: false,
        type: "checkbox",
      },
      {
        key: "",
        label: "فروشنده",
        required: false,
        type: "checkbox",
      },
      {
        key: "",
        label: "مبلغ پرداخت",
        required: false,
        type: "checkbox",
      },
    ],
    submit_btn: "ثبت تنظیمات",
  },

  // create
  create: {
    title: "افزودن فاکتور خرید",
    pickWarehouse: "انتخاب انبار",
    saveButton: "ذخیره",
    notFound: "لطفا کالای مورد نظر را جستوجو کنید.",
    inputs: [
      {
        key: "factor_number",
        label: "شماره فاکتور",
        required: false,
        generator: "ساخت شماره فاکتور",
      },
      {
        key: "customer",
        label: "مشتری",
        placeholder: "متفرقه",
        required: false,
      },
      {
        key: "title",
        label: "عنوان",
        required: true,
      },
      {
        key: "account_id",
        label: "حساب یا صندوق مربوطه",
        placeholder: "انتخاب حساب یا صندوق",
        required: false,
      },
    ],
    more_details: [
      {
        key: "payment_method",
        label: "روش پرداخت",
        required: false,
        options: {
          list: [
            {
              key: "check",
              title: "چک",
            },
            {
              key: "cash",
              title: "نقد",
            },
            {
              key: "transfer",
              title: "انتقال بانکی",
            },
            {
              key: "ATM",
              title: "خود پرداز",
            },
          ],
        },
      },
      {
        key: "payment_kind",
        label: "نوع پرداخت",
        options: {
          list: [
            {
              key: "full",
              title: "کامل",
            },
          ],
        },
        required: false,
      },
      {
        key: "sub_user_id",
        label: "فروشنده محصول",
        required: false,
      },
      {
        key: "referral",
        label: "ارجاع",
        type: "number",
        required: false,
      },
      {
        key: "issue_date",
        label: "تاریخ صدور",
        type: "date",
        required: false,
      },
      {
        key: "due_date",
        label: "تاریخ سررسید",
        type: "date",
        required: false,
      },
      {
        key: "is_payed_fully",
        label: "هزینه محصول",
        type: "boolean",
        required: false,
        options: {
          list: [
            {
              key: "true",
              title: "پرداخت شده",
            },
            {
              key: "false",
              title: "پرداخت نشده",
            },
          ],
        },
      },
      {
        key: "is_delivered",
        label: "وضعیت تحویل محصول",
        type: "boolean",
        required: false,
        options: {
          list: [
            {
              key: "true",
              title: "تحویل داده شده",
            },
            {
              key: "false",
              title: "تحویل داده نشده",
            },
          ],
        },
      },
      {
        key: "description",
        label: "توضیحات",
        required: false,
      },
    ],
    more_details_button: "اعمال جزئیات بیشتر",
    less_details_button: "اعمال جزئیات کمتر",
    proudctsTable: {
      count: "تعداد",
      number_unit: "عدد",
      total_price: "مجموع قیمت",
      tax: "مالیات",
      discount: "تخفیف",
      final_price: "مبلغ نهایی",
      table: {
        thead: [
          "#",
          "کالا یا خدمات",
          "بارکد",
          "واحد",
          "تعداد",
          "انبار",
          "مبلغ واحد",
          "مالیات",
          "تخفیف",
          "مبلغ کل",
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
      add_product_btn: "جستوجوی کالا",
      discount_btn: "اعمال تخفیف",
      tax_btn: "اعمال مالیات",
      sell_price_btn: {
        title: "قیمت فروش",
        options: [
          {
            key: "sell_price",
            title: "قیمت فروش",
          },
          {
            key: "purchase_price",
            title: "قیمت خرید",
          },
        ],
      },
      file_btn: "اپلود فایل ضمیمه",
      print_btn: "چاپ برای مشتری",
      expence_btn: "ثبت هزینه",
      publish_btn: "صادر کردن",
      save_demo: "دخیره به عنوان پیش نویس",
    },
  },
};

export const SalesFactorData: TFactorData = {
  title: "فاکتور های فروش",
  add_btn: "افزودن فاکتور",
  input_placeholder: "جستوجوی فاکتور",
  not_found: "فاکتوری یافت نشد.",
  filter: {
    title: "فیلتر فاکتورها",
    inputs: [
      {
        key: "start_issue_date",
        label: "تاریخ شروع فاکتور",
        required: false,
        type: "date",
      },
      {
        key: "end_issue_date",
        label: "الی تاریخ اتمام فاکتور",
        required: false,
        type: "date",
      },
      {
        key: "start_due_date",
        label: "تاریخ شروع سررسید",
        required: false,
        type: "date",
      },
      {
        key: "end_due_date",
        label: "الی تاریخ اتمام سررسید",
        required: false,
        type: "date",
      },
      {
        key: "customer",
        label: "فروشنده",
        required: false,
      },
    ],
    submit_btn: "اعمال فیلتر",
  },
  sort: [
    {
      title: "نمایش همه",
      status: null,
      is_delivered: null,
      is_payed_fully: null,
    },
    {
      title: "تحویل داده شده",
      status: 3,
      is_delivered: null,
      is_payed_fully: null,
    },
    {
      title: "پرداخت شده",
      status: 3,
      is_delivered: null,
      is_payed_fully: null,
    },
    {
      title: "پیش نویس",
      status: 1,
      is_delivered: null,
      is_payed_fully: null,
    },
    {
      title: "صادر شده",
      status: 3,
      is_delivered: null,
      is_payed_fully: null,
    },
    {
      title: "ابطال شده",
      status: 1,
      is_delivered: null,
      is_payed_fully: null,
    },
    {
      title: "در انتطار تحویل",
      status: 3,
      is_delivered: false,
      is_payed_fully: null,
    },
    {
      title: "در انتظار پرداخت",
      status: 3,
      is_payed_fully: false,
      is_delivered: null,
    },
  ],
  table: {
    thead: [
      "#",
      "عنوان فاکتور",
      "شماره فاکتور",
      "فروشنده",
      "مبلغ کل فاکتور",
      "مبلغ پرداخت شده",
      "مبلغ باقی مانده",
      "تاریخ",
      "وضعیت",
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
    status_0: "شده لغو",
    status_1: "پیش نویس",
    status_2: "تایید شده",
    status_3: "انجام شده",
  },
  table_setting: {
    title: "تنظیمات جدول",
    inputs: [
      {
        key: "",
        label: "ردیف",
        required: false,
        type: "checkbox",
      },
      {
        key: "",
        label: "تاریخ فاکتور",
        required: false,
        type: "checkbox",
      },
      {
        key: "",
        label: "شماره فاکتور",
        required: false,
        type: "checkbox",
      },
      {
        key: "",
        label: "تاریخ سررسید",
        required: false,
        type: "checkbox",
      },
      {
        key: "",
        label: "فروشنده",
        required: false,
        type: "checkbox",
      },
      {
        key: "",
        label: "مبلغ پرداخت",
        required: false,
        type: "checkbox",
      },
    ],
    submit_btn: "ثبت تنظیمات",
  },

  // create
  create: {
    title: "افزودن فاکتور فروش",
    saveButton: "ذخیره",
    notFound: "لطفا کالای مورد نظر را جستوجو کنید.",
    pickWarehouse: "انتخاب انبار",
    inputs: [
      {
        key: "factor_number",
        label: "شماره فاکتور",
        required: false,
        generator: "ساخت شماره فاکتور",
      },
      {
        key: "customer",
        label: "مشتری",
        placeholder: "متفرقه",
        required: false,
      },
      {
        key: "title",
        label: "عنوان",
        required: true,
      },
      {
        key: "account_id",
        label: "حساب یا صندوق مربوطه",
        placeholder: "انتخاب حساب یا صندوق",
        required: false,
      },
    ],
    more_details: [
      {
        key: "payment_method",
        label: "روش پرداخت",
        required: false,
        options: {
          list: [
            {
              key: "check",
              title: "چک",
            },
            {
              key: "cash",
              title: "نقد",
            },
            {
              key: "transfer",
              title: "انتقال بانکی",
            },
            {
              key: "ATM",
              title: "خود پرداز",
            },
          ],
        },
      },
      {
        key: "payment_kind",
        label: "نوع پرداخت",
        options: {
          list: [
            {
              key: "full",
              title: "کامل",
            },
          ],
        },
        required: false,
      },
      {
        key: "sub_user_id",
        label: "فروشنده محصول",
        required: false,
      },
      {
        key: "referral",
        label: "ارجاع",
        type: "number",
        required: false,
      },
      {
        key: "issue_date",
        label: "تاریخ صدور",
        type: "date",
        required: false,
      },
      {
        key: "due_date",
        label: "تاریخ سررسید",
        type: "date",
        required: false,
      },
      {
        key: "is_payed_fully",
        label: "هزینه محصول",
        type: "boolean",
        required: false,
        options: {
          list: [
            {
              key: "true",
              title: "پرداخت شده",
            },
            {
              key: "false",
              title: "پرداخت نشده",
            },
          ],
        },
      },
      {
        key: "is_delivered",
        label: "وضعیت تحویل محصول",
        type: "boolean",
        required: false,
        options: {
          list: [
            {
              key: "true",
              title: "تحویل داده شده",
            },
            {
              key: "false",
              title: "تحویل داده نشده",
            },
          ],
        },
      },
      {
        key: "description",
        label: "توضیحات",
        required: false,
      },
    ],
    more_details_button: "اعمال جزئیات بیشتر",
    less_details_button: "اعمال جزئیات کمتر",
    proudctsTable: {
      count: "تعداد",
      number_unit: "عدد",
      total_price: "مجموع قیمت",
      tax: "مالیات",
      discount: "تخفیف",
      final_price: "مبلغ نهایی",
      table: {
        thead: [
          "#",
          "کالا یا خدمات",
          "بارکد",
          "واحد",
          "تعداد",
          "مبلغ واحد",
          "مالیات",
          "تخفیف",
          "مبلغ کل",
        ],
        tbody: [
          "product_name",
          "barcode",
          "unit",
          "count",
          "unit_price",
          "tax_price",
          "discount_price",
          "total_price",
        ],
      },
      add_product_btn: "جستجوی کالا",
      discount_btn: "اعمال تخفیف",
      tax_btn: "اعمال مالیات",
      sell_price_btn: {
        title: "قیمت فروش",
        options: [
          {
            key: "sell_price",
            title: "قیمت فروش",
          },
          {
            key: "purchase_price",
            title: "قیمت خرید",
          },
        ],
      },
      file_btn: "اپلود فایل ضمیمه",
      print_btn: "چاپ برای مشتری",
      expence_btn: "ثبت هزینه",
      publish_btn: "صادر کردن",
      save_demo: "دخیره به عنوان پیش نویس",
    },
  },
};
