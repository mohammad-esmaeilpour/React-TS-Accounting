import {
  TBankAccountData,
  TCashRegisterData,
  TCirculationData,
  TSlandererData,
} from "src/types/Bank.types";

export const BankAccountData: TBankAccountData = {
  title: "قائمة البنوك",
  seccondTitle: "الرصيد",
  addButton: "إضافة بنك",
  editButton: "تعديل",
  modalTitle: "دورة النقدية في السجل",
  notFound: "لإنشاء حساب بنك، انتقل إلى صفحة إضافة بنك.",
  circulationNotFound: "لا توجد دورة حسابية.",
  circulationsButton: "دورة الحساب",
  table: {
    thead: ["#", "الكود", "وصف الدورة", "المدين", "الدائن", "الرصيد"],
    tbody: ["circulation_code", "description", "debtor", "creditor", "balance"],
  },
  create: {
    title: "إضافة بنك",
    saveButton: "حفظ",
    imageUpload: {
      key: "image_src",
      label: "صورة البنك",
      alt: "حدد صورة البنك",
    },
    inputsTop: [
      {
        key: "finantial_code",
        label: "كود المحاسبة",
        required: true,
        generator: "توليد الكود يدويًا",
        type: "number",
      },
      {
        key: "bank_name",
        label: "اسم البنك",
        required: true,
      },
      {
        key: "account_owner",
        label: "اسم صاحب الحساب",
        required: true,
      },
      // {
      //   key: "default",
      //   label: "افتراضي",
      //   required: true,
      //   type: "boolean",
      // },
    ],
    inputsBottom: [
      {
        key: "account_number",
        label: "رقم الحساب",
        required: true,
      },
      {
        key: "card_number",
        label: "رقم البطاقة",
        required: true,
      },
      {
        key: "shaba_number",
        label: "رقم شباك",
        required: true,
      },
      {
        key: "payment_switch_number",
        label: "رقم تبديل الدفع",
        required: true,
      },
      {
        key: "payment_terminal_number",
        label: "رقم الطرفية للدفع",
        required: true,
      },
      {
        key: "store_accepter_number",
        label: "رقم القابل للمخزن",
        required: true,
      },
      {
        key: "description",
        label: "الوصف",
        required: true,
      },
    ],
  },
  update: {
    title: "تحديث حساب البنك",
    edit: "تعديل",
  },
};

export const CashRegisterData: TCashRegisterData = {
  title: "قائمة السجل النقدي",
  seccondTitle: "الرصيد",
  addButton: "إضافة سجل نقدي",
  editButton: "تعديل",
  modalTitle: "دورة النقدية في السجل",
  notFound: "لإنشاء سجل نقدي، انتقل إلى صفحة إضافة سجل نقدي.",
  circulationNotFound: "لا توجد دورة حسابية.",
  circulationsButton: "دورة الحساب",
  table: {
    thead: ["#", "الكود", "وصف الدورة", "المشروع", "المدين", "الدائن", "الرصيد"],
    tbody: ["circulation_code", "description", "debtor", "creditor", "balance"],
  },
  create: {
    title: "إضافة سجل نقدي",
    saveButton: "حفظ",
    imageUpload: {
      key: "image_src",
      label: "صورة السجل النقدي",
      alt: "حدد صورة السجل النقدي",
    },
    inputsTop: [
      {
        key: "finantial_code",
        label: "كود المحاسبة",
        required: true,
        generator: "توليد الكود يدويًا",
        type: "number",
      },
      {
        key: "cash_register_name",
        label: "اسم السجل النقدي",
        required: true,
      },
      // {
      //   key: "default",
      //   label: "افتراضي",
      //   required: true,
      //   type: "boolean",
      // },
    ],
    inputsBottom: [
      {
        key: "payment_switch_number",
        label: "رقم تبديل الدفع",
        required: true,
      },
      {
        key: "payment_terminal_number",
        label: "رقم الطرفية للدفع",
        required: true,
      },
      {
        key: "store_accepter_number",
        label: "رقم القابل للمخزن",
        required: true,
      },
      {
        key: "description",
        label: "الوصف",
        required: true,
      },
    ],
  },
  update: {
    title: "تحديث السجل النقدي",
    edit: "تعديل",
  },
};

export const SlandererData: TSlandererData = {
  title: "قائمة النقدية الصغيرة",
  seccondTitle: "الرصيد",
  editButton: "تعديل",
  addButton: "إضافة نقدية صغيرة",
  modalTitle: "دورة النقدية في السجل",
  notFound: "لإنشاء نقدية صغيرة، انتقل إلى صفحة إضافة نقدية صغيرة.",
  circulationNotFound: "لا توجد دورة حسابية.",
  circulationsButton: "دورة الحساب",
  table: {
    thead: ["#", "الكود", "وصف الدورة", "المشروع", "المدين", "الدائن", "الرصيد"],
    tbody: ["circulation_code", "description", "debtor", "creditor", "balance"],
  },
  create: {
    title: "إضافة نقدية صغيرة",
    saveButton: "حفظ",
    imageUpload: {
      key: "image_src",
      label: "صورة النقدية الصغيرة",
      alt: "حدد صورة النقدية الصغيرة",
    },
    inputsTop: [
      {
        key: "finantial_code",
        label: "كود المحاسبة",
        required: true,
        generator: "توليد الكود يدويًا",
        type: "number",
      },
      {
        key: "slanderer_name",
        label: "اسم النقدية الصغيرة",
        required: true,
      },
      // {
      //   key: "default",
      //   label: "افتراضي",
      //   required: true,
      //   type: "boolean",
      // },
    ],
    inputsBottom: [
      {
        key: "description",
        label: "الوصف",
        required: true,
      },
    ],
  },
  update: {
    title: "تحديث النقدية الصغيرة",
    edit: "تعديل",
  },
};

export const CirculationData: TCirculationData = {
  searchPlaceholder: "ابحث في دورة الحساب",
  thead: ["#", "الكود", "وصف الدورة", "المدين", "الدائن", "الرصيد", "الحالة"],
  tbody: [
    "circulation_code",
    "description",
    "debtor",
    "creditor",
    "balance",
    "status",
  ],
};
