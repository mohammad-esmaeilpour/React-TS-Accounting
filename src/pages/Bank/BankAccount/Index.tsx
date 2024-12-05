import { Link, useParams } from "react-router-dom";
import PlusIcon from "src/components/icons/PlusIcon";
import { DataProps } from "src/data/fa";
import getApi from "src/react-query/services/getApi";
import { useAppSelector } from "src/store/store";
import { useRef, useState } from "react";
import { TSingleBankAccount } from "src/types/Bank.types";
import NotFoundItem from "src/components/NotFoundItem";
import Modal from "src/components/Modal";
import Table from "src/components/Table";
import BankListSkeleton from "../../../components/Skeleton/BankListSkeleton";
import BankAccountList from "./List";
import FilterDate from "src/components/Filters/FilterDate";
import SearchForm from "src/components/Forms/SearchForm";

const BankAccount = () => {
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(10);
  const [start_date, setStartDate] = useState(null);
  const [end_date, setEndDate] = useState(null);
  const [filterCiculation, setFilterCiculation] = useState([]);
  const [bankAccount, setBankAccount] = useState<TSingleBankAccount | null>(
    null
  );
  
  const data: DataProps = useAppSelector((state) => state.dataReducer);
  const params = useParams();
  const modalsRef: any = useRef();

  const skeleton = [1, 2, 3, 4, 5];

  const handleModal = () => {
    modalsRef.current && modalsRef.current.showModal();
  };

  const { data: bankAccountList, isLoading: bankAccountListLoading } = getApi<
    TSingleBankAccount[]
  >({
    queryKey: ["bankAccounts", params.bid],
    service: `bank/account/${params.bid}/max`,
    serviceKey: "banks",
  });
 

  const {
    data: singleBankAccount,
    isPending: isPendingBankAcc,
    error: errorBankAcc,
  } = getApi<TSingleBankAccount>({
    queryKey: ["singleBankAccount", bankAccount?.id, pageSize, pageNumber],
    service: `bank/account/${params.bid}/${bankAccount?.id}`,
    serviceKey: "bank",
    enable: bankAccount?.id ? true : false,
    params: {
      pageNumber,
      pageSize,
      start_date,
      end_date,
    },
  });

  return (
    <div className="panel px-0">
      <div className="flex sticky z-10 top-0 bg-white w-full justify-between items-center border-b py-5 px-5 mb-7">
        <h1 className="family-regular text-xl">{data.bankAccount.title}</h1>
        <Link
          to={"create"}
          className="btn-success h-[31px] rounded-[10px] px-3"
        >
          <PlusIcon size={10} />
          {data.bankAccount.addButton}
        </Link>
      </div>

      <div className="flex flex-col gap-y-3 px-5">
        {bankAccountListLoading &&
          skeleton.map((item) => <BankListSkeleton key={item} />)}
        {bankAccountList?.length === 0 ? (
          <NotFoundItem title={data.bankAccount.notFound} />
        ) : (
          bankAccountList?.map((item) => (
            <BankAccountList
              setBankAccount={setBankAccount}
              handleModal={handleModal}
              item={item}
              key={item.id}
            />
          ))
        )}
      </div>

      <Modal
        className="max-w-screen-xl flex flex-col h-screen"
        title={data.bankAccount.circulationsButton}
        modalsRef={modalsRef}
      >
          <div className="flex justify-between w-full mb-5">
            <SearchForm
              objectList={singleBankAccount?.circulations!}
              placeholder={data.circulation.searchPlaceholder}
              searchKeys={data.circulation.tbody}
              setFilteredList={setFilterCiculation}
            />
            <div className="flex justify-end">
              <FilterDate
                queryKey={["singleBankAccount", bankAccount?.id]}
                setEndDate={setEndDate}
                setStartDate={setStartDate}
              />
            </div>
          </div>

          <Table
            notFound={data.bankAccount.circulationNotFound}
            error={errorBankAcc}
            isPending={isPendingBankAcc}
            list={filterCiculation}
            pageNumber={pageNumber}
            pageSize={pageSize}
            setPageNumber={setPageNumber}
            setPageSize={setPageSize}
            tbody={data.circulation.tbody}
            thead={data.circulation.thead}
          />
      </Modal>
    </div>
  );
};

export default BankAccount;
