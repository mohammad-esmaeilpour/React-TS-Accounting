import { TLayout } from "src/types/Layout.types";

export const layoutData: TLayout = {
  header: {
    title: "Hesabfa",
    membership: "Gold Membership",
    logout: "Log Out of Account",
  },
  sidebar: {
    searchPlaceholder: 'Search ...',
    navItems: [
      {
        title: "Dashboard",
        url: "",
        icon: "home",
        role: "public",
      },
      {
        role: "purchase",
        title: "Purchase",
        icon: "bag",
        dropdown: [
          {
            role: "register",
            title: "Register Purchase Invoice",
            url: "/factor/purchase/create",
          },
          { role: "readAll", title: "View Invoices", url: "/factor/purchase" },
        ],
      },
      {
        role: "sales",
        title: "Sales",
        icon: "coin",
        dropdown: [
          {
            role: "register",
            title: "Register Sales Invoice",
            url: "/factor/sales/create",
          },
          {
            role: "readAll",
            title: "View Invoices",
            url: "/factor/sales",
          },
        ],
      },
      {
        role: "products",
        title: "Products and Services",
        icon: "product",
        dropdown: [
          {
            role: "createGoods",
            title: "Register Product",
            url: "/products/goods/create",
          },
          {
            role: "createServices",
            title: "Register Service",
            url: "/products/services/create",
          },
          {
            role: "readProducts",
            title: "View Products and Services",
            url: "/products/goods",
          },
          {
            role: "createCategory",
            title: "Categories",
            url: "/categories/services",
          },
        ],
      },
      {
        role: "expense",
        title: "Expense",
        icon: "cash-stack",
        dropdown: [
          {
            role: "register",
            title: "Register Expense",
            url: "/cash-flow/expense/create",
          },
          {
            role: "readAll",
            title: "View Expenses",
            url: "/cash-flow/expense",
          },
        ],
      },
      {
        role: "income",
        title: "Income",
        icon: "cash",
        dropdown: [
          {
            role: "register",
            title: "Register Income",
            url: "/cash-flow/income/create",
          },
          {
            role: "readAll",
            title: "View Income",
            url: "/cash-flow/income",
          },
        ],
      },
      {
        role: "warehouse",
        title: "Warehouse",
        icon: "building-down",
        dropdown: [
          {
            role: "createWarehouses",
            title: "Register Remittance",
            url: "/remittance/create",
          },
          {
            role: "readWarehouses",
            title: "Warehouses",
            url: "/warehouse",
          },
          {
            role: "readRemittances",
            title: "Warehouse Remittances",
            url: "/remittance",
          },
          {
            role: "readInventory",
            title: "Inventory of All Warehouses",
            url: "/inventory",
          },
        ],
      },
      {
        role: "providers",
        title: "Providers",
        icon: "card-check-list",
        dropdown: [
          {
            role: "create",
            title: "Register Provider",
            url: "/people/provider/create",
          },
          {
            role: "readAll",
            title: "View Providers",
            url: "/people/provider",
          },
        ],
      },
      {
        role: "customers",
        title: "Customers",
        icon: "people",
        dropdown: [
          {
            role: "create",
            title: "Register Customer",
            url: "/people/customer/create",
          },
          {
            role: "readAll",
            title: "View Customers",
            url: "/people/customer",
          },
        ],
      },
      {
        role: "bankAndAccount",
        title: "Banking",
        icon: "bank",
        dropdown: [
          { role: "readAccounts", title: "Accounts", url: "/bank/account" },
          {
            role: "readAccounts",
            title: "Cash Registers",
            url: "/bank/cash-register",
          },
          {
            role: "readAccounts",
            title: "Bankers",
            url: "/bank/slanderer",
          },
        ],
      },
      {
        role: "settings",
        title: "Settings",
        icon: "gear",
        dropdown: [
          {
            role: "manageBusinessInfo",
            title: "Business Information",
            url: "/info",
          },
          {
            role: "manageUsers",
            title: "Manage Users",
            url: "/sub-user",
          },
          {
            role: "manageRoles",
            title: "Manage Roles",
            url: "/roles",
          },
        ],
      },
    ],
    dateTitle: "Today",
  },
};
