import { TInventoryData } from "src/types/Inventory.type";

export const inventoryData: TInventoryData = {
  title: "جرد جميع المستودعات",
  not_found: "المستودع غير موجود.",
  search_placeholder: "ابحث عن مستودع",
  filter: {
    title: "فلتر جرد المستودعات",
    submitButton: "تطبيق الفلتر",
    inputs: [
      {
        key: "category_id",
        label: "الفئة",
        required: false,
      },
      {
        key: "warehouse_id",
        label: "اختر مستودعًا",
        required: false,
      },
    ],
  },
  table: {
    thead: [
      "#",
      "كود المنتج",
      "اسم المنتج",
      "الباركود",
      "الفئة",
      "الوحدة",
      "سعر الشراء",
      "سعر البيع",
      "المستودع الرئيسي",
      "العدد",
    ],
    tbody: [
      "product_code",
      "product_name",
      "product_barcode",
      "category_title",
      "product_unit",
      "product_purchase_price",
      "product_sell_price",
      "warehouse_id",
      "count",
    ],
  },
};
