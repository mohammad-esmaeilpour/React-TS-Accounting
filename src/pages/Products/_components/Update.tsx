import { useQuery} from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import CategoryDropdown from "src/components/Dropdown/CategoryDropdown";
import FileUpload from "src/components/Forms/FileUpload";
import InputsForm from "src/components/Forms/InputsForm";
import SaveIcon from "src/components/icons/SaveIcon";
import { DataProps } from "src/data/fa";
import FillData from "src/functions/FillData";
import { parsedData } from "src/functions/ParseData";
import getApi from "src/react-query/services/getApi";
import DynamicService from "src/service/DynamicService";
import { useAppSelector } from "src/store/store";
import { TSingleBusiness } from "src/types/Business.type";
import { TSingleCategory } from "src/types/Category.types";
import { TInputs } from "src/types/global.types";
import { TCreateProductData, TProduct } from "src/types/Product.types";

const UpdateProduct = () => {
  const allData: DataProps = useAppSelector((state) => state.dataReducer);
  const [selectedTab, setSelectedTab] = useState(0);
  const [uploadedFile, setUploadedFile] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] =
    useState<TSingleCategory | null>(null);
  const params = useParams();

  const productsData: TCreateProductData =
    params.pt === "services" ? allData.createService : allData.createGood;

  const navigate = useNavigate();
  const {
    watch,
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm();

  const { data: business } = useQuery<TSingleBusiness>({
    queryKey: ["business"],
    staleTime: Infinity,
  });

  const {
    data: products,
    isLoading,
    fetchStatus,
    error,
  } = getApi<TProduct>({
    queryKey: ["singleProduct", params.pt, params.pid],
    service: `product/single/${params.bid}/${params.pid}`,
    serviceKey: "product",
    params: {
      type: params.pt,
    },
  });

  let allTabsInputs: TInputs[] = [];
  productsData.tabs.map((items) =>
    items.inputs.map((value) => allTabsInputs.push(value))
  );

  useEffect(() => {
    if (products)
      FillData({
        inputs: [...productsData.inputs, ...allTabsInputs],
        response: products,
        setValue,
      });
  }, [products]);

  if (isLoading || fetchStatus === "fetching")
    return (
      <div className="panel flex items-center justify-center">
        <span className="loading loading-dots loading-md c-primary"></span>
      </div>
    );

  if (error)
    return (
      <div role="alert" className="alert alert-error flex justify-center">
        <span>{error.message}</span>
      </div>
    );

  const handleFileUpload = (filePath: string | null) => {
    setUploadedFile(filePath);
    setValue("image_src", filePath);
  };

  const onSubmit = (datas: FieldValues) => {
    const tabsInputs = productsData.tabs.map((item) => item.inputs).flat();
    const parsingData = parsedData({
      inputs: [...productsData.inputs, ...tabsInputs],
      submitData: datas,
    });

    DynamicService({
      method: "put",
      service: `product/${params.pt}/${params.bid}/${params.pid}`,
      payload: {
        ...parsingData,
        image_src: uploadedFile,
        category_id: selectedCategory?.id,
      },
    }).then((response: any) => {
      response.status === 200 &&
        navigate(`/${params.bid}/products/${params.pt}`);
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="panel">
      <div className="flex sticky top-0 bg-white w-full justify-between items-center border-b py-5 px-5 mb-7">
        <h1 className="family-regular text-xl">{productsData.title}</h1>

        <button
          type="submit"
          className="btn-primary rounded-[10px] family-regular h-[28px] py-0 px-3.5 text-[11px]"
        >
          <SaveIcon size={13} />
          {productsData.saveButton}
        </button>
      </div>

      <div className="p-6">
        <div className="flex gap-8">
          <div className="flex flex-col w-48">
            <div className="mb-2">{productsData.imageUpload.label}</div>
            <FileUpload
              initialImage={products?.image_src}
              onFileUpload={handleFileUpload}
              kind="product"
              title={productsData.imageUpload.label}
            />
          </div>

          <div className="grid gap-x-4 gap-y-8 grid-cols-2 flex-1">
            {productsData.inputs.map((item) =>
              item.key === "category_id" ? (
                <CategoryDropdown
                  key={item.key}
                  selectedCategory={selectedCategory}
                  setSelectedCategory={setSelectedCategory}
                  categoryType={params.pt!}
                />
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
        </div>

        <div className="flex border rounded-xl overflow-hidden mt-12">
          {productsData.tabs.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedTab(item.id)}
              className={`flex items-center justify-center py-3.5 flex-1 border-l last-of-type:border-0 cursor-pointer transition-all ${
                item.id === selectedTab && "bg-[#3D42DF] text-white"
              }`}
            >
              {item.title}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-4 mt-8 gap-x-2.5 gap-y-7">
          {productsData.tabs.map(
            (item) =>
              selectedTab === item.id &&
              item.inputs.map((item) => (
                <InputsForm
                  errors={errors}
                  watch={watch}
                  setValue={setValue}
                  item={item}
                  register={register}
                  key={item.key}
                  currency={business?.currency}
                />
              ))
          )}
        </div>
      </div>
    </form>
  );
};

export default UpdateProduct;
