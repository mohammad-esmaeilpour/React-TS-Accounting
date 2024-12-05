import { TLayout } from "src/types/Layout.types";

export const layoutData: TLayout = {
  header: {
    title: "Hesap Paneli",
    membership: "Altın Üyelik",
    logout: "Hesaptan Çıkış Yap",
  },
  sidebar: {
    searchPlaceholder: 'Ara ...',
    navItems: [
      {
        title: "Gösterge Paneli",
        url: "",
        icon: "home",
        role: "public",
      },
      {
        role: "purchase",
        title: "Satın Alma",
        icon: "bag",
        dropdown: [
          {
            role: "register",
            title: "Satın Alma Faturası Kaydı",
            url: "/factor/purchase/create",
          },
          { role: "readAll", title: "Faturaları Görüntüle", url: "/factor/purchase" },
        ],
      },
      {
        role: "sales",
        title: "Satış",
        icon: "coin",
        dropdown: [
          {
            role: "register",
            title: "Satış Faturası Kaydı",
            url: "/factor/sales/create",
          },
          {
            role: "readAll",
            title: "Faturaları Görüntüle",
            url: "/factor/sales",
          },
        ],
      },
      {
        role: "products",
        title: "Ürünler ve Hizmetler",
        icon: "product",
        dropdown: [
          {
            role: "createGoods",
            title: "Ürün Kaydı",
            url: "/products/goods/create",
          },
          {
            role: "createServices",
            title: "Hizmet Kaydı",
            url: "/products/services/create",
          },
          {
            role: "readProducts",
            title: "Ürünleri ve Hizmetleri Görüntüle",
            url: "/products/goods",
          },
          {
            role: "createCategory",
            title: "Kategoriler",
            url: "/categories/services",
          },
        ],
      },
      {
        role: "expense",
        title: "Gider",
        icon: "cash-stack",
        dropdown: [
          {
            role: "register",
            title: "Gider Kaydı",
            url: "/cash-flow/expense/create",
          },
          {
            role: "readAll",
            title: "Giderleri Görüntüle",
            url: "/cash-flow/expense",
          },
        ],
      },
      {
        role: "income",
        title: "Gelir",
        icon: "cash",
        dropdown: [
          {
            role: "register",
            title: "Gelir Kaydı",
            url: "/cash-flow/income/create",
          },
          {
            role: "readAll",
            title: "Gelirleri Görüntüle",
            url: "/cash-flow/income",
          },
        ],
      },
      {
        role: "warehouse",
        title: "Depo",
        icon: "building-down",
        dropdown: [
          {
            role: "createWarehouses",
            title: "Havale Kaydı",
            url: "/remittance/create",
          },
          {
            role: "readWarehouses",
            title: "Depolar",
            url: "/warehouse",
          },
          {
            role: "readRemittances",
            title: "Depo Havalesi",
            url: "/remittance",
          },
          {
            role: "readInventory",
            title: "Tüm Depoların Stoku",
            url: "/inventory",
          },
        ],
      },
      {
        role: "providers",
        title: "Tedarikçiler",
        icon: "card-check-list",
        dropdown: [
          {
            role: "create",
            title: "Tedarikçi Kaydı",
            url: "/people/provider/create",
          },
          {
            role: "readAll",
            title: "Tedarikçileri Görüntüle",
            url: "/people/provider",
          },
        ],
      },
      {
        role: "customers",
        title: "Müşteriler",
        icon: "people",
        dropdown: [
          {
            role: "create",
            title: "Müşteri Kaydı",
            url: "/people/customer/create",
          },
          {
            role: "readAll",
            title: "Müşterileri Görüntüle",
            url: "/people/customer",
          },
        ],
      },
      {
        role: "bankAndAccount",
        title: "Bankacılık",
        icon: "bank",
        dropdown: [
          { role: "readAccounts", title: "Hesaplar", url: "/bank/account" },
          {
            role: "readAccounts",
            title: "Nakit Kayıtları",
            url: "/bank/cash-register",
          },
          {
            role: "readAccounts",
            title: "Bankacılar",
            url: "/bank/slanderer",
          },
        ],
      },
      {
        role: "settings",
        title: "Ayarlar",
        icon: "gear",
        dropdown: [
          {
            role: "manageBusinessInfo",
            title: "İş Bilgileri",
            url: "/info",
          },
          {
            role: "manageUsers",
            title: "Kullanıcıları Yönet",
            url: "/sub-user",
          },
          {
            role: "manageRoles",
            title: "Rolleri Yönet",
            url: "/roles",
          },
        ],
      },
    ],
    dateTitle: "Bugün",
  },
};
