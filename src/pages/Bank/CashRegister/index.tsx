import { Link, useParams } from "react-router-dom";
import PlusIcon from "src/components/icons/PlusIcon";
import { DataProps } from "src/data/fa";
import getApi from "src/react-query/services/getApi";
import { useAppSelector } from "src/store/store";
import { useRef, useState } from "react";
import { TSingleCashRegister } from "src/types/Bank.types";
import NotFoundItem from "src/components/NotFoundItem";
import Modal from "src/components/Modal";
import Table from "src/components/Table";
import BankListSkeleton from "../../../components/Skeleton/BankListSkeleton";
import CashRegisterList from "./List";
import SearchForm from "src/components/Forms/SearchForm";
import FilterDate from "src/components/Filters/FilterDate";

const CashRegister = () => {
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(10);
  const [start_date, setStartDate] = useState(null);
  const [end_date, setEndDate] = useState(null);
  const [filterCiculation, setFilterCiculation] = useState([]);
  const [selectedCashRegister, setSelectedCashRegister] =
    useState<TSingleCashRegister | null>(null);

  const data: DataProps = useAppSelector((state) => state.dataReducer);
  const params = useParams();
  const modalsRef: any = useRef();

  const skeleton = [1, 2, 3, 4, 5];

  const handleModal = () => {
    modalsRef.current && modalsRef.current.showModal();
  };

  const { data: cashRegisterList, isLoading: cashRegisterListLoading } = getApi<
    TSingleCashRegister[]
  >({
    queryKey: ["cashregisters"],
    service: `bank/cashregister/${params.bid}/max`,
    serviceKey: "cashregisters",
  });

  const {
    data: singleCashRegister,
    isPending: isPendingSingleCash,
    error: errorSingleCash,
  } = getApi<TSingleCashRegister>({
    queryKey: [
      "singleCashRegister",
      selectedCashRegister?.id,
      pageNumber,
      pageSize,
    ],
    service: `bank/cashregister/${params.bid}/${selectedCashRegister?.id}`,
    serviceKey: "cashregister",
    enable: selectedCashRegister?.id ? true : false,
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
        <h1 className="family-regular text-xl">{data.cashRegister.title}</h1>
        <Link
          to={"create"}
          className="btn-success h-[31px] rounded-[10px] px-3"
        >
          <PlusIcon size={10} />
          {data.cashRegister.addButton}
        </Link>
      </div>

      <div className="flex flex-col gap-y-3 px-5">
        {cashRegisterListLoading &&
          skeleton.map((item) => <BankListSkeleton key={item} />)}
        {cashRegisterList?.length === 0 ? (
          <NotFoundItem title={data.cashRegister.notFound} />
        ) : (
          cashRegisterList?.map((item) => (
            <CashRegisterList
              handleModal={handleModal}
              item={item}
              key={item.id}
              setSelectedCashRegister={setSelectedCashRegister}
            />
          ))
        )}
      </div>

      <Modal
        className="max-w-screen-xl flex flex-col h-[85vh]"
        title={data.cashRegister.modalTitle}
        modalsRef={modalsRef}
      >
          <div className="flex justify-between w-full mb-5">
            <SearchForm
              objectList={singleCashRegister?.circulations!}
              placeholder={data.circulation.searchPlaceholder}
              searchKeys={data.circulation.tbody}
              setFilteredList={setFilterCiculation}
            />
            <div className="flex justify-end">
              <FilterDate
                queryKey={[
                  "singleCashRegister",
                  selectedCashRegister?.id,
                  pageNumber,
                  pageSize,
                ]}
                setEndDate={setEndDate}
                setStartDate={setStartDate}
              />
            </div>
          </div>

          <Table
            notFound={data.cashRegister.circulationNotFound}
            error={errorSingleCash}
            isPending={isPendingSingleCash}
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

export default CashRegister;

