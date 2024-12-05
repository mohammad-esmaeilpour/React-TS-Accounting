import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CategoryDropdown from "src/components/Dropdown/CategoryDropdown";
import DropdownCategoryType from "src/components/Dropdown/DropdownCategoryType";
import getApi from "src/react-query/services/getApi";
import useQuickAccess from "src/react-query/useQuickAccess";
import DynamicService from "src/service/DynamicService";
import { TSingleCategory } from "src/types/Category.types";
import { TProduct } from "src/types/Product.types";
import FindProductCard from "./FindProductCard";

const FindProductsByCategory = () => {
  const [productsHasSet, setProductsHasSet] = useState<number[]>([]);
  const [selectedCategoryType, setSelectedCategoryType] = useState<
    "goods" | "services"
  >("goods");
  const [selectedCategory, setSelectedCategory] =
    useState<TSingleCategory | null>(null);

  const params = useParams();
  const { data: quickAccessList } = useQuickAccess();

  useEffect(() => {
    if (quickAccessList && quickAccessList.length !== 0) {
      setProductsHasSet(quickAccessList.map((item) => item.id));
    }
  }, [quickAccessList]);

  const { data: productsList } = getApi<TProduct[]>({
    queryKey: ["productListByCat", selectedCategory?.id],
    service: `product/${params.bid}/${selectedCategory?.id}`,
    serviceKey: "products",
    enable: selectedCategory?.id ? true : false,
  });

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
    <div className="flex flex-col gap-6">
      <div className="flex gap-2.5">
        <DropdownCategoryType setSelectedCatType={setSelectedCategoryType} />
        <div className="w-full">
          <CategoryDropdown
            categoryType={selectedCategoryType}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </div>
      </div>
      <div className="space-y-2 flex-1">
        {productsList?.map((item) => (
          <FindProductCard
            item={item}
            productsHasSet={productsHasSet}
            setAsQuickAccess={setAsQuickAccess}
            setProductsHasSet={setProductsHasSet}
          />
        ))}
      </div>
    </div>
  );
};

export default FindProductsByCategory;
