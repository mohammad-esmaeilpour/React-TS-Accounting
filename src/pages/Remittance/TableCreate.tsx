import { TProduct } from "src/types/Product.types";
import { useAppSelector } from "src/store/store";
import { DataProps } from "src/data/fa";
import PlusIcon from "src/components/icons/PlusIcon";
import { useDispatch } from "react-redux";
import {
  decreaseProductCount,
  increaseProductCount,
  updateCounter,
} from "src/store/slice/productsCount-slice";
import TrashIcon from "src/components/icons/TrashIcon";
import { MouseEvent } from "react";
import {
  updateFactorProducts,
  updateProductValues,
} from "src/store/slice/factorProducts-slice";
import { useQuery } from "@tanstack/react-query";
import { TSingleBusiness } from "src/types/Business.type";
import { formatNumbers } from "src/functions/formatNumbers";
import NotFoundItem from "src/components/NotFoundItem";

const TableCreateRemittance = () => {
  const data: DataProps = useAppSelector((state) => state.dataReducer);
  const productCount = useAppSelector((state) => state.productCountReducer);
  const productsList: TProduct[] = useAppSelector(
    (state) => state.factorProductReducer
  );

  const dispatch = useDispatch();
  const { data: singleBusiness } = useQuery<TSingleBusiness>({
    queryKey: ["business"],
  });

  return (
    <div className="flex flex-col flex-1 overflow-auto relative mx-2">
      <div className="h-full flex-1 overflow-auto">
        {productsList.length === 0 ? (
          <NotFoundItem title={data.salesFactor.create.notFound} />
        ) : (
          <table className="table family-regular text-sm text-color text-opacity-90">
            <thead className="bc-primary bg-opacity-10">
              <tr>
                {data.createRemittance.proudctsTable.table.thead.map(
                  (item: any) => (
                    <td key={item} className="py-4 border-e border-[#d5d5d5]">
                      {item}
                    </td>
                  )
                )}
                <td></td>
              </tr>
            </thead>
            <tbody className="relative border">
              {productsList?.map((item, index) => {
                const countObj = productCount.find((p) => p.id === item.id);
                const count = countObj ? countObj.count : 0;

                dispatch(
                  updateProductValues({
                    count,
                    product_id: item.id,
                  })
                );

                return (
                  <tr
                    key={index}
                    className="border-b last-of-type:border-none transition-all"
                  >
                    <td className="border-e py-5 text-nowrap max-w-48 overflow-auto">
                      {formatNumbers(index + 1, false)}
                    </td>
                    <td className="border-e py-5 text-nowrap max-w-48 overflow-auto">
                      {item.product_code}
                    </td>
                    <td className="border-e py-5 text-nowrap max-w-48 overflow-auto">
                      {item.product_name}
                    </td>
                    <td className="border-e py-5 text-nowrap max-w-48 overflow-auto">
                      {item.unit}
                    </td>
                    <td className="border-e text-nowrap max-w-48 overflow-auto">
                      <div className="justify-center gap-4 items-center flex">
                        <span
                          className="cursor-pointer border rounded-full border-green-600 p-1"
                          onClick={() => {
                            dispatch(
                              increaseProductCount({
                                id: item.id,
                                inventory_count: item.inventory_count,
                              })
                            );
                          }}
                        >
                          <PlusIcon size={12} color="green" />
                        </span>
                        <span className="cursor-pointer text-lg">
                          {formatNumbers(count, false)}
                        </span>
                        <span
                          className="flex w-5 h-5 items-center justify-center pb-3 text-lg cursor-pointer border rounded-full border-red-600 text-red-600"
                          onClick={() =>
                            dispatch(decreaseProductCount(item.id))
                          }
                        >
                          _
                        </span>
                      </div>
                    </td>
                    <td className="border-e py-5  text-nowrap max-w-48 overflow-auto">
                      <div className="flex gap-1 items-baseline">
                        {formatNumbers(item.purchase_price)}
                        <span className="text-color text-xs text-opacity-70">
                          {singleBusiness?.currency}
                        </span>
                      </div>
                    </td>
                    <td className="border-e py-5 text-nowrap max-w-48 overflow-auto">
                      <div className="flex gap-1 items-baseline">
                        {formatNumbers(item.sell_price)}
                        <span className="text-color text-xs text-opacity-70">
                          {singleBusiness?.currency}
                        </span>
                      </div>
                    </td>
                    <td className="py-5">
                      <button
                        onClick={(e: MouseEvent<HTMLButtonElement>) => {
                          e.preventDefault();
                          dispatch(updateFactorProducts(item));
                          dispatch(updateCounter(item.id));
                        }}
                        className="btn-light-danger rounded-[4.5px] px-3 h-8 text-xs mx-auto"
                      >
                        <TrashIcon size={18} />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default TableCreateRemittance;
