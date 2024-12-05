import getApi from "./services/getApi";
import { useParams } from "react-router-dom";
import { TSingleSubUser } from "src/types/subUser.types";

function useSubUsers() {
  const params = useParams();

  const { data, isLoading, error } = getApi<TSingleSubUser[]>({
    queryKey: ["subusers"],
    service: `subuser/${params.bid}`,
    serviceKey: "subusers",
  });
  return { data, isLoading, error };
}

export default useSubUsers;
