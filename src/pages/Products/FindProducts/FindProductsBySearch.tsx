import { Fragment, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import CategoryDropdown from "src/components/Dropdown/CategoryDropdown";
import DropdownCategoryType from "src/components/Dropdown/DropdownCategoryType";
import InputsForm from "src/components/Forms/InputsForm";
import SearchIcon from "src/components/icons/SearchIcon";
import { DataProps } from "src/data/fa";
import DynamicService from "src/service/DynamicService";
import { useAppSelector } from "src/store/store";
import { TSingleCategory } from "src/types/Category.types";
import { TProduct } from "src/types/Product.types";
import FindProductCard from "./FindProductCard";
import useQuickAccess from "src/react-query/useQuickAccess";

const FindProductsBySearch = () => {
  const data: DataProps = useAppSelector((state) => state.dataReducer);

  const [productsHasSet, setProductsHasSet] = useState<number[]>([]);
  const [productList, setProductList] = useState<TProduct[]>([]);

  const [selectedCategoryType, setSelectedCategoryType] = useState<
    "goods" | "services"
  >("goods");

  const [selectedCategory, setSelectedCategory] =
    useState<TSingleCategory | null>(null);

  const params = useParams();
  const {
    watch,
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm();

  const { data: quickAccessList } = useQuickAccess();

  const onSubmit = (datas: FieldValues) => {
    quickAccessList?.forEach((item) =>
      setProductsHasSet((prevProducts) => [...prevProducts, item?.id])
    );

    DynamicService({
      method: "get",
      service: `product/search/${params.bid}`,
      params: {
        ...datas,
        catId: selectedCategory?.id,
        type: selectedCategoryType,
      },
    }).then((response: any) => {
      setProductList(response.data.products);
    });
  };

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
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8">
      <div className="flex flex-col items-center gap-8">
        <div className="grid grid-cols-2 gap-x-2.5 gap-y-5 mt-8">
          {data.findProducts.search.inputs.map((item) =>
            item.key === "category_id" ? (
              <Fragment>
                <DropdownCategoryType
                  setSelectedCatType={setSelectedCategoryType}
                />
                <div className="col-span-2">
                  <CategoryDropdown
                    key={item.key}
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                    categoryType={selectedCategoryType}
                  />
                </div>
              </Fragment>
            ) : (
              <InputsForm
                errors={errors}
                watch={watch}
                setValue={setValue}
                item={item}
                register={register}
                key={item.key}
              />
            )
          )}
        </div>

        <button className="btn-success h-10">
          <SearchIcon size={20} color="white" />
          {data.findProducts.search.searchButton}
        </button>
      </div>

      <div className="space-y-3">
        {productList?.map((item) => (
          <FindProductCard
            key={item.id}
            item={item}
            productsHasSet={productsHasSet}
            setAsQuickAccess={setAsQuickAccess}
            setProductsHasSet={setProductsHasSet}
          />
        ))}
      </div>
    </form>
  );
};

export default FindProductsBySearch;
