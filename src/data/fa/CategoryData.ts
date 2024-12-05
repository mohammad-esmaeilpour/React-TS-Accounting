import { TCategoryData } from "src/types/Category.types";

export const CategoryData: TCategoryData = {
  notFound: "دسته بندی یافت نشد.",
  go_back: "بازگشت به مرحله قبل",
  tabs: [
    {
      id: 0,
      title: "خدمات",
      key: "services",
    },
    {
      id: 1,
      title: "کالاها",
      key: "goods",
    },
  ],
  category_type: [
    {
      key: "goods",
      title: "کالاها",
    },
    {
      key: "services",
      title: "خدمات",
    },
  ],
  addCategoryBtn: "افزودن",
  dropown: {
    kind: "انتخاب نوع دسته بندی",
    label: "انتخاب دسته بندی",
    notFound: "دسته بندی یافت نشد.",
  },
  create: {
    title: "ثبت دسته بندی جدید",
    addCategoryText: "اضافه کردن به : ",
    addCategoryBtn: "ثبت دسته بندی",
  },
  update: {
    title: "به روز رسانی",
  },
};
