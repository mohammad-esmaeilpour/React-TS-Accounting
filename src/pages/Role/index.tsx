import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import getApi from "src/react-query/services/getApi";
import AllSubUserSkeleton from "../SubUser/_components/AllSubUserSkeleton";
import { TRoles } from "src/types/Role.types";
import { TUser } from "src/types/User";
import NotFoundItem from "src/components/NotFoundItem";
import { useAppSelector } from "src/store/store";
import { DataProps } from "src/data/fa";
import PlusIcon from "src/components/icons/PlusIcon";
import { Fragment } from "react/jsx-runtime";
import Modal from "src/components/Modal";
import CreateRole from "./Create";
import { useRef, useState } from "react";
import NotifIcon from "src/components/icons/vectors/NotifIcon";
import EditIcon from "src/components/icons/EditIcon";
import UpdateRole from "./Update";

const Role = () => {
  // state
  const [role, setRole] = useState<TRoles | null>(null);
  // store
  const data: DataProps = useAppSelector((state) => state.dataReducer);
  // hooks
  const params = useParams();
  const createModalsRef = useRef<HTMLDialogElement | null>(null);
  const updateModalsRef = useRef<HTMLDialogElement | null>(null);
  // services
  const { data: user } = useQuery<TUser>({
    queryKey: ["user"],
    staleTime: Infinity,
  });

  const {
    data: roles,
    isPending,
    refetch,
    error,
  } = getApi<TRoles[]>({
    queryKey: ["roles"],
    service: `role/${params.bid}`,
    serviceKey: "roles",
    enable: user?.id ? true : false,
  });

  //   functions
  const openCreateModal = () =>
    createModalsRef.current && createModalsRef.current.showModal();

  const openUpdateModal = (role: TRoles) => {
    updateModalsRef.current && updateModalsRef.current.showModal();
    setRole(role);
  };

  const skeleton = [1, 2, 3, 4, 5, 6];

  return (
    <Fragment>
      <div className="panel">
        <div className="flex sticky top-0 bg-white w-full justify-between items-center border-b py-5 px-5 mb-7">
          <h1 className="family-regular text-xl">{data.role.title}</h1>
          <button
            className="btn-success h-[31px] rounded-[10px] px-3"
            onClick={openCreateModal}
          >
            <PlusIcon size={10} />
            {data.role.addButton}
          </button>
        </div>

        <div className="flex flex-col gap-5 px-5">
          {isPending ? (
            skeleton.map((item) => <AllSubUserSkeleton key={item} />)
          ) : error || roles?.length === 0 ? (
            <NotFoundItem title={data.role.notFound} />
          ) : (
            roles?.map((item) => (
              <div
                key={item.id}
                className="flex flex-col pt-2.5 px-3 pb-3 rounded-2xl bc-secondary"
              >
                <div className="flex justify-between border-b pb-3 mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="h-12 w-12 flex items-center justify-center rounded-2xl bg-white">
                      <NotifIcon size={22} />
                    </div>
                    <div className="flex flex-col gap-1">
                      <div className="family-bold">{item.name}</div>
                      <div className="family-light text-[10px]">
                        {data.role.permissionLabel} :{" "}
                        {Object.entries(item.accesses).length}{" "}
                        {data.role.permissionTitle}
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-1.5">
                    <button
                      onClick={() => {
                        openUpdateModal(item);
                      }}
                      className="btn-light-gray rounded-[4.5px] px-3.5 h-8 text-xs "
                    >
                      <EditIcon size={17} />
                      {data.role.addPermissionButton}
                    </button>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4">
                  {Object.entries(item.accesses).map((values, index) => (
                    <div
                      key={index}
                      className="bg-white w-[205px] h-12 rounded-xl flex items-center justify-between px-4"
                    >
                      <span className="family-light">
                        {data.role.permissionTitle}
                      </span>
                      <div className="family-bold mx-1">
                        {data.role.permissionsTranslate.map(
                          (translate) =>
                            translate.key === values[0] && translate.title
                        )}{" "}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      <Modal title={data.role.create.title} modalsRef={createModalsRef}>
        <CreateRole modalsRef={createModalsRef} refetch={refetch} />
      </Modal>

      <Modal title={data.role.update.title} modalsRef={updateModalsRef}>
        <UpdateRole modalsRef={updateModalsRef} refetch={refetch} role={role} />
      </Modal>
    </Fragment>
  );
};

export default Role;
