import { Fragment, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import EditIcon from "src/components/icons/EditIcon";
import NotifIcon from "src/components/icons/vectors/NotifIcon";
import DynamicService from "src/service/DynamicService";
import AllSubUserSkeleton from "./AllSubUserSkeleton";
import PlusUserIcon from "src/components/icons/PlusUserIcon";
import Modal from "src/components/Modal";
import AssignRole from "./AssignRole";
import { useAppSelector } from "src/store/store";

type Props = {
  setSubUser: any;
  subUser: any;
  handleModal: any;
  setActiveStep: any;
  activeStep: any;
};

type TAllSubUsers = {
  nick_name: string;
  id: number;
  business_id: string;
};

const AllSubUsers = ({
  setSubUser,
  handleModal,
  setActiveStep,
  activeStep,
  subUser,
}: Props) => {
  // state
  const [subUsers, setAllSubUsers] = useState<TAllSubUsers[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);

  const data = useAppSelector((state) => state.dataReducer);
  // ref
  const params = useParams();
  const assingRoleRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    setLoading(true);
    DynamicService({
      method: "get",
      service: `subuser/${params.bid}`,
      params: {
        pageNumber: 1,
        pageSize: 200,
      },
    }).then((response: any) => {
      setAllSubUsers(response.data.subusers);
      setLoading(false);
    });
  }, [activeStep]);

  console.log(subUsers);
  
  

  const skeleton = [1, 2, 3, 4, 5];
  return (
    <Fragment>
      <div className="flex flex-col gap-5 px-5">
        {isLoading && skeleton.map((item) => <AllSubUserSkeleton key={item} />)}
        {subUsers?.map((item) => (
          <div
            key={item.id}
            className="flex flex-col pt-2.5 px-3 pb-3 rounded-2xl odd:bc-secondary"
          >
            <div className="flex justify-between border-b pb-3 mb-3">
              <div className="flex items-center gap-2.5">
                <div className="h-12 w-12 flex items-center justify-center rounded-2xl bg-white">
                  <NotifIcon size={22} />
                </div>
                <div className="flex flex-col gap-1">
                  <div className="family-bold">{item.nick_name}</div>
                  {/* <div className="family-light text-[10px]">زمینه : {}</div> */}
                </div>
              </div>
              <div className="flex gap-1.5">
                <button
                  onClick={() => {
                    handleModal();
                    setSubUser(item);
                    setActiveStep(0);
                  }}
                  className="btn-light-gray rounded-[4.5px] px-3.5 h-8 text-xs "
                >
                  <EditIcon size={17} />
                  {data.subUser.editButton}
                </button>
                <div
                  onClick={() => {
                    setSubUser(item);
                    assingRoleRef.current && assingRoleRef.current.showModal();
                  }}
                  className="btn-light-blue rounded-[4.5px] px-3.5 h-8 text-xs"
                >
                  <PlusUserIcon size={17} color="#4870FF" />
                  {data.subUser.permission}
                </div>
                {/* <div className="btn-light-green rounded-[4.5px] px-3.5 h-8 text-xs">
                  <ShoppingCartIcon size={17} />
                  تمدید اشتراک
                </div> */}
                {/* <div className="btn-light-danger rounded-[4.5px] px-2 h-8">
                  <TrashIcon size={17} />
                </div> */}
              </div>
            </div>
            <div className="flex  gap-4">
              <div className="bg-white w-[205px] h-12 rounded-2xl flex items-center justify-center">
                <div className="family-regular">
                  {data.subUser.permission} :
                </div>
                {/* <div className="family-bold mx-1">مالک</div> */}
              </div>
            </div>
          </div>
        ))}
      </div>

      <Modal
        title={data.subUser.permission}
        modalsRef={assingRoleRef}
        className="max-w-lg"
      >
        <AssignRole modalsRef={assingRoleRef} subUser={subUser} />
      </Modal>
    </Fragment>
  );
};

export default AllSubUsers;
