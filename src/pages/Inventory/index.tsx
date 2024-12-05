import _ from "lodash";
import { useState } from "react";
import { useParams } from "react-router-dom";
import SearchForm from "src/components/Forms/SearchForm";
import Table from "src/components/Table";
import { DataProps } from "src/data/fa";
import getApi from "src/react-query/services/getApi";
import { useAppSelector } from "src/store/store";
import { TInventory } from "src/types/Inventory.type";

const Inventory = () => {
  const data: DataProps = useAppSelector((state) => state.dataReducer);


  const [filteredInventories, setFilteredInventories] = useState<
    TInventory[] | null
  >(null);
  const [pageSize, setPageSize] = useState<number>(10);
  const [pageNumber, setPageNumber] = useState<number>(1);
  
  const params = useParams();
  
  const {
    data: inventories,
    isPending,
    error,
  } = getApi<TInventory[]>({
    queryKey: ["inventories", pageNumber, pageSize],
    service: `inventory/${params.bid}`,
    serviceKey: "inventories",
    params: {
      pageNumber,
      pageSize,
    },
  });

  if (error) return <p>{error.message}</p>;

  return (
    <div className="panel flex flex-col">
      <div className="flex sticky top-0 bg-white z-10 w-full justify-between items-center border-b py-5 px-5 mb-7">
        <h1 className="family-regular text-xl">{data.inventory.title}</h1>
      </div>

      <div className="mx-4 justify-between flex mb-8">
        <div className="flex gap-2.5 flex-1">
          <SearchForm
            placeholder={data.inventory.search_placeholder}
            setFilteredList={setFilteredInventories}
            objectList={inventories!}
            searchKeys={["product_name"]}
          />
        </div>
      </div>

      <Table
        isPending={isPending}
        error={error}
        list={filteredInventories}
        tbody={data.inventory.table.tbody}
        thead={data.inventory.table.thead}
        notFound={data.inventory.not_found}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
        setPageSize={setPageSize}
        pageSize={pageSize}
      />
    </div>
  );
};

export default Inventory;
