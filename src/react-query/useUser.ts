import getApi from "./services/getApi";

function useUser<T>() {
  const { data, isPending, error } = getApi<T>({
    queryKey: ["user"],
    service: `user`,
    serviceKey: "user",
  });
  return { data, isPending, error };
}

export default useUser;