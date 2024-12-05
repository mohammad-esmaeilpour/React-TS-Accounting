import getApi from "./services/getApi";
import { useParams } from "react-router-dom";
import { TBankAccounts } from "src/types/Bank.types";

function useBankAccounts() {
  const params = useParams();

  const { data, isLoading, error } = getApi<TBankAccounts[]>({
    queryKey: ["bankAccountsMin"],
    service: `bank/account/${params.bid}/min`,
    serviceKey: "banks",
  });

  return { data, isLoading, error };
}

export default useBankAccounts;
