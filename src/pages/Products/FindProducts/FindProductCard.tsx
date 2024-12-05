import { useQuery } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { IonBagCheck } from "src/components/icons/BagCheckIcon";
import PlusIcon from "src/components/icons/PlusIcon";
import { IcRoundStar } from "src/components/icons/StarIcon";
import NotifIcon from "src/components/icons/vectors/NotifIcon";
import { DataProps } from "src/data/fa";
import { formatNumbers } from "src/functions/formatNumbers";
import { updateFactorProducts } from "src/store/slice/factorProducts-slice";
import {
  decreaseProductCount,
  increaseProductCount,
  updateCounter,
} from "src/store/slice/productsCount-slice";
import { useAppSelector } from "src/store/store";
import { TSingleBusiness } from "src/types/Business.type";
import { TProduct } from "src/types/Product.types";

type Props = {
  item: TProduct;
  productsHasSet: number[];
  setProductsHasSet: Function;
  setAsQuickAccess: Function;
};

const FindProductCard = ({
  item,
  productsHasSet,
  setProductsHasSet,
  setAsQuickAccess,
}: Props) => {
  // store
  const data: DataProps = useAppSelector((state) => state.dataReducer);
  const factorProducts = useAppSelector((state) => state.factorProductReducer);
  const productCounts = useAppSelector((state) => state.productCountReducer);

  const isSelected = factorProducts.some((product) => product.id === item.id);

  const countObj = productCounts.find((p) => p.id === item.id);
  const count = countObj ? countObj.count : 0;

  const dispatch = useDispatch();
  const language = useAppSelector((state) => state.languageReducer);

  const { data: business } = useQuery<TSingleBusiness>({
    queryKey: ["business"],
    staleTime: Infinity,
  });

  return (
    <div
      key={item.id}
      className="flex justify-between items-center px-3 py-3 transition-all rounded-2xl bc-secondary"
    >
      <div className="flex items-center gap-2.5">
        <div className="h-12 w-12 flex items-center justify-center rounded-2xl bg-white">
          {item.image_src ? (
            <img
              className="w-full h-full object-contain object-center"
              src={`https://capital-compass-server.liara.run/${item.image_src}`}
            />
          ) : (
            <NotifIcon size={22} />
          )}
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex gap-2">
            <span className="family-bold">{item.product_name}</span>
            <span className="family-light text-[10px]">({item.type})</span>
            <span className="badge badge-error rounded-md text-[10px] bg-opacity-30 text-red-500">
              {formatNumbers(count, false)} {data.findProducts.counter}
            </span>
          </div>
          <div className="flex gap-2 mt-2">
            <div className="text-[10px] flex gap-1 items-center">
              <span className="family-bold text-xs tracking-normal">
                {formatNumbers(item.sell_price)}
              </span>
              {business?.currency}
            </div>
            {isSelected && (
              <div className="badge badge-error rounded-md text-[10px] bg-opacity-30 text-red-500 gap-3 py-3 items-center flex">
                <span
                  className="cursor-pointer"
                  onClick={() =>
                    dispatch(
                      increaseProductCount({
                        id: item.id,
                        inventory_count: item.inventory_count,
                      })
                    )
                  }
                >
                  <PlusIcon size={10} color="red" />
                </span>
                <span className="cursor-pointer">{formatNumbers(count)}</span>
                <span
                  className="block pb-2.5 text-lg cursor-pointer"
                  onClick={() => dispatch(decreaseProductCount(item.id))}
                >
                  _
                </span>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="flex gap-3">
        <div
          className={`tooltip ${
            language.value === "en" ? "tooltip-left" : "tooltip-right"
          }`}
          data-tip={
            isSelected
              ? data.findProducts.remove_from_product
              : data.findProducts.add_to_product
          }
        >
          <div>
            <div
              onClick={() => {
                isSelected
                  ? dispatch(updateCounter(item.id))
                  : dispatch(
                      increaseProductCount({
                        id: item.id,
                        inventory_count: item.inventory_count,
                      })
                    );
                dispatch(updateFactorProducts(item));
              }}
            >
              <div className="relative flex items-center justify-center cursor-pointer">
                <IonBagCheck
                  width={24}
                  height={24}
                  className={isSelected ? "text-green-400" : "text-gray-400"}
                />
              </div>
            </div>
          </div>
        </div>

        <div
          className={`tooltip ${
            language.value === "en" ? "tooltip-left" : "tooltip-right"
          }`}
          data-tip={
            productsHasSet.includes(item?.id)
              ? data.findProducts.remove_from_quick
              : data.findProducts.add_to_quick
          }
        >
          <div className="rating">
            <div
              onClick={() => {
                setProductsHasSet((prevProductsHasSet: number[]) => {
                  if (prevProductsHasSet?.includes(item.id)) {
                    return prevProductsHasSet?.filter((id) => id !== item.id);
                  } else {
                    return [...prevProductsHasSet, item.id];
                  }
                });
                setAsQuickAccess(item);
              }}
            >
              <div className="relative flex items-center justify-center cursor-pointer">
                <IcRoundStar
                  width={24}
                  height={24}
                  className={
                    productsHasSet?.includes(item?.id)
                      ? "text-orange-400"
                      : "text-gray-400"
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindProductCard;
