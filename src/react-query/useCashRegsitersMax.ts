import getApi from "./services/getApi";
import { useParams } from "react-router-dom";
import { TCashRegisters } from "src/types/Bank.types";

function useCashRegistersMax() {
  const params = useParams();

  const { data, isPending, error } = getApi<TCashRegisters[]>({
    queryKey: ["cashRegistersMax"],
    service: `bank/cashregister/${params.bid}/max`,
    serviceKey: "cashregisters",
  });

  return { data, isPending, error };
}

export default useCashRegistersMax;
