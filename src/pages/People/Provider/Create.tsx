import { DataProps } from "src/data/fa";
import { useAppSelector } from "src/store/store";
import CreatePeople from "../Create";

const  CreateProvider = () => {
  const data: DataProps = useAppSelector((state) => state.dataReducer);

  return (
    <CreatePeople peopleData={data.provider.create} peopleType="provider" />
  );
}

export default CreateProvider;