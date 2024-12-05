import { useQueryClient } from "@tanstack/react-query";
import { RefObject, useEffect } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import InputsForm from "src/components/Forms/InputsForm";
import CheckCircleIcon from "src/components/icons/CheckCircleIcon";
import DynamicService from "src/service/DynamicService";
import { TInputs } from "src/types/global.types";

type Props = {
  modalsRef: RefObject<HTMLDialogElement>;
  data: {
    kind: string;
    title: string;
    inputs: TInputs[];
    saveBtn: string;
  };
  flowKindId: number | null;
  flowKind: string | null;
};

const UpdateExpenseKind = ({
  modalsRef,
  data,
  flowKind,
  flowKindId,
}: Props) => {
  const {
    handleSubmit,
    watch,
    register,
    setValue,
    formState: { errors },
  } = useForm();
  const params = useParams();

  useEffect(() => {
    setValue("title", flowKind);
  }, [flowKind]);

  const queryClient = useQueryClient();

  const onsubmit = (datas: FieldValues) => {
    DynamicService({
      method: "put",
      service: `cashflow/${data.kind}/kind/${params.bid}/${flowKindId}`,
      payload: {
        ...datas,
      },
    }).then((res: any) => {
      if (res.status === 200) {
        modalsRef.current && modalsRef.current.close();
        queryClient.invalidateQueries({
          queryKey: [data.kind === "expense" ? "expenseKinds" : "incomeKinds"],
        });
        setValue(data.inputs[0].key, null);
      }
    });
  };

  return (
    <form onSubmit={handleSubmit(onsubmit)}>
      {data.inputs.map((item) => (
        <InputsForm
          errors={errors}
          item={item}
          setValue={setValue}
          watch={watch}
          register={register}
          key={item.key}
        />
      ))}

      <button className="btn-primary flex items-center gap-2 justify-between px-2 ms-auto text-xs mt-5 family-light">
        <CheckCircleIcon size={18} color="white" />
        {data.saveBtn}
      </button>
    </form>
  );
};

export default UpdateExpenseKind;
