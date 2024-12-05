import { RefObject} from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import CheckCircleIcon from "src/components/icons/CheckCircleIcon";
import { DataProps } from "src/data/fa";
import DynamicService from "src/service/DynamicService";
import { useAppSelector } from "src/store/store";

type Props = {
  selectedCategory: { id: number; title: string } | null;
  createModalsRef: RefObject<HTMLDialogElement | null>;
  handleRefetch: Function;
};

const CreateCategory = ({
  selectedCategory,
  createModalsRef,
  handleRefetch,
}: Props) => {
  const params = useParams();
  const navigate = useNavigate();
  const { register, handleSubmit, setValue } = useForm();
  const data: DataProps = useAppSelector((state) => state.dataReducer);

  const onSubmit = (datas: any) => {
    DynamicService({
      method: "post",
      service: `category/${params.ct}/${params.bid}`,
      payload: { ...datas, parent_id: selectedCategory?.id },
    }).then((response: any) => {
      if (response.status === 201) {
        handleRefetch();
        setValue("title", "");
        createModalsRef.current && createModalsRef.current.close();
        selectedCategory && navigate(`${selectedCategory?.id}`);
      }
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex mb-3 ps-1">
        <div className="text-sm">
          {data.category.create.addCategoryText}
        </div>
        <div className="text-sm family-bold mx-1">
          {selectedCategory
            ? selectedCategory?.title
            : params.ct === "services"
            ? data.category.tabs[0].title
            : data.category.tabs[1].title}
        </div>
      </div>
      <input
        {...register("title", { required: true })}
        autoComplete="off"
        type="text"
      />
      <button className="btn-primary ms-auto mt-9">
        <CheckCircleIcon size={24} />
        {data.category.create.addCategoryBtn}
      </button>
    </form>
  );
};

export default CreateCategory;
