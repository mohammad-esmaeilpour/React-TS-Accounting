import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "src/react-query/services/apiClient";

type Props = {
  queryKey: unknown[];
  service: string;
  serviceKey: string;
  params?: unknown;
  enable?: boolean;
};

const getApi = <T>({
  queryKey,
  service,
  params,
  serviceKey,
  enable,
}: Props) =>
  useQuery<T>({
    queryKey,
    queryFn: async () => {
      try {
        const response = await axiosInstance.get(service, { params });
        // Toastify({ color: "success", message: response.data.message });
        return response.data[serviceKey]; // Return the actual data
      } catch (error: any) {
        // Toastify({
        //   color: "error",
        //   message: error.response?.data?.error || "Error occurred",
        // });
        throw error;
      }
    },
    enabled: enable,
    refetchOnWindowFocus: false,
  });

export default getApi;
