import { TProductsLogData, TBankLogsData, TPeopleLogsData, TRemittancesLogsData, TCashFlowsLogData, TFactorsLogData } from "src/types/Dashboar.types";

const filter = {
  label: "Tarih Filtresi",
  inputs: [
    {
      key: "start_date",
      label: "Başlangıç Tarihi",
      required: false,
      type: "date",
    },
    {
      key: "end_date",
      label: "Bitiş Tarihi",
      required: false,
      type: "date",
    },
  ],
  submitBtn: "Tarihi Uygula",
};

export const ProductsLogData: TProductsLogData = {
  title: "Ürünler ve Hizmetler",
  kind: "Tür",
  purchase: "Alım",
  sale: "Satış",
  good: "Ürün",
  service: "Hizmet",
};

export const BankLogsData: TBankLogsData = {
  tabs: [
    {
      id: 0,
      title: "Banka İşlemleri",
    },
    {
      id: 1,
      title: "Nakit",
    },
    {
      id: 2,
      title: "Fonlar",
    },
  ],
};

export const PeopleLogsData: TPeopleLogsData = {
  count: "Adet",
  unit: "Birim",
  purchase_amout: "Satın Alma Tutarı",
  purchase_products_amout: "Satın Alınan Ürün Sayısı",
  mobile: "Cep Telefonu",
  tel: "Sabit Hat",
};

export const RemittanceLogsData: TRemittancesLogsData = {
  title: "Havale Türleri",
  count: "Adet",
  notFound: "Havale bulunamadı",
  count_remittance: "Kayıtlı Havale Sayısı",
  labels: [
    { title: "Alım", key: "purchase" },
    { title: "Satış", key: "sales" },
    { title: "Transfer", key: "transfer" },
    { title: "Üretim", key: "production" },
    { title: "Onarım", key: "fix" },
    { title: "Atık", key: "waste" },
    { title: "Temel Ekstralar", key: "essentialExtras" },
    { title: "Temel Eksikler", key: "essentialDeficits" },
  ],
};

export const ProfitLogsData: TRemittancesLogsData = {
  title: "Kâr ve Zarar",
  count: "Adet",
  count_remittance: "Kayıtlı Havale Sayısı",
  notFound: "Tutar bulunamadı.",
  labels: [
    { title: "Satışlar", key: "sales" },
    { title: "Alımlar", key: "purchases" },
    { title: "Giderler", key: "expenses" },
    { title: "Gelirler", key: "incomes" },
  ],
};

export const WarehouseLogsData: TRemittancesLogsData = {
  title: "Depo Bilgisi",
  count: "Havale Adedi",
  notFound: "Depo bulunamadı",
  count_remittance: "Kayıtlı Depo",
  labels: [
    { title: "Satışlar", key: "sales" },
    { title: "Alımlar", key: "purchases" },
    { title: "Giderler", key: "expenses" },
  ],
};

export const ExpenseLogsData: TCashFlowsLogData = {
  title: "Gider Tablosu",
  notFound: "Gider bulunamadı",
  filter,
  link: "Gider Kaydet",
};

export const IncomeLogsData: TCashFlowsLogData  = {
  title: "Gelir Tablosu",
  notFound: "Gelir bulunamadı",
  filter,
  link: "Gelir Kaydet",
};

export const SalesLogData: TFactorsLogData = {
  title: "Satış Tablosu",
  notFound: "Gider verisi bulunamadı",
  filter,
  link: "Satış Faturası Kaydet",
};

export const PurchaseLogData: TFactorsLogData = {
  title: "Satın Alma Tablosu",
  notFound: "Satın alma verisi bulunamadı",
  filter,
  link: "Satın Alma Faturası Kaydet",
};
