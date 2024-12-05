import { TRoleData } from "src/types/Role.types";

export const RoleData: TRoleData = {
  title: "إدارة الأدوار",
  notFound: "الدور غير موجود.",
  addButton: "إضافة دور",
  addPermissionButton: "تعديل الدور",
  permissionLabel: "مستويات الوصول",
  permissionTitle: "المستوى",
  permissionsTranslate: [
    {
      title: "البنك",
      key: "bankAndAccount",
    },
    {
      title: "العميل",
      key: "customers",
    },
    {
      title: "المصروفات",
      key: "expense",
    },
    {
      title: "الإيرادات",
      key: "income",
    },
    {
      title: "المنتجات",
      key: "products",
    },
    {
      title: "الموردين",
      key: "providers",
    },
    {
      title: "الشراء",
      key: "purchase",
    },
    {
      title: "المبيعات",
      key: "sales",
    },
    {
      title: "الإعدادات",
      key: "setting",
    },
    {
      title: "المستودع",
      key: "warehouse",
    },
  ],
  create: {
    title: "إضافة دور جديد",
    saveButton: "حفظ الدور الجديد",
    inputs: [
      {
        key: "name",
        label: "اسم الدور",
        required: true,
      },
      {
        key: "accesses",
        label: "مستوى الوصول",
        required: false,
        options: {
          label: "اختر مستوى الوصول",
          list: [
            {
              title: "البنك",
              key: "bankAndAccount",
            },
            {
              title: "العميل",
              key: "customers",
            },
            {
              title: "المصروفات",
              key: "expense",
            },
            {
              title: "الإيرادات",
              key: "income",
            },
            {
              title: "المنتجات",
              key: "products",
            },
            {
              title: "الموردين",
              key: "providers",
            },
            {
              title: "الشراء",
              key: "purchase",
            },
            {
              title: "المبيعات",
              key: "sales",
            },
            {
              title: "الإعدادات",
              key: "setting",
            },
            {
              title: "المستودع",
              key: "warehouse",
            },
          ],
        },
      },
      {
        key: "description",
        label: "الوصف",
        required: false,
      },
    ],
  },
  update: {
    title: "تحديث الدور",
    saveButton: "تحديث",
  },
};
