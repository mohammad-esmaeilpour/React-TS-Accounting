import { TFilterDateData } from "src/types/global.types";

export type TGlobalData = {
  filterDateData: TFilterDateData;
};

export const globalData: TGlobalData = {
  filterDateData: {
    label: "تصفية التاريخ",
    inputs: [
      {
        key: "start_date",
        label: "تاريخ البدء",
        required: false,
      },
      {
        key: "end_date",
        label: "تاريخ الانتهاء",
        required: false,
      },
    ],
    submit: "تطبيق التاريخ",
  },
};
