import {
  TCreateRemittanceData,
  TRemittanceData,
} from "src/types/Remittance.types";

export const RemittanceData: TRemittanceData = {
  title: "رسید و حواله های انبار",
  add_button: "افزودن حواله",
  notFound: "حواله ای یافت نشد.",
  searchPlaceholder: "جستوجو حواله",
  filter: {
    title: "فیلتر حواله",
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
      {
        key: "originWarehouse",
        label: "انتخاب مبدا",
        placeholder: "انتخاب انبار",
        required: false,
      },
      {
        key: "destinationWarehouse",
        label: "انتخاب مقصد",
        placeholder: "انتخاب مقصد",
        required: false,
      },
      {
        key: "remittanceKind",
        label: "نوع حواله",
        required: false,
        options: {
          label: "انتخاب نوع حواله",
          list: [
            { title: "خرید", key: "purchase" },
            { title: "فروش", key: "sell" },
            { title: "حواله انتقال", key: "transfer" },
            { title: "حواله تولید", key: "production" },
            { title: "حواله تعمیرات", key: "fix" },
            { title: "حواله ضایعات", key: "waste" },
            { title: "حواله اضافیات ضروری", key: "essentialExtras" },
            { title: "حواله کسریات ضروری", key: "essentialDeficits" },
          ],
        },
      },
      {
        key: "status",
        label: "وضعیت",
        required: false,
        options: {
          label: "انتخاب وضعیت",
          list: [
            {
              key: "1",
              title: "انجام شده",
            },
            {
              key: "2",
              title: "در انتظار تایید",
            },
          ],
        },
      },
      {
        key: "sub_user_id",
        label: "شخص",
        placeholder: "انتخاب شخص",
        required: false,
      },
    ],
  },
  sort: [
    {
      title: "نمایش همه",
      key: "",
    },
    {
      title: "حواله های ورودی",
      key: "",
    },
    {
      title: "حواله های خروجی",
      key: "",
    },
  ],
  table: {
    thead: [
      "#",
      "کد",
      "انبار",
      "نوع",
      "توضیحات",
      "فاکتور",
      "شخص",
      "وضعیت",
      "تاریخ",
    ],
    tbody: [
      "id",
      "origin_warehouse",
      "remittance_kind",
      "description",
      "factor",
      "sub_user",
      "delivery_date",
      "status",
    ],
  },
};

export const CreateRemittanceData: TCreateRemittanceData = {
  title: "ثبت حواله انبار",
  saveButton: "ذخیره",
  inputs: [
    // {
    //   key: "remittance_id",
    //   label: "شماره حواله",
    //   required: false,
    // },
    {
      key: "remittance_kind",
      label: "نوع حواله",
      required: true,
      options: {
        label: "انتخاب نوع حواله",
        list: [
          { title: "حواله انتقال", key: "transfer" },
          { title: "حواله تولید", key: "production" },
          { title: "حواله تعمیرات", key: "fix" },
          { title: "حواله ضایعات", key: "waste" },
          { title: "حواله اضافیات ضروری", key: "essentialExtras" },
          { title: "حواله کسریات ضروری", key: "essentialDeficits" },
        ],
      },
    },
    {
      key: "origin_warehouse",
      label: "انبار مبدا",
      placeholder: "انتخاب انبار مبدا",
      required: false,
    },
    {
      key: "destination_warehouse",
      label: "انبار مقصد",
      placeholder: "انتخاب انبار مقصد",
      required: false,
    },
    {
      key: "description",
      label: "توضیحات حواله انبار",
      required: false,
    },
  ],
  more_details: [
    {
      key: "status",
      label: "وضعیت تحویل کالا",
      checkbox: "کالا تحویل داده شده است",
      required: false,
      type: "boolean",
    },
    {
      key: "delivery_date",
      label: "تاریخ تحویل",
      type: "date",
      required: false,
    },
    {
      key: "sub_user",
      label: "متصدی",
      required: false,
    },
  ],
  details_button: "اعمال جزئیات بیشتر",
  proudctsTable: {
    count: "تعداد",
    number_unit: "عدد",
    table: {
      thead: ["#", "کد", "کالا", "واحد", "تعداد", "قیمت فروش", "قیمت خرید"],
      tbody: [
        "product_code",
        "product_name",
        "unit",
        "inventory_count",
        "unit_price",
        "tax_price",
        "discount_price",
        "total_price",
      ],
    },
    add_button: "جستوجو کالا",
  },
};
