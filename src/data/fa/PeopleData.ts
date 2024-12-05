import { TPeopleData } from "src/types/People.types";

export const CustomerData: TPeopleData = {
  title: "لیست مشتری ها",
  searchPlaceholder: "جستوجوی مشتری",
  notFound: "مشتری یافت نشد.",
  finationalNumber: "شماره حسابداری",
  table: {
    thead: [
      "#",
      "نام",
      "نام خانوادگی",
      "نام مستعار",
      "کشور",
      "استان",
      "شهر",
      "کد اقتصادی",
      "شرکت",
      "موبایل",
      "لیست حساب ها",
    ],
  },
  accounts: {
    title: "لیست حساب ها",
    notFound: "اکانت یافت نشد",
    saveButton: "افزودن حساب",
    create: {
      title: "افزودن حساب جدید",
      inputs: [
        {
          key: "bank",
          label: "بانک",
          required: false,
        },
        {
          key: "account_number",
          label: "شماره حساب",
          required: false,
        },
        {
          key: "card_number",
          label: "شماره کارت",
          required: false,
        },
        {
          key: "shaba_number",
          label: "شماره شبا",
          required: false,
        },
      ],
    },
  },
  create: {
    title: "افزودن مشتری",
    saveButton: "ذخیره",
    imageUpload: {
      key: "image_src",
      label: "تصویر مشتری",
      alt: "انتخاب تصویر مشتری",
    },
    inputs: [
      {
        key: "finantial_code",
        label: "کد حسابداری",
        required: false,
        generator: "ساخت کد به صورت دستی",
        type: "number",
      },
      {
        key: "nick_name",
        label: "نام مستعار",
        required: false,
      },
      {
        key: "first_name",
        label: "نام",
        required: false,
      },
      {
        key: "last_name",
        label: "نام خانوادگی",
        required: false,
      },
      {
        key: "description",
        label: "توضیحات",
        required: false,
      },
    ],
    tabs: [
      {
        id: 0,
        title: "اطلاعات فردی",
        inputs: [
          {
            label: "کد ملی",
            key: "national_code",
            required: false,
          },
          {
            key: "company",
            label: "نام شرکت",
            required: false,
          },
          {
            key: "branch_code",
            label: "کد شعبه",
            required: false,
          },
          {
            key: "economic_code",
            label: "کد اقتصادی",
            required: false,
          },
          {
            key: "registration_number",
            label: "شماره ثبت",
            required: false,
          },
        ],
      },
      {
        id: 1,
        title: "اطلاعات آدرس",
        inputs: [
          {
            label: "کشور",
            key: "country",
            required: false,
          },
          {
            label: "استان",
            key: "province",
            required: false,
          },
          {
            label: "شهر",
            key: "city",
            required: false,
          },
          {
            label: "کد پستی",
            key: "postal_code",
            required: false,
          },
          {
            label: "آدرس",
            key: "address",
            required: false,
          },
        ],
      },
      {
        id: 2,
        title: "اطلاعات ارتباطی",
        inputs: [
          {
            label: "تلفن ثابت",
            key: "telephone",
            required: false,
          },
          {
            label: "تلفن همراه ",
            key: "phone_number",
            required: false,
          },
          {
            label: "تلفن همراه 2",
            key: "second_phone_number",
            required: false,
          },
          {
            label: "ایمیل",
            key: "email",
            required: false,
          },
          {
            label: "وبسایت",
            key: "website",
            required: false,
          },
        ],
      },
    ],
  },
  update: {
    title: "به روز رسانی مشتری",
    edit: "ویرایش",
  },
};

export const ProviderData: TPeopleData = {
  title: "لیست تامین کنندگان",
  searchPlaceholder: "جستوجوی تامین کننده",
  notFound: "تامین کننده یافت نشد.",
  finationalNumber: "شماره حسابداری",
  table: {
    thead: [
      "#",
      "نام",
      "نام خانوادگی",
      "نام مستعار",
      "کشور",
      "استان",
      "شهر",
      "کد اقتصادی",
      "شرکت",
      "موبایل",
      "لیست حساب ها",
    ],
  },
  accounts: {
    title: "لیست حساب ها",
    notFound: "اکانت یافت نشد",
    saveButton: "افزودن حساب",
    create: {
      title: "افزودن حساب جدید",
      inputs: [
        {
          key: "bank",
          label: "بانک",
          required: false,
        },
        {
          key: "account_number",
          label: "شماره حساب",
          required: false,
        },
        {
          key: "card_number",
          label: "شماره کارت",
          required: false,
        },
        {
          key: "shaba_number",
          label: "شماره شبا",
          required: false,
        },
      ],
    },
  },
  create: {
    title: "افزودن تامین کننده",
    saveButton: "ذخیره",
    imageUpload: {
      key: "image_src",
      label: "تصویر تامین کننده",
      alt: "انتخاب تصویر تامین کننده",
    },
    inputs: [
      {
        key: "finantial_code",
        label: "کد حسابداری",
        required: false,
        generator: "ساخت کد به صورت دستی",
        type: "number",
      },
      {
        key: "nick_name",
        label: "نام مستعار",
        required: false,
      },
      {
        key: "first_name",
        label: "نام",
        required: false,
      },
      {
        key: "last_name",
        label: "نام خانوادگی",
        required: false,
      },
      {
        key: "description",
        label: "توضیحات",
        required: false,
      },
    ],
    tabs: [
      {
        id: 0,
        title: "اطلاعات فردی",
        inputs: [
          {
            label: "کد ملی",
            key: "national_code",
            required: false,
          },
          {
            key: "company",
            label: "نام شرکت",
            required: false,
          },
          {
            key: "branch_code",
            label: "کد شعبه",
            required: false,
          },
          {
            key: "economic_code",
            label: "کد اقتصادی",
            required: false,
          },
          {
            key: "registration_number",
            label: "شماره ثبت",
            required: false,
          },
        ],
      },
      {
        id: 1,
        title: "اطلاعات آدرس",
        inputs: [
          {
            label: "کشور",
            key: "country",
            required: false,
          },
          {
            label: "استان",
            key: "province",
            required: false,
          },
          {
            label: "شهر",
            key: "city",
            required: false,
          },
          {
            label: "کد پستی",
            key: "postal_code",
            required: false,
          },
          {
            label: "آدرس",
            key: "address",
            required: false,
          },
        ],
      },
      {
        id: 2,
        title: "اطلاعات ارتباطی",
        inputs: [
          {
            label: "تلفن ثابت",
            key: "telephone",
            required: false,
          },
          {
            label: "تلفن همراه ",
            key: "phone_number",
            required: false,
          },
          {
            label: "تلفن همراه 2",
            key: "second_phone_number",
            required: false,
          },
          {
            label: "ایمیل",
            key: "email",
            required: false,
          },
          {
            label: "وبسایت",
            key: "website",
            required: false,
          },
        ],
      },
    ],
  },
  update: {
    title: "به روز رسانی تامین کننده",
    edit: "ویرایش",
  },
};
