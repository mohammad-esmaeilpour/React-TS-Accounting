import { DataProps } from "src/data/fa";
import { useAppSelector } from "src/store/store";
import UpdateFactor from "../_components/Update";

const UpdateSalesFactor = () => {
  const data: DataProps = useAppSelector((state) => state.dataReducer);

  return <UpdateFactor data={data.salesFactor.create} factorKind="sales" />;
};

export default UpdateSalesFactor;