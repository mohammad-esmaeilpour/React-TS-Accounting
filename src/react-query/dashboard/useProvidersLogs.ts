import { TProviderLogs } from "src/types/Dashboar.types";
import { useParams } from "react-router-dom";
import getApi from "../services/getApi";

function useProvidersLogs() {
  const params = useParams();

  const { data, error, isPending } = getApi<TProviderLogs>({
    queryKey: ["providersLogs"],
    service: `logs/providers/${params.bid}`,
    serviceKey: "data",
  });

  return { data, isPending, error };
}

export default useProvidersLogs;
