import FilterIcon from "../icons/FilterIcon";
import { TFactorData } from "src/types/Factor.types";
import DropdownMinimalList from "../Dropdown/DropdownMinimalList";
import { useParams } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import DatePickerFilter from "../Forms/DatePickerFilter";
import { DataProps } from "src/data/fa";
import { useAppSelector } from "src/store/store";

type Props = {
  data: TFactorData;
  setStartIssue: Function;
  setEndIssue: Function;
  setStartDue: Function;
  setEndDue: Function;
  setSubUserId: Function;
  factorKind: "purchase" | "sales";
  pageSize: number;
  pageNumber: number;
};

const FilterFactor = ({
  data,
  setEndDue,
  setEndIssue,
  setStartDue,
  setStartIssue,
  setSubUserId,
  factorKind,
  pageNumber,
  pageSize,
}: Props) => {
  const params = useParams();
  const queryClient = useQueryClient();
  const mainData: DataProps = useAppSelector((state) => state.dataReducer);
  return (
    <details className="dropdown dropdown-bottom dropdown-end w-full">
      <summary
        tabIndex={0}
        className="flex items-center gap-1 rounded-[10px] family-regular h-[28px] py-0 px-3.5 text-[11px] cursor-pointer"
      >
        <FilterIcon size={13} />
        {data.filter.title}
      </summary>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-100 rounded-box z-[1] w-[450px] p-5 shadow"
      >
        <div className="grid grid-cols-2 gap-x-4 gap-y-8">
          {data.filter.inputs.map((item) =>
            item.key === "start_issue_date" ? (
              <DatePickerFilter
                label={item.label}
                setGregorianDate={setStartIssue}
              />
            ) : item.key === "end_issue_date" ? (
              <DatePickerFilter
                label={item.label}
                setGregorianDate={setEndIssue}
              />
            ) : item.key === "start_due_date" ? (
              <DatePickerFilter
                label={item.label}
                setGregorianDate={setStartDue}
              />
            ) : item.key === "end_due_date" ? (
              <DatePickerFilter
                label={item.label}
                setGregorianDate={setEndDue}
              />
            ) : item.key === "customer" ? (
              <div className="col-span-2">
                <DropdownMinimalList
                  queryKey={["customer"]}
                  service={`people/customer/${params.bid}/min`}
                  serviceKey="customers"
                  setSelectedItemId={setSubUserId}
                  showTitleKey="first_name"
                  label={item.label}
                  defaultValue={mainData.word.selectCustomer}
                />
              </div>
            ) : null
          )}
        </div>

        <button
          onClick={() =>
            queryClient.invalidateQueries({
              queryKey: ["factors", factorKind, pageNumber, pageSize],
            })
          }
          className="btn-primary text-xs mt-4 px-3 py-2 h-10 ms-auto"
        >
          <FilterIcon size={16} color="white" />
          {data.filter.title}
        </button>
      </ul>
    </details>
  );
};

export default FilterFactor;
