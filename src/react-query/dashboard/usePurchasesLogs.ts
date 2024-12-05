import { TPurchaseLogs } from "src/types/Dashboar.types";
import { useParams } from "react-router-dom";
import getApi from "../services/getApi";

type Props = {
  start_date: string;
  end_date: string;
};

function usePurchasesLogs({end_date,start_date}:Props) {
  const params = useParams();

  const { data, isPending, error } = getApi<TPurchaseLogs>({
    queryKey: ["purchasesLogs"],
    service: `logs/purchases/${params.bid}`,
    serviceKey: "data",
    params: {
      start_date,
      end_date,
    },
  });

  return { data, isPending, error };
}

export default usePurchasesLogs;
