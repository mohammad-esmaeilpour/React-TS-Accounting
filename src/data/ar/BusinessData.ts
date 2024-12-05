import { TBusiness } from "src/types/Business.type";

export const BusinessData: TBusiness = {
  title: "قائمة أعمالك",
  addButton: "إضافة عمل",
  editButton: "تعديل العمل",
  userButton: "إدارة المستخدمين",
  permission: "مستوى الوصول",
  addStepper: {
    title: "إضافة عمل جديد",
    steps: [
      {
        id: 0,
        method: "post",
        service: "business/step1/",
        title: "الأعمال",
        inputs: [
          {
            label: "اسم العمل",
            key: "name",
            required: true,
          },
          {
            label: "الاسم القانوني",
            key: "legal_name",
            required: true,
          },
          {
            label: "العملة الأساسية",
            key: "currency",
            required: true,
          },
          {
            label: "التقويم",
            key: "calendar_type",
            options: {
              label: "اختر نوع التقويم",
              list: [
                { title: "ميلادي", key: "gregorian" },
                { title: "شمسي", key: "solar" },
              ],
            },
            required: true,
          },
          {
            label: "نظام المستودعات",
            key: "has_warehouse",
            type: "boolean",
            checkbox: "تضمين نظام المستودعات",
            required: true,
          },
        ],
      },
      {
        id: 1,
        method: "put",
        service: "business/step2/",
        title: "الاقتصاد",
        inputs: [
          {
            label: "الرقم الوطني",
            key: "national_license",
            required: false,
          },
          {
            label: "الكود الاقتصادي",
            key: "economic_license",
            required: false,
          },
          {
            label: "رقم التسجيل",
            key: "registration_number",
            required: false,
          },
        ],
      },
      {
        id: 2,
        method: "put",
        service: "/business/step3/",
        title: "السنة المالية",
        inputs: [
          {
            label: "عنوان السنة المالية",
            key: "financial_year_title",
            required: true,
          },
          {
            label: "تاريخ البدء",
            key: "financial_year_start_date",
            required: true,
            type: "date",
          },
          {
            label: "تاريخ الانتهاء",
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
        title: "التواصل",
        inputs: [
          {
            label: "البلد",
            key: "country",
            required: false,
          },
          {
            label: "المقاطعة",
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
            label: "العنوان الكامل",
            key: "address",
            required: false,
          },

          {
            label: "فاكس 1",
            key: "fax1",
            required: false,
          },
          {
            label: "البريد الإلكتروني",
            key: "email",
            required: false,
          },
          {
            label: "فاكس 2",
            key: "fax2",
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
    nextButton: "إرسال والانتقال إلى الخطوة التالية",
    prevButton: "الخطوة السابقة",
    finalButton: "إرسال والانتقال إلى الخطوة النهائية",
    successfull: {
      title: "تم إضافة عملك بنجاح",
      link: {
        title: "عرض قائمة الأعمال",
        url: "business",
      },
    },
  },
};
