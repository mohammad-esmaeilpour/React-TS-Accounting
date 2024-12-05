import { DataProps } from "src/data/fa";
import { useAppSelector } from "src/store/store";
import CreateFactor from "../_components/Create";

const CreatePurchaseFactor = () => {
  const data: DataProps = useAppSelector((state) => state.dataReducer);

  return (
    <CreateFactor data={data.purchaseFactor.create} factorKind="purchase" />
  );
}

export default CreatePurchaseFactor