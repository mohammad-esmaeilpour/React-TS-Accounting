import { useQueryClient } from "@tanstack/react-query";
import CheckCircleOutIcon from "../icons/CheckCircleOutIcon";

type Props = {
  title: string;
  refetchQuery: string;
  link: {
    title: string;
    url: string;
  };
};

const SuccessForm = ({ title, link, refetchQuery }: Props) => {
  const queryClient = useQueryClient();

  const hadnleRefetch = () => {
    queryClient.invalidateQueries({
      queryKey: [refetchQuery],
      refetchType: "all",
    });
  };

  return (
    <form method="dialog" className="flex flex-col items-center">
      <CheckCircleOutIcon size={239} />
      <div className="family-bold text-xl mt-4">{title}</div>
      <button className={"btn-secondary mt-6"} onClick={hadnleRefetch}>
        {link.title}
      </button>
    </form>
  );
};

export default SuccessForm;
