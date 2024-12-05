import {
  TBankAccountData,
  TCashRegisterData,
  TCirculationData,
  TSlandererData,
} from "src/types/Bank.types";

export const BankAccountData: TBankAccountData = {
  title: "Banka Listesi",
  seccondTitle: "Bakiye",
  addButton: "Banka Ekle",
  editButton: "Düzenle",
  modalTitle: "Kasa Hareketleri",
  notFound: "Banka hesabı oluşturmak için Banka Ekle sayfasına gidin.",
  circulationNotFound: "Hesap hareketi bulunamadı.",
  circulationsButton: "Hesap Hareketleri",
  table: {
    thead: ["#", "Kod", "Hareket Açıklaması", "Borçlu", "Alacaklı", "Bakiye"],
    tbody: ["circulation_code", "description", "debtor", "creditor", "balance"],
  },
  create: {
    title: "Banka Ekle",
    saveButton: "Kaydet",
    imageUpload: {
      key: "image_src",
      label: "Banka Görseli",
      alt: "Banka Görseli Seç",
    },
    inputsTop: [
      {
        key: "finantial_code",
        label: "Muhasebe Kodu",
        required: true,
        generator: "Kodu Elle Üret",
        type: "number",
      },
      {
        key: "bank_name",
        label: "Banka Adı",
        required: true,
      },
      {
        key: "account_owner",
        label: "Hesap Sahibi Adı",
        required: true,
      },
    ],
    inputsBottom: [
      {
        key: "account_number",
        label: "Hesap Numarası",
        required: true,
      },
      {
        key: "card_number",
        label: "Kart Numarası",
        required: true,
      },
      {
        key: "shaba_number",
        label: "Şaba Numarası",
        required: true,
      },
      {
        key: "payment_switch_number",
        label: "Ödeme Anahtarı Numarası",
        required: true,
      },
      {
        key: "payment_terminal_number",
        label: "Ödeme Terminal Numarası",
        required: true,
      },
      {
        key: "store_accepter_number",
        label: "Mağaza Kabul Numarası",
        required: true,
      },
      {
        key: "description",
        label: "Açıklama",
        required: true,
      },
    ],
  },
  update: {
    title: "Banka Hesabını Güncelle",
    edit: "Düzenle",
  },
};

export const CashRegisterData: TCashRegisterData = {
  title: "Kasa Listesi",
  seccondTitle: "Bakiye",
  addButton: "Kasa Ekle",
  editButton: "Düzenle",
  modalTitle: "Kasa Hareketleri",
  notFound: "Kasa oluşturmak için Kasa Ekle sayfasına gidin.",
  circulationNotFound: "Hesap hareketi bulunamadı.",
  circulationsButton: "Hesap Hareketleri",
  table: {
    thead: ["#", "Kod", "Hareket Açıklaması", "Proje", "Borçlu", "Alacaklı", "Bakiye"],
    tbody: ["circulation_code", "description", "debtor", "creditor", "balance"],
  },
  create: {
    title: "Kasa Ekle",
    saveButton: "Kaydet",
    imageUpload: {
      key: "image_src",
      label: "Kasa Görseli",
      alt: "Kasa Görseli Seç",
    },
    inputsTop: [
      {
        key: "finantial_code",
        label: "Muhasebe Kodu",
        required: true,
        generator: "Kodu Elle Üret",
        type: "number",
      },
      {
        key: "cash_register_name",
        label: "Kasa Adı",
        required: true,
      },
    ],
    inputsBottom: [
      {
        key: "payment_switch_number",
        label: "Ödeme Anahtarı Numarası",
        required: true,
      },
      {
        key: "payment_terminal_number",
        label: "Ödeme Terminal Numarası",
        required: true,
      },
      {
        key: "store_accepter_number",
        label: "Mağaza Kabul Numarası",
        required: true,
      },
      {
        key: "description",
        label: "Açıklama",
        required: true,
      },
    ],
  },
  update: {
    title: "Kasayı Güncelle",
    edit: "Düzenle",
  },
};

export const SlandererData: TSlandererData = {
  title: "Ön Ödeme Listesi",
  seccondTitle: "Bakiye",
  editButton: "Düzenle",
  addButton: "Ön Ödeme Ekle",
  modalTitle: "Kasa Hareketleri",
  notFound: "Ön ödeme oluşturmak için Ön Ödeme Ekle sayfasına gidin.",
  circulationNotFound: "Hesap hareketi bulunamadı.",
  circulationsButton: "Hesap Hareketleri",
  table: {
    thead: ["#", "Kod", "Hareket Açıklaması", "Proje", "Borçlu", "Alacaklı", "Bakiye"],
    tbody: ["circulation_code", "description", "debtor", "creditor", "balance"],
  },
  create: {
    title: "Ön Ödeme Ekle",
    saveButton: "Kaydet",
    imageUpload: {
      key: "image_src",
      label: "Ön Ödeme Görseli",
      alt: "Ön Ödeme Görseli Seç",
    },
    inputsTop: [
      {
        key: "finantial_code",
        label: "Muhasebe Kodu",
        required: true,
        generator: "Kodu Elle Üret",
        type: "number",
      },
      {
        key: "slanderer_name",
        label: "Ön Ödeme Adı",
        required: true,
      },
    ],
    inputsBottom: [
      {
        key: "description",
        label: "Açıklama",
        required: true,
      },
    ],
  },
  update: {
    title: "Ön Ödemeyi Güncelle",
    edit: "Düzenle",
  },
};

export const CirculationData: TCirculationData = {
  searchPlaceholder: "Hesap Hareketi Ara",
  thead: ["#", "Kod", "Hareket Açıklaması", "Borçlu", "Alacaklı", "Bakiye", "Durum"],
  tbody: [
    "circulation_code",
    "description",
    "debtor",
    "creaditor",
    "balance",
    "status",
  ],
};
