import { TSubUser } from "src/types/subUser.types";

export const SubUserData: TSubUser = {
  title: "إدارة المستخدمين",
  addButton: "إضافة مستخدم",
  notFound: "المستخدم غير موجود",
  editButton: "تعديل المستخدم",
  permission: "مستوى الوصول",
  pickRole: "اختر الدور",
  save: 'حفظ',
  addStepper: {
    title: "إضافة مستخدم جديد",
    steps: [
      {
        method: "post",
        service: "/subuser/",
        id: 0,
        title: "المعلومات الشخصية",
        inputs: [
          {
            label: "رقم تسلسلي للمستخدم",
            key: "serial_number",
            type: "number",
            required: true,
            justCreateStep: true,
          },
          {
            label: "رمز مالي",
            checkbox: "إنشاء الرمز يدويًا",
            key: "finantial_code",
            type: "number",
            required: true,
          },
          {
            label: "اسم مستعار",
            key: "nick_name",
            required: true,
          },
          {
            label: "الاسم الأول",
            key: "first_name",
            required: true,
          },
          {
            label: "اسم العائلة",
            key: "last_name",
            required: true,
          },
          {
            label: "رمز وطني",
            key: "national_code",
            required: true,
          },
          {
            label: "وصف",
            key: "description",
            required: true,
          },
        ],
      },
      {
        id: 1,
        method: "put",
        service: "/subuser/step2/",
        title: "معلومات العنوان",
        inputs: [
          {
            label: "الدولة",
            key: "country",
            required: true,
          },
          {
            label: "المحافظة",
            key: "province",
            required: true,
          },
          {
            label: "المدينة",
            key: "city",
            required: true,
          },
          {
            label: "الرمز البريدي",
            key: "postal_code",
            required: true,
          },
          {
            label: "العنوان",
            key: "address",
            required: true,
          },
        ],
      },
      {
        id: 2,
        method: "put",
        service: "/subuser/step3/",
        title: "معلومات الاتصال",
        inputs: [
          {
            label: "رقم الهاتف المحمول 1",
            key: "phone_number",
            required: true,
          },
          {
            label: "رقم الهاتف المحمول 2",
            key: "second_phone_number",
            required: true,
          },
          {
            label: "الهاتف الثابت",
            key: "telephone",
            required: true,
          },
          {
            label: "البريد الإلكتروني",
            key: "email",
            required: true,
          },
        ],
      },
    ],
    nextButton: "تسجيل والانتقال للخطوة التالية",
    prevButton: "الخطوة السابقة",
    finalButton: "تسجيل وتأكيد المعلومات",
    successfull: {
      title: "تم إضافة المستخدم بنجاح",
      link: {
        title: "عرض قائمة المستخدمين",
        url: "subuser",
      },
    },
  },
};
