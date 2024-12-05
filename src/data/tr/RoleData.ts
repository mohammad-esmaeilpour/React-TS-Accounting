import { TRoleData } from "src/types/Role.types";

export const RoleData: TRoleData = {
  title: "Rol Yönetimi",
  notFound: "Rol bulunamadı.",
  addButton: "Rol Ekle",
  addPermissionButton: "Rolü Düzenle",
  permissionLabel: "Erişim Düzeyleri",
  permissionTitle: "Seviye",
  permissionsTranslate: [
    {
      title: "Banka",
      key: "bankAndAccount",
    },
    {
      title: "Müşteri",
      key: "customers",
    },
    {
      title: "Gider",
      key: "expense",
    },
    {
      title: "Gelir",
      key: "income",
    },
    {
      title: "Ürünler",
      key: "products",
    },
    {
      title: "Sağlayıcılar",
      key: "providers",
    },
    {
      title: "Alış",
      key: "purchase",
    },
    {
      title: "Satışlar",
      key: "sales",
    },
    {
      title: "Ayarlar",
      key: "setting",
    },
    {
      title: "Depo",
      key: "warehouse",
    },
  ],
  create: {
    title: "Yeni Rol Ekle",
    saveButton: "Yeni Rolü Kaydet",
    inputs: [
      {
        key: "name",
        label: "Rol Adı",
        required: true,
      },
      {
        key: "accesses",
        label: "Erişim Düzeyi",
        required: false,
        options: {
          label: "Erişim Düzeyini Seçin",
          list: [
            {
              title: "Banka",
              key: "bankAndAccount",
            },
            {
              title: "Müşteri",
              key: "customers",
            },
            {
              title: "Gider",
              key: "expense",
            },
            {
              title: "Gelir",
              key: "income",
            },
            {
              title: "Ürünler",
              key: "products",
            },
            {
              title: "Sağlayıcılar",
              key: "providers",
            },
            {
              title: "Alış",
              key: "purchase",
            },
            {
              title: "Satışlar",
              key: "sales",
            },
            {
              title: "Ayarlar",
              key: "setting",
            },
            {
              title: "Depo",
              key: "warehouse",
            },
          ],
        },
      },
      {
        key: "description",
        label: "Açıklama",
        required: false,
      },
    ],
  },
  update: {
    title: "Rol Güncelle",
    saveButton: "Güncelle",
  },
};
