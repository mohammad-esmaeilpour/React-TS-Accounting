import { DataProps } from "src/data/fa";
import { useAppSelector } from "src/store/store";
import UpdatePeople from "../Update";

const UpdateProvider = () => {
  const data: DataProps = useAppSelector((state) => state.dataReducer);

  return (
    <UpdatePeople
      updateTitle={data.provider.update.title}
      peopleData={data.provider.create}
      peopleType="provider"
    />
  );
};

export default UpdateProvider;
