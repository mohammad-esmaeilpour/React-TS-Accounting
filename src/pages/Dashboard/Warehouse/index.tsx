import { useState } from "react";
import FilterDate from "src/components/Filters/FilterDate";
import NotFoundItem from "src/components/NotFoundItem";
import { DataProps } from "src/data/fa";
import { formatNumbers } from "src/functions/formatNumbers";
import useWarehousesLogs from "src/react-query/dashboard/useWarehousesLogs";
import { useAppSelector } from "src/store/store";

const WarehouseLogs = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const data: DataProps = useAppSelector((state) => state.dataReducer);

  const { data: warehouses, isPending } = useWarehousesLogs({
    end_date: endDate,
    start_date: startDate,
  });

  const colors = [
    "#d76cfd",
    "#1ad5d5",
    "#ffe484",
    "#9584ff",
    "#1ad55a",
    "#fdb26c",
    "#d76cfd",
    "#1ad5d5",
    "#ffe484",
    "#9584ff",
    "#1ad55a",
    "#fdb26c",
    "#d76cfd",
    "#1ad5d5",
    "#ffe484",
    "#9584ff",
    "#1ad55a",
    "#fdb26c",
  ];

  return (
    <div className="panel pt-7 pb-4 flex flex-col gap-3 px-6 h-[480px]">
      <div className="flex justify-between">
        <div className="flex flex-col gap-4">
          <div className="family-regular text-base">
            {data.warehouseLogs.title}
          </div>
          {warehouses?.totalCount !== 0 && (
            <div className="family-regular text-2xl">
              {warehouses && formatNumbers(warehouses?.warehouseCount)}
              <span className="text-sm ms-2">
                {data.warehouseLogs.count_remittance}
              </span>
            </div>
          )}
        </div>
        <div>
          <FilterDate
            queryKey={["warehousesLogs"]}
            setEndDate={setEndDate}
            setStartDate={setStartDate}
          />
        </div>
      </div>

      <div className="overflow-auto">
        {isPending ? (
          <div className="flex items-center justify-center h-full">
            <div className="loading loading-dots"></div>
          </div>
        ) : warehouses?.totalCount === 0 ? (
          <div className="flex">
            <NotFoundItem title={data.warehouseLogs.notFound} />
          </div>
        ) : (
          warehouses?.warehousesesLogs.map((item, index) => (
            <div className="mb-6">
              <div className="mb-1.5 text-[13px]">
                {item.warehouse_title} : {formatNumbers(item.count)}{" "}
                <span className="text-xs">{data.warehouseLogs.count}</span>
              </div>
              <progress
                className={`progress bg-[#f0f0f0] h-[22px] rounded-lg [&::-webkit-progress-value]:rounded-lg [&::-moz-progress-bar]:rounded-lg [&::-webkit-progress-value]:bg-[${colors[index]}] [&::-moz-progress-bar]:bg-[#fdb26c]
              `}
                value={item.count}
                max={warehouses?.totalCount}
              ></progress>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default WarehouseLogs;
