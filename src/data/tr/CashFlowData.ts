import { TCashFlowData } from "src/types/CashFlow.type";

export const ExpenceData: TCashFlowData = {
  title: "Gider Listesi",
  filter: {
    title: "Gider Filtresi",
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
    ],
    submitFilter: "Filtreyi Uygula",
  },
  addButton: "Gider Ekle",
  sort: [
    {
      status: null,
      title: "Hepsini Göster",
    },
    {
      status: 1,
      title: "Onaylı",
    },
    {
      status: 0,
      title: "İptal Edildi",
    },
  ],
  searchPlaceholder: "Gider Ara",
  notFound: "Gider bulunamadı.",
  table: {
    thead: [
      "#",
      "Gider Numarası",
      "Fatura Numarası",
      "Gider Türü",
      "Açıklama",
      "Miktar",
      "Kayıt Tarihi",
      "Durum",
    ],
    tbody: [
      "expense_number",
      "factor_number",
      "flow_kind",
      "description",
      "amount",
      "created_at",
      "status",
    ],
  },

  create: {
    title: "Gider Belgesi Kaydet",
    saveButton: "Kaydet",
    inputs: [
      {
        key: "expense_number",
        label: "Gider Numarası",
        required: false,
        generator: "Manuel Oluştur",
      },
      {
        key: "date",
        type: "date",
        label: "Tarih",
        required: false,
      },
      {
        key: "document_number",
        type: "number",
        label: "Belge Numarası",
        required: true,
      },
      {
        key: "flow_kind",
        label: "Gider Türü",
        required: true,
      },
      {
        key: "account_id",
        label: "Hesap Seçin",
        required: false,
      },
      {
        key: "amount",
        label: "Miktar",
        type: "number",
        required: true,
      },
      {
        key: "description",
        label: "Açıklama",
        required: false,
      },
    ],
    createFlowKind: {
      kind: "expense",
      title: "Gider Türü Oluştur",
      inputs: [
        {
          key: "title",
          label: "Gider Türü Adı",
          required: true,
        },
      ],
      saveBtn: "Gider Türünü Kaydet",
    },
    updateFlowKind: {
      kind: "expense",
      title: "Gider Türünü Güncelle",
      inputs: [
        {
          key: "title",
          label: "Gider Türü Adı",
          required: true,
        },
      ],
      saveBtn: "Gider Türünü Güncelle",
    },
  },
};

export const IncomeData: TCashFlowData = {
  title: "Gelir Listesi",
  filter: {
    title: "Gelir Filtresi",
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
    ],
    submitFilter: "Filtreyi Uygula",
  },
  addButton: "Gelir Ekle",
  sort: [
    {
      status: null,
      title: "Hepsini Göster",
    },
    {
      status: 1,
      title: "Onaylı",
    },
    {
      status: 0,
      title: "İptal Edildi",
    },
  ],
  searchPlaceholder: "Gelir Ara",
  notFound: "Gelir bulunamadı.",
  table: {
    thead: [
      "#",
      "Gelir Numarası",
      "Belge Numarası",
      "Gelir Türü",
      "Açıklama",
      "Miktar",
      "Kayıt Tarihi",
      "Durum",
    ],
    tbody: [
      "income_number",
      "document_number",
      "flow_kind",
      "description",
      "amount",
      "created_at",
      "status",
    ],
  },

  create: {
    title: "Gelir Belgesi Kaydet",
    saveButton: "Kaydet",
    inputs: [
      {
        key: "income_number",
        label: "Numara",
        required: false,
        generator: "Manuel Oluştur",
      },
      {
        key: "date",
        type: "date",
        label: "Tarih",
        required: false,
      },
      {
        key: "document_number",
        type: "number",
        label: "Belge Numarası",
        required: true,
      },
      {
        key: "flow_kind",
        label: "Gelir Türü",
        required: false,
      },
      {
        key: "account_id",
        label: "Hesap Seçin",
        required: true,
      },
      {
        key: "amount",
        label: "Miktar",
        type: "number",
        required: true,
      },
      {
        key: "description",
        label: "Açıklama",
        required: false,
      },
    ],
    createFlowKind: {
      kind: "income",
      title: "Gelir Türü Oluştur",
      inputs: [
        {
          key: "title",
          label: "Gelir Türü Adı",
          required: true,
        },
      ],
      saveBtn: "Gelir Türünü Kaydet",
    },
    updateFlowKind: {
      kind: "income",
      title: "Gelir Türünü Güncelle",
      inputs: [
        {
          key: "title",
          label: "Gelir Türü Adı",
          required: true,
        },
      ],
      saveBtn: "Gelir Türünü Güncelle",
    },
  },
};
