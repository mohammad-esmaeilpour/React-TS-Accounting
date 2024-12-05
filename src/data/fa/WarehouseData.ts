import { TCreateWarehouseData, TWarehouseData } from "src/types/Warehouse.types";

export const WarehouseData: TWarehouseData = {
  title: "لیست انبارها",
  addButton: "افزودن انبار",
  modalTitle: "لیست کالاهای انبار",
  notFound: "انباری یافت نشد.",
  warehuseKeeper: "انبار دار",
  inventorySearch: "جستوجو کالا",
  searchPlaceholder: "جستوجو انبار",
  table: {
    thead: [
      "#",
      "کد",
      "نام",
      "دسته بندی",
      "بارکد",
      "قیمت فروش",
      "قیمت خرید",
      "تعداد",
      "واحد",
    ],
  },
};

export const CreateWarehouseData: TCreateWarehouseData = {
  title: "ثبت انبار جدید",
  saveButton: "ذخیره",
  editButton: "ویرایش",
  viewButton: "نمایش کالا",
  inputs: [
    {
      key: "barcode",
      label: "کد انبار",
      required: true,
      generator: "ساخت کد به صورت دستی",
    },
    {
      key: "title",
      label: "نام انبار",
      required: true,
    },
    {
      key: "maintainer",
      label: "انباردار",
      required: true,
    },
  ],
};
