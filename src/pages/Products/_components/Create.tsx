import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import CategoryDropdown from "src/components/Dropdown/CategoryDropdown";
import DropdownMinimalList from "src/components/Dropdown/DropdownMinimalList";
import FileUpload from "src/components/Forms/FileUpload";
import InputsForm from "src/components/Forms/InputsForm";
import SaveIcon from "src/components/icons/SaveIcon";
import { DataProps } from "src/data/fa";
import { parsedData } from "src/functions/ParseData";
import DynamicService from "src/service/DynamicService";
import { useAppSelector } from "src/store/store";
import { TSingleBusiness } from "src/types/Business.type";
import { TSingleCategory } from "src/types/Category.types";
import { TCreateProductData } from "src/types/Product.types";

const CreateProduct = () => {
  const allData: DataProps = useAppSelector((state) => state.dataReducer);

  const [selectedTab, setSelectedTab] = useState(0);
  const [uploadedFile, setUploadedFile] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] =
    useState<TSingleCategory | null>(null);
  const [baseWarehouseId, setBaseWarhouseId] = useState<number | null>(null);
  const params = useParams();

  const data: TCreateProductData =
    params.pt === "services" ? allData.createService : allData.createGood;

  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    setValue,
    watch,
    formState: { errors },
  } = useForm();

  const { data: business } = useQuery<TSingleBusiness>({
    queryKey: ["business"],
    staleTime: Infinity,
  });

  const handleFileUpload = (filePath: string | null) => {
    setUploadedFile(filePath);
    setValue("image_src", filePath);
  };

  const onSubmit = (datas: FieldValues) => {
    const tabsInputs = data.tabs.map((item) => item.inputs).flat();
    const parsingData = parsedData({
      inputs: [...data.inputs, ...tabsInputs],
      submitData: datas,
    });

    DynamicService({
      method: "post",
      service: `product/${params.pt}/${params.bid}`,
      payload: {
        ...parsingData,
        image_src: uploadedFile,
        category_id: selectedCategory?.id,
        base_warehouse: baseWarehouseId,
      },
    }).then((response: any) => {
      response.status === 201 &&
        navigate(`/${params.bid}/products/${params.pt}`);
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="panel">
      <div className="flex z-20 sticky top-0 bg-white w-full justify-between items-center border-b py-5 px-5 mb-7">
        <h1 className="family-regular text-xl">{data.title}</h1>

        <button
          type="submit"
          className="btn-primary rounded-[10px] family-regular h-[28px] py-0 px-3.5 text-[11px]"
        >
          <SaveIcon size={13} />
          {data.saveButton}
        </button>
      </div>

      <div className="p-6">
        <div className="flex gap-8">
          <div className="flex flex-col w-48">
            <div className="mb-2">{data.imageUpload.label}</div>
            <FileUpload
              onFileUpload={handleFileUpload}
              kind="product"
              title={data.imageUpload.label}
            />
          </div>

          <div className="grid gap-x-4 gap-y-8 grid-cols-2 flex-1">
            {data.inputs.map((item) =>
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
          {data.tabs.map((item) => (
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
          {data.tabs.map(
            (item) =>
              selectedTab === item.id &&
              item.inputs.map((item) =>
                item.key === "base_warehouse" ? (
                  <DropdownMinimalList
                    key={item.label}
                    label={item.label}
                    setSelectedItemId={setBaseWarhouseId}
                    queryKey={["warehouses"]}
                    service={`warehouse/min/${params.bid}`}
                    serviceKey="warehouses"
                    showTitleKey="title"
                    defaultValue={item.label}
                  />
                ) : (
                  <InputsForm
                    errors={errors}
                    watch={watch}
                    setValue={setValue}
                    key={item.key}
                    currency={business?.currency}
                    register={register}
                    item={item}
                  />
                )
              )
          )}
        </div>
      </div>
    </form>
  );
};

export default CreateProduct;
