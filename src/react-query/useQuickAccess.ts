import getApi from "./services/getApi";
import { useParams } from "react-router-dom";
import { TProduct } from "src/types/Product.types";


function useQuickAccess() {
  const params = useParams();

  const { data, refetch, isPending, error } = getApi<TProduct[]>({
    queryKey: ["quickAccess"],
    service: `product/quickAccess/${params.bid}`,
    serviceKey: "products",
  });

  return { data, error, refetch, isPending };
}

export default useQuickAccess;
