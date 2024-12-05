import { TCategoryData } from "src/types/Category.types";

export const CategoryData: TCategoryData = {
  notFound: "Category not found.",
  go_back: "Go back to the previous step",
  category_type: [
    {
      key: "goods",
      title: "goods",
    },
    {
      key: "services",
      title: "services",
    },
  ],
  tabs: [
    {
      id: 0,
      title: "Services",
      key: "services",
    },
    {
      id: 1,
      title: "Goods",
      key: "goods",
    },
  ],
  addCategoryBtn: "Add",
  dropown: {
    kind: "Select category type",
    label: "Select Category",
    notFound: "Category not found.",
  },
  create: {
    title: "Register New Category",
    addCategoryText: "Add to: ",
    addCategoryBtn: "Register Category",
  },
  update: {
    title: "Update",
  },
};
