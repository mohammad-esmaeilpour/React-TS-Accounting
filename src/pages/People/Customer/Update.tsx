import { DataProps } from "src/data/fa";
import { useAppSelector } from "src/store/store";
import UpdatePeople from "../Update";

const UpdateCustomer = () => {
  const data: DataProps = useAppSelector((state) => state.dataReducer);

  return (
    <UpdatePeople updateTitle={data.customer.update.title} peopleData={data.customer.create} peopleType="customer" />
  );
};

export default UpdateCustomer;
