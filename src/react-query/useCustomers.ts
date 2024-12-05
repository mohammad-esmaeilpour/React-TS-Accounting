import getApi from "./services/getApi";
import { useParams } from "react-router-dom";
import { TSinglePeople } from "src/types/People.types";

function useCustomers() {
  const params = useParams();

  const { data, error, isLoading } = getApi<TSinglePeople[]>({
    queryKey: ["customers"],
    service: `people/customer/${params.bid}/min`,
    serviceKey: "customers",
  });

  return { data, error, isLoading };
}

export default useCustomers;
