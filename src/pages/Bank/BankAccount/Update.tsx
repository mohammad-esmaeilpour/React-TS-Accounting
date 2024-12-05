import { useEffect, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import FileUpload from "src/components/Forms/FileUpload";
import InputsForm from "src/components/Forms/InputsForm";
import SaveIcon from "src/components/icons/SaveIcon";
import { DataProps } from "src/data/fa";
import FillData from "src/functions/FillData";
import { parsedData } from "src/functions/ParseData";
import getApi from "src/react-query/services/getApi";
import DynamicService from "src/service/DynamicService";
import { useAppSelector } from "src/store/store";
import { TSingleBankAccount } from "src/types/Bank.types";

const UpdateBankAccount = () => {
  const data: DataProps = useAppSelector((state) => state.dataReducer);
  const [uploadedFile, setUploadedFile] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const params = useParams();

  const allInputs = [
    ...data.bankAccount.create.inputsTop,
    ...data.bankAccount.create.inputsBottom,
  ];

  const {
    data: bankAccount,
    isLoading,
    fetchStatus,
    error,
  } = getApi<TSingleBankAccount>({
    queryKey: ["singleBankAccount", params.baid],
    service: `bank/account/${params.bid}/${params.baid}`,
    serviceKey: "bank",
  });

  useEffect(() => {
    if (bankAccount) {
      FillData({
        inputs: allInputs,
        response: bankAccount,
        setValue,
      });
    }
  }, [bankAccount, allInputs, setValue]);

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
    const parsingData = parsedData({
      inputs: allInputs,
      submitData: datas,
    });

    DynamicService({
      method: "put",
      service: `bank/account/${params.bid}/${params.baid}`,
      payload: {
        ...parsingData,
        image_src: uploadedFile ? uploadedFile : bankAccount?.image_src,
      },
    }).then((response: any) => {
      response.status === 200 && navigate(`/${params.bid}/bank/account`);
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="panel px-0">
      <div className="flex sticky z-10 top-0 bg-white w-full justify-between items-center border-b py-5 px-5 mb-7">
        <h1 className="family-regular text-xl">
          {data.bankAccount.update.title}
        </h1>

        <button
          type="submit"
          className="btn-primary rounded-[10px] family-regular h-[28px] py-0 px-3.5 text-[11px]"
        >
          <SaveIcon size={13} />
          {data.bankAccount.create.saveButton}
        </button>
      </div>
      <div className="p-6">
        <div className="flex gap-8">
          <div className="flex flex-col w-48">
            <div className="mb-2">
              {data.bankAccount.create.imageUpload.label}
            </div>
            <FileUpload
              onFileUpload={handleFileUpload}
              kind="bank"
              title={data.bankAccount.create.imageUpload.alt}
              initialImage={bankAccount?.image_src}
            />
          </div>

          <div className="grid gap-x-4 gap-y-8 grid-cols-2 flex-1">
            {data.bankAccount.create.inputsTop.map(
              (item) =>
                item.key !== "finantial_code" && (
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

        <div className="grid gap-x-4 gap-y-8 grid-cols-3 flex-1 mt-12">
          {data.bankAccount.create.inputsBottom.map((item) => (
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

export default UpdateBankAccount;
