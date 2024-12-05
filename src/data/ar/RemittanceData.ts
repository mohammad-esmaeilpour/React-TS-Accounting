import {
  TCreateRemittanceData,
  TRemittanceData,
} from "src/types/Remittance.types";

export const RemittanceData: TRemittanceData = {
  title: "إيصالات المستودع والتحويلات",
  add_button: "إضافة تحويل",
  notFound: "لا توجد تحويلات.",
  searchPlaceholder: "ابحث عن تحويل",
  filter: {
    title: "فلتر التحويلات",
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
      {
        key: "originWarehouse",
        label: "اختر الأصل",
        placeholder: "اختر المستودع",
        required: false,
      },
      {
        key: "destinationWarehouse",
        label: "اختر الوجهة",
        placeholder: "اختر الوجهة",
        required: false,
      },
      {
        key: "remittanceKind",
        label: "نوع التحويل",
        required: false,
        options: {
          label: "اختر نوع التحويل",
          list: [
            { title: "شراء", key: "purchase" },
            { title: "بيع", key: "sell" },
            { title: "تحويل تحويل", key: "transfer" },
            { title: "تحويل إنتاج", key: "production" },
            { title: "تحويل إصلاح", key: "fix" },
            { title: "تحويل نفايات", key: "waste" },
            { title: "تحويل إضافات أساسية", key: "essentialExtras" },
            { title: "تحويل عجز أساسي", key: "essentialDeficits" },
          ],
        },
      },
      {
        key: "status",
        label: "الحالة",
        required: false,
        options: {
          label: "اختر الحالة",
          list: [
            {
              key: "1",
              title: "مكتمل",
            },
            {
              key: "2",
              title: "معلق للموافقة",
            },
          ],
        },
      },
      {
        key: "sub_user_id",
        label: "الشخص",
        placeholder: "اختر الشخص",
        required: false,
      },
    ],
  },
  sort: [
    {
      title: "عرض الكل",
      key: "",
    },
    {
      title: "التحويلات الواردة",
      key: "",
    },
    {
      title: "التحويلات الصادرة",
      key: "",
    },
  ],
  table: {
    thead: [
      "#",
      "الكود",
      "المستودع",
      "النوع",
      "الوصف",
      "الفاتورة",
      "الشخص",
      "الحالة",
      "التاريخ",
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
  title: "تسجيل تحويل المستودع",
  saveButton: "حفظ",
  inputs: [
    // {
    //   key: "remittance_id",
    //   label: "رقم التحويل",
    //   required: false,
    // },
    {
      key: "remittance_kind",
      label: "نوع التحويل",
      required: true,
      options: {
        label: "اختر نوع التحويل",
        list: [
          { title: "تحويل تحويل", key: "transfer" },
          { title: "تحويل إنتاج", key: "production" },
          { title: "تحويل إصلاح", key: "fix" },
          { title: "تحويل نفايات", key: "waste" },
          { title: "تحويل إضافات أساسية", key: "essentialExtras" },
          { title: "تحويل عجز أساسي", key: "essentialDeficits" },
        ],
      },
    },
    {
      key: "origin_warehouse",
      label: "مستودع الأصل",
      placeholder: "اختر مستودع الأصل",
      required: false,
    },
    {
      key: "destination_warehouse",
      label: "مستودع الوجهة",
      placeholder: "اختر مستودع الوجهة",
      required: false,
    },
    {
      key: "description",
      label: "وصف تحويل المستودع",
      required: false,
    },
  ],
  more_details: [
    {
      key: "status",
      label: "حالة تسليم البضائع",
      checkbox: "تم تسليم البضائع",
      required: false,
      type: "boolean",
    },
    {
      key: "delivery_date",
      label: "تاريخ التسليم",
      type: "date",
      required: false,
    },
    {
      key: "sub_user",
      label: "الشخص المسؤول",
      required: false,
    },
  ],
  details_button: "تطبيق المزيد من التفاصيل",
  proudctsTable: {
    count: "العدد",
    number_unit: "الوحدات",
    table: {
      thead: ["#", "الكود", "المنتج", "الوحدة", "العدد", "سعر البيع", "سعر الشراء"],
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
    add_button: "ابحث عن منتج",
  },
};
