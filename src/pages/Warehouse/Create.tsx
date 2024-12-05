import { FieldValues, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import InputsForm from "src/components/Forms/InputsForm";
import SaveIcon from "src/components/icons/SaveIcon";
import { DataProps } from "src/data/fa";
import { parsedData } from "src/functions/ParseData";
import DynamicService from "src/service/DynamicService";
import { useAppSelector } from "src/store/store";

const CreateWarehouse = () => {
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


  const onSubmit = (datas: FieldValues) => {
    const parsingData = parsedData({
      inputs: data.createWarehouse.inputs,
      submitData: datas,
    });

    DynamicService({
      method: "post",
      service: `warehouse/${params.bid}`,
      payload: {
        ...parsingData,
      },
    }).then((response: any) => {
      response.status === 201 && navigate(`/${params.bid}/warehouse`);
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

export default CreateWarehouse