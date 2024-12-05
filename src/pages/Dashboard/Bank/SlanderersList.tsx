import NotifIcon from "src/components/icons/vectors/NotifIcon";
import { TSingleBusiness } from "src/types/Business.type";
import Skeleton from "./Skeleton";
import { Link } from "react-router-dom";
import { DataProps } from "src/data/fa";
import { useAppSelector } from "src/store/store";
import PlusCircleIcon from "src/components/icons/PlusCircleIcon";
import useSlanderersMax from "src/react-query/useSlanderersMax";
import NotFoundItem from "src/components/NotFoundItem";
import { useQuery } from "@tanstack/react-query";
import { formatNumbers } from "src/functions/formatNumbers";
import { Fragment } from "react/jsx-runtime";

const SlanderersList = () => {
  const data: DataProps = useAppSelector((state) => state.dataReducer);
  const { data: slanderers, error, isPending } = useSlanderersMax();
  const skeleton = [1, 2, 3];

  const { data: business } = useQuery<TSingleBusiness>({
    queryKey: ["business"],
    staleTime: Infinity,
  });

  return (
    <Fragment>
      <div className="flex-1 overflow-auto">
        {isPending ? (
          skeleton.map((count) => <Skeleton key={count} />)
        ) : error || slanderers?.length === 0 ? (
          <div className="text-center px-8">
            <NotFoundItem title={error?.message || data.slanderer.notFound} />
          </div>
        ) : (
          slanderers?.map((item) => (
            <div className="my-2 mx-4 flex justify-between items-center px-2 py-1.5 rounded-2xl bc-secondary">
              <div className="flex items-center gap-2.5">
                <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-white">
                  {item.image_src ? (
                    <img
                      className="w-full h-full object-contain object-center"
                      src={`https://capital-compass-server.liara.run/${item.image_src}`}
                    />
                  ) : (
                    <NotifIcon size={28} />
                  )}
                </div>
                <div className="flex flex-col gap-2.5">
                  <span className="family-bold text-sm">
                    {item.slanderer_name}
                  </span>
                  <span className="text-xs">
                    {formatNumbers(item.finantial_code, false)}
                  </span>
                </div>
              </div>
              <div className="flex items-center text-sm gap-2 pe-2">
                {formatNumbers(item.balance)}
                <span className="text-[10px]">{business?.currency}</span>
              </div>
            </div>
          ))
        )}
      </div>
      <Link
        to={"bank/slanderer/create"}
        className="btn mt-2 py-2 h-10 rounded-2xl bg-opacity-50 mx-4 hover:bg-opacity-5"
      >
        <PlusCircleIcon />
        <span className="block text-color text-opacity-60 family-regular">
          {" "}
          {data.slanderer.addButton}
        </span>
      </Link>
    </Fragment>
  );
};

export default SlanderersList;
