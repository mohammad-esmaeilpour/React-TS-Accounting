import { FieldValues, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import InputsForm from "src/components/Forms/InputsForm";
import SaveIcon from "src/components/icons/SaveIcon";
import { DataProps } from "src/data/fa";
import FillData from "src/functions/FillData";
import { parsedData } from "src/functions/ParseData";
import getApi from "src/react-query/services/getApi";
import DynamicService from "src/service/DynamicService";
import { useAppSelector } from "src/store/store";
import { TSingleWarehouse } from "src/types/Warehouse.types";

const UpdateWarehouse = () => {
  const data: DataProps = useAppSelector((state) => state.dataReducer);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const params = useParams();

  const {
    data: warehouse,
    isLoading,
    error,
  } = getApi<TSingleWarehouse>({
    queryKey: ["singleWarehouse", params.wid],
    service: `warehouse/${params.bid}/${params.wid}`,
    serviceKey: "warehouse",
  });

  if (isLoading)
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

  FillData({
    inputs: data.createWarehouse.inputs,
    response: warehouse,
    setValue,
  });

  const onSubmit = (datas: FieldValues) => {
    const parsingData = parsedData({
      inputs: data.createWarehouse.inputs,
      submitData: datas,
    });

    DynamicService({
      method: "put",
      service: `warehouse/${params.bid}/${params.wid}`,
      payload: {
        ...parsingData,
      },
    }).then((response: any) => {
      response.status === 200 && navigate(`/${params.bid}/warehouse`);
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="panel px-0">
      <div className="flex sticky top-0 bg-white w-full justify-between items-center border-b py-5 px-5 mb-7">
        <h1 className="family-regular text-xl">{data.createWarehouse.title}</h1>
        <button
          type="submit"
          className="btn-primary rounded-[10px] h-[28px] py-0 px-3.5 text-[11px]"
        >
          <SaveIcon size={13} />
          {data.createWarehouse.saveButton}
        </button>
      </div>
      <div className="grid gap-x-4 gap-y-8 grid-cols-3 flex-1 px-5">
        {data.createWarehouse.inputs.map((item) => (
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
    </form>
  );
};

export default UpdateWarehouse;
