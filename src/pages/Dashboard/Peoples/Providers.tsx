import { DataProps } from "src/data/fa";
import { useAppSelector } from "src/store/store";
import Skeleton from "./Skeleton";
import NotFoundItem from "src/components/NotFoundItem";
import NotifIcon from "src/components/icons/vectors/NotifIcon";
import { Link } from "react-router-dom";
import PlusCircleIcon from "src/components/icons/PlusCircleIcon";
import { useQuery } from "@tanstack/react-query";
import { TSingleBusiness } from "src/types/Business.type";
import useProvidersLogs from "src/react-query/dashboard/useProvidersLogs";
import { formatNumbers } from "src/functions/formatNumbers";

const ProvidersLog = () => {
  const data: DataProps = useAppSelector((state) => state.dataReducer);
  const { data: providers, error, isPending } = useProvidersLogs();
  const skeleton = [1, 2];

  const { data: business } = useQuery<TSingleBusiness>({
    queryKey: ["business"],
    staleTime: Infinity,
  });

  return (
    <div className="panel pt-7 pb-5 px-3 flex flex-col gap-3 h-[480px]">
      <div className="flex justify-between items-center pe-5">
        <div className="flex flex-col gap-4">
          <div className="mx-5">
            {data.provider.title}
          </div>
          {providers?.customersLogs && (
            <div className="text-2xl mx-5">
              {formatNumbers(providers?.totalAmount)}
              <span className="text-sm ms-2">{business?.currency}</span>
            </div>
          )}
        </div>
        {providers?.customersLogs && (
          <div className="bc-primary text-white block py-1 text-xs px-2 rounded-md">
            {formatNumbers(providers?.logCount)} {data.peopleLogs.unit}
          </div>
        )}
      </div>
      <div className="flex-1 overflow-auto mb-3">
        {isPending ? (
          skeleton.map((count) => <Skeleton key={count} />)
        ) : !providers?.customersLogs ||
          providers?.customersLogs?.length === 0 ? (
          <div className="text-center px-4">
            <NotFoundItem title={error?.message || data.provider.notFound} />
          </div>
        ) : (
          providers?.customersLogs?.map((item) => (
            <div className="my-4 mx-4 justify-between items-center px-2 py-1.5 rounded-2xl bc-secondary">
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
                <div className="flex-col flex gap-1.5">
                  <div className="flex gap-2.5 text-xs">
                    <span>{item.company}</span> -<span>{item.first_name}</span>
                  </div>
                  <div className="flex items-center text-xs">
                    <span className="me-2">
                      {data.peopleLogs.purchase_amout} :
                    </span>
                    <span>{formatNumbers(item.amount)}</span>
                    <span className="text-xs ms-1">{business?.currency}</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col mt-4 px-2 gap-2">
                <div className="flex items-center text-xs">
                  <span className="me-2">
                    {data.peopleLogs.purchase_products_amout} :
                  </span>
                  <span>{formatNumbers(item.count)}</span>
                  <span className="text-xs ms-1">{data.peopleLogs.count}</span>
                </div>
                <div className="flex items-center text-xs">
                  <span className="me-2">{data.peopleLogs.mobile} :</span>
                  <span>{formatNumbers(item.phone_number, false)}</span>
                </div>
                <div className="flex items-center text-xs">
                  <span className="me-2">{data.peopleLogs.tel} :</span>
                  <span>{formatNumbers(item.telephone, false)}</span>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      <div className="flex">
        <Link
          to={"people/provider/create"}
          className="btn py-2 h-10 flex-1 rounded-2xl bg-opacity-50 mx-2 hover:bg-opacity-5"
        >
          <PlusCircleIcon />
          <span className="block text-color text-opacity-60 family-regular">
            {" "}
            {data.provider.create.title}
          </span>
        </Link>
      </div>
    </div>
  );
};

export default ProvidersLog;
