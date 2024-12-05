import DangerIcon from "./icons/DangerIcon";

type Props = {
  title: string;
};

const ErrorAlert = ({ title }: Props) => {
  return (
    <div role="alert" className="alert alert-error">
      <span>{title}</span>
      <DangerIcon />
    </div>
  );
};

export default ErrorAlert