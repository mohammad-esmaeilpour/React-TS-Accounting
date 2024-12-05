import { DataProps } from "src/data/fa";
import { useAppSelector } from "src/store/store";
import ListFactor from "../_components/Read";

const ListPurchaseFactor = () => {
  const data: DataProps = useAppSelector((state) => state.dataReducer);

  return (
    <ListFactor data={data.purchaseFactor} factorKind="purchase" />
  )
}

export default ListPurchaseFactor;