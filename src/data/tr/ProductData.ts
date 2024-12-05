import {
  TCreateProductData,
  TFindProductsData,
  TProductsData,
} from "src/types/Product.types";

export const CreateGoodData: TCreateProductData = {
  title: "Ürün Ekle",
  saveButton: "Kaydet",
  searchPlaceholder: "Ürünleri Ara",
  notFound:
    "Bir ürün veya hizmet oluşturmak için, Lütfen Ürün veya Hizmet Ekle sayfasına gidin.",
  imageUpload: {
    key: "image_src",
    label: "Ürün Resmi Seçin",
    alt: "Ürün Resmi Seçin",
  },
  inputs: [
    {
      key: "product_code",
      label: "Ürün Kodu",
      generator: "Ürün Kodu Oluştur",
      required: false,
    },
    {
      key: "product_name",
      label: "Ürün Adı",
      required: true,
    },
    {
      key: "barcode",
      label: "Barkod",
      required: true,
    },
    {
      key: "category_id",
      label: "Kategori",
      required: true,
    },
  ],
  tabs: [
    {
      id: 0,
      title: "Ürün Fiyatı",
      inputs: [
        {
          key: "sell_price",
          label: "Satış Fiyatı",
          currency: true,
          type: "number",
          required: true,
        },
        {
          key: "purchase_price",
          label: "Alış Fiyatı",
          currency: true,
          type: "number",
          required: true,
        },
        {
          key: "wholesale_price",
          label: "Toptan Fiyatı",
          currency: true,
          type: "number",
          required: true,
        },
        {
          key: "retail_price",
          label: "Perakende Fiyatı",
          currency: true,
          type: "number",
          required: true,
        },
      ],
    },
    {
      id: 1,
      title: "Genel Bilgiler",
      inputs: [
        {
          key: "unit",
          label: "Birim",
          required: true,
        },
        {
          key: "manufacturer",
          label: "Üretici",
          required: false,
        },
        {
          key: "product_model",
          required: false,
          label: "Ürün Modeli",
        },
      ],
    },
    {
      id: 2,
      title: "Stok",
      inputs: [
        {
          key: "inventory_control",
          label: "Stok Kontrolü",
          checkbox: "Depo Stokunu Kontrol Et",
          type: "boolean",
          required: false,
          dependentOnInput: "order_point",
        },
        {
          key: "order_point",
          label: "Sipariş Noktası",
          type: "number",
          required: false,
          dependentOnCheckbox: "inventory_control",
        },
        {
          key: "base_count",
          label: "Başlangıç Stok Miktarı",
          type: "number",
          required: false,
        },
        {
          key: "base_warehouse",
          label: "Başlangıç Stok Deposu",
          required: false,
        },
      ],
    },
    {
      id: 3,
      title: "Ürün Vergisi",
      inputs: [
        {
          key: "subject_to_sales_tax",
          label: "Satış Vergisi",
          checkbox: "Ürün Satış Vergisine Tabi",
          type: "boolean",
          required: false,
          dependentOnInput: "sales_tax_percent",
        },
        {
          key: "sales_tax_percent",
          label: "Satış Vergisi Yüzdesi",
          placeholder: "%",
          type: "number",
          required: false,
          dependentOnCheckbox: "subject_to_sales_tax",
        },
        {
          key: "subject_to_purchase_tax",
          label: "Alım Vergisi",
          checkbox: "Ürün Alım Vergisine Tabi",
          type: "boolean",
          required: false,
          dependentOnInput: "purchase_tax_percent",
        },
        {
          key: "purchase_tax_percent",
          label: "Alım Vergisi Yüzdesi",
          placeholder: "%",
          type: "number",
          required: false,
          dependentOnCheckbox: "subject_to_purchase_tax",
        },
      ],
    },
  ],
};

