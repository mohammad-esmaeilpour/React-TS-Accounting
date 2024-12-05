import { DataProps } from "src/data/fa";
import { useAppSelector } from "src/store/store";
import CreatePeople from "../Create";

const CreateCustomer = () => {
  const data: DataProps = useAppSelector((state) => state.dataReducer);

  return (
    <CreatePeople peopleData={data.customer.create} peopleType="customer" />
  );
}

export default CreateCustomer