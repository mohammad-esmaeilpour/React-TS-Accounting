import { TPeopleData } from "src/types/People.types";

export const CustomerData: TPeopleData = {
  title: "Müşteri Listesi",
  searchPlaceholder: "Müşteri Ara",
  notFound: "Müşteri bulunamadı.",
  finationalNumber: "Muhasebe Numarası",
  table: {
    thead: [
      "#",
      "İsim",
      "Soyisim",
      "Takma İsim",
      "Ülke",
      "Eyalet",
      "Şehir",
      "Ekonomik Kod",
      "Şirket",
      "Mobil",
      "Hesap Listesi",
    ],
  },
  accounts: {
    title: "Hesap Listesi",
    notFound: "Hesap bulunamadı",
    saveButton: "Hesap Ekle",
    create: {
      title: "Yeni Hesap Ekle",
      inputs: [
        {
          key: "bank",
          label: "Banka",
          required: false,
        },
        {
          key: "account_number",
          label: "Hesap Numarası",
          required: false,
        },
        {
          key: "card_number",
          label: "Kart Numarası",
          required: false,
        },
        {
          key: "shaba_number",
          label: "Shaba Numarası",
          required: false,
        },
      ],
    },
  },
  create: {
    title: "Müşteri Ekle",
    saveButton: "Kaydet",
    imageUpload: {
      key: "image_src",
      label: "Müşteri Resmi",
      alt: "Müşteri Resmi Seç",
    },
    inputs: [
      {
        key: "finantial_code",
        label: "Muhasebe Kodu",
        required: false,
        generator: "Kodu manuel olarak oluştur",
        type: "number",
      },
      {
        key: "nick_name",
        label: "Takma İsim",
        required: false,
      },
      {
        key: "first_name",
        label: "İsim",
        required: false,
      },
      {
        key: "last_name",
        label: "Soyisim",
        required: false,
      },
      {
        key: "description",
        label: "Açıklama",
        required: false,
      },
    ],
    tabs: [
      {
        id: 0,
        title: "Kişisel Bilgiler",
        inputs: [
          {
            label: "Ulusal Kimlik",
            key: "national_code",
            required: false,
          },
          {
            key: "company",
            label: "Şirket Adı",
            required: false,
          },
          {
            key: "branch_code",
            label: "Şube Kodu",
            required: false,
          },
          {
            key: "economic_code",
            label: "Ekonomik Kod",
            required: false,
          },
          {
            key: "registration_number",
            label: "Kayıt Numarası",
            required: false,
          },
        ],
      },
      {
        id: 1,
        title: "Adres Bilgileri",
        inputs: [
          {
            label: "Ülke",
            key: "country",
            required: false,
          },
          {
            label: "Eyalet",
            key: "province",
            required: false,
          },
          {
            label: "Şehir",
            key: "city",
            required: false,
          },
          {
            label: "Posta Kodu",
            key: "postal_code",
            required: false,
          },
          {
            label: "Adres",
            key: "address",
            required: false,
          },
        ],
      },
      {
        id: 2,
        title: "İletişim Bilgileri",
        inputs: [
          {
            label: "Sabit Telefon",
            key: "telephone",
            required: false,
          },
          {
            label: "Mobil Telefon",
            key: "phone_number",
            required: false,
          },
          {
            label: "İkinci Mobil Telefon",
            key: "second_phone_number",
            required: false,
          },
          {
            label: "E-posta",
            key: "email",
            required: false,
          },
          {
            label: "Web Sitesi",
            key: "website",
            required: false,
          },
        ],
      },
    ],
  },
  update: {
    title: "Müşteri Güncelle",
    edit: "Düzenle",
  },
};

export const ProviderData: TPeopleData = {
  title: "Tedarikçi Listesi",
  searchPlaceholder: "Tedarikçi Ara",
  notFound: "Tedarikçi bulunamadı.",
  finationalNumber: "Muhasebe Numarası",
  table: {
    thead: [
      "#",
      "İsim",
      "Soyisim",
      "Takma İsim",
      "Ülke",
      "Eyalet",
      "Şehir",
      "Ekonomik Kod",
      "Şirket",
      "Mobil",
      "Hesap Listesi",
    ],
  },
  accounts: {
    title: "Hesap Listesi",
    notFound: "Hesap bulunamadı",
    saveButton: "Hesap Ekle",
    create: {
      title: "Yeni Hesap Ekle",
      inputs: [
        {
          key: "bank",
          label: "Banka",
          required: false,
        },
        {
          key: "account_number",
          label: "Hesap Numarası",
          required: false,
        },
        {
          key: "card_number",
          label: "Kart Numarası",
          required: false,
        },
        {
          key: "shaba_number",
          label: "Shaba Numarası",
          required: false,
        },
      ],
    },
  },
  create: {
    title: "Tedarikçi Ekle",
    saveButton: "Kaydet",
    imageUpload: {
      key: "image_src",
      label: "Tedarikçi Resmi",
      alt: "Tedarikçi Resmi Seç",
    },
    inputs: [
      {
        key: "finantial_code",
        label: "Muhasebe Kodu",
        required: false,
        generator: "Kodu manuel olarak oluştur",
        type: "number",
      },
      {
        key: "nick_name",
        label: "Takma İsim",
        required: false,
      },
      {
        key: "first_name",
        label: "İsim",
        required: false,
      },
      {
        key: "last_name",
        label: "Soyisim",
        required: false,
      },
      {
        key: "description",
        label: "Açıklama",
        required: false,
      },
    ],
    tabs: [
      {
        id: 0,
        title: "Kişisel Bilgiler",
        inputs: [
          {
            label: "Ulusal Kimlik",
            key: "national_code",
            required: false,
          },
          {
            key: "company",
            label: "Şirket Adı",
            required: false,
          },
          {
            key: "branch_code",
            label: "Şube Kodu",
            required: false,
          },
          {
            key: "economic_code",
            label: "Ekonomik Kod",
            required: false,
          },
          {
            key: "registration_number",
            label: "Kayıt Numarası",
            required: false,
          },
        ],
      },
      {
        id: 1,
        title: "Adres Bilgileri",
        inputs: [
          {
            label: "Ülke",
            key: "country",
            required: false,
          },
          {
            label: "Eyalet",
            key: "province",
            required: false,
          },
          {
            label: "Şehir",
            key: "city",
            required: false,
          },
          {
            label: "Posta Kodu",
            key: "postal_code",
            required: false,
          },
          {
            label: "Adres",
            key: "address",
            required: false,
          },
        ],
      },
      {
        id: 2,
        title: "İletişim Bilgileri",
        inputs: [
          {
            label: "Sabit Telefon",
            key: "telephone",
            required: false,
          },
          {
            label: "Mobil Telefon",
            key: "phone_number",
            required: false,
          },
          {
            label: "İkinci Mobil Telefon",
            key: "second_phone_number",
            required: false,
          },
          {
            label: "E-posta",
            key: "email",
            required: false,
          },
          {
            label: "Web Sitesi",
            key: "website",
            required: false,
          },
        ],
      },
    ],
  },
  update: {
    title: "Tedarikçiyi Güncelle",
    edit: "Düzenle",
  },
};
