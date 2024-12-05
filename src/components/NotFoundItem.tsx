import PlusDocument from "./icons/PlusDocument";

type Props = {
  title: string;
};

const NotFoundItem = ({ title }: Props) => {
  return (
    <div className="flex w-full h-full items-center justify-center flex-col my-10">
      <PlusDocument />
      <div className="mt-4">{title}</div>
    </div>
  );
};

export default NotFoundItem