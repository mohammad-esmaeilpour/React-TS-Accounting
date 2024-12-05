import FilterIcon from "../icons/FilterIcon";
import { useParams } from "react-router-dom";
import CategoryDropdown from "../Dropdown/CategoryDropdown";
import { TSingleCategory } from "src/types/Category.types";
import { TProductsData } from "src/types/Product.types";
import { useQueryClient } from "@tanstack/react-query";
import DatePickerFilter from "../Forms/DatePickerFilter";

type Props = {
  data: TProductsData;
  setStartDate: Function;
  setEndDate: Function;
  selectedCategory: TSingleCategory | null;
  setSelectedCategory: Function;
  pageNumber: number;
  pageSize: number;
};

const FilterProduct = ({
  data,
  setEndDate,
  setStartDate,
  selectedCategory,
  setSelectedCategory,
  pageNumber,
  pageSize,
}: Props) => {
  const params = useParams();
  const queryClient = useQueryClient();
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
            item.key === "start_date" ? (
              <DatePickerFilter
                label={item.label}
                setGregorianDate={setStartDate}
              />
            ) : item.key === "end_date" ? (
              <DatePickerFilter
                label={item.label}
                setGregorianDate={setEndDate}
              />
            ) : item.key === "category" ? (
              <div className="col-span-2">
                <CategoryDropdown
                  categoryType={params.pt!}
                  selectedCategory={selectedCategory}
                  setSelectedCategory={setSelectedCategory}
                />
              </div>
            ) : null
          )}
        </div>

        <button
          onClick={() =>
            queryClient.invalidateQueries({
              queryKey: ["products", params.pt, pageNumber, pageSize],
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

export default FilterProduct;
