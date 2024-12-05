import { TPeopleData } from "src/types/People.types";

export const CustomerData: TPeopleData = {
  title: "قائمة العملاء",
  searchPlaceholder: "ابحث عن عميل",
  notFound: "العميل غير موجود.",
  finationalNumber: "رقم المحاسبة",
  table: {
    thead: [
      "#",
      "الاسم الأول",
      "الاسم الأخير",
      "اللقب",
      "الدولة",
      "المحافظة",
      "المدينة",
      "الرمز الاقتصادي",
      "الشركة",
      "الهاتف المحمول",
      "قائمة الحسابات",
    ],
  },
  accounts: {
    title: "قائمة الحسابات",
    notFound: "الحساب غير موجود",
    saveButton: "إضافة حساب",
    create: {
      title: "إضافة حساب جديد",
      inputs: [
        {
          key: "bank",
          label: "البنك",
          required: false,
        },
        {
          key: "account_number",
          label: "رقم الحساب",
          required: false,
        },
        {
          key: "card_number",
          label: "رقم البطاقة",
          required: false,
        },
        {
          key: "shaba_number",
          label: "رقم شبا",
          required: false,
        },
      ],
    },
  },
  create: {
    title: "إضافة عميل",
    saveButton: "حفظ",
    imageUpload: {
      key: "image_src",
      label: "صورة العميل",
      alt: "اختر صورة العميل",
    },
    inputs: [
      {
        key: "finantial_code",
        label: "الرمز المحاسبي",
        required: false,
        generator: "توليد الرمز يدويًا",
        type: "number",
      },
      {
        key: "nick_name",
        label: "اللقب",
        required: false,
      },
      {
        key: "first_name",
        label: "الاسم الأول",
        required: false,
      },
      {
        key: "last_name",
        label: "الاسم الأخير",
        required: false,
      },
      {
        key: "description",
        label: "الوصف",
        required: false,
      },
    ],
    tabs: [
      {
        id: 0,
        title: "المعلومات الشخصية",
        inputs: [
          {
            label: "الهوية الوطنية",
            key: "national_code",
            required: false,
          },
          {
            key: "company",
            label: "اسم الشركة",
            required: false,
          },
          {
            key: "branch_code",
            label: "رمز الفرع",
            required: false,
          },
          {
            key: "economic_code",
            label: "الرمز الاقتصادي",
            required: false,
          },
          {
            key: "registration_number",
            label: "رقم التسجيل",
            required: false,
          },
        ],
      },
      {
        id: 1,
        title: "معلومات العنوان",
        inputs: [
          {
            label: "الدولة",
            key: "country",
            required: false,
          },
          {
            label: "المحافظة",
            key: "province",
            required: false,
          },
          {
            label: "المدينة",
            key: "city",
            required: false,
          },
          {
            label: "الرمز البريدي",
            key: "postal_code",
            required: false,
          },
          {
            label: "العنوان",
            key: "address",
            required: false,
          },
        ],
      },
      {
        id: 2,
        title: "معلومات الاتصال",
        inputs: [
          {
            label: "هاتف ثابت",
            key: "telephone",
            required: false,
          },
          {
            label: "هاتف محمول",
            key: "phone_number",
            required: false,
          },
          {
            label: "هاتف محمول ثاني",
            key: "second_phone_number",
            required: false,
          },
          {
            label: "البريد الإلكتروني",
            key: "email",
            required: false,
          },
          {
            label: "الموقع الإلكتروني",
            key: "website",
            required: false,
          },
        ],
      },
    ],
  },
  update: {
    title: "تحديث العميل",
    edit: "تعديل",
  },
};

export const ProviderData: TPeopleData = {
  title: "قائمة الموردين",
  searchPlaceholder: "ابحث عن مورد",
  notFound: "المورد غير موجود.",
  finationalNumber: "رقم المحاسبة",
  table: {
    thead: [
      "#",
      "الاسم الأول",
      "الاسم الأخير",
      "اللقب",
      "الدولة",
      "المحافظة",
      "المدينة",
      "الرمز الاقتصادي",
      "الشركة",
      "الهاتف المحمول",
      "قائمة الحسابات",
    ],
  },
  accounts: {
    title: "قائمة الحسابات",
    notFound: "الحساب غير موجود",
    saveButton: "إضافة حساب",
    create: {
      title: "إضافة حساب جديد",
      inputs: [
        {
          key: "bank",
          label: "البنك",
          required: false,
        },
        {
          key: "account_number",
          label: "رقم الحساب",
          required: false,
        },
        {
          key: "card_number",
          label: "رقم البطاقة",
          required: false,
        },
        {
          key: "shaba_number",
          label: "رقم شبا",
          required: false,
        },
      ],
    },
  },
  create: {
    title: "إضافة مورد",
    saveButton: "حفظ",
    imageUpload: {
      key: "image_src",
      label: "صورة المورد",
      alt: "اختر صورة المورد",
    },
    inputs: [
      {
        key: "finantial_code",
        label: "الرمز المحاسبي",
        required: false,
        generator: "توليد الرمز يدويًا",
        type: "number",
      },
      {
        key: "nick_name",
        label: "اللقب",
        required: false,
      },
      {
        key: "first_name",
        label: "الاسم الأول",
        required: false,
      },
      {
        key: "last_name",
        label: "الاسم الأخير",
        required: false,
      },
      {
        key: "description",
        label: "الوصف",
        required: false,
      },
    ],
    tabs: [
      {
        id: 0,
        title: "المعلومات الشخصية",
        inputs: [
          {
            label: "الهوية الوطنية",
            key: "national_code",
            required: false,
          },
          {
            key: "company",
            label: "اسم الشركة",
            required: false,
          },
          {
            key: "branch_code",
            label: "رمز الفرع",
            required: false,
          },
          {
            key: "economic_code",
            label: "الرمز الاقتصادي",
            required: false,
          },
          {
            key: "registration_number",
            label: "رقم التسجيل",
            required: false,
          },
        ],
      },
      {
        id: 1,
        title: "معلومات العنوان",
        inputs: [
          {
            label: "الدولة",
            key: "country",
            required: false,
          },
          {
            label: "المحافظة",
            key: "province",
            required: false,
          },
          {
            label: "المدينة",
            key: "city",
            required: false,
          },
          {
            label: "الرمز البريدي",
            key: "postal_code",
            required: false,
          },
          {
            label: "العنوان",
            key: "address",
            required: false,
          },
        ],
      },
      {
        id: 2,
        title: "معلومات الاتصال",
        inputs: [
          {
            label: "هاتف ثابت",
            key: "telephone",
            required: false,
          },
          {
            label: "هاتف محمول",
            key: "phone_number",
            required: false,
          },
          {
            label: "هاتف محمول ثاني",
            key: "second_phone_number",
            required: false,
          },
          {
            label: "البريد الإلكتروني",
            key: "email",
            required: false,
          },
          {
            label: "الموقع الإلكتروني",
            key: "website",
            required: false,
          },
        ],
      },
    ],
  },
  update: {
    title: "تحديث المورد",
    edit: "تعديل",
  },
};
