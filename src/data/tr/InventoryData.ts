import { TInventoryData } from "src/types/Inventory.type";

export const inventoryData: TInventoryData = {
  title: "Tüm Depoların Stoku",
  not_found: "Depo bulunamadı.",
  search_placeholder: "Depo Ara",
  filter: {
    title: "Depo Stoku Filtresi",
    submitButton: "Filtre Uygula",
    inputs: [
      {
        key: "category_id",
        label: "Kategori",
        required: false,
      },
      {
        key: "warehouse_id",
        label: "Depo Seçin",
        required: false,
      },
    ],
  },
  table: {
    thead: [
      "#",
      "Ürün Kodu",
      "Ürün Adı",
      "Barkod",
      "Kategori",
      "Birim",
      "Alış Fiyatı",
      "Satış Fiyatı",
      "Ana Depo",
      "Miktar",
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
