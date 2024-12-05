import { TWarehouses } from "src/types/Warehouse.types";
import getApi from "./services/getApi";
import { useParams } from "react-router-dom";

function useWarehouses() {
  const params = useParams()

  const { data } = getApi<TWarehouses[]>({
    queryKey: ["warehouses"],
    service: `warehouse/min/${params.bid}`,
    serviceKey: "warehouses",
  });

  return { data};
}

export default useWarehouses;