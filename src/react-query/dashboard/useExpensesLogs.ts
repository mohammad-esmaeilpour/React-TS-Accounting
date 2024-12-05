import { TExpenceLogs} from "src/types/Dashboar.types";
import { useParams } from "react-router-dom";
import getApi from "../services/getApi";

type Props = {
  start_date: string | null;
  end_date: string | null;
};

function useExpensesLogs({ end_date, start_date }: Props) {
  const params = useParams();

  const { data, isPending,error } = getApi<TExpenceLogs>({
    queryKey: ["expensesLogs"],
    service: `logs/expenses/${params.bid}`,
    serviceKey: "data",
    params: {
      start_date,
      end_date,
    },
  });

  return { data, isPending, error };
}

export default useExpensesLogs;
