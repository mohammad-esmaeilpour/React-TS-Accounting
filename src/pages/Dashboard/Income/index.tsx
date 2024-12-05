import { useEffect, useState } from "react";
import { AgCharts } from "ag-charts-react";
import { AgChartOptions } from "ag-charts-community";
import { useQuery } from "@tanstack/react-query";
import { TSingleBusiness } from "src/types/Business.type";
import { DataProps } from "src/data/fa";
import { useAppSelector } from "src/store/store";
import { Link } from "react-router-dom";
import PlusCircleIcon from "src/components/icons/PlusCircleIcon";
import useIncomeLogs from "src/react-query/dashboard/useIncomeLogs";
import NotFoundItem from "src/components/NotFoundItem";
import { formatNumbers } from "src/functions/formatNumbers";
import FilterDate from "src/components/Filters/FilterDate";

const IncomeLog = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const data: DataProps = useAppSelector((state) => state.dataReducer);

  const { data: incomes, isPending } = useIncomeLogs({
    start_date: startDate,
    end_date: endDate,
  });

  const { data: business } = useQuery<TSingleBusiness>({
    queryKey: ["business"],
    staleTime: Infinity,
  });

  useEffect(() => {
    setOptions((prev) => ({
      ...prev,
      data: incomes?.incomesLogs,
    }));
  }, [incomes]);

  const [options, setOptions] = useState<AgChartOptions>({
    data: incomes?.incomesLogs,
    width: 350,
    height: 250,
    series: [
      {
        type: "donut",
        calloutLabelKey: "kind",
        angleKey: "amount",
        innerRadiusRatio: 0.7,
        sectorSpacing: 5,
        calloutLabel: {
          enabled: false,
        },
      },
    ],
    legend: {
      position: "right",
      spacing: 30,
      maxWidth: 180,
      item: {
        paddingY: 25,
        label: {
          maxLength: 30,
          fontFamily: "sans_regular",
          fontSize: 14,
        },
      },
    },
  });

  return (
    <div className="panel pt-7 pb-6 px-8 h-[480px] flex flex-col overflow-auto">
      <div className="flex justify-between">
        <div>
          <div>{data.incomesLogs.title}</div>
          {incomes?.incomesLogs && (
            <div className="mt-3 text-2xl flex gap-2">
              <div
                className="tooltip"
                data-tip={formatNumbers(incomes?.totalAmount)}
              >
                <span
                  style={{ direction: "ltr" }}
                  className="max-w-52 block truncate"
                >
                  {formatNumbers(incomes?.totalAmount)}{" "}
                </span>
              </div>
              <span className="text-[15px]">{business?.currency}</span>
            </div>
          )}
        </div>

          <div>
            <FilterDate
              queryKey={["incomeLogs"]}
              setEndDate={setEndDate}
              setStartDate={setStartDate}
            />
          </div>
      </div>
      {isPending ? (
        <div className="flex items-center justify-center h-full">
          <div className="loading loading-dots"></div>
        </div>
      ) : !incomes?.incomesLogs || incomes.incomesLogs.length === 0 ? (
        <NotFoundItem title={data.incomesLogs.notFound} />
      ) : (
        <AgCharts
          style={{ direction: "ltr" }}
          options={options}
          className="w-full h-full"
        />
      )}
      <Link
        to={`cash-flow/expense/create`}
        className="btn py-2 h-10 rounded-2xl bg-opacity-50 hover:bg-opacity-5"
      >
        <PlusCircleIcon />
        <span className="block text-color text-opacity-60 family-regular">
          {" "}
          {data.income.create.title}
        </span>
      </Link>
    </div>
  );
};

export default IncomeLog;