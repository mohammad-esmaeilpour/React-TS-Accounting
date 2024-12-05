import getApi from "./services/getApi";
import { useParams } from "react-router-dom";
import { TBankAccounts } from "src/types/Bank.types";

function useBankAccountsMax() {
  const params = useParams();

  const { data, isPending, error } = getApi<TBankAccounts[]>({
    queryKey: ["bankAccountsMax"],
    service: `bank/account/${params.bid}/max`,
    serviceKey: "banks",
  });

  return { data, isPending, error };
}

export default useBankAccountsMax;
