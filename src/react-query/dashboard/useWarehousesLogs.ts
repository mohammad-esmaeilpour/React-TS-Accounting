import { TWarehousesLogs } from "src/types/Dashboar.types";
import { useParams } from "react-router-dom";
import getApi from "../services/getApi";
type Props = {
  start_date: string | null;
  end_date: string | null;
};
function useWarehousesLogs({end_date,start_date}:Props) {
  const params = useParams();

  const { data, isPending } = getApi<TWarehousesLogs>({
    queryKey: ["warehousesLogs"],
    service: `logs/warehouses/${params.bid}`,
    serviceKey: "data",
    params: {
      start_date,
      end_date,
    },
  });

  return { data, isPending };
}

export default useWarehousesLogs;
