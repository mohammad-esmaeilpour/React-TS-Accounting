import { useMutation } from "@tanstack/react-query"
import { axiosInstance } from "./apiClient"

type Props = {
  data: unknown;
  service: string;
  onSuccessFn?: Function;
  params?: any;
};

const postApi = <T>({ data, service, onSuccessFn, params }: Props) => {
  const { mutate } = useMutation<T>({
    mutationFn: () => {
      return axiosInstance.post(service, data, { params });
    },
    onSuccess: () => onSuccessFn,
  });
  return { mutate };
};

export default postApi;