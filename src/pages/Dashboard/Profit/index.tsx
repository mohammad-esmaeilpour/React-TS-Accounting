import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import FilterDate from "src/components/Filters/FilterDate";
import NotFoundItem from "src/components/NotFoundItem";
import { DataProps } from "src/data/fa";
import { formatNumbers } from "src/functions/formatNumbers";
import useProfitLogs from "src/react-query/dashboard/useProfitLogs";
import { useAppSelector } from "src/store/store";
import { TSingleBusiness } from "src/types/Business.type";

const ProfitLogs = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const data: DataProps = useAppSelector((state) => state.dataReducer);

  const { data: profits, isPending } = useProfitLogs({
    end_date: endDate,
    start_date: startDate,
  });

  const getKeys = profits && Object.entries(profits?.profitLog);

  const { data: business } = useQuery<TSingleBusiness>({
    queryKey: ["business"],
    staleTime: Infinity,
  });

  const sumAmounts =
    profits?.profitLog &&
    Object.values(profits.profitLog).reduce((acc, value) => acc + value, 0);

  return (
    <div className="panel pt-7 pb-4 flex flex-col gap-3 px-6 h-[480px]">
      <div className="flex justify-between">
        <div className="flex flex-col gap-4">
          <div>{data.profitLogs.title}</div>
          {profits?.totalAmount !== 0 && (
            <div className="text-2xl">
              {profits?.totalAmount && formatNumbers(profits?.totalAmount)}
              <span className="text-sm ms-2">{business?.currency}</span>
            </div>
          )}
        </div>
        <div>
          <FilterDate
            queryKey={["profitLogs"]}
            setEndDate={setEndDate}
            setStartDate={setStartDate}
          />
        </div>
      </div>

      <div className="mt-5">
        {isPending ? (
          <div className="flex items-center justify-center h-full">
            <div className="loading loading-dots"></div>
          </div>
        ) : profits?.totalAmount === 0 ? (
          <NotFoundItem title={data.profitLogs.notFound} />
        ) : (
          getKeys?.map(
            (item) =>
              item[0] !== "business_id" && (
                <div className="mb-6">
                  <div className="mb-1.5 text-[13px]">
                    {data.profitLogs.labels.map(
                      (label) => label.key === item[0] && label.title
                    )}{" "}
                    : {formatNumbers(item[1])} {business?.currency}
                  </div>
                  <progress
                    className={`progress bg-[#f0f0f0] h-[22px] rounded-lg [&::-webkit-progress-value]:rounded-lg [&::-moz-progress-bar]:rounded-lg ${
                      item[0] === "incomes"
                        ? "[&::-webkit-progress-value]:bg-[#fdb26c] [&::-moz-progress-bar]:bg-[#fdb26c]"
                        : item[0] === "expenses"
                        ? "[&::-webkit-progress-value]:bg-[#1ad55a] [&::-moz-progress-bar]:bg-[#1ad55a]"
                        : item[0] === "purchases"
                        ? "[&::-webkit-progress-value]:bg-[#FF9384] [&::-moz-progress-bar]:bg-[#FF9384]"
                        : item[0] === "sales"
                        ? "[&::-webkit-progress-value]:bg-[#1ad5d5] [&::-moz-progress-bar]:bg-[#1ad5d5]"
                        : ""
                    }`}
                    value={item[1]}
                    max={sumAmounts}
                  ></progress>
                </div>
              )
          )
        )}
      </div>
    </div>
  );
};

export default ProfitLogs;
