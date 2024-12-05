import { useState } from "react";
import { DataProps } from "src/data/fa";
import { useAppSelector } from "src/store/store";
import AccountsList from "./AccountsList";
import CashRegistersList from "./CashRegistersList";
import SlanderersList from "./SlanderersList";

const BanksLogs = () => {
  // state
  const [tab, setTab] = useState<number>(0);

  // store
  const data: DataProps = useAppSelector((state) => state.dataReducer);

  return (
    <div className="panel pt-7 pb-4 flex flex-col gap-3 h-[480px]">
      <div className="flex flex-col h-full">
        <div className="bc-secondary rounded-2xl overflow-hidden mb-4 flex mx-6">
          {data.bankLogs.tabs.map((item) => (
            <div
              key={item.id}
              onClick={() => setTab(item.id)}
              className={`flex text-xs family-bold flex-1 h-10 !py-0 items-center rounded-none justify-center last-of-type:border-0 cursor-pointer transition-all ${
                item.id === tab && "bc-primary text-white"
              }`}
            >
              {item.title}
            </div>
          ))}
        </div>

        <div className="w-full flex-1 flex flex-col overflow-hidden">
          {tab === 0 && <AccountsList />}
          {tab === 1 && <SlanderersList />}
          {tab === 2 && <CashRegistersList />}
        </div>
      </div>
    </div>
  );
};

export default BanksLogs;
