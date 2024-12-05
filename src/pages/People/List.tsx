import { Link } from "react-router-dom";
import EditIcon from "src/components/icons/EditIcon";
import PlusIcon from "src/components/icons/PlusIcon";
import TrashIcon from "src/components/icons/TrashIcon";
import NotifIcon from "src/components/icons/vectors/NotifIcon";
import { DataProps } from "src/data/fa";
import { formatNumbers } from "src/functions/formatNumbers";
import { useAppSelector } from "src/store/store";
import { TSinglePeople } from "src/types/People.types";

type Props = {
  item: TSinglePeople;
  handleModal: Function;
  deletePeople: Function;
};

const PeopleList = ({ item, handleModal, deletePeople }: Props) => {
  const data: DataProps = useAppSelector((state) => state.dataReducer);

  return (
    <div className="flex justify-between items-center px-3 py-3 rounded-2xl bc-secondary">
      <div className="flex items-center gap-2.5">
        <div className="h-12 w-12 flex items-center justify-center rounded-2xl bg-white">
          {item.image_src ? (
            <img
              className="w-full h-full object-contain object-center"
              src={`https://capital-compass-server.liara.run/${item.image_src}`}
            />
          ) : (
            <NotifIcon size={22} />
          )}
        </div>
        <div className="flex flex-col gap-1">
          <div className=" flex gap-2">
            <span className="family-bold">
              {item.first_name} {item.last_name}
            </span>
          </div>

          <span className="text-xs family-regular text-opacity-20">
            {data.customer.finationalNumber} :{" "}
            <span className="text-green-600">
              {formatNumbers(item.finantial_code, false)}
            </span>
          </span>
          <div className="family-light text-[10px]">
            {/* {data.bankAccount.seccondTitle} : {item.balance} */}
          </div>
        </div>
      </div>
      <div className="flex items-center gap-1.5">
        <button
          onClick={() => handleModal(item.id)}
          className="btn-success px-3.5 rounded-[4.5px] h-8 text-xs"
        >
          <PlusIcon size={14} />
          {data.customer.accounts.saveButton}
        </button>
        <Link
          to={`${item.id}`}
          className="btn-light-gray rounded-[4.5px] px-3.5 h-8 text-xs "
        >
          <EditIcon size={17} />
          {data.bankAccount.editButton}
        </Link>
        <button
          onClick={() => deletePeople(item.id)}
          className="btn-light-danger rounded-md px-2.5 h-8 text-xs"
        >
          <TrashIcon size={18} />
        </button>
      </div>
    </div>
  );
};

export default PeopleList;
