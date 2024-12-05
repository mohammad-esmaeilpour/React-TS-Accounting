import {
  TCreateRemittanceData,
  TRemittanceData,
} from "src/types/Remittance.types";

export const RemittanceData: TRemittanceData = {
  title: "Depo Makbuzları ve Havale",
  add_button: "Havale Ekle",
  notFound: "Havale bulunamadı.",
  searchPlaceholder: "Havale ara",
  filter: {
    title: "Havale Filtre",
    inputs: [
      {
        key: "start_date",
        label: "Başlangıç Tarihi",
        required: false,
      },
      {
        key: "end_date",
        label: "Bitiş Tarihi",
        required: false,
      },
      {
        key: "originWarehouse",
        label: "Kaynağı Seçin",
        placeholder: "Depoyu Seçin",
        required: false,
      },
      {
        key: "destinationWarehouse",
        label: "Hedefi Seçin",
        placeholder: "Hedefi Seçin",
        required: false,
      },
      {
        key: "remittanceKind",
        label: "Havale Türü",
        required: false,
        options: {
          label: "Havale Türünü Seçin",
          list: [
            { title: "Alış", key: "purchase" },
            { title: "Satış", key: "sell" },
            { title: "Transfer Havalesi", key: "transfer" },
            { title: "Üretim Havalesi", key: "production" },
            { title: "Onarım Havalesi", key: "fix" },
            { title: "Atık Havalesi", key: "waste" },
            { title: "Zorunlu Ekstralar Havalesi", key: "essentialExtras" },
            { title: "Zorunlu Açıklar Havalesi", key: "essentialDeficits" },
          ],
        },
      },
      {
        key: "status",
        label: "Durum",
        required: false,
        options: {
          label: "Durumu Seçin",
          list: [
            {
              key: "1",
              title: "Tamamlandı",
            },
            {
              key: "2",
              title: "Onay Bekliyor",
            },
          ],
        },
      },
      {
        key: "sub_user_id",
        label: "Kişi",
        placeholder: "Kişiyi Seçin",
        required: false,
      },
    ],
  },
  sort: [
    {
      title: "Hepsini Göster",
      key: "",
    },
    {
      title: "Gelen Havale",
      key: "",
    },
    {
      title: "Giden Havale",
      key: "",
    },
  ],
  table: {
    thead: [
      "#",
      "Kod",
      "Depo",
      "Tür",
      "Açıklama",
      "Fatura",
      "Kişi",
      "Durum",
      "Tarih",
    ],
    tbody: [
      "id",
      "origin_warehouse",
      "remittance_kind",
      "description",
      "factor",
      "sub_user",
      "delivery_date",
      "status",
    ],
  },
};

export const CreateRemittanceData: TCreateRemittanceData = {
  title: "Depo Havalesi Kaydı",
  saveButton: "Kaydet",
  inputs: [
    // {
    //   key: "remittance_id",
    //   label: "Havale Numarası",
    //   required: false,
    // },
    {
      key: "remittance_kind",
      label: "Havale Türü",
      required: true,
      options: {
        label: "Havale Türünü Seçin",
        list: [
          { title: "Transfer Havalesi", key: "transfer" },
          { title: "Üretim Havalesi", key: "production" },
          { title: "Onarım Havalesi", key: "fix" },
          { title: "Atık Havalesi", key: "waste" },
          { title: "Zorunlu Ekstralar Havalesi", key: "essentialExtras" },
          { title: "Zorunlu Açıklar Havalesi", key: "essentialDeficits" },
        ],
      },
    },
    {
      key: "origin_warehouse",
      label: "Kaynak Depo",
      placeholder: "Kaynak Depoyu Seçin",
      required: false,
    },
    {
      key: "destination_warehouse",
      label: "Hedef Depo",
      placeholder: "Hedef Depoyu Seçin",
      required: false,
    },
    {
      key: "description",
      label: "Depo Havalesi Açıklaması",
      required: false,
    },
  ],
  more_details: [
    {
      key: "status",
      label: "Mal Teslim Durumu",
      checkbox: "Malllar teslim edilmiştir",
      required: false,
      type: "boolean",
    },
    {
      key: "delivery_date",
      label: "Teslim Tarihi",
      type: "date",
      required: false,
    },
    {
      key: "sub_user",
      label: "Sorumlu Kişi",
      required: false,
    },
  ],
  details_button: "Daha Fazla Detay Uygula",
  proudctsTable: {
    count: "Adet",
    number_unit: "Birimler",
    table: {
      thead: ["#", "Kod", "Ürün", "Birim", "Adet", "Satış Fiyatı", "Alış Fiyatı"],
      tbody: [
        "product_code",
        "product_name",
        "unit",
        "inventory_count",
        "unit_price",
        "tax_price",
        "discount_price",
        "total_price",
      ],
    },
    add_button: "Ürün Ara",
  },
};
