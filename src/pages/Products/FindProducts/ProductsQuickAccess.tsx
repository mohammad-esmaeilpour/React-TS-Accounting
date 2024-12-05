import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PlusDocument from "src/components/icons/PlusDocument";
import { DataProps } from "src/data/fa";
import DynamicService from "src/service/DynamicService";
import { useAppSelector } from "src/store/store";
import { TProduct } from "src/types/Product.types";
import FindProductsSkeleton from "../../../components/Skeleton/FindProductsSkeleton";
import useQuickAccess from "src/react-query/useQuickAccess";
import FindProductCard from "./FindProductCard";

const ProductsQuickAccess = () => {
  const data: DataProps = useAppSelector((state) => state.dataReducer);
  const [productsHasSet, setProductsHasSet] = useState<number[]>([]);
  const params = useParams();

  const skeleton = [1, 2, 3, 4, 5];

  const { data: quickAccessList, isPending } = useQuickAccess();

  useEffect(() => {
    quickAccessList?.forEach((item) =>
      setProductsHasSet((prevProducts) => [...prevProducts, item?.id])
    );
  }, [quickAccessList]);

  const setAsQuickAccess = (selectedProduct: TProduct) => {
    DynamicService({
      method: "get",
      service: productsHasSet?.includes(selectedProduct?.id)
        ? `product/inset/${params.bid}/${selectedProduct?.id}`
        : `product/set/${params.bid}/${selectedProduct?.id}`,
      params: { type: selectedProduct?.type },
    });
  };

  return (
    <div className="px-2">
      {quickAccessList?.length === 0 ? (
        <div className="flex items-center flex-col mt-12">
          <PlusDocument />
          <div className="text-nowrap mt-4">
            {data.findProducts.quick_access.default_view}
          </div>
        </div>
      ) : (
        <div>
          <div className="space-y-2">
            {isPending
              ? skeleton.map((item) => <FindProductsSkeleton key={item} />)
              : quickAccessList?.map((item) => (
                  <FindProductCard
                    key={item.id}
                    item={item}
                    productsHasSet={productsHasSet}
                    setAsQuickAccess={setAsQuickAccess}
                    setProductsHasSet={setProductsHasSet}
                  />
                ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductsQuickAccess;
