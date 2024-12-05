import { Link, useParams } from "react-router-dom";
import PlusIcon from "src/components/icons/PlusIcon";
import { DataProps } from "src/data/fa";
import getApi from "src/react-query/services/getApi";
import { useAppSelector } from "src/store/store";
import { TSingleWarehouse, TWarehouses } from "src/types/Warehouse.types";
import WarehousesList from "./_components/List";
import WarehousesSkeleton from "./_components/WarehousesSkeleton";
import Modal from "src/components/Modal";
import { useRef, useState } from "react";
import Table from "src/components/Table";
import { TInventory } from "src/types/Inventory.type";
import SearchForm from "src/components/Forms/SearchForm";
import NotFoundItem from "src/components/NotFoundItem";

const Warehouse = () => {
  const [pageSize, setPageSize] = useState<number>(10);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [filteredWarehouses, setFilteredWarehouses] = useState<
    TWarehouses[] | null
  >(null);
  const [filterCiculation, setFilterCiculation] = useState([]);
  const data: DataProps = useAppSelector((state) => state.dataReducer);

  const [warehouse, setWarehouse] = useState<TSingleWarehouse | null>(null);

  const params = useParams();
  const modalsRef: any = useRef();

  const skeleton = [1, 2, 3, 4, 5];

  const handleModal = () => {
    modalsRef.current && modalsRef.current.showModal();
  };

  const { data: warehouses, isPending } = getApi<TWarehouses[]>({
    queryKey: ["warehouses"],
    service: `warehouse/min/${params.bid}`,
    serviceKey: "warehouses",
  });

  const {
    data: warehouseInventory,
    isPending: isPendingInventory,
    error: inventoryError,
  } = getApi<TInventory[]>({
    queryKey: ["inventory", warehouse?.id, pageNumber, pageSize],
    service: `inventory/${params.bid}/${warehouse?.id}`,
    serviceKey: "inventories",
    enable: warehouse?.id ? true : false,
  });

  return (
    <div className="panel px-0">
      <div className="flex sticky top-0 bg-white w-full justify-between items-center border-b py-5 px-5 mb-7">
        <h1 className="family-regular text-xl">{data.warehouse.title}</h1>
        <Link
          to={"create"}
          className="btn-success h-[31px] rounded-[10px] px-3"
        >
          <PlusIcon size={10} />
          {data.warehouse.addButton}
        </Link>
      </div>

      <div className="relative w-full flex px-5 mb-5">
        <SearchForm
          placeholder={data.warehouse.searchPlaceholder}
          objectList={warehouses!}
          searchKeys={["title"]}
          setFilteredList={setFilteredWarehouses}
        />
      </div>

      <div className="flex flex-col gap-y-3 px-5">
        {isPending ? (
          skeleton.map((item) => <WarehousesSkeleton key={item} />)
        ) : warehouses?.length === 0 || filteredWarehouses?.length === 0 ? (
          <NotFoundItem title={data.warehouse.notFound} />
        ) : (
          filteredWarehouses?.map((item) => (
            <WarehousesList
              setWarehouse={setWarehouse}
              handleModal={handleModal}
              item={item}
              key={item.id}
            />
          ))
        )}
      </div>

      <Modal
        className="max-w-screen-xl flex flex-col h-[85vh]"
        title={data.warehouse.modalTitle}
        modalsRef={modalsRef}
      >
        <div className="flex flex-col mb-5">
          <SearchForm
            objectList={warehouseInventory!}
            placeholder={data.warehouse.inventorySearch}
            searchKeys={data.inventory.table.tbody}
            setFilteredList={setFilterCiculation}
          />
        </div>
        <Table
          error={inventoryError}
          isPending={isPendingInventory}
          list={filterCiculation}
          notFound={data.warehouse.notFound}
          tbody={data.inventory.table.tbody}
          thead={data.inventory.table.thead}
          pageNumber={pageNumber}
          pageSize={pageSize}
          setPageNumber={setPageNumber}
          setPageSize={setPageSize}
        />
      </Modal>
    </div>
  );
};

export default Warehouse;
