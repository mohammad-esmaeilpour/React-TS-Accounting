import _ from "lodash";
import { useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import SearchForm from "src/components/Forms/SearchForm";
import PlusIcon from "src/components/icons/PlusIcon";
import getApi from "src/react-query/services/getApi";
import { TRemittances } from "src/types/Remittance.types";
import DropdownFactorSort from "src/components/Dropdown/DropdownFactorSort";
import { TFactorData } from "src/types/Factor.types";
import FilterFactor from "src/components/Filters/FilterFactor";
import Table from "src/components/Table";

type Props = {
  factorKind: "purchase" | "sales";
  data: TFactorData;
};

const ListFactor = ({ factorKind, data }: Props) => {
  // state
  const [pageSize, setPageSize] = useState<number>(5);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [selectedStatus, setSelectedStatus] = useState<number | null>(null);
  const [isPayed, setPayed] = useState<boolean | null>(null);
  const [isDelivered, setDelivered] = useState<boolean | null>(null);
  const [filteredFactors, setFilteredFactors] = useState<TRemittances[] | null>(
    null
  );
  const [start_due_date, setStartDue] = useState<string | null>(null);
  const [end_due_date, setEndDue] = useState<string | null>(null);
  const [start_issue_date, setStartIssue] = useState<string | null>(null);
  const [end_issue_date, setEndIssue] = useState<string | null>(null);
  const [sub_user_id, setSubUserId] = useState<number | null>(null);

  // hooks
  const params = useParams();

  // services
  const {
    data: factors,
    isPending,
    error,
  } = getApi<TRemittances[]>({
    queryKey: [
      "factors",
      factorKind,
      pageNumber,
      pageSize,
      selectedStatus,
      isPayed,
      isDelivered,
    ],
    service: `factor/${factorKind === "purchase" ? "purchase" : "sales"}/${
      params.bid
    }`,
    serviceKey: `${factorKind}_factors`,
    params: {
      pageNumber,
      pageSize,
      status: selectedStatus,
      is_payed_fully: isPayed,
      is_delivered: isDelivered,
      start_due_date,
      end_due_date,
      start_issue_date,
      end_issue_date,
      sub_user_id,
    },
  });

  return (
    <div className="panel flex flex-col">
      <div className="flex sticky top-0 bg-white z-10 w-full justify-between items-center border-b py-5 px-5 mb-7">
        <h1 className="family-regular text-xl">{data.title}</h1>
        <div className="flex items-center gap-4">
          <FilterFactor
            data={data}
            setEndDue={setEndDue}
            setEndIssue={setEndIssue}
            setStartDue={setStartDue}
            setStartIssue={setStartIssue}
            setSubUserId={setSubUserId}
            factorKind={factorKind}
            pageNumber={pageNumber}
            pageSize={pageSize}
          />

          <NavLink
            to={"create"}
            className="btn-primary rounded-[10px] family-regular h-[28px] py-0 px-3.5 text-[11px]"
          >
            <PlusIcon size={13} />
            {data.add_btn}
          </NavLink>
        </div>
      </div>

      <div className="mx-4 justify-between flex mb-8">
        <div className="flex gap-2.5 flex-1">
          {/* sort */}
          <DropdownFactorSort
            list={data.sort}
            setSelectedStatus={setSelectedStatus}
            setPayed={setPayed}
            setDelivered={setDelivered}
          />
          {/* search */}
          <SearchForm
            placeholder={data.input_placeholder}
            objectList={factors!}
            setFilteredList={setFilteredFactors}
            searchKeys={["title", "factor_number", "sub_user"]}
          />
        </div>
      </div>

      <Table
        error={error}
        isPending={isPending}
        list={filteredFactors}
        notFound={data.not_found}
        tbody={data.table.tbody}
        thead={data.table.thead}
        pageNumber={pageNumber}
        pageSize={pageSize}
        setPageNumber={setPageNumber}
        setPageSize={setPageSize}
        link={true}
      />
    </div>
  );
};

export default ListFactor;
