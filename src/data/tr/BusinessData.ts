import { TBusiness } from "src/types/Business.type";

export const BusinessData: TBusiness = {
  title: "İşletme Listeniz",
  addButton: "İşletme Ekle",
  editButton: "İşletmeyi Düzenle",
  userButton: "Kullanıcı Yönetimi",
  permission: "Erişim Seviyesi",
  addStepper: {
    title: "Yeni İşletme Ekle",
    steps: [
      {
        id: 0,
        method: "post",
        service: "business/step1/",
        title: "İşletme",
        inputs: [
          {
            label: "İşletme Adı",
            key: "name",
            required: true,
          },
          {
            label: "Yasal Ad",
            key: "legal_name",
            required: true,
          },
          {
            label: "Ana Para Birimi",
            key: "currency",
            required: true,
          },
          {
            label: "Takvim",
            key: "calendar_type",
            options: {
              label: "Takvim Türünü Seçin",
              list: [
                { title: "Miladi", key: "gregorian" },
                { title: "Güneş", key: "solar" },
              ],
            },
            required: true,
          },
          {
            label: "Depo Sistemi",
            key: "has_warehouse",
            type: "boolean",
            checkbox: "Depo Sistemini Dahil Et",
            required: true,
          },
        ],
      },
      {
        id: 1,
        method: "put",
        service: "business/step2/",
        title: "Ekonomi",
        inputs: [
          {
            label: "Ulusal Kimlik",
            key: "national_license",
            required: false,
          },
          {
            label: "Ekonomik Kod",
            key: "economic_license",
            required: false,
          },
          {
            label: "Kayıt Numarası",
            key: "registration_number",
            required: false,
          },
        ],
      },
      {
        id: 2,
        method: "put",
        service: "/business/step3/",
        title: "Mali Yıl",
        inputs: [
          {
            label: "Mali Yıl Başlığı",
            key: "financial_year_title",
            required: true,
          },
          {
            label: "Başlangıç Tarihi",
            key: "financial_year_start_date",
            required: true,
            type: "date",
          },
          {
            label: "Bitiş Tarihi",
            key: "financial_year_end_date",
            required: true,
            type: "date",
          },
        ],
      },
      {
        id: 3,
        method: "put",
        service: "/business/step4/",
        title: "İletişim",
        inputs: [
          {
            label: "Ülke",
            key: "country",
            required: false,
          },
          {
            label: "İl",
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
            label: "Tam Adres",
            key: "address",
            required: false,
          },
          {
            label: "Faks 1",
            key: "fax1",
            required: false,
          },
          {
            label: "E-posta",
            key: "email",
            required: false,
          },
          {
            label: "Faks 2",
            key: "fax2",
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
    nextButton: "Gönder ve Sonraki Adım",
    prevButton: "Önceki Adım",
    finalButton: "Gönder ve Son Adım",
    successfull: {
      title: "İşletmeniz Başarıyla Eklendi",
      link: {
        title: "İşletme Listesini Görüntüle",
        url: "business",
      },
    },
  },
};
