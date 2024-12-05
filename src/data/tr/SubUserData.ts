import { TSubUser } from "src/types/subUser.types";

export const SubUserData: TSubUser = {
  title: "Kullanıcı Yönetimi",
  addButton: "Kullanıcı Ekle",
  notFound: "Kullanıcı bulunamadı",
  editButton: "Kullanıcıyı Düzenle",
  permission: "Erişim Düzeyi",
  pickRole: "Rol Seçin",
  save: 'Kaydet',
  addStepper: {
    title: "Yeni Kullanıcı Ekle",
    steps: [
      {
        method: "post",
        service: "/subuser/",
        id: 0,
        title: "Kişisel Bilgiler",
        inputs: [
          {
            label: "Kullanıcı Seri Numarası",
            key: "serial_number",
            type: "number",
            required: true,
            justCreateStep: true,
          },
          {
            label: "Finansal Kod",
            checkbox: "Kodu manuel oluştur",
            key: "finantial_code",
            type: "number",
            required: true,
          },
          {
            label: "Takma Ad",
            key: "nick_name",
            required: true,
          },
          {
            label: "Ad",
            key: "first_name",
            required: true,
          },
          {
            label: "Soyad",
            key: "last_name",
            required: true,
          },
          {
            label: "Ulusal Kod",
            key: "national_code",
            required: true,
          },
          {
            label: "Açıklama",
            key: "description",
            required: true,
          },
        ],
      },
      {
        id: 1,
        method: "put",
        service: "/subuser/step2/",
        title: "Adres Bilgileri",
        inputs: [
          {
            label: "Ülke",
            key: "country",
            required: true,
          },
          {
            label: "İl",
            key: "province",
            required: true,
          },
          {
            label: "Şehir",
            key: "city",
            required: true,
          },
          {
            label: "Posta Kodu",
            key: "postal_code",
            required: true,
          },
          {
            label: "Adres",
            key: "address",
            required: true,
          },
        ],
      },
      {
        id: 2,
        method: "put",
        service: "/subuser/step3/",
        title: "İletişim Bilgileri",
        inputs: [
          {
            label: "Mobil Telefon 1",
            key: "phone_number",
            required: true,
          },
          {
            label: "Mobil Telefon 2",
            key: "second_phone_number",
            required: true,
          },
          {
            label: "Sabit Telefon",
            key: "telephone",
            required: true,
          },
          {
            label: "E-posta",
            key: "email",
            required: true,
          },
        ],
      },
    ],
    nextButton: "Kaydet ve Sonraki Adım",
    prevButton: "Önceki Adım",
    finalButton: "Kaydet ve Bilgileri Onayla",
    successfull: {
      title: "Kullanıcı başarıyla eklendi",
      link: {
        title: "Kullanıcı Listesini Görüntüle",
        url: "subuser",
      },
    },
  },
};
