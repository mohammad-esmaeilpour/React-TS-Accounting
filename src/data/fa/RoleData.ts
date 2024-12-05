import { TRoleData } from "src/types/Role.types";

export const RoleData: TRoleData = {
  title: "مدیریت نقش ها",
  notFound: "نقش یافت نشد.",
  addButton: "افزودن نقش",
  addPermissionButton: "ویرایش نقش",
  permissionLabel: "سطوح دسترسی",
  permissionTitle: "سطح",
  permissionsTranslate: [
    {
      title: "بانک",
      key: "bankAndAccount",
    },
    {
      title: "مشتری",
      key: "customers",
    },
    {
      title: "هزینه",
      key: "expense",
    },
    {
      title: "درآمد",
      key: "income",
    },
    {
      title: "محصولات",
      key: "products",
    },
    {
      title: "تامین کنندگان",
      key: "providers",
    },
    {
      title: "خرید",
      key: "purchase",
    },
    {
      title: "فروش",
      key: "sales",
    },
    {
      title: "تنظیمات",
      key: "setting",
    },
    {
      title: "انبار",
      key: "warehouse",
    },
  ],
  create: {
    title: "افزودن نقش جدید",
    saveButton: "ثبت نقش جدید",
    inputs: [
      {
        key: "name",
        label: "نام نقش",
        required: true,
      },
      {
        key: "accesses",
        label: "سطح دسترسی",
        required: false,
        options: {
          label: "انتخاب سطح دسترسی",
          list: [
            {
              title: "بانک",
              key: "bankAndAccount",
            },
            {
              title: "مشتری",
              key: "customers",
            },
            {
              title: "هزینه",
              key: "expense",
            },
            {
              title: "درآمد",
              key: "income",
            },
            {
              title: "محصولات",
              key: "products",
            },
            {
              title: "تامین کنندگان",
              key: "providers",
            },
            {
              title: "خرید",
              key: "purchase",
            },
            {
              title: "فروش",
              key: "sales",
            },
            {
              title: "تنظیمات",
              key: "setting",
            },
            {
              title: "انبار",
              key: "warehouse",
            },
          ],
        },
      },
      {
        key: "description",
        label: "شرح",
        required: false,
      },
    ],
  },
  update: {
    title: "به روز رسانی نقش",
    saveButton: "به روز رسانی",
  },
};
