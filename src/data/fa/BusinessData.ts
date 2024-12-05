import { TBusiness } from "src/types/Business.type";

export const BusinessData: TBusiness = {
  title: "لیست کسب و کارهای شما",
  addButton: "افزودن کسب و کار",
  editButton: "ویرایش کسب و کار",
  userButton: "مدیریت کاربران",
  permission: "سطح دسترسی",
  addStepper: {
    title: "افزودن کسب و کار جدید",
    steps: [
      {
        id: 0,
        method: "post",
        service: "business/step1/",
        title: "کسب و کار",
        inputs: [
          {
            label: "نام کسب و کار",
            key: "name",
            required: true,
          },
          {
            label: "نام قانونی",
            key: "legal_name",
            required: true,
          },
          {
            label: "واحد پول اصلی",
            key: "currency",
            required: true,
          },
          {
            label: "تقویم",
            key: "calendar_type",
            options: {
              label: "انتخاب نوع تقویم",
              list: [
                { title: "میلادی", key: "gregorian" },
                { title: "شمسی", key: "solar" },
              ],
            },
            required: true,
          },
          {
            label: "سیستم انبارداری",
            key: "has_warehouse",
            type: "boolean",
            checkbox: "شامل سیستم انبارداری شود",
            required: true,
          },
        ],
      },
      {
        id: 1,
        method: "put",
        service: "business/step2/",
        title: "اقتصادی",
        inputs: [
          {
            label: "شناسه ملی",
            key: "national_license",
            required: false,
          },
          {
            label: "کد اقتصادی",
            key: "economic_license",
            required: false,
          },
          {
            label: "شماره ثبت",
            key: "registration_number",
            required: false,
          },
        ],
      },
      {
        id: 2,
        method: "put",
        service: "/business/step3/",
        title: "سال مالی",
        inputs: [
          {
            label: "عنوان سال مالی",
            key: "financial_year_title",
            required: true,
          },
          {
            label: "تاریخ شروع",
            key: "financial_year_start_date",
            required: true,
            type: "date",
          },
          {
            label: "تاریخ پایان",
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
        title: "تماس",
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
            label: "آدرس کامل",
            key: "address",
            required: false,
          },

          {
            label: "1 فکس",
            key: "fax1",
            required: false,
          },
          {
            label: "ایمیل",
            key: "email",
            required: false,
          },
          {
            label: "2 فکس",
            key: "fax2",
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
    nextButton: "ثبت و مرحله بعدی",
    prevButton: "مرحله قبل",
    finalButton: "ثبت و مرحله نهایی",
    successfull: {
      title: "کسب و کار شما با موفقیت افزوده گردید",
      link: {
        title: "نمایش لیست کسب و کارها",
        url: "business",
      },
    },
  },
};