export const CreateServiceData: TCreateProductData = {
  title: "Hizmet Ekle",
  saveButton: "Kaydet",
  searchPlaceholder: "Ürünleri Ara",
  notFound: "Ürün bulunamadı.",
  imageUpload: {
    key: "image_src",
    label: "Hizmet Resmi Seçin",
    alt: "Hizmet Resmi Seçin",
  },
  inputs: [
    {
      key: "product_code",
      label: "Hizmet Kodu",
      generator: "Hizmet Kodu Oluştur",
      required: false,
    },
    {
      key: "product_name",
      label: "Hizmet Adı",
      required: true,
    },
    {
      key: "category_id",
      label: "Kategori",
      required: true,
    },
  ],
  tabs: [
    {
      id: 0,
      title: "Hizmet Fiyatı",
      inputs: [
        {
          key: "sell_price",
          label: "Satış Fiyatı",
          required: true,
          type: "number",
          currency: true,
        },
        {
          key: "purchase_price",
          required: true,
          label: "Alış Fiyatı",
          type: "number",
          currency: true,
        },
      ],
    },
    {
      id: 1,
      title: "Genel Bilgiler",
      inputs: [
        {
          key: "unit",
          label: "Ana Birim",
          required: true,
        },
        {
          key: "manufacturer",
          label: "Hizmet Üreticisi",
          required: false,
        },
        {
          key: "product_model",
          required: false,
          label: "Hizmet Modeli",
        },
      ],
    },
    {
      id: 2,
      title: "Hizmet Vergisi",
      inputs: [
        {
          key: "subject_to_sales_tax",
          label: "Satış Vergisi",
          checkbox: "Hizmet Satış Vergisine Tabi",
          type: "boolean",
          required: false,
          dependentOnInput: "sales_tax_percent",
        },
        {
          key: "sales_tax_percent",
          label: "Satış Vergisi Yüzdesi",
          placeholder: "%",
          type: "number",
          required: false,
          dependentOnCheckbox: "subject_to_sales_tax",
        },
        {
          key: "subject_to_purchase_tax",
          label: "Alım Vergisi",
          checkbox: "Hizmet Alım Vergisine Tabi",
          type: "boolean",
          required: false,
          dependentOnInput: "purchase_tax_percent",
        },
        {
          key: "purchase_tax_percent",
          label: "Alım Vergisi Yüzdesi",
          placeholder: "%",
          type: "number",
          required: false,
          dependentOnCheckbox: "subject_to_purchase_tax",
        },
      ],
    },
  ],
};

export const ProductsData: TProductsData = {
  title: "Ürün ve Hizmet Listesi",
  saveButton: "Kaydet",
  excelButton: "Excel'e girin",
  searchPlaceholder: "Ürünleri Ara",
  notFound: "Ürün bulunamadı.",
  sort: [
    { title: "Hizmetleri Göster", key: "services" },
    { title: "Ürünleri Göster", key: "goods" },
  ],
  filter: {
    title: "Ürün Filtre",
    inputs: [
      {
        key: "start_date",
        type: "date",
        label: "Başlangıç Tarihi",
        required: false,
      },
      {
        key: "end_date",
        type: "date",
        label: "Bitiş Tarihi",
        required: false,
      },
      {
        key: "category",
        label: "Kategoriyi Seçin",
        required: false,
      },
    ],
    submitFilter: "Filtre Uygula",
  },
  table: {
    thead: [
      "#",
      "Kod",
      "İsim",
      "Kategori",
      "Barkod",
      "Satış Fiyatı",
      "Alış Fiyatı",
      "Miktar",
      "Birim",
    ],
    tbody: [
      "product_code",
      "product_name",
      "category_title",
      "barcode",
      "sell_price",
      "purchase_price",
      "inventory_count",
      "unit",
    ],
  },
};


export const FindProductsData: TFindProductsData = {
  title: "Ürün Ekle",
  counter: "Numara",
  add_to_quick: "Hızlı Erişime Ekle",
  remove_from_quick: "Hızlı Erişimden Kaldır",
  add_to_product: "Ürün Listesine Ekle",
  remove_from_product: "Ürün Listesinden Kaldır",
  tabs: [
    {
      id: 0,
      title: "Hızlı Erişim",
    },
    {
      id: 1,
      title: "Kategori",
    },
    {
      id: 2,
      title: "Arama",
    },
  ],
  quick_access: {
    id: 0,
    default_view: "Bir ürün seçmek için lütfen kategori veya arama bölümüne gidin.",
    addButton: "Faturaya Ürünleri Kaydet",
  },
  category: {
    id: 1,
    category_goods: "Mallar",
    category_services: "Hizmetler",
  },
  search: {
    id: 2,
    inputs: [
      {
        key: "productCode",
        label: "Ürün Kodu",
        required: false,
      },
      {
        key: "productName",
        label: "Ürün Adı",
        required: false,
      },
      {
        key: "barcode",
        label: "Barkod",
        required: false,
      },
      {
        key: "category_id",
        label: "Kategori",
        required: false,
      },
    ],
    searchButton: "Ürünleri Ara",
  },
};
