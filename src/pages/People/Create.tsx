import { Fragment, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import FileUpload from "src/components/Forms/FileUpload";
import InputsForm from "src/components/Forms/InputsForm";
import SaveIcon from "src/components/icons/SaveIcon";
import { parsedData } from "src/functions/ParseData";
import DynamicService from "src/service/DynamicService";
import { TCreatePeopleData } from "src/types/People.types";

type Props = {
  peopleType: "provider" | "customer";
  peopleData: TCreatePeopleData;
};

const CreatePeople= ({ peopleType, peopleData }: Props) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [uploadedFile, setUploadedFile] = useState<string | null>(null);

  const params = useParams();
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    setValue,
    watch,
    formState: { errors },
  } = useForm();

  const handleFileUpload = (filePath: string | null) => {
    setUploadedFile(filePath);
    setValue("image_src", filePath);
  };

  const onSubmit = (datas: FieldValues) => {
    const tabsInputs = peopleData.tabs
      .map((item) => item.inputs)
      .flat();

    const parsingData = parsedData({
      inputs: [...peopleData.inputs, ...tabsInputs],
      submitData: datas,
    });

    DynamicService({
      method: "post",
      service: `people/${peopleType}/${params.bid}`,
      payload: {
        ...parsingData,
        image_src: uploadedFile,
      },
    }).then((response: any) => {
      response.status === 201 &&
        navigate(`/${params.bid}/people/${peopleType}`);
    });
  };

  return (
    <Fragment>
      <form onSubmit={handleSubmit(onSubmit)} className="panel">
        <div className="flex sticky z-10 top-0 bg-white w-full justify-between items-center border-b py-5 px-5 mb-7">
          <h1 className="family-regular text-xl">{peopleData.title}</h1>

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
                onFileUpload={handleFileUpload}
                kind="people"
                title={peopleData.imageUpload.alt}
              />
            </div>

            <div className="grid gap-x-4 gap-y-8 grid-cols-2 flex-1">
              {peopleData.inputs.map((item) => (
                <InputsForm
                  errors={errors}
                  watch={watch}
                  setValue={setValue}
                  item={item}
                  register={register}
                  key={item.key}
                />
              ))}
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

          <div>
            <div className="grid grid-cols-4 mt-8 gap-x-2.5 gap-y-7">
              {peopleData.tabs.map(
                (item) =>
                  selectedTab === item.id &&
                  item.inputs.map((item) => (
                    <InputsForm
                      errors={errors}
                      watch={watch}
                      setValue={setValue}
                      key={item.key}
                      register={register}
                      item={item}
                    />
                  ))
              )}
            </div>
          </div>
        </div>
      </form>
    </Fragment>
  );
};

export default CreatePeople;
