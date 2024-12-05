import { TSubUser } from "src/types/subUser.types";

export const SubUserData: TSubUser = {
  title: "مدیریت کاربران",
  addButton: "افزودن کاربر",
  notFound: "کاربر یافت نشد",
  editButton: "ویرایش کاربر",
  permission: "سطح دسترسی",
  pickRole: "نقش را انتخاب کنید",
  save:'ذخیره',
  addStepper: {
    title: "افزودن کاربر جدید",
    steps: [
      {
        method: "post",
        service: "/subuser/",
        id: 0,
        title: "اطلاعات فردی",
        inputs: [
          {
            label: "شماره سریال کاربر",
            key: "serial_number",
            type: "number",
            required: true,
            justCreateStep: true,
          },
          {
            label: "کد حسابداری",
            checkbox: "ساخت کد به صورت دستی",
            key: "finantial_code",
            type: "number",
            required: true,
          },
          {
            label: "نام مستعار",
            key: "nick_name",
            required: true,
          },
          {
            label: "نام",
            key: "first_name",
            required: true,
          },
          {
            label: "نام خانوادگی",
            key: "last_name",
            required: true,
          },
          {
            label: "کد ملی",
            key: "national_code",
            required: true,
          },
          {
            label: "توضیحات",
            key: "description",
            required: true,
          },
        ],
      },
      {
        id: 1,
        method: "put",
        service: "/subuser/step2/",
        title: "اطلاعات آدرس",
        inputs: [
          {
            label: "کشور",
            key: "country",
            required: true,
          },
          {
            label: "استان",
            key: "province",
            required: true,
          },
          {
            label: "شهر",
            key: "city",
            required: true,
          },
          {
            label: "کد پستی",
            key: "postal_code",
            required: true,
          },
          {
            label: "آدرس",
            key: "address",
            required: true,
          },
        ],
      },
      {
        id: 2,
        method: "put",
        service: "/subuser/step3/",
        title: "اطلاعات تماس",
        inputs: [
          {
            label: "تلفن همراه 1",
            key: "phone_number",
            required: true,
          },
          {
            label: "تلفن همراه 2",
            key: "second_phone_number",
            required: true,
          },
          {
            label: "تلفن ثابت",
            key: "telephone",
            required: true,
          },
          {
            label: "ایمیل",
            key: "email",
            required: true,
          },
        ],
      },
    ],
    nextButton: "ثبت و مرحله بعدی",
    prevButton: "مرحله قبل",
    finalButton: "ثبت و تایید اطلاعات",
    successfull: {
      title: "کاربر با موفقیت افزوده گردید",
      link: {
        title: "نمایش لیست کاربرها",
        url: "subuser",
      },
    },
  },
};
