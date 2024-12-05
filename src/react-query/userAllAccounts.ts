import { isPending } from "@reduxjs/toolkit";
import getApi from "./services/getApi";
import { useParams } from "react-router-dom";
import { TAllAccounts } from "src/types/Bank.types";

function useAllAccounts() {
  const params = useParams();

  const { data } = getApi<TAllAccounts[]>({
    queryKey: ["allAccounts"],
    service: `bank/${params.bid}`,
    serviceKey: "accounts",
  });
  return { data, isPending };
}

export default useAllAccounts;
