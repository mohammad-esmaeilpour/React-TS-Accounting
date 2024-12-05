
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
import { MouseEvent, useEffect, useState } from "react";
import {
  TProductWithExtras,
  updateFactorProducts,
  updateProductValues,
} from "src/store/slice/factorProducts-slice";
import DropdownMinimalList from "src/components/Dropdown/DropdownMinimalList";
import { useParams } from "react-router-dom";
import CheckCircleIcon from "src/components/icons/CheckCircleIcon";
import { useQuery } from "@tanstack/react-query";
import { TSingleBusiness } from "src/types/Business.type";
import NotFoundItem from "src/components/NotFoundItem";
import { formatNumbers } from "src/functions/formatNumbers";

type Props = {
  globalTax: number | null;
  globalDiscount: number | null;
  priceType: string | number;
  setFinalProductPrice: Function;
  setFinalTax: Function;
  setFinalDiscount: Function;
  setFinalPrice: Function;
  taxes: { [key: number]: number };
  discounts: { [key: number]: number };
  setDiscounts: Function;
  setTaxes: Function;
  factorType: "sales" | "purchase";
};

const TableUpdateFactor = ({
  globalDiscount,
  globalTax,
  priceType,
  setFinalDiscount,
  setFinalPrice,
  setFinalProductPrice,
  setFinalTax,
  discounts,
  setDiscounts,
  setTaxes,
  taxes,
  factorType,
}: Props) => {
  // state
  const [warehouseId, setWarehouseId] = useState<number>();

  // store
  const mainData: DataProps = useAppSelector((state) => state.dataReducer);
  const data =
    factorType === "purchase" ? mainData.purchaseFactor : mainData.salesFactor;
  const productCount = useAppSelector((state) => state.productCountReducer);
  const productsList = useAppSelector((state) => state.factorProductReducer);

  // hooks
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    if (globalTax !== null || globalDiscount !== null) {
      const updatedTaxes: { [key: number]: number } = {};
      const updatedDiscounts: { [key: number]: number } = {};

      productsList.forEach((item) => {
        updatedTaxes[item?.id] =
          globalTax !== null ? globalTax : taxes[item?.id] || 0;
        updatedDiscounts[item?.id] =
          globalDiscount !== null ? globalDiscount : discounts[item?.id] || 0;
      });

      setTaxes(updatedTaxes);
      setDiscounts(updatedDiscounts);
    }
  }, [globalDiscount, globalTax]);

  useEffect(() => {
    let totalProductPrice = 0;
    let totalTax = 0;
    let totalDiscount = 0;

    productsList.forEach((item) => {
      const countObj = productCount.find((p) => p?.id === item?.id);
      const count = countObj ? countObj.count : 0;
      totalTax += calculateTaxAmount(item, count);
      totalDiscount += calculateDiscountAmount(item, count);
      totalProductPrice += calculateBasePrice(item, count);
    });

    setFinalProductPrice(Math.round(totalProductPrice));
    setFinalTax(Math.round(totalTax));
    setFinalDiscount(Math.round(totalDiscount));

    const finalPrice = totalProductPrice + totalTax - totalDiscount;
    setFinalPrice(Math.round(finalPrice));
  }, [taxes, discounts, productsList, productCount]);

  useEffect(() => {
    const initialTaxes: { [key: number]: number } = {};

    productsList.forEach((item) => {
      initialTaxes[item?.id] =
        taxes[item?.id] ||
        (factorType === "purchase"
          ? item.purchase_tax_percent
          : item.sales_tax_percent) ||
        0;
    });

    setTaxes(initialTaxes);
  }, [productsList, factorType]);

  // functions
  const calculateBasePrice = (item: TProductWithExtras, count: number) => {
    const basePrice = item[priceType as keyof TProductWithExtras];
    if (
      typeof basePrice !== "number" ||
      basePrice === null ||
      basePrice === undefined
    ) {
      return 0;
    }
    const finalPrice = basePrice * count;

    return Math.round(finalPrice);
  };

  const calculateTaxAmount = (item: TProductWithExtras, count: number) => {
    const basePrice = calculateBasePrice(item, count);
    const taxPercentage =
      taxes[item?.id] ||
      (factorType === "purchase"
        ? item.purchase_tax_percent
        : item.sales_tax_percent) ||
      0;

    const finalPrice = (basePrice * taxPercentage) / 100;
    return Math.round(finalPrice);
  };

  const calculateDiscountAmount = (item: TProductWithExtras, count: number) => {
    const basePrice = calculateBasePrice(item, count);
    const discountPercentage = discounts[item?.id] || 0;
    const finalPrice = (basePrice * discountPercentage) / 100;

    return Math.round(finalPrice);
  };

  const { data: business } = useQuery<TSingleBusiness>({
    queryKey: ["business"],
    staleTime: Infinity,
  });

  return (
    <div className="flex flex-col flex-1 relative mx-2">
      <div className="h-full flex-1">
        {productsList.length === 0 ? (
          <NotFoundItem title={data.create.notFound} />
        ) : (
          <table className="table border family-regular text-sm text-color text-opacity-90">
            <thead className="bc-primary bg-opacity-10">
              <tr>
                {data.create.proudctsTable.table.thead.map((item: any) => (
                  <td
                    key={item}
                    className="py-4 border-e border-[#d5d5d5] text-center "
                  >
                    {item}
                  </td>
                ))}
                <td></td>
              </tr>
            </thead>
            <tbody className="relative border">
              {productsList?.map((item: any, index) => {
                const countObj = productCount.find((p) => p?.id === item?.id);
                const count = countObj ? countObj.count : 0;
                const totalItemPrice = calculateBasePrice(item, count);
                const taxAmount = calculateTaxAmount(item, count);
                const discountAmount = calculateDiscountAmount(item, count);

                dispatch(
                  updateProductValues({
                    product_id: item?.id,
                    tax_price: taxAmount,
                    discount_price: discountAmount,
                    unit_price: totalItemPrice,
                    warehouse_id: warehouseId,
                    count,
                  })
                );

                return (
                  <tr
                    key={index}
                    className="border-b last-of-type:border-none transition-all "
                  >
                    <td className="border-e py-4 text-nowrap max-w-48 overflow-auto">
                      {formatNumbers(index + 1)}
                    </td>
                    <td className="border-e py-4 text-nowrap max-w-48 overflow-auto">
                      {item.product_name}
                    </td>
                    <td className="border-e py-4 text-nowrap max-w-48 overflow-auto">
                      {item.barcode}
                    </td>
                    <td className="border-e py-4 text-nowrap max-w-48 overflow-auto">
                      {item.unit}
                    </td>
                    <td className="border-e py-4 text-nowrap max-w-48 overflow-auto">
                      <div className="justify-center gap-4 items-center flex">
                        <span
                          className="cursor-pointer border-2 rounded-full border-green-500 p-1 order-3"
                          onClick={() => {
                            dispatch(
                              increaseProductCount({
                                id: item.id,
                                inventory_count: item.inventory_count,
                              })
                            );
                          }}
                        >
                          <PlusIcon size={10} color="green" />
                        </span>
                        <span className="family-regular order-2">
                          {formatNumbers(count, false)}
                        </span>
                        <span
                          className="flex order-1 w-5 h-5 items-center justify-center pb-2.5 text-lg cursor-pointer border-2 rounded-full border-red-400 text-red-400"
                          onClick={() =>
                            dispatch(decreaseProductCount(item?.id))
                          }
                        >
                          _
                        </span>
                      </div>
                    </td>
                    {factorType === "purchase" && (
                      <td className="border-e py-2">
                        <DropdownMinimalList
                          queryKey={["warehouses"]}
                          service={`warehouse/min/${params.bid}`}
                          serviceKey="warehouses"
                          setSelectedItemId={setWarehouseId}
                          defaultValue={data.create.pickWarehouse}
                          showTitleKey={"title"}
                        />
                      </td>
                    )}
                    <td className="border-e text-center">
                      <span className="family-regular">
                        {formatNumbers(item[priceType])}
                      </span>{" "}
                      <span className="text-color text-opacity-70 text-xs">
                        {business?.currency}
                      </span>
                    </td>
                    <td className="border-e py-5 px-0 text-center">
                      <div className="flex items-center justify-center">
                        <button
                          onClick={(
                            e: MouseEvent<HTMLButtonElement | MouseEvent>
                          ) => {
                            e.preventDefault();
                            const button = e.currentTarget as HTMLButtonElement;
                            button.nextElementSibling?.classList.remove(
                              "hidden"
                            );
                            button.nextElementSibling?.nextElementSibling?.classList.add(
                              "hidden"
                            );
                            button.classList.add("hidden");
                          }}
                          className="hidden w-7 h-7"
                        >
                          <CheckCircleIcon size={16} color="green" />
                        </button>
                        <div
                          className="cursor-pointer py-1"
                          onClick={(
                            e: MouseEvent<HTMLDivElement | MouseEvent>
                          ) => {
                            const div = e.currentTarget as HTMLDivElement;
                            div.nextElementSibling?.classList.remove("hidden");
                            div.previousElementSibling?.classList.remove(
                              "hidden"
                            );
                            div.classList.add("hidden");
                          }}
                        >
                          {formatNumbers(taxAmount)}{" "}
                          <span className="text-color text-opacity-70 text-xs">
                            {business?.currency}
                          </span>
                        </div>
                        <input
                          type="number"
                          className="h-9 px-2 rounded-md max-w-20 hidden"
                          value={taxes[item?.id] || ""}
                          placeholder="0"
                          onChange={(e) =>
                            setTaxes({
                              ...taxes,
                              [item?.id]: Number(e.target.value) || 0,
                            })
                          }
                        />
                      </div>
                    </td>

                    <td className="border-e py-5 px-0 text-center">
                      <div className="flex items-center justify-center">
                        <button
                          onClick={(
                            e: MouseEvent<HTMLButtonElement | MouseEvent>
                          ) => {
                            e.preventDefault();
                            const button = e.currentTarget as HTMLButtonElement;
                            button.nextElementSibling?.classList.remove(
                              "hidden"
                            );
                            button.nextElementSibling?.nextElementSibling?.classList.add(
                              "hidden"
                            );
                            button.classList.add("hidden");
                          }}
                          className="hidden w-7 h-7"
                        >
                          <CheckCircleIcon size={16} color="green" />
                        </button>
                        <div
                          className="cursor-pointer py-1"
                          onClick={(
                            e: MouseEvent<HTMLDivElement | MouseEvent>
                          ) => {
                            const div = e.currentTarget as HTMLDivElement;
                            div.nextElementSibling?.classList.remove("hidden");
                            div.previousElementSibling?.classList.remove(
                              "hidden"
                            );
                            div.classList.add("hidden");
                          }}
                        >
                          {formatNumbers(discountAmount)}{" "}
                          <span className="text-color text-opacity-70 text-xs">
                            {business?.currency}
                          </span>
                        </div>
                        <input
                          type="number"
                          className="h-9 px-2 rounded-md max-w-20 hidden"
                          value={discounts[item?.id] || ""}
                          placeholder="0"
                          onChange={(e) => {
                            setDiscounts({
                              ...discounts,
                              [item?.id]: Number(e.target.value),
                            });
                          }}
                        />
                      </div>
                    </td>
                    <td className="border-e text-center">
                      {formatNumbers(totalItemPrice)}{" "}
                      <span className="text-color text-opacity-70 text-xs">
                        {business?.currency}
                      </span>
                    </td>
                    <td className="px-2">
                      <button
                        onClick={(e: MouseEvent<HTMLButtonElement>) => {
                          e.preventDefault();
                          dispatch(updateFactorProducts(item));
                          dispatch(updateCounter(item?.id));
                        }}
                        className="btn-light-danger rounded-md px-1.5 h-7 text-xs mx-auto"
                      >
                        <TrashIcon size={16} />
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

export default TableUpdateFactor; 


