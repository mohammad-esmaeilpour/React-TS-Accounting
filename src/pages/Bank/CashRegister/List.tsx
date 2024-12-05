import { useQuery } from "@tanstack/react-query";
import { MouseEvent } from "react";
import { Link } from "react-router-dom";
import CurrencyChangeIcon from "src/components/icons/CurrencyChange";
import EditIcon from "src/components/icons/EditIcon";
import NotifIcon from "src/components/icons/vectors/NotifIcon";
import { DataProps } from "src/data/fa";
import { formatNumbers } from "src/functions/formatNumbers";
import { useAppSelector } from "src/store/store";
import { TSingleCashRegister } from "src/types/Bank.types";
import { TSingleBusiness } from "src/types/Business.type";

type Props = {
  item: TSingleCashRegister
  handleModal: Function;
  setSelectedCashRegister: Function;
};

const CashRegisterList = ({
  item,
  handleModal,
  setSelectedCashRegister,
}: Props) => {

  const data: DataProps = useAppSelector((state) => state.dataReducer);
  const { data: business } = useQuery<TSingleBusiness>({
    queryKey: ["business"],
    staleTime: Infinity,
  });
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
            <span className="family-bold">{item.cash_register_name}</span>
            <span className="text-xs family-regular text-opacity-20">
              ({formatNumbers(item.finantial_code, false)})
            </span>
          </div>
          <div className="family-light text-[10px]">
            {data.cashRegister.seccondTitle} :{" "}
            <span className="c-green family-bold">
              {formatNumbers(item.balance)} {business?.currency}
            </span>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-1.5">
        <button
          onClick={(e: MouseEvent<HTMLButtonElement>) => {
            e.preventDefault();
            e.stopPropagation();
            handleModal();
            setSelectedCashRegister(item);
          }}
          className="btn-light-blue family-regular rounded-[4.5px] px-3.5 h-8 text-xs "
        >
          <CurrencyChangeIcon />
          {data.cashRegister.circulationsButton}
        </button>
        <Link
          to={`${item.id}`}
          className="btn-light-gray rounded-[4.5px] px-3.5 h-8 text-xs "
        >
          <EditIcon size={17} />
          {data.cashRegister.editButton}
        </Link>
      </div>
    </div>
  );
};

export default CashRegisterList;