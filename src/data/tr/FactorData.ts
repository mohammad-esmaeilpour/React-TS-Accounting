import { TFactorData } from "src/types/Factor.types";

export const PurchaseFactorData: TFactorData = {
  title: "Satın Alma Faturaları",
  add_btn: "Fatura Ekle",
  input_placeholder: "Fatura Ara",
  not_found: "Fatura bulunamadı.",
  filter: {
    title: "Faturaları Filtrele",
    inputs: [
      {
        key: "start_issue_date",
        label: "Başlangıç Fatura Tarihi",
        required: false,
        type: "date",
      },
      {
        key: "end_issue_date",
        label: "Bitiş Fatura Tarihi",
        required: false,
        type: "date",
      },
      {
        key: "start_due_date",
        label: "Başlangıç Vade Tarihi",
        required: false,
        type: "date",
      },
      {
        key: "end_due_date",
        label: "Bitiş Vade Tarihi",
        required: false,
        type: "date",
      },
      {
        key: "customer",
        label: "Satıcı",
        required: false,
      },
    ],
    submit_btn: "Filtre Uygula",
  },
  sort: [
    {
      title: "Hepsini Göster",
      status: null,
      is_delivered: null,
      is_payed_fully: null,
    },
    {
      title: "Teslim Edildi",
      status: 3,
      is_delivered: null,
      is_payed_fully: null,
    },
    {
      title: "Ödendi",
      status: 3,
      is_delivered: null,
      is_payed_fully: null,
    },
    {
      title: "Taslak",
      status: 1,
      is_delivered: null,
      is_payed_fully: null,
    },
    {
      title: "Yayımlandı",
      status: 3,
      is_delivered: null,
      is_payed_fully: null,
    },
    {
      title: "İptal Edildi",
      status: 1,
      is_delivered: null,
      is_payed_fully: null,
    },
    {
      title: "Teslim Bekleyen",
      status: 3,
      is_delivered: false,
      is_payed_fully: null,
    },
    {
      title: "Ödeme Bekleyen",
      status: 3,
      is_payed_fully: false,
      is_delivered: null,
    },
  ],
  table: {
    thead: [
      "#",
      "Fatura Başlığı",
      "Fatura Numarası",
      "Satıcı",
      "Toplam Fatura Tutarı",
      "Ödenen Tutar",
      "Kalan Tutar",
      "Tarih",
      "Durum",
    ],
    tbody: [
      "title",
      "factor_number",
      "sub_user",
      "final_amount",
      "payed_amount",
      "remaining_amount",
      "due_date",
      "status",
    ],
    status_0: "İptal Edildi",
    status_1: "Taslak",
    status_2: "Onaylandı",
    status_3: "Tamamlandı",
  },
  table_setting: {
    title: "Tablo Ayarları",
    inputs: [
      {
        key: "",
        label: "Satır",
        required: false,
        type: "checkbox",
      },
      {
        key: "",
        label: "Fatura Tarihi",
        required: false,
        type: "checkbox",
      },
      {
        key: "",
        label: "Fatura Numarası",
        required: false,
        type: "checkbox",
      },
      {
        key: "",
        label: "Vade Tarihi",
        required: false,
        type: "checkbox",
      },
      {
        key: "",
        label: "Satıcı",
        required: false,
        type: "checkbox",
      },
      {
        key: "",
        label: "Ödenen Tutar",
        required: false,
        type: "checkbox",
      },
    ],
    submit_btn: "Ayarları Kaydet",
  },

  // create
  create: {
    title: "Satın Alma Faturası Ekle",
    pickWarehouse: "Depo Seç",
    saveButton: "Kaydet",
    notFound: "Lütfen istenilen ürünü arayın.",
    inputs: [
      {
        key: "factor_number",
        label: "Fatura Numarası",
        required: false,
        generator: "Fatura Numarası Oluştur",
      },
      {
        key: "customer",
        label: "Müşteri",
        placeholder: "Çeşitli",
        required: false,
      },
      {
        key: "title",
        label: "Başlık",
        required: true,
      },
      {
        key: "account_id",
        label: "İlgili Hesap veya Fon",
        placeholder: "Hesap veya Fon Seç",
        required: false,
      },
    ],
    more_details: [
      {
        key: "payment_method",
        label: "Ödeme Yöntemi",
        required: false,
        options: {
          list: [
            {
              key: "check",
              title: "Çek",
            },
            {
              key: "cash",
              title: "Nakit",
            },
            {
              key: "transfer",
              title: "Banka Havalesi",
            },
            {
              key: "ATM",
              title: "ATM",
            },
          ],
        },
      },
      {
        key: "payment_kind",
        label: "Ödeme Türü",
        options: {
          list: [
            {
              key: "full",
              title: "Tam",
            },
          ],
        },
        required: false,
      },
      {
        key: "sub_user_id",
        label: "Ürün Satıcısı",
        required: false,
      },
      {
        key: "referral",
        label: "Havale",
        type: "number",
        required: false,
      },
      {
        key: "issue_date",
        label: "Düzenlenme Tarihi",
        type: "date",
        required: false,
      },
      {
        key: "due_date",
        label: "Vade Tarihi",
        type: "date",
        required: false,
      },
      {
        key: "is_payed_fully",
        label: "Ürün Maliyeti",
        type: "boolean",
        required: false,
        options: {
          list: [
            {
              key: "true",
              title: "Ödendi",
            },
            {
              key: "false",
              title: "Ödenmedi",
            },
          ],
        },
      },
      {
        key: "is_delivered",
        label: "Ürün Teslim Durumu",
        type: "boolean",
        required: false,
        options: {
          list: [
            {
              key: "true",
              title: "Teslim Edildi",
            },
            {
              key: "false",
              title: "Teslim Edilmedi",
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
    more_details_button: "Daha Fazla Detay Ekle",
    less_details_button: "Daha Az Detay Uygula",
    proudctsTable: {
      count: "Adet",
      number_unit: "Birim",
      total_price: "Toplam Fiyat",
      tax: "Vergi",
      discount: "İndirim",
      final_price: "Nihai Tutar",
      table: {
        thead: [
          "#",
          "Ürün veya Hizmet",
          "Barkod",
          "Birim",
          "Adet",
          "Depo",
          "Birim Fiyat",
          "Vergi",
          "İndirim",
          "Toplam Fiyat",
        ],
        tbody: [
          "product_name",
          "barcode",
          "unit",
          "count",
          "warehouse_id",
          "unit_price",
          "tax_price",
          "discount_price",
          "total_price",
        ],
      },
      add_product_btn: "Ürün Ara",
      discount_btn: "İndirim Uygula",
      tax_btn: "Vergi Uygula",
      sell_price_btn: {
        title: "Satış Fiyatı",
        options: [
          {
            key: "sell_price",
            title: "Satış Fiyatı",
          },
          {
            key: "purchase_price",
            title: "Alış Fiyatı",
          },
        ],
      },
      file_btn: "Dosya Yükle",
      print_btn: "Müşteri için Yazdır",
      expence_btn: "Gider Kaydet",
      publish_btn: "Yayınla",
      save_demo: "Taslak Olarak Kaydet",
    },
  },
};

export const SalesFactorData: TFactorData = {
  title: "Satış Faturaları",
  add_btn: "Fatura Ekle",
  input_placeholder: "Faturayı Ara",
  not_found: "Fatura bulunamadı.",
  filter: {
    title: "Faturaları Filtrele",
    inputs: [
      {
        key: "start_issue_date",
        label: "Başlangıç Fatura Tarihi",
        required: false,
        type: "date",
      },
      {
        key: "end_issue_date",
        label: "Bitiş Fatura Tarihi",
        required: false,
        type: "date",
      },
      {
        key: "start_due_date",
        label: "Başlangıç Vade Tarihi",
        required: false,
        type: "date",
      },
      {
        key: "end_due_date",
        label: "Bitiş Vade Tarihi",
        required: false,
        type: "date",
      },
      {
        key: "customer",
        label: "Satıcı",
        required: false,
      },
    ],
    submit_btn: "Filtre Uygula",
  },
  sort: [
    {
      title: "Hepsini Göster",
      status: null,
      is_delivered: null,
      is_payed_fully: null,
    },
    {
      title: "Teslim Edildi",
      status: 3,
      is_delivered: null,
      is_payed_fully: null,
    },
    {
      title: "Ödendi",
      status: 3,
      is_delivered: null,
      is_payed_fully: null,
    },
    {
      title: "Taslak",
      status: 1,
      is_delivered: null,
      is_payed_fully: null,
    },
    {
      title: "Kesildi",
      status: 3,
      is_delivered: null,
      is_payed_fully: null,
    },
    {
      title: "İptal Edildi",
      status: 1,
      is_delivered: null,
      is_payed_fully: null,
    },
    {
      title: "Teslimat Bekliyor",
      status: 3,
      is_delivered: false,
      is_payed_fully: null,
    },
    {
      title: "Ödeme Bekliyor",
      status: 3,
      is_payed_fully: false,
      is_delivered: null,
    },
  ],
  table: {
    thead: [
      "#",
      "Fatura Başlığı",
      "Fatura Numarası",
      "Satıcı",
      "Toplam Fatura Tutarı",
      "Ödenen Tutar",
      "Kalan Tutar",
      "Tarih",
      "Durum",
    ],
    tbody: [
      "title",
      "factor_number",
      "sub_user",
      "final_amount",
      "payed_amount",
      "remaining_amount",
      "due_date",
      "status",
    ],
    status_0: "İptal Edildi",
    status_1: "Taslak",
    status_2: "Onaylı",
    status_3: "Tamamlandı",
  },
  table_setting: {
    title: "Tablo Ayarları",
    inputs: [
      {
        key: "",
        label: "Satır",
        required: false,
        type: "checkbox",
      },
      {
        key: "",
        label: "Fatura Tarihi",
        required: false,
        type: "checkbox",
      },
      {
        key: "",
        label: "Fatura Numarası",
        required: false,
        type: "checkbox",
      },
      {
        key: "",
        label: "Vade Tarihi",
        required: false,
        type: "checkbox",
      },
      {
        key: "",
        label: "Satıcı",
        required: false,
        type: "checkbox",
      },
      {
        key: "",
        label: "Ödenen Tutar",
        required: false,
        type: "checkbox",
      },
    ],
    submit_btn: "Ayarları Kaydet",
  },

  // create
  create: {
    title: "Satış Faturası Ekle",
    pickWarehouse: "Depo Seç",
    saveButton: "Kaydet",
    notFound: "Lütfen istediğiniz ürünü arayın.",
    inputs: [
      {
        key: "factor_number",
        label: "Fatura Numarası",
        required: false,
        generator: "Fatura Numarasını Oluştur",
      },
      {
        key: "customer",
        label: "Müşteri",
        placeholder: "Çeşitli",
        required: false,
      },
      {
        key: "title",
        label: "Başlık",
        required: true,
      },
      {
        key: "account_id",
        label: "İlgili Hesap veya Fon",
        placeholder: "Hesap veya Fon Seç",
        required: false,
      },
    ],
    more_details: [
      {
        key: "payment_method",
        label: "Ödeme Yöntemi",
        required: false,
        options: {
          list: [
            {
              key: "check",
              title: "Çek",
            },
            {
              key: "cash",
              title: "Nakit",
            },
            {
              key: "transfer",
              title: "Banka Havalesi",
            },
            {
              key: "ATM",
              title: "ATM",
            },
          ],
        },
      },
      {
        key: "payment_kind",
        label: "Ödeme Türü",
        options: {
          list: [
            {
              key: "full",
              title: "Tam",
            },
          ],
        },
        required: false,
      },
      {
        key: "sub_user_id",
        label: "Ürün Satıcısı",
        required: false,
      },
      {
        key: "referral",
        label: "Referans",
        type: "number",
        required: false,
      },
      {
        key: "issue_date",
        label: "Kesim Tarihi",
        type: "date",
        required: false,
      },
      {
        key: "due_date",
        label: "Vade Tarihi",
        type: "date",
        required: false,
      },
      {
        key: "is_payed_fully",
        label: "Ürün Maliyeti",
        type: "boolean",
        required: false,
        options: {
          list: [
            {
              key: "true",
              title: "Ödendi",
            },
            {
              key: "false",
              title: "Ödenmedi",
            },
          ],
        },
      },
      {
        key: "is_delivered",
        label: "Ürün Teslimat Durumu",
        type: "boolean",
        required: false,
        options: {
          list: [
            {
              key: "true",
              title: "Teslim Edildi",
            },
            {
              key: "false",
              title: "Teslim Edilmedi",
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
    more_details_button: "Daha Fazla Detay Uygula",
    less_details_button: "Daha Az Detay Uygula",
    proudctsTable: {
      count: "Adet",
      number_unit: "Birim",
      total_price: "Toplam Fiyat",
      tax: "Vergi",
      discount: "İndirim",
      final_price: "Son Tutar",
      table: {
        thead: [
          "#",
          "Ürün veya Hizmet",
          "Barkod",
          "Birim",
          "Adet",
          "Birim Fiyatı",
          "Vergi",
          "İndirim",
          "Toplam Fiyat",
        ],
        tbody: [
          "product_name",
          "barcode",
          "unit",
          "count",
          "unit_price",
          "tax_price",
          "discount_price",
          "total_price",
        ],
      },
      add_product_btn: "Ürün Ara",
      discount_btn: "İndirim Uygula",
      tax_btn: "Vergi Uygula",
      sell_price_btn: {
        title: "Satış Fiyatı",
        options: [
          {
            key: "sell_price",
            title: "Satış Fiyatı",
          },
          {
            key: "purchase_price",
            title: "Alış Fiyatı",
          },
        ],
      },
      file_btn: "Ekli Dosyayı Yükle",
      print_btn: "Müşteri İçin Yazdır",
      expence_btn: "Gider Kaydet",
      publish_btn: "Kes",
      save_demo: "Taslak Olarak Kaydet",
    },
  },
};
