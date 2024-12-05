import { TFilterDateData } from "src/types/global.types";

export type TGlobalData = {
  filterDateData: TFilterDateData;
};

export const globalData: TGlobalData = {
  filterDateData: {
    label: "Date Filter",
    inputs: [
      {
        key: "start_date",
        label: "Start Date",
        required: false,
      },
      {
        key: "end_date",
        label: "End Date",
        required: false,
      },
    ],
    submit: "Apply Date",
  },
};
