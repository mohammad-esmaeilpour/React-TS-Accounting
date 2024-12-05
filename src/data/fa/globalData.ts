import { TFilterDateData } from "src/types/global.types";

export type TGlobalData = {
  filterDateData: TFilterDateData;
};

export const globalData: TGlobalData = {
  filterDateData: {
    label: "فیلتر تاریخ",
    inputs: [
      {
        key: "start_date",
        label: "شروع تاریخ",
        required: false,
      },
      {
        key: "end_date",
        label: "اتمام تاریخ",
        required: false,
      },
    ],
    submit: "اعمال تاریخ",
  },
};
