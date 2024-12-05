import { TCreateWarehouseData, TWarehouseData } from "src/types/Warehouse.types";

export const WarehouseData: TWarehouseData = {
  title: "قائمة المستودعات",
  addButton: "إضافة مستودع",
  modalTitle: "قائمة بضائع المستودع",
  notFound: "المستودع غير موجود.",
  warehuseKeeper: "مسؤول المستودع",
  inventorySearch: "بحث عن البضائع",
  searchPlaceholder: "ابحث عن مستودع",
  table: {
    thead: [
      "#",
      "الرمز",
      "الاسم",
      "الفئة",
      "الباركود",
      "سعر البيع",
      "سعر الشراء",
      "الكمية",
      "الوحدة",
    ],
  },
};

export const CreateWarehouseData: TCreateWarehouseData = {
  title: "تسجيل مستودع جديد",
  saveButton: "حفظ",
  editButton: "تعديل",
  viewButton: "عرض البضائع",
  inputs: [
    {
      key: "barcode",
      label: "رمز المستودع",
      required: true,
      generator: "إنشاء الرمز يدويًا",
    },
    {
      key: "title",
      label: "اسم المستودع",
      required: true,
    },
    {
      key: "maintainer",
      label: "مسؤول المستودع",
      required: true,
    },
  ],
};
