import FilterIcon from "../icons/FilterIcon";
import DropdownMinimalList from "../Dropdown/DropdownMinimalList";
import { useParams } from "react-router-dom";
import { TRemittanceData } from "src/types/Remittance.types";
import { useQueryClient } from "@tanstack/react-query";
import InputsForm from "../Forms/InputsForm";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import DatePickerFilter from "../Forms/DatePickerFilter";

type Props = {
  data: TRemittanceData;
  setStartDate: Function;
  setEndDate: Function;
  setStartDesId: Function;
  setEndDesId: Function;
  setSubUserId: Function;
  pageNumber: number;
  pageSize: number;
  setStatus:Function
  setRemittanceKind:Function
};

const FilterRemittance = ({
  data,
  setSubUserId,
  setEndDate,
  setEndDesId,
  setStartDate,
  setStartDesId,
  pageNumber,
  pageSize,
  setRemittanceKind,setStatus
}: Props) => {
  const params = useParams();
  const queryClient = useQueryClient();
  const {
    register,
    setValue,
    watch,
    formState: { errors },
  } = useForm();
  
  const watchStatus = watch("status");
  const watchRemittanceKind = watch("remittanceKind");

  useEffect(()=>{
    setRemittanceKind(watchRemittanceKind);
    setStatus(watchStatus);
  },[watchStatus,watchRemittanceKind])

  return (
    <details className="dropdown dropdown-bottom dropdown-end w-full">
      <summary
        tabIndex={1}
        className="flex items-center gap-1 rounded-[10px] family-regular h-[28px] py-0 px-3.5 text-[11px] cursor-pointer"
      >
        <FilterIcon size={13} />
        {data.filter.title}
      </summary>
      <ul
        tabIndex={1}
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
            ) : item.key === "originWarehouse" ? (
              <DropdownMinimalList
                queryKey={["warehouses"]}
                service={`warehouse/min/${params.bid}`}
                serviceKey="warehouses"
                setSelectedItemId={setStartDesId}
                showTitleKey="title"
                label={item.label}
                defaultValue={item.placeholder}
              />
            ) : item.key === "destinationWarehouse" ? (
              <DropdownMinimalList
                queryKey={["warehouses"]}
                service={`warehouse/min/${params.bid}`}
                serviceKey="warehouses"
                setSelectedItemId={setEndDesId}
                showTitleKey="title"
                label={item.label}
                defaultValue={item.placeholder}
              />
            ) : item.key === "sub_user_id" ? (
              <div className="col-span-2">
                <DropdownMinimalList
                  queryKey={["subUsers"]}
                  service={`subuser/${params.bid}`}
                  serviceKey="subusers"
                  setSelectedItemId={setSubUserId}
                  showTitleKey="nick_name"
                  label={item.label}
                  defaultValue={item.placeholder}
                />
              </div>
            ) : (
              <InputsForm
                errors={errors}
                item={item}
                register={register}
                setValue={setValue}
                watch={watch}
              />
            )
          )}
        </div>

        <button
          onClick={() =>
            queryClient.invalidateQueries({
              queryKey: ["remittances", pageNumber, pageSize],
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

export default FilterRemittance;
