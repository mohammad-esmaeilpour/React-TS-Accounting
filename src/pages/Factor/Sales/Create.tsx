import { DataProps } from "src/data/fa";
import { useAppSelector } from "src/store/store";
import CreateFactor from "../_components/Create";

const CreateSalesFactor = () => {
  const data: DataProps = useAppSelector((state) => state.dataReducer);

  return <CreateFactor data={data.salesFactor.create} factorKind="sales" />;
};

export default CreateSalesFactor;