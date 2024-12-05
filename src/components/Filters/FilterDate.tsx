import FilterIcon from "../icons/FilterIcon";
import { useQueryClient } from "@tanstack/react-query";
import DatePickerFilter from "../Forms/DatePickerFilter";
import { DataProps } from "src/data/fa";
import { useAppSelector } from "src/store/store";

type Props = {
  setStartDate: Function;
  setEndDate: Function;
  queryKey: any[];
};

const FilterDate = ({ setEndDate, setStartDate, queryKey }: Props) => {
  const queryClient = useQueryClient();
  const data: DataProps = useAppSelector((state) => state.dataReducer);

  return (
    <details className="dropdown dropdown-bottom dropdown-end w-full">
      <summary
        tabIndex={0}
        className="flex items-center gap-1 rounded-[10px] family-regular h-[28px] py-0 text-[11px] cursor-pointer"
      >
        <FilterIcon size={13} />
        {data.global.filterDateData.label}
      </summary>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-100 rounded-box z-[1] min-w-[350px] p-5 shadow"
      >
        <div className="grid grid-cols-2 gap-x-4 gap-y-8">
          {data.global.filterDateData.inputs.map((item) =>
            item.key === "start_date" ? (
              <DatePickerFilter
                label={item.label}
                setGregorianDate={setStartDate}
                calendarPosition="bottom-end"
              />
            ) : item.key === "end_date" ? (
              <DatePickerFilter
                label={item.label}
                setGregorianDate={setEndDate}
              />
            ) : null
          )}
        </div>

        <button
          onClick={() =>
            queryClient.invalidateQueries({
              queryKey,
            })
          }
          className="btn-primary text-xs mt-10 px-3 py-2 h-10 ms-auto"
        >
          <FilterIcon size={16} color="white" />
          {data.global.filterDateData.submit}
        </button>
      </ul>
    </details>
  );
};

export default FilterDate; 
