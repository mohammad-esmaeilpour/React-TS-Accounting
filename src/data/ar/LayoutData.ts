import { TLayout } from "src/types/Layout.types";

export const layoutData: TLayout = {
  header: {
    title: "حاسبفا",
    membership: "عضوية ذهبية",
    logout: "تسجيل الخروج من الحساب",
  },
  sidebar: {
    searchPlaceholder: 'ابحث ...',
    navItems: [
      {
        title: "لوحة التحكم",
        url: "",
        icon: "home",
        role: "public",
      },
      {
        role: "purchase",
        title: "المشتريات",
        icon: "bag",
        dropdown: [
          {
            role: "register",
            title: "تسجيل فاتورة شراء",
            url: "/factor/purchase/create",
          },
          { role: "readAll", title: "عرض الفواتير", url: "/factor/purchase" },
        ],
      },
      {
        role: "sales",
        title: "المبيعات",
        icon: "coin",
        dropdown: [
          {
            role: "register",
            title: "تسجيل فاتورة مبيعات",
            url: "/factor/sales/create",
          },
          {
            role: "readAll",
            title: "عرض الفواتير",
            url: "/factor/sales",
          },
        ],
      },
      {
        role: "products",
        title: "المنتجات والخدمات",
        icon: "product",
        dropdown: [
          {
            role: "createGoods",
            title: "تسجيل منتج",
            url: "/products/goods/create",
          },
          {
            role: "createServices",
            title: "تسجيل خدمة",
            url: "/products/services/create",
          },
          {
            role: "readProducts",
            title: "عرض المنتجات والخدمات",
            url: "/products/goods",
          },
          {
            role: "createCategory",
            title: "الفئات",
            url: "/categories/services",
          },
        ],
      },
      {
        role: "expense",
        title: "المصروفات",
        icon: "cash-stack",
        dropdown: [
          {
            role: "register",
            title: "تسجيل مصروف",
            url: "/cash-flow/expense/create",
          },
          {
            role: "readAll",
            title: "عرض المصروفات",
            url: "/cash-flow/expense",
          },
        ],
      },
      {
        role: "income",
        title: "الإيرادات",
        icon: "cash",
        dropdown: [
          {
            role: "register",
            title: "تسجيل إيراد",
            url: "/cash-flow/income/create",
          },
          {
            role: "readAll",
            title: "عرض الإيرادات",
            url: "/cash-flow/income",
          },
        ],
      },
      {
        role: "warehouse",
        title: "المستودع",
        icon: "building-down",
        dropdown: [
          {
            role: "createWarehouses",
            title: "تسجيل حوالة",
            url: "/remittance/create",
          },
          {
            role: "readWarehouses",
            title: "المستودعات",
            url: "/warehouse",
          },
          {
            role: "readRemittances",
            title: "حوالات المستودع",
            url: "/remittance",
          },
          {
            role: "readInventory",
            title: "جرد جميع المستودعات",
            url: "/inventory",
          },
        ],
      },
      {
        role: "providers",
        title: "الموردين",
        icon: "card-check-list",
        dropdown: [
          {
            role: "create",
            title: "تسجيل مورد",
            url: "/people/provider/create",
          },
          {
            role: "readAll",
            title: "عرض الموردين",
            url: "/people/provider",
          },
        ],
      },
      {
        role: "customers",
        title: "العملاء",
        icon: "people",
        dropdown: [
          {
            role: "create",
            title: "تسجيل عميل",
            url: "/people/customer/create",
          },
          {
            role: "readAll",
            title: "عرض العملاء",
            url: "/people/customer",
          },
        ],
      },
      {
        role: "bankAndAccount",
        title: "البنوك",
        icon: "bank",
        dropdown: [
          { role: "readAccounts", title: "الحسابات", url: "/bank/account" },
          {
            role: "readAccounts",
            title: "سجل النقدية",
            url: "/bank/cash-register",
          },
          {
            role: "readAccounts",
            title: "البنكيين",
            url: "/bank/slanderer",
          },
        ],
      },
      {
        role: "settings",
        title: "الإعدادات",
        icon: "gear",
        dropdown: [
          {
            role: "manageBusinessInfo",
            title: "معلومات الشركة",
            url: "/info",
          },
          {
            role: "manageUsers",
            title: "إدارة المستخدمين",
            url: "/sub-user",
          },
          {
            role: "manageRoles",
            title: "إدارة الأدوار",
            url: "/roles",
          },
        ],
      },
    ],
    dateTitle: "اليوم",
  },
};
