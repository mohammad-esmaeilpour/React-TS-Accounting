import { FieldValues, useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import InputsForm from "src/components/Forms/InputsForm";
import { DataProps } from "src/data/fa";
import DynamicService from "src/service/DynamicService";
import { useAppSelector } from "src/store/store";
import { RefObject, useEffect, useState } from "react";
import CloseCircleIcon from "src/components/icons/CloseCircleIcon";
import CheckCircleIcon from "src/components/icons/CheckCircleIcon";
import getApi from "src/react-query/services/getApi";
import { TRoles } from "src/types/Role.types";

type Props = {
  modalsRef: RefObject<HTMLDialogElement | null>;
  refetch: any;
  role: TRoles | null;
};

const UpdateRole = ({ modalsRef, refetch, role }: Props) => {
  const [permissions, setPermissions] = useState<string[] | []>([]);
  const data: DataProps = useAppSelector((state) => state.dataReducer);
  const params = useParams();
  const {
    handleSubmit,
    watch,
    register,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (role) {
      setValue("name", role?.name);
      setValue("description", role?.description);
      setPermissions(Object.entries(role?.accesses).map((item) => item[0]));
    }
  }, [role]);

  const { data: permissionsFull } = getApi<any>({
    queryKey: ["permissions"],
    service: `role/permissions/${params.bid}`,
    serviceKey: "permissions",
  });

  const accessList: string = watch("accesses");

  useEffect(() => {
    if (accessList) {
      if (!permissions?.find((value) => value === accessList)) {
        setPermissions([...permissions, accessList]);
      }
    }
  }, [accessList]);

  const createSubmit = (datas: FieldValues) => {
    const filterPermission = permissions.reduce((acc: any, key: any) => {
      if (permissionsFull[key]) {
        acc[key] = permissionsFull[key];
      }
      return acc;
    }, {});

    DynamicService({
      method: "put",
      service: `role/${params.bid}/${role?.id}`,
      payload: {
        ...datas,
        accesses: filterPermission,
      },
    }).then(() => handleSubmitRoles());
  };

  const handleRemoveAccess = (selected: string) => {
    const filterPermisions = permissions?.filter((value) => value !== selected);
    setPermissions(filterPermisions);
    setValue("accesses", null);
  };

  const handleSubmitRoles = () => {
    modalsRef.current && modalsRef.current.close();
    refetch();
  };

  return (
    <form onSubmit={handleSubmit(createSubmit)}>
      <div className="grid grid-cols-2 gap-5">
        {data.role.create.inputs.map((item) => (
          <InputsForm
            errors={errors}
            item={item}
            watch={watch}
            register={register}
            setValue={setValue}
          />
        ))}
      </div>
      <div className="mt-5 flex flex-wrap gap-3">
        {permissions.map((values) => (
          <div className="bc-primary bg-opacity-10 h-9 px-2 flex items-center justify-between gap-3 rounded-lg text-sm family-light text-black">
            {data.role.create.inputs.map(
              (item) =>
                item.key === "accesses" &&
                item.options?.list.map(
                  (labels) => labels.key === values && labels.title
                )
            )}
            <div
              className="cursor-pointer"
              onClick={() => handleRemoveAccess(values)}
            >
              <CloseCircleIcon size={18} color="red" />
            </div>
          </div>
        ))}
      </div>
      <button className="btn-primary mt-5 ms-auto">
        <CheckCircleIcon size={18} />
        {data.role.update.saveButton}
      </button>
    </form>
  );
};

export default UpdateRole;
