import getApi from "./services/getApi";
import { useParams } from "react-router-dom";
import { TBankAccounts } from "src/types/Bank.types";

function useCashRegister() {
  const params = useParams();

  const { data, isLoading, error } = getApi<TBankAccounts[]>({
    queryKey: ["cashRegisterMin"],
    service: `bank/cashregister/${params.bid}/min`,
    serviceKey: "cashregisters",
  });

  return { data, isLoading, error };
}

export default useCashRegister;
