import { MouseEvent, useEffect, useState } from "react";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import gregorian from "react-date-object/calendars/gregorian";
import persian_fa from "react-date-object/locales/persian_fa";
import gregorian_en from "react-date-object/locales/gregorian_en";
import CalenderIcon from "../icons/CalenderIcon";
import { useQuery } from "@tanstack/react-query";
import { TSingleBusiness } from "src/types/Business.type";
import { useAppSelector } from "src/store/store";
import { DataProps } from "src/data/fa";

type Props = {
  label: string;
  setGregorianDate: Function;
  calendarType?: string;
  initialData?: any;
  offInputUi?: boolean;
  position?: string;
};

const DatePickerLocal = ({
  label,
  setGregorianDate,
  calendarType,
  initialData,
  offInputUi,
  position,
}: Props) => {
  const [value, setValue] = useState(new Date());
  const data: DataProps = useAppSelector((state) => state.dataReducer);

  useEffect(() => {
    if (initialData) {
      setValue(initialData);
      setGregorianDate(initialData);
    }
  }, []);

  const handleDateChange = (selectedDate: any) => {
    setValue(selectedDate);
    if (selectedDate) {
      const isoDate = selectedDate.toDate().toISOString();
      setGregorianDate(isoDate);
    } else {
      setGregorianDate(null);
    }
  };

  const { data: business } = useQuery<TSingleBusiness>({
    queryKey: ["business"],
    staleTime: Infinity,
  });

  return (
    <div>
      <div className="text-xs family-regular mb-2 block">{label}</div>
      <div
        className={`${
          offInputUi ? "" : "input-instance"
        } flex items-center justify-end`}
      >
        <DatePicker
          value={value}
          onChange={handleDateChange}
          calendar={
            calendarType
              ? calendarType === "solar"
                ? persian
                : gregorian
              : business?.calendar_type === "solar"
              ? persian
              : gregorian
          }
          locale={
            calendarType
              ? calendarType === "solar"
                ? persian_fa
                : gregorian_en
              : business?.calendar_type === "solar"
              ? persian_fa
              : gregorian_en
          }
          calendarPosition={position ? position : "bottom-start"}
          format="YYYY/MM/DD"
          render={(value, openCalendar) => {
            return (
              <button
                className="btn btn-primary rounded-md h-8 text-xs family-light py-0"
                onClick={(e: MouseEvent<HTMLButtonElement>) => {
                  e.preventDefault();
                  openCalendar();
                }}
              >
                {value || data.word.selectData}
                <CalenderIcon size={16} color="white" />
              </button>
            );
          }}
        />
      </div>
    </div>
  );
};

export default DatePickerLocal;