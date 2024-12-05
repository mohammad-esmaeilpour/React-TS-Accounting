import { FieldValues, UseFormRegister } from "react-hook-form";

type Props = {
  register: UseFormRegister<FieldValues>;
  itemKey: string;
};

const IsoDate = ({ register, itemKey }: Props) => {
  
  return (
    <div>
      <input {...register(itemKey)} type="date" />
    </div>
  );
};

export default IsoDate;
