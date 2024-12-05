import { Link, useParams } from "react-router-dom";
import PlusIcon from "src/components/icons/PlusIcon";
import { DataProps } from "src/data/fa";
import getApi from "src/react-query/services/getApi";
import { useAppSelector } from "src/store/store";
import { useRef, useState } from "react";
import NotFoundItem from "src/components/NotFoundItem";
import Modal from "src/components/Modal";
import Table from "src/components/Table";
import BankListSkeleton from "../../../components/Skeleton/BankListSkeleton";
import SlandererList from "./List";
import { TSingleSlanderer } from "src/types/Bank.types";
import FilterDate from "src/components/Filters/FilterDate";
import SearchForm from "src/components/Forms/SearchForm";

const Slanderer = () => {
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(10);
  const [start_date, setStartDate] = useState(null);
  const [end_date, setEndDate] = useState(null);
  const [filterCiculation, setFilterCiculation] = useState([]);
  const [selectedSlanderer, setSelectedSlanderer] =
    useState<TSingleSlanderer | null>(null);

  const data: DataProps = useAppSelector((state) => state.dataReducer);
  const params = useParams();
  const modalsRef: any = useRef();

  const skeleton = [1, 2, 3, 4, 5];

  const handleModal = () => {
    modalsRef.current && modalsRef.current.showModal();
  };

  const { data: slandererList, isLoading: slandererListLoading } = getApi<
    TSingleSlanderer[]
  >({
    queryKey: ["slanderers"],
    service: `bank/slanderer/${params.bid}/max`,
    serviceKey: "slanderers",
  });

  const {
    data: singleSlanderer,
    isPending: isPendingSingleSaln,
    error: errorSingleSlan,
  } = getApi<TSingleSlanderer>({
    queryKey: ["singleSlanderer", selectedSlanderer?.id, pageSize, pageNumber],
    service: `bank/slanderer/${params.bid}/${selectedSlanderer?.id}`,
    serviceKey: "slanderer",
    enable: selectedSlanderer?.id ? true : false,
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
        <h1 className="family-regular text-xl">{data.slanderer.title}</h1>
        <Link
          to={"create"}
          className="btn-success h-[31px] rounded-[10px] px-3"
        >
          <PlusIcon size={10} />
          {data.slanderer.addButton}
        </Link>
      </div>

      <div className="flex flex-col gap-y-3 px-5">
        {slandererListLoading &&
          skeleton.map((item) => <BankListSkeleton key={item} />)}
        {slandererList?.length === 0 ? (
          <NotFoundItem title={data.slanderer.notFound} />
        ) : (
          slandererList?.map((item) => (
            <SlandererList
              handleModal={handleModal}
              item={item}
              key={item.id}
              setSelectedSlanderer={setSelectedSlanderer}
            />
          ))
        )}
      </div>

      <Modal
        className="max-w-screen-xl flex flex-col h-[85vh]"
        title={data.slanderer.modalTitle}
        modalsRef={modalsRef}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-between w-full mb-5">
            <SearchForm
              objectList={singleSlanderer?.circulations!}
              placeholder={data.circulation.searchPlaceholder}
              searchKeys={data.circulation.tbody}
              setFilteredList={setFilterCiculation}
            />
            <div className="flex justify-end">
              <FilterDate
                queryKey={[
                  "singleSlanderer",
                  selectedSlanderer?.id,
                  pageSize,
                  pageNumber,
                ]}
                setEndDate={setEndDate}
                setStartDate={setStartDate}
              />
            </div>
          </div>
          <Table
            notFound={data.slanderer.circulationNotFound}
            error={errorSingleSlan}
            isPending={isPendingSingleSaln}
            list={filterCiculation}
            pageNumber={pageNumber}
            pageSize={pageSize}
            setPageNumber={setPageNumber}
            setPageSize={setPageSize}
            tbody={data.circulation.tbody}
            thead={data.circulation.thead}
          />
        </div>
      </Modal>
    </div>
  );
};

export default Slanderer;
