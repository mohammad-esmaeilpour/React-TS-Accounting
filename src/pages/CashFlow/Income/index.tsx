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
import { TIncome } from "src/types/CashFlow.type";

const Income = () => {
  const data: DataProps = useAppSelector((state) => state.dataReducer);

  const [filterIncome, setFilterIncome] = useState<TIncome[] | null>(null);

  // params
  const [pageSize, setPageSize] = useState<number>(10);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [status, setStatus] = useState<{
    status: number | null;
    title: string;
  } | null>(null);
  const params = useParams();

  const {
    data: incomes,
    error,
    isPending,
  } = getApi<TIncome[]>({
    queryKey: ["income", pageNumber, pageSize, status],
    service: `cashflow/income/${params.bid}`,
    serviceKey: "incomes",
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
        <h1 className="family-regular text-xl">{data.income.title}</h1>
        <div className="flex items-center gap-4">
          <FilterDate
            setEndDate={setEndDate}
            setStartDate={setStartDate}
            queryKey={["income", pageNumber, pageSize]}
          />

          <NavLink
            to={`create`}
            className="btn-primary rounded-[10px] family-regular h-[28px] py-0 px-3.5 text-[11px]"
          >
            <PlusIcon size={13} />
            {data.income.addButton}
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
              placeholder={data.income.searchPlaceholder}
              objectList={incomes!}
              searchKeys={[
                "income_number",
                "document_number",
                "flow_kind",
                "description",
              ]}
              setFilteredList={setFilterIncome}
            />
          </div>
        </div>
      </div>

      <Table
        thead={data.income.table.thead}
        tbody={data.income.table.tbody}
        notFound={data.income.notFound}
        list={filterIncome}
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

export default Income;
