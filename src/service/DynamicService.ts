import ApiService from "./HttpService";

interface DynamicServiceProps {
  method: "get" | "post" | "put" | "delete" | 'patch'
  service: string;
  payload?: Object | void;
  params?: object;
  file?:any
}

const DynamicService = async ({
  service,
  payload,
  params,
  method,
  file,
}: DynamicServiceProps) => {

  const formData = new FormData();
  formData.append("file", file);

  try {
    const data = await ApiService({
      method,
      url: `https://capital-compass-server.liara.run/api/${service}`,
      data: file ? formData : payload,
      params,
    }).then((response) => {
      
      // Toastify({ color: "success", message: response.data.message });
      return response
    });
    return data;
  } catch (error: any) {
    // Toastify({
    //   color: "error",
    //   message: error.response.data.error,
    // });
    return false;
  }
};

export default DynamicService;
