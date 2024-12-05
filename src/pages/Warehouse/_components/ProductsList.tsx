import { useState } from "react";
import { useParams } from "react-router-dom";
import Pagination from "src/components/Pagination";
import TableSkeleton from "src/components/Skeleton/TableSkeleton";
import { DataProps } from "src/data/fa";
import getApi from "src/react-query/services/getApi";
import { useAppSelector } from "src/store/store";
import { TInventory } from "src/types/Inventory.type";
import { TSingleWarehouse } from "src/types/Warehouse.types";

type Props = {
  warehouse: TSingleWarehouse;
};

const WarehouseProductsList = ({ warehouse }: Props) => {
  const data: DataProps = useAppSelector((state) => state.dataReducer);

  const [pageSize, setPageSize] = useState<number>(10);
  const [pageNumber, setPageNumber] = useState<number>(1);

  const params = useParams();

  const skeleton = [1, 2, 3, 4, 5, 6];

  const {
    data: warehouseInventory,
    isLoading,
    error,
  } = getApi<TInventory[]>({
    queryKey: ["inventory", warehouse?.id, pageNumber, pageSize],
    service: `inventory/${params.bid}/${warehouse?.id}`,
    serviceKey: "inventories",
    params: {
      pageNumber,
      pageSize,
    },
  });

  if (error)
    return (
      <div role="alert" className="alert alert-error flex justify-center">
        <span>{error.message}</span>
      </div>
    );

  return (
    <div className="flex flex-col min-h-[50vh] overflow-auto relative mx-2 border rounded-xl">
      <div className="h-full flex-1 overflow-auto">
        <table className="table family-regular text-sm text-color text-opacity-90">
          <thead className="bc-primary bg-opacity-10">
            <tr>
              {data.warehouse.table.thead.map((item) => (
                <td key={item} className="py-4 border-l border-[#d5d5d5]">
                  {item}
                </td>
              ))}
            </tr>
          </thead>
          <tbody>
            {isLoading && skeleton.map((item) => <TableSkeleton key={item} />)}
            {warehouseInventory?.map((item) => (
              <tr
                key={item.product_id}
                // onClick={() => navigate(`${item.type}/${item.id}`)}
                className="border-b transition-all cursor-pointer hover:bc-secondary"
              >
                <th className="border-l py-5 text-nowrap max-w-48 overflow-auto">
                  {item.product_id}
                </th>
                <td className="border-l py-5 text-nowrap max-w-48 overflow-auto">
                  {item.product_code}
                </td>
                <td className="border-l py-5 text-nowrap max-w-48 overflow-auto">
                  {item.product_name}
                </td>
                <td className="border-l py-5 text-nowrap max-w-48 overflow-auto">
                  {item.category_title}
                </td>
                <td className="border-l py-5 text-nowrap max-w-48 overflow-auto">
                  {item.product_barcode}
                </td>
                <td className="border-l py-5 text-nowrap max-w-48 overflow-auto">
                  {item.product_sell_price}
                </td>
                <td className="border-l py-5 text-nowrap max-w-48 overflow-auto">
                  {item.product_purchase_price}
                </td>
                <td className="border-l py-5 text-nowrap max-w-48 overflow-auto">
                  1
                </td>
                <th className="border-l py-5 text-nowrap max-w-48 overflow-auto">
                  {item.product_unit}
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="bg-white w-full sticky left-0 bottom-0 py-2.5 px-3 border-t flex justify-between">
        <Pagination pageSize={pageSize} setPageSize={setPageSize} />
        <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber} />
      </div>
    </div>
  );
};

export default WarehouseProductsList;
