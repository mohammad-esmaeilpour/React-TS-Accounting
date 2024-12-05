import { TCategoryData } from "src/types/Category.types";

export const CategoryData: TCategoryData = {
  notFound: "الفئة غير موجودة.",
  go_back: "العودة إلى الخطوة السابقة",
  category_type: [
    {
      key: "goods",
      title: "البضائع",
    },
    {
      key: "services",
      title: "الخدمات",
    },
  ],
  tabs: [
    {
      id: 0,
      title: "الخدمات",
      key: "services",
    },
    {
      id: 1,
      title: "البضائع",
      key: "goods",
    },
  ],
  addCategoryBtn: "إضافة",
  dropown: {
    kind: "اختر نوع الفئة",
    label: "اختر الفئة",
    notFound: "الفئة غير موجودة.",
  },
  create: {
    title: "تسجيل فئة جديدة",
    addCategoryText: "إضافة إلى: ",
    addCategoryBtn: "تسجيل الفئة",
  },
  update: {
    title: "تحديث",
  },
};
