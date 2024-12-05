import { useState, useEffect } from "react";
import { AgCharts } from "ag-charts-react";
import { AgBarSeriesOptions, AgChartOptions } from "ag-charts-community";
import useSalesLogs from "src/react-query/dashboard/useSalesLogs";
import NotFoundItem from "../../../components/NotFoundItem";
import { Link } from "react-router-dom";
import PlusCircleIcon from "../../../components/icons/PlusCircleIcon";
import { DataProps } from "src/data/fa";
import { useAppSelector } from "src/store/store";
import { useQuery} from "@tanstack/react-query";
import { TSingleBusiness } from "src/types/Business.type";
import { formatNumbers } from "src/functions/formatNumbers";
import FilterDate from "src/components/Filters/FilterDate";

const months = [
  { amount: 0, gregorian: "April", month: "فروردین" },
  { amount: 0, gregorian: "May", month: "اردیبهشت" },
  { amount: 0, gregorian: "June", month: "خرداد" },
  { amount: 0, gregorian: "July", month: "تیر" },
  { amount: 0, gregorian: "August", month: "مرداد" },
  { amount: 0, gregorian: "September", month: "شهریور" },
  { amount: 0, gregorian: "October", month: "مهر" },
  { amount: 0, gregorian: "November", month: "آبان" },
  { amount: 0, gregorian: "December", month: "آذر" },
  { amount: 0, gregorian: "January", month: "دی" },
  { amount: 0, gregorian: "February", month: "بهمن" },
  { amount: 0, gregorian: "March", month: "اسفند" },
];

const SalesLog = () => {
  const [start_date, setStartDate] = useState<any>();
  const [end_date, setEndDate] = useState<any>();
  const data: DataProps = useAppSelector((state) => state.dataReducer);
  const { data: business } = useQuery<TSingleBusiness>({
    queryKey: ["business"],
    staleTime: Infinity,
  });
  const {
    data: sales,
    isPending,
    error,
  } = useSalesLogs({
    start_date,
    end_date,
  });
  const language = useAppSelector((state) => state.languageReducer);

 console.log(sales);
  

  const [chartOptions, setChartOptions] = useState<AgChartOptions>({
    data: months,
    series: [
      {
        type: "bar",
        xKey: language.value === "fa" ? "month" : "gregorian",
        yKey: "amount",
        fill: "#FF9384",
      } as AgBarSeriesOptions,
    ],
    axes: [
      {
        type: "category",
        position: "bottom",
        label: { fontFamily: "sans_regular", fontSize: 11, rotation: 90 },
        reverse: true,
      },
      {
        type: "number",
        position: "right",
        label: { color: "gray", fontSize: 8 },
        min: 0,
        max: sales?.totalAmount,
        tick: { enabled: true },
        line: { enabled: true },
        gridLine: { enabled: false },
      },
    ],
  });

  useEffect(() => {
    if (!isPending && !error && sales?.salesLogs) {
      // Summarize sales data by created_at date
      const summarizedSales = () => {
        const salesMap = new Map();

        sales.salesLogs.forEach((item) => {
          const dateKey = item.created_at;
          const existingItem = salesMap.get(dateKey) || { amount: 0 };

          // Sum the amounts for the same created_at date
          salesMap.set(dateKey, {
            ...existingItem,
            ...item,
            amount: existingItem.amount + (item.amount || 0),
          });
        });

        return Array.from(salesMap.values());
      };

      const salesByDate = summarizedSales();

      // Group sales by month
      const monthlyData = salesByDate.reduce(
        (acc, item) => {
          const date = new Date(item.created_at);
          const gregorianMonth = date.toLocaleString("default", {
            month: "long",
          });
          const monthIndex = months.findIndex(
            (m) => m.gregorian === gregorianMonth
          );

          if (monthIndex !== -1) {
            acc[monthIndex] = {
              ...acc[monthIndex],
              amount: (acc[monthIndex]?.amount || 0) + (item.amount || 0),
              month: months[monthIndex].month, // Add Persian month name
            };
          }

          return acc;
        },
        new Array(months.length).fill(null).map(() => ({ amount: 0 }))
      ); // Initialize with empty objects

      // Merge with predefined months
      const finalData = months.map((monthItem, index) => ({
        ...monthItem,
        amount: monthlyData[index]?.amount || 0,
      }));

      // Update chart options
      setChartOptions((prevOptions: any) => ({
        ...prevOptions,
        data: finalData,
        axes: [
          {
            ...prevOptions.axes[0],
          },
          {
            ...prevOptions.axes[1],
            max: sales?.totalAmount, // Update max value based on new data
          },
        ],
      }));
    }
  }, [sales, isPending, error, start_date, end_date]);

  return (
    <div className="panel pt-7 pb-6 h-[480px] flex flex-col overflow-hidden">
      <div className="flex justify-between px-8 mb-6">
        <div>
          <div>{data.salesLog.title}</div>
          {sales?.salesLogs && (
            <div className="mt-3 text-2xl flex gap-2">
              <div
                className="tooltip"
                data-tip={formatNumbers(sales?.totalAmount)}
              >
                <span
                  style={{ direction: "ltr" }}
                  className="max-w-52 block truncate"
                >
                  {formatNumbers(sales?.totalAmount)}
                </span>
              </div>
              <span className="text-[15px]">{business?.currency}</span>
            </div>
          )}
        </div>

        <div>
          <FilterDate
            queryKey={["salesLogs"]}
            setEndDate={setEndDate}
            setStartDate={setStartDate}
          />
        </div>
      </div>
      {isPending ? (
        <div className="flex items-center justify-center h-full">
          <div className="loading loading-dots"></div>
        </div>
      ) : !sales?.salesLogs || sales.salesLogs.length === 0 ? (
        <NotFoundItem title={data.salesLog.notFound} />
      ) : (
        <AgCharts style={{ direction: "ltr" }} options={chartOptions} />
      )}
      <Link
        to={"factor/sales/create"}
        className="btn py-2 h-10 rounded-2xl bg-opacity-50 hover:bg-opacity-5 mx-5"
      >
        <PlusCircleIcon />
        <span className="block text-color text-opacity-60 family-regular">
          {" "}
          {data.salesLog.link}
        </span>
      </Link>
    </div>
  );
};

export default SalesLog;