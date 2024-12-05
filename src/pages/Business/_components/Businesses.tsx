import { MouseEvent } from "react";
import EditIcon from "src/components/icons/EditIcon";
import PlusUserIcon from "src/components/icons/PlusUserIcon";
import NotifIcon from "src/components/icons/vectors/NotifIcon";
import { Link, useNavigate } from "react-router-dom";
import AllBusinessesSkeleton from "../../../components/Skeleton/BusinessesSkeleton";
import getApi from "../../../react-query/services/getApi";
import { useQueryClient } from "@tanstack/react-query";
import { DataProps } from "src/data/fa";
import { useAppSelector } from "src/store/store";

type Props = {
  setBusiness: Function;
  handleModal: Function;
  setActiveStep: Function;
};

type TAllBusinesses = {
  name: string;
  id: number;
  activity_field: string;
};

const Businesses = ({ setBusiness, handleModal, setActiveStep }: Props) => {
  const data: DataProps = useAppSelector((state) => state.dataReducer);
  const navigate = useNavigate();
  const skeleton = [1, 2, 3, 4, 5];

  const {
    data: businesses,
    error,
    isPending,
  } = getApi<TAllBusinesses[]>({
    queryKey: ["businesses"],
    service: "business",
    serviceKey: "businesses",
    params: {
      pageSize: 100,
    },
  });

  const queryClient = useQueryClient();
  const handleBusinessNavigate = (item: TAllBusinesses) => {
    navigate(`/${item?.id}`);
    queryClient.removeQueries();
  };

  if (isPending)
    return skeleton.map((item) => <AllBusinessesSkeleton key={item} />);
  if (error) return <p>{error.message}</p>;

  return (
    <div className="flex flex-col gap-y-8 px-5">
      {businesses?.map((item) => (
        <div
          key={item.id}
          onClick={() => handleBusinessNavigate(item)}
          className="flex flex-col pt-2.5 px-3 pb-3 rounded-2xl odd:bc-secondary cursor-pointer"
        >
          <div className="flex justify-between items-center border-b pb-3 mb-3">
            <div className="flex items-center gap-2.5">
              <div className="h-12 w-12 flex items-center justify-center rounded-2xl bg-white">
                <NotifIcon size={22} />
              </div>
              <div className="flex flex-col gap-1">
                <span className="family-bold">{item.name}</span>
                {/* <div className="family-light text-[10px]">
                  زمینه : {item.activity_field}
                </div> */}
              </div>
            </div>
            <div className="flex gap-1.5">
              <button
                onClick={(e: MouseEvent<HTMLButtonElement>) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleModal();
                  setBusiness(item);
                  setActiveStep(0);
                }}
                className="btn-light-gray rounded-[4.5px] px-3.5 h-8 text-xs "
              >
                <EditIcon size={17} />
                {data.business.editButton}
              </button>
              <Link
                to={`${item.id}/sub-user`}
                className="btn-light-yellow rounded-[4.5px] px-3.5 h-8 text-xs"
              >
                <PlusUserIcon size={20} />
                {data.business.userButton}
              </Link>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="bg-white shadow w-[205px] h-12 rounded-2xl flex items-center justify-between px-4">
              <div className="family-regular">
                {data.business.permission} :{" "}
              </div>
              {/* <div className="family-bold mx-1">مالک</div> */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Businesses;
