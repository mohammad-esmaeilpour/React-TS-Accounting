import { TIncomeLogs } from "src/types/Dashboar.types";
import { useParams } from "react-router-dom";
import getApi from "../services/getApi";

type Props = {
  start_date: string | null;
  end_date: string | null;
};

function useIncomeLogs({ end_date, start_date }: Props) {
  const params = useParams();

  const { data, isPending} = getApi<TIncomeLogs>({
    queryKey: ["incomeLogs"],
    service: `logs/incomes/${params.bid}`,
    serviceKey: "data",
    params: {
      start_date,
      end_date,
    },
  });

  return { data, isPending };
}

export default useIncomeLogs;
