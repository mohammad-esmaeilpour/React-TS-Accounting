import { useParams } from "react-router-dom";
import getApi from "./services/getApi";
import { TSingleBusiness } from "src/types/Business.type";

function useBusiness() {
  const params = useParams();

  return getApi<TSingleBusiness>({
    queryKey: ["business"],
    service: `business/${params.bid}`,
    serviceKey: "business",
  });
}

export default useBusiness;
