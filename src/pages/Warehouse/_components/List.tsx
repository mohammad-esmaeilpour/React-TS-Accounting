import { MouseEvent } from "react";
import { Link } from "react-router-dom";
import EditIcon from "src/components/icons/EditIcon";
import EyeIcon from "src/components/icons/EyeIcon";
import NotifIcon from "src/components/icons/vectors/NotifIcon";
import { DataProps } from "src/data/fa";
import { useAppSelector } from "src/store/store";
import { TWarehouses } from "src/types/Warehouse.types";

type Props = {
  item: TWarehouses;
  handleModal: Function;
  setWarehouse: Function;
};

const WarehousesList = ({ item, handleModal, setWarehouse }: Props) => {
  const data: DataProps = useAppSelector((state) => state.dataReducer);

  return (
    <div className="flex justify-between items-center px-3 py-3 rounded-2xl bc-secondary">
      <div className="flex items-center gap-2.5">
        <div className="h-12 w-12 flex items-center justify-center rounded-2xl bg-white">
          <NotifIcon size={22} />
        </div>
        <div className="flex flex-col gap-1">
          <span className="family-bold">{item.title}</span>
          <div className="family-light text-[10px]">
            {data.warehouse.warehuseKeeper} : {item.business}
          </div>
        </div>
      </div>
      <div className="flex gap-1.5">
        <button
          onClick={(e: MouseEvent<HTMLButtonElement>) => {
            e.preventDefault();
            e.stopPropagation();
            handleModal();
            setWarehouse(item);
          }}
          className="btn-light-blue rounded-[4.5px] px-3.5 h-8 text-xs "
        >
          <EyeIcon color="#4880FF" size={17} />
          {data.createWarehouse.viewButton}
        </button>
        <Link
          to={`${item.id}`}
          className="btn-light-gray rounded-[4.5px] px-3.5 h-8 text-xs "
        >
          <EditIcon size={17} />
          {data.createWarehouse.editButton}
        </Link>
      </div>
    </div>
  );
};

export default WarehousesList;
