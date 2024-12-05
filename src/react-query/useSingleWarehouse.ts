import { TSingleWarehouse } from "src/types/Warehouse.types";
import getApi from "./services/getApi";
import { useParams } from "react-router-dom";

type Props = {
  id: number;
};

function useSingleWarehouse({id}:Props) {
  const params = useParams();

  const { data, isPending, error } = getApi<TSingleWarehouse>({
    queryKey: ["warehouse"],
    service: `warehouse/${params.bid}/${id}`,
    serviceKey: "warehouse",
    enable: id ? true : false,
  });

  return { data, isPending,error };
}

export default useSingleWarehouse;