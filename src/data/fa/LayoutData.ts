import { TLayout } from "src/types/Layout.types";

export const layoutData: TLayout = {
  header: {
    title: "حسابفا",
    membership: "عضویت طلایی",
    logout: "خروج از حساب کاربری",
  },
  sidebar: {
    searchPlaceholder:'جستوجو ...',
    navItems: [
      {
        title: "داشبورد",
        url: "",
        icon: "home",
        role: "public",
      },
      {
        role: "purchase",
        title: "خرید",
        icon: "bag",
        dropdown: [
          {
            role: "register",
            title: "ثبت فاکتور خرید",
            url: "/factor/purchase/create",
          },
          { role: "readAll", title: "دیدن فاکتور ها", url: "/factor/purchase" },
        ],
      },
      {
        role: "sales",
        title: "فروش",
        icon: "coin",
        dropdown: [
          {
            role: "register",
            title: "ثبت فاکتور فروش",
            url: "/factor/sales/create",
          },
          {
            role: "readAll",
            title: "دیدن فاکتور ها",
            url: "/factor/sales",
          },
        ],
      },
      {
        role: "products",
        title: "محصولات و خدمات",
        icon: "product",
        dropdown: [
          {
            role: "createGoods",
            title: "ثبت محصول",
            url: "/products/goods/create",
          },
          {
            role: "createServices",
            title: "ثبت خدمات",
            url: "/products/services/create",
          },
          {
            role: "readProducts",
            title: "دیدن محصولات و خدمات",
            url: "/products/goods",
          },
          {
            role: "createCategory",
            title: "دسته بندی ها",
            url: "/categories/services",
          },
        ],
      },
      {
        role: "expense",
        title: "هزینه",
        icon: "cash-stack",
        dropdown: [
          {
            role: "register",
            title: "ثبت هزینه",
            url: "/cash-flow/expense/create",
          },
          {
            role: "readAll",
            title: "دیدن هزینه ها",
            url: "/cash-flow/expense",
          },
        ],
      },
      {
        role: "income",
        title: "درآمد",
        icon: "cash",
        dropdown: [
          {
            role: "register",
            title: "ثبت درآمد",
            url: "/cash-flow/income/create",
          },
          {
            role: "readAll",
            title: "دیدن درآمد ها",
            url: "/cash-flow/income",
          },
        ],
      },
      {
        role: "warehouse",
        title: "انبار",
        icon: "building-down",
        dropdown: [
          {
            role: "createWarehouses",
            title: "ثبت حواله",
            url: "/remittance/create",
          },
          {
            role: "readWarehouses",
            title: "انبار ها",
            url: "/warehouse",
          },
          {
            role: "readRemittances",
            title: "حواله های انبار",
            url: "/remittance",
          },
          {
            role: "readInventory",
            title: "موجودی تمامی انبارها",
            url: "/inventory",
          },
        ],
      },
      {
        role: "providers",
        title: "تامین کنندگان",
        icon: "card-check-list",
        dropdown: [
          {
            role: "create",
            title: "ثبت تامین کننده",
            url: "/people/provider/create",
          },
          {
            role: "readAll",
            title: "دیدن تامین کنندگان",
            url: "/people/provider",
          },
        ],
      },
      {
        role: "customers",
        title: "مشتریان",
        icon: "people",
        dropdown: [
          {
            role: "create",
            title: "ثبت مشتری",
            url: "/people/customer/create",
          },
          {
            role: "readAll",
            title: "دیدن مشتریان",
            url: "/people/customer",
          },
        ],
      },
      {
        role: "bankAndAccount",
        title: "بانکداری",
        icon: "bank",
        dropdown: [
          { role: "readAccounts", title: "حساب ها", url: "/bank/account" },
          {
            role: "readAccounts",
            title: "صندوق ها",
            url: "/bank/cash-register",
          },
          {
            role: "readAccounts",
            title: "گردانان",
            url: "/bank/slanderer",
          },
        ],
      },
      {
        role: "settings",
        title: "تنظیمات",
        icon: "gear",
        dropdown: [
          {
            role: "manageBusinessInfo",
            title: "اطلاعات کسب و کار",
            url: "/info",
          },
          {
            role: "manageUsers",
            title: "مدیریت کاربران",
            url: "/sub-user",
          },
          {
            role: "manageRoles",
            title: "مدیریت نقش ها",
            url: "/roles",
          },
        ],
      },
    ],
    dateTitle: "امروز",
  },
};
