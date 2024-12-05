import getApi from "./services/getApi";
import { useParams } from "react-router-dom";
import { TSlanderers } from "src/types/Bank.types";

function useSlanderersMax() {
  const params = useParams();

  const { data, isPending, error } = getApi<TSlanderers[]>({
    queryKey: ["slanderersMax"],
    service: `bank/slanderer/${params.bid}/max`,
    serviceKey: "slanderers",
  });

  return { data, isPending, error };
}

export default useSlanderersMax;
