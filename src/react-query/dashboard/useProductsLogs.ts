import { TProductsLogs } from "src/types/Dashboar.types";
import { useParams } from "react-router-dom";
import getApi from "../services/getApi";



function useProductsLogs() {
  const params = useParams();

  const { data, error, isPending } = getApi<TProductsLogs[]>({
    queryKey: ["productsLogs"],
    service: `logs/products/${params.bid}`,
    serviceKey: "productsLog",
  });

  return { data, error, isPending };
}

export default useProductsLogs;
