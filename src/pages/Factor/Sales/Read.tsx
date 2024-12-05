import { DataProps } from "src/data/fa";
import { useAppSelector } from "src/store/store";
import ListFactor from "../_components/Read";

const ListSalesFactor = () => {
  const data: DataProps = useAppSelector((state) => state.dataReducer);

  return <ListFactor data={data.salesFactor} factorKind="sales" />;
}

export default ListSalesFactor;