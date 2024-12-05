import { useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import SortDropdown from "src/components/Dropdown/SortDropdown";
import FilterDate from "src/components/Filters/FilterDate";
import SearchForm from "src/components/Forms/SearchForm";
import PlusIcon from "src/components/icons/PlusIcon";
import Table from "src/components/Table";
import { DataProps } from "src/data/fa";
import getApi from "src/react-query/services/getApi";
import { useAppSelector } from "src/store/store";
import { TExpence } from "src/types/CashFlow.type";

const Expence = () => {
  const data: DataProps = useAppSelector((state) => state.dataReducer);
  const [filterExpense, setFilterExpense] = useState<TExpence[] | null>(null);

  const params = useParams();
  // params
  const [pageSize, setPageSize] = useState<number>(10);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [status, setStatus] = useState<
    { status: number | null; title: string } | null
  >(null);

  const {
    data: expenses,
    isPending,
    error,
  } = getApi<TExpence[]>({
    queryKey: ["expense", pageNumber, pageSize, status],
    service: `cashflow/expense/${params.bid}`,
    serviceKey: "expenses",
    params: {
      pageNumber,
      pageSize,
      start_date: startDate,
      end_date: endDate,
      status: status?.status,
    },
  });

  return (
    <div className="panel flex flex-col">
      <div className="flex sticky top-0 bg-white z-10 w-full justify-between items-center border-b py-5 px-5 mb-7">
        <h1 className="family-regular text-xl">{data.expence.title}</h1>
        <div className="flex items-center gap-4">
          <FilterDate
            setEndDate={setEndDate}
            setStartDate={setStartDate}
            queryKey={["expense", pageNumber, pageSize]}
          />

          <NavLink
            to={`create`}
            className="btn-primary rounded-[10px] family-regular h-[28px] py-0 px-3.5 text-[11px]"
          >
            <PlusIcon size={13} />
            {data.expence.addButton}
          </NavLink>
        </div>
      </div>

      <div className="mx-4 justify-between flex mb-8">
        <div className="flex gap-2.5 flex-1">
          <div className="flex w-40 items-center">
            <SortDropdown list={data.expence.sort} setObject={setStatus} />
          </div>
          <div className="relative w-full flex">
            <SearchForm
              placeholder={data.expence.searchPlaceholder}
              objectList={expenses!}
              searchKeys={[
                "expense_number",
                "document_number",
                "flow_kind",
                "description",
              ]}
              setFilteredList={setFilterExpense}
            />
          </div>
        </div>
      </div>

      <Table
        thead={data.expence.table.thead}
        tbody={data.expence.table.tbody}
        notFound={data.expence.notFound}
        list={filterExpense}
        pageNumber={pageNumber}
        pageSize={pageSize}
        setPageNumber={setPageNumber}
        setPageSize={setPageSize}
        error={error}
        isPending={isPending}
      />
    </div>
  );
};

export default Expence;
