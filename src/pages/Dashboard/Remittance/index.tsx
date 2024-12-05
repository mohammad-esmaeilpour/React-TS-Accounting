import { useState } from "react";
import FilterDate from "src/components/Filters/FilterDate";
import NotFoundItem from "src/components/NotFoundItem";
import { DataProps } from "src/data/fa";
import { formatNumbers } from "src/functions/formatNumbers";
import useRemittancesLogs from "src/react-query/dashboard/useRemittancesLogs";
import { useAppSelector } from "src/store/store";

const RemittancesLogs = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const data: DataProps = useAppSelector((state) => state.dataReducer);

  const { data: remittancesLog, isPending } = useRemittancesLogs({
    end_date: endDate,
    start_date: startDate,
  });

  return (
    <div className="panel pt-7 pb-4 flex flex-col gap-3 px-6">
      <div className="flex justify-between">
        <div className="flex flex-col gap-4">
          <div className="family-regular text-base">
            {data.remittanceLogs.title}
          </div>

          {remittancesLog?.totalAmount !== 0 && (
            <div className="text-2xl">
              {remittancesLog && formatNumbers(remittancesLog?.totalAmount)}
              <span className="text-sm ms-2">
                {data.remittanceLogs.count_remittance}
              </span>
            </div>
          )}
        </div>
        <div>
          <FilterDate
            queryKey={["remittancesLogs"]}
            setEndDate={setEndDate}
            setStartDate={setStartDate}
          />
        </div>
      </div>

      <div className="overflow-auto h-full">
        {isPending ? (
          <div className="flex items-center justify-center ">
            <div className="loading loading-dots"></div>
          </div>
        ) : remittancesLog?.totalAmount === 0 ? (
          <div className="flex">
            <NotFoundItem title={data.remittanceLogs.notFound} />
          </div>
        ) : (
          remittancesLog?.remittancesLogs.map((item) => (
            <div className="mb-6">
              <div className="mb-1.5 text-[13px]">
                {data.remittanceLogs.labels.map(
                  (label) => label.key === item.kind && label.title
                )}{" "}
                : {formatNumbers(item?.count)}{" "}
                <span className="text-xs">{data.remittanceLogs.count}</span>
              </div>
              <progress
                className={`progress bg-[#f0f0f0] h-[22px] rounded-lg [&::-webkit-progress-value]:rounded-lg [&::-moz-progress-bar]:rounded-lg ${
                  item.kind === "fix"
                    ? "[&::-webkit-progress-value]:bg-[#fdb26c] [&::-moz-progress-bar]:bg-[#fdb26c]"
                    : item.kind === "transfer"
                    ? "[&::-webkit-progress-value]:bg-[#1ad55a] [&::-moz-progress-bar]:bg-[#1ad55a]"
                    : item.kind === "production"
                    ? "[&::-webkit-progress-value]:bg-[#9584ff] [&::-moz-progress-bar]:bg-[#9584ff]"
                    : item.kind === "waste"
                    ? "[&::-webkit-progress-value]:bg-[#ffe484] [&::-moz-progress-bar]:bg-[#ffe484]"
                    : item.kind === "essentialDeficits"
                    ? "[&::-webkit-progress-value]:bg-[#1ad5d5] [&::-moz-progress-bar]:bg-[#1ad5d5]"
                    : item.kind === "essentialExtras"
                    ? "[&::-webkit-progress-value]:bg-[#d76cfd] [&::-moz-progress-bar]:bg-[#d76cfd]"
                    : item.kind === "purchase"
                    ? "[&::-webkit-progress-value]:bg-[#FF9384] [&::-moz-progress-bar]:bg-[#FF9384]"
                    : item.kind === "sales"
                    ? "[&::-webkit-progress-value]:bg-[#84FF9F] [&::-moz-progress-bar]:bg-[#84FF9F]"
                    : ""
                }`}
                value={item.count}
                max={remittancesLog?.totalAmount}
              ></progress>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default RemittancesLogs;
