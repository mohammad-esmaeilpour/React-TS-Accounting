import { RefObject, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import DropdownMinimalList from "src/components/Dropdown/DropdownMinimalList";
import CheckCircleIcon from "src/components/icons/CheckCircleIcon";
import DynamicService from "src/service/DynamicService";
import { useAppSelector } from "src/store/store";

type Props = {
  subUser: any;
  modalsRef: RefObject<HTMLDialogElement>;
};

const AssignRole = ({ subUser, modalsRef }: Props) => {
  const data = useAppSelector((state) => state.dataReducer);
  const [roleId, setRoleId] = useState<number | null>(null);
  const params = useParams();
  const { handleSubmit } = useForm();

  const onsubmit = () => {
    DynamicService({
      method: "patch",
      service: `role/${params.bid}/${subUser?.id}/${roleId}`,
    }).then(() => modalsRef.current && modalsRef.current.close());
  };

  return (
    <form onSubmit={handleSubmit(onsubmit)}>
      <DropdownMinimalList
        queryKey={["roles"]}
        service={`role/${params.bid}`}
        serviceKey="roles"
        setSelectedItemId={setRoleId}
        showTitleKey="name"
        defaultValue={data.subUser.pickRole}
      />
      <button className="btn-primary family-light ms-auto h-10 py-0 mt-5">
        <CheckCircleIcon size={18} />
        {data.subUser.save}
      </button>
    </form>
  );
};

export default AssignRole;
