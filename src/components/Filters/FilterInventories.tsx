import FilterIcon from "../icons/FilterIcon";
import DropdownMinimalList from "../Dropdown/DropdownMinimalList";
import { useParams } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import CategoryDropdown from "../Dropdown/CategoryDropdown";
import { TSingleCategory } from "src/types/Category.types";
import { TInventoryData } from "src/types/Inventory.type";
import DropdownCategoryType from "../Dropdown/DropdownCategoryType";
import { Fragment, useState } from "react";

type Props = {
  data: TInventoryData;
  pageSize: number;
  pageNumber: number;
  selectedCategory: TSingleCategory;
  setSelectedCategory: Function;
  setWarehouse: Function;
};

const FilterInventories = ({
  data,
  pageNumber,
  pageSize,
  selectedCategory,
  setSelectedCategory,
  setWarehouse,
}: Props) => {
  const params = useParams();
  const queryClient = useQueryClient();
  const [categoryType, setCategoryType] = useState('goods');
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
            item.key === "category_id" ? (
              <Fragment>
                <DropdownCategoryType
                  setSelectedCatType={setCategoryType}
                />
                <div className="w-full">
                  <CategoryDropdown
                    categoryType={categoryType}
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                  />
                </div>
              </Fragment>
            ) : item.key === "warehouse_id" ? (
              <div className="col-span-2">
                <DropdownMinimalList
                  queryKey={["warehouses"]}
                  service={`warehouse/min/${params.bid}`}
                  serviceKey="warehouses"
                  key={item.key}
                  label={item.label}
                  setSelectedItemId={setWarehouse}
                  showTitleKey={"title"}
                  onloadSelect={true}
                />
              </div>
            ) : null
          )}
        </div>

        <button
          onClick={() =>
            queryClient.invalidateQueries({
              queryKey: ["inventories", pageNumber, pageSize],
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

export default FilterInventories;
