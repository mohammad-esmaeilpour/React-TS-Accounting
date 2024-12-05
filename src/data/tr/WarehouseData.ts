import { TCreateWarehouseData, TWarehouseData } from "src/types/Warehouse.types";

export const WarehouseData: TWarehouseData = {
  title: "Depo Listesi",
  addButton: "Depo Ekle",
  modalTitle: "Depo Malları Listesi",
  notFound: "Depo bulunamadı.",
  warehuseKeeper: "Depo Sorumlusu",
  inventorySearch: "Malları Ara",
  searchPlaceholder: "Depo Ara",
  table: {
    thead: [
      "#",
      "Kod",
      "Ad",
      "Kategori",
      "Barkod",
      "Satış Fiyatı",
      "Alış Fiyatı",
      "Miktar",
      "Birim",
    ],
  },
};

export const CreateWarehouseData: TCreateWarehouseData = {
  title: "Yeni Depo Kaydı",
  saveButton: "Kaydet",
  editButton: "Düzenle",
  viewButton: "Malları Görüntüle",
  inputs: [
    {
      key: "barcode",
      label: "Depo Kodu",
      required: true,
      generator: "Kodu manuel oluştur",
    },
    {
      key: "title",
      label: "Depo Adı",
      required: true,
    },
    {
      key: "maintainer",
      label: "Depo Sorumlusu",
      required: true,
    },
  ],
};
