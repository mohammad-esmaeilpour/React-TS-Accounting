import _ from "lodash";
import { useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import FilterRemittance from "src/components/Filters/FilterRemittance";
import SearchForm from "src/components/Forms/SearchForm";
import PlusIcon from "src/components/icons/PlusIcon";
import Table from "src/components/Table";
import { DataProps } from "src/data/fa";
import getApi from "src/react-query/services/getApi";
import { useAppSelector } from "src/store/store";
import { TRemittances } from "src/types/Remittance.types";

const Remittance = () => {
  const data: DataProps = useAppSelector((state) => state.dataReducer);

  const [filteredRemittance, setFilteredRemittance] = useState<
    TRemittances[] | null
  >(null);
  const [pageSize, setPageSize] = useState<number>(5);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [startDesId, setStartDesId] = useState();
  const [endDesId, setEndDesId] = useState();
  const [subUserId, setSubUserId] = useState();
  const [status, setStatus] = useState();  
  const [remittanceKind, setRemittanceKind] = useState();  

  const params = useParams();
  console.log(
    startDate,
    endDate,
    startDesId,
    endDesId,
    subUserId,
    status,
    remittanceKind
  );
  
  const {
    data: remittances,
    error,
    isPending,
  } = getApi<TRemittances[]>({
    queryKey: ["remittances", pageNumber, pageSize],
    service: `remittance/${params.bid}`,
    serviceKey: "remittances",
    params: {
      pageNumber,
      pageSize,
      start_date: startDate,
      end_date: endDate,
      originWarehouse: startDesId,
      destinationWarehouse: endDesId,
      subuserId: subUserId,
      remittanceKind: remittanceKind,
      status: status,
    },
  });

  return (
    <div className="panel flex flex-col">
      <div className="flex sticky top-0 bg-white z-10 w-full justify-between items-center border-b py-5 px-5 mb-7">
        <h1 className="family-regular text-xl">{data.remittance.title}</h1>
        <div className="flex items-center gap-4">
          <FilterRemittance
            data={data.remittance}
            setEndDate={setEndDate}
            setStartDate={setStartDate}
            setEndDesId={setEndDesId}
            setStartDesId={setStartDesId}
            setSubUserId={setSubUserId}
            pageNumber={pageNumber}
            pageSize={pageSize}
            setRemittanceKind={setRemittanceKind}
            setStatus={setStatus}
          />
          <NavLink
            to={"create"}
            className="btn-primary rounded-[10px] family-regular h-[28px] py-0 px-3.5 text-[11px]"
          >
            <PlusIcon size={13} />
            {data.remittance.add_button}
          </NavLink>
        </div>
      </div>

      <div className="mx-4 justify-between flex mb-8">
        <div className="flex gap-2.5 flex-1 ">
          {/* <div className="flex w-40 items-center">
            <DropdownInputPrimary
              list={data.remittance.sort}
              setObject={setRemittanceKind}
            />
          </div> */}
          <SearchForm
            placeholder={data.remittance.searchPlaceholder}
            objectList={remittances!}
            setFilteredList={setFilteredRemittance}
            searchKeys={["remittance_kind", "description"]}
          />
        </div>
      </div>

      <Table
        error={error}
        isPending={isPending}
        list={filteredRemittance}
        notFound={"not found"}
        tbody={data.remittance.table.tbody}
        thead={data.remittance.table.thead}
        pageNumber={pageNumber}
        pageSize={pageSize}
        setPageNumber={setPageNumber}
        setPageSize={setPageSize}
      />
    </div>
  );
};

export default Remittance;
