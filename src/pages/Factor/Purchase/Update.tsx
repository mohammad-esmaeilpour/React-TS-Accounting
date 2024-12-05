import { DataProps } from "src/data/fa";
import { useAppSelector } from "src/store/store";
import UpdateFactor from "../_components/Update";

const UpdatePurchaseFactor = () => {
  const data: DataProps = useAppSelector((state) => state.dataReducer);

  return (
    <UpdateFactor data={data.purchaseFactor.create} factorKind="purchase" />
  );
};

export default UpdatePurchaseFactor