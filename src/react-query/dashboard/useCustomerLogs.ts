import { TCustomerLogs } from "src/types/Dashboar.types";
import { useParams } from "react-router-dom";
import getApi from "../services/getApi";

function useCustomerLogs() {
  const params = useParams();

  const { data, error, isPending } = getApi<TCustomerLogs>({
    queryKey: ["customersLogs"],
    service: `logs/customers/${params.bid}`,
    serviceKey: "data",
  });

  return { data, error, isPending };
}

export default useCustomerLogs;
