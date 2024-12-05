import { TFilterDateData } from "src/types/global.types";

export type TGlobalData = {
  filterDateData: TFilterDateData;
};

export const globalData: TGlobalData = {
  filterDateData: {
    label: "Tarih Filtresi",
    inputs: [
      {
        key: "start_date",
        label: "Başlangıç Tarihi",
        required: false,
      },
      {
        key: "end_date",
        label: "Bitiş Tarihi",
        required: false,
      },
    ],
    submit: "Tarihi Uygula",
  },
};
