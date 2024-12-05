import { TInventoryData } from "src/types/Inventory.type";

export const inventoryData: TInventoryData = {
  title: "موجودی تمامی انبارها",
  not_found: "انبار یافت نشد.",
  search_placeholder: "جستوجو انبار",
  filter: {
    title: "فیلتر موجودی انبار",
    submitButton: "اعمال فیلتر",
    inputs: [
      {
        key: "category_id",
        label: "دسته بندی",
        required: false,
      },
      {
        key: "warehouse_id",
        label: "انتخاب انبار",
        required: false,
      },
    ],
  },
  table: {
    thead: [
      "#",
      "کد محصول",
      "نام محصول",
      "بارکد",
      "دسته بندی",
      "واحد",
      "قیمت خرید",
      "قیمت فروش",
      "انبار اصلی",
      "تعداد",
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
