import { useEffect, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import FileUpload from "src/components/Forms/FileUpload";
import InputsForm from "src/components/Forms/InputsForm";
import SaveIcon from "src/components/icons/SaveIcon";
import FillData from "src/functions/FillData";
import { parsedData } from "src/functions/ParseData";
import getApi from "src/react-query/services/getApi";
import DynamicService from "src/service/DynamicService";
import { TInputs } from "src/types/global.types";
import { TCreatePeopleData, TSinglePeople } from "src/types/People.types";

type Props = {
  peopleData: TCreatePeopleData;
  updateTitle: string;
  peopleType: "customer" | "provider";
};

const UpdatePeople = ({ peopleData, peopleType,updateTitle }: Props) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [uploadedFile, setUploadedFile] = useState<string | null>(null);

  const params = useParams();
  const navigate = useNavigate();
  const {
    watch,
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm();

  const {
    data: peoples,
    isLoading,
    error,
    fetchStatus,
  } = getApi<TSinglePeople>({
    queryKey: [peopleType],
    service: `people/${peopleType}/${params.bid}/${
      peopleType === "customer" ? params.cuid : params.prid
    }`,
    serviceKey: peopleType,
  });

  let allTabsInputs: TInputs[] = [];
  peopleData.tabs.map((items) =>
    items.inputs.map((value) => allTabsInputs.push(value))
  );

  const allSection = [...peopleData.inputs, ...allTabsInputs];

  useEffect(() => {
    if (peoples) FillData({ inputs: allSection, response: peoples, setValue });
  }, [peoples, allTabsInputs, setValue]);

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
    const tabsInputs = peopleData.tabs.map((item) => item.inputs).flat();
    const parsingData = parsedData({
      inputs: [...peopleData.inputs, ...tabsInputs],
      submitData: datas,
    });

    DynamicService({
      method: "put",
      service: `people/${peopleType}/${params.bid}/${
        peopleType === "customer" ? params.cuid : params.prid
      }`,
      payload: {
        ...parsingData,
        image_src: uploadedFile,
      },
    }).then((response: any) => {
      response.status === 200 &&
        navigate(
          `/${params.bid}/people/${
            peopleType === "customer" ? "customer" : "provider"
          }`
        );
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="panel">
      <div className="flex sticky z-10 top-0 bg-white w-full justify-between items-center border-b py-5 px-5 mb-7">
        <h1 className="family-regular text-xl">{updateTitle}</h1>

        <button
          type="submit"
          className="btn-primary rounded-[10px] family-regular h-[28px] py-0 px-3.5 text-[11px]"
        >
          <SaveIcon size={13} />
          {peopleData.saveButton}
        </button>
      </div>

      <div className="p-6">
        <div className="flex gap-8">
          <div className="flex flex-col w-48">
            <div className="mb-2">{peopleData.imageUpload.label}</div>
            <FileUpload
              initialImage={peoples?.image_src}
              onFileUpload={handleFileUpload}
              kind="product"
              title={peopleData.imageUpload.label}
            />
          </div>

          <div className="grid gap-x-4 gap-y-8 grid-cols-2 flex-1">
            {peopleData.inputs.map(
              (item) =>
                item.key !== "finantial_code" && (
                  <InputsForm
                    watch={watch}
                    errors={errors}
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
          {peopleData.tabs.map((item) => (
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
          {peopleData.tabs.map(
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
                />
              ))
          )}
        </div>
      </div>
    </form>
  );
};

export default UpdatePeople;
