import { RefObject, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import CheckCircleIcon from "src/components/icons/CheckCircleIcon";
import { DataProps } from "src/data/fa";
import DynamicService from "src/service/DynamicService";
import { useAppSelector } from "src/store/store";

type Props = {
  selectedCategory: { id: number; title: string } | null;
  updateModalsRef: RefObject<HTMLDialogElement | null>;
  handleRefetch: Function;
};

const UpdateCategory = ({
  selectedCategory,
  updateModalsRef,
  handleRefetch,
}: Props) => {
  const data: DataProps = useAppSelector((state) => state.dataReducer);
  const params = useParams();
  const { register, handleSubmit, setValue } = useForm();

  useEffect(() => {
    setValue("title", selectedCategory?.title);
  }, [selectedCategory]);

  const onSubmit = (datas: any) => {
    DynamicService({
      method: "put",
      service: `category/${params.ct}/${params.bid}/${selectedCategory?.id}`,
      payload: { ...datas },
    }).then((response: any) => {
      if (response.status === 201) {
        handleRefetch();
        setValue("title", "");
        updateModalsRef.current && updateModalsRef.current.close();
      }
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex mb-3 ps-1">
        <div className="text-sm">{data.category.update.title} :</div>
        <div className="text-sm family-bold mx-1">
          {selectedCategory?.title}
        </div>
      </div>
      <input
        {...register("title", { required: true })}
        autoComplete="off"
        type="text"
      />
      <button className="btn-primary ms-auto mt-9">
        <CheckCircleIcon size={24} />
        {data.category.update.title}
      </button>
    </form>
  );
};

export default UpdateCategory;
