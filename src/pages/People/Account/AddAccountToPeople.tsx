import { FieldValues, useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import InputsForm from "src/components/Forms/InputsForm";
import CheckCircleIcon from "src/components/icons/CheckCircleIcon";
import DynamicService from "src/service/DynamicService";
import { TPeopleAccountData } from "src/types/People.types";

type Props = {
  selectedPeopleId: number;
  modalsRef: any;
  refetchAccounts: Function;
  peopleType: "customer" | "provider";
  peopleAccountData: TPeopleAccountData;
};

const AddAccountToPeople = ({
  modalsRef,
  refetchAccounts,
  selectedPeopleId,
  peopleAccountData,
  peopleType
}: Props) => {
  const params = useParams();
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (datas: FieldValues) => {
    DynamicService({
      method: "post",
      service: `people/${peopleType}/acc/${params.bid}/${selectedPeopleId}`,
      payload: datas,
    }).then((response: any) => {
      if (response.status === 201) {
        refetchAccounts();
        reset();
        modalsRef.current.close();
      }
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-2 gap-x-2.5 gap-y-7">
        {peopleAccountData.create.inputs?.map((item) => (
          <InputsForm
            errors={errors}
            watch={watch}
            item={item}
            register={register}
            setValue={setValue}
          />
        ))}
      </div>

      <button className="btn-primary ms-auto mt-10">
        <CheckCircleIcon size={25} />
        {peopleAccountData.saveButton}
      </button>
    </form>
  );
};

export default AddAccountToPeople;
