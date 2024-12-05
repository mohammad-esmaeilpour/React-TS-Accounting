import { toast } from "react-toastify";

type Props = {
  color: "info" | "success" | "error" | undefined;
  message: string;
};

export const Toastify = ({ color, message }: Props) => {
  switch (color) {
    case "error":
      toast.error(message, { position: "top-right" });
      break;
    case "info":
      toast.info(message, { position: "top-right" });
      break;

    case "success":
      toast.success(message, { position: "top-right" });
      break;

    default:
      toast.success(message, { position: "top-right" });
      break;
  }
};
