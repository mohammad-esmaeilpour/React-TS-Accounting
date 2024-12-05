import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import FileUpload from "src/components/Forms/FileUpload";
import InputsForm from "src/components/Forms/InputsForm";
import SaveIcon from "src/components/icons/SaveIcon";
import { DataProps } from "src/data/fa";
import { parsedData } from "src/functions/ParseData";
import DynamicService from "src/service/DynamicService";
import { useAppSelector } from "src/store/store";

const CreateSlanderer = () => {
  const data: DataProps = useAppSelector((state) => state.dataReducer);

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
    const parsingData = parsedData({
      inputs: [
        ...data.slanderer.create.inputsTop,
        ...data.slanderer.create.inputsBottom,
      ],
      submitData: datas,
    });

    DynamicService({
      method: "post",
      service: `bank/slanderer/${params.bid}`,
      payload: {
        ...parsingData,
        image_src: uploadedFile,
      },
    }).then((response: any) => {
      response.status === 201 && navigate(`/${params.bid}/bank/slanderer`);
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="panel">
      <div className="flex z-20 sticky top-0 bg-white w-full justify-between items-center border-b py-5 px-5 mb-7">
        <h1 className="family-regular text-xl">
          {data.slanderer.create.title}
        </h1>

        <button
          type="submit"
          className="btn-primary rounded-[10px] family-regular h-[28px] py-0 px-3.5 text-[11px]"
        >
          <SaveIcon size={13} />
          {data.slanderer.create.saveButton}
        </button>
      </div>

      <div className="p-6">
        <div className="flex gap-8">
          <div className="flex flex-col w-48">
            <div className="mb-2">
              {data.slanderer.create.imageUpload.label}
            </div>
            <FileUpload
              onFileUpload={handleFileUpload}
              kind="bank"
              title={data.slanderer.create.imageUpload.alt}
            />
          </div>

          <div className="grid gap-x-4 gap-y-8 grid-cols-2 flex-1">
            {data.slanderer.create.inputsTop.map((item) => (
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

        <div className="grid gap-x-4 gap-y-8 grid-cols-3 flex-1 mt-12">
          {data.slanderer.create.inputsBottom.map((item) => (
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
    </form>
  );
};

export default CreateSlanderer;
