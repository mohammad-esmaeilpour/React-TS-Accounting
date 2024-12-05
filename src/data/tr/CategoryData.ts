import { TCategoryData } from "src/types/Category.types";

export const CategoryData: TCategoryData = {
  notFound: "Kategori bulunamadı.",
  go_back: "Önceki adıma geri dön",
  category_type: [
    {
      key: "goods",
      title: "mallar",
    },
    {
      key: "services",
      title: "hizmetler",
    },
  ],
  tabs: [
    {
      id: 0,
      title: "Hizmetler",
      key: "services",
    },
    {
      id: 1,
      title: "Mallar",
      key: "goods",
    },
  ],
  addCategoryBtn: "Ekle",
  dropown: {
    kind: "Kategori türünü seçin",
    label: "Kategori Seçin",
    notFound: "Kategori bulunamadı.",
  },
  create: {
    title: "Yeni Kategori Kaydet",
    addCategoryText: "Ekle: ",
    addCategoryBtn: "Kategoriyi Kaydet",
  },
  update: {
    title: "Güncelle",
  },
};
