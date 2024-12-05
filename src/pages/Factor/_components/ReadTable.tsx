import { useNavigate } from "react-router-dom";
import Pagination from "../../../components/Pagination";
import NotFoundItem from "../../../components/NotFoundItem";
import ErrorAlert from "../../../components/ErrorAlert";
import { TFactorData } from "src/types/Factor.types";
import { useQuery } from "@tanstack/react-query";
import { TSingleBusiness } from "src/types/Business.type";
import { formatNumbers } from "src/functions/formatNumbers";

type Props = {
  thead: any;
  tbody: string[];
  list: any[] | null;
  link?: boolean;
  url?: string;
  pageSize?: number;
  setPageSize?: Function;
  pageNumber?: number;
  setPageNumber?: Function;
  notFound: string;
  isPending: boolean;
  error: Error | null;
  data: TFactorData;
};

const TableFactor = ({
  tbody,
  thead,
  list,
  link,
  url,
  pageNumber,
  pageSize,
  setPageNumber,
  setPageSize,
  notFound,
  isPending,
  error,
  data,
}: Props) => {
  const navigate = useNavigate();

  const { data: business } = useQuery<TSingleBusiness>({
    queryKey: ["business"],
    staleTime: Infinity,
  });

  return (
    <div className="flex flex-col flex-1 overflow-auto relative mx-2 border rounded-xl">
      <div className="h-full flex-1 overflow-auto">
        <table className="table family-regular text-sm text-color text-opacity-90">
          <thead className="bc-primary bg-opacity-10">
            <tr>
              {thead.map((item: any) => (
                <td
                  key={item}
                  className="py-4 border-l last-of-type:border-none border-[#d5d5d5]"
                >
                  {item}
                </td>
              ))}
            </tr>
          </thead>
          {isPending ? (
            <div className="absolute left-1/2 top-52">
              <div className="loading loading-dots c-primary m-auto"></div>
            </div>
          ) : list?.length === 0 ? (
            <div className="absolute left-1/2 -translate-x-1/2">
              <NotFoundItem title={notFound} />
            </div>
          ) : error ? (
            <div className="absolute left-1/2 -translate-x-1/2 mt-10">
              <ErrorAlert title={error.message} />
            </div>
          ) : (
            <tbody className="relative">
              {list?.map((item: any, index) => (
                <tr
                  key={index}
                  onClick={() => {
                    link
                      ? url
                        ? navigate(`${url}/${item.id}`)
                        : navigate(`${item.id}`)
                      : false;
                  }}
                  className={`border-b transition-all ${
                    link && "cursor-pointer hover:bc-secondary"
                  }`}
                >
                  <td className="border-l last-of-type:border-none py-5 text-nowrap max-w-48 overflow-auto">
                    {index + 1}
                  </td>
                  {tbody.map((column) => (
                    <td
                      key={column}
                      id={column}
                      className="border-l last-of-type:border-none py-5 text-nowrap max-w-48 overflow-auto"
                    >
                      {column !== "status" ? (
                        column.includes("amount") ||
                        column.includes("price") ||
                        column.includes("count") ||
                        column.includes("debtor") ||
                        column.includes("creaditor") ||
                        column.includes("balance") ? (
                          formatNumbers(item[column])
                        ) : (
                          item[column]
                        )
                      ) : item.status === 0 ? (
                        <span className="text-red-500">
                          {data.table.status_0}
                        </span>
                      ) : item.status === 1 ? (
                        <span className="text-green-500">
                          {data.table.status_1}
                        </span>
                      ) : item.status === 2 ? (
                        <span className="text-green-500">
                          {data.table.status_2}
                        </span>
                      ) : item.status === 3 ? (
                        <span className="text-green-500">
                          {data.table.status_3}
                        </span>
                      ) : null}
                      {column.includes("amount") ||
                      column.includes("price") ||
                      column.includes("debtor") ||
                      column.includes("creaditor") ||
                      column.includes("balance") ? (
                        <span className="text-xs ms-2">
                          {business?.currency}
                        </span>
                      ) : null}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          )}
        </table>
      </div>
      {pageNumber && (
        <div className="bg-white w-full sticky left-0 bottom-0 py-2.5 px-3 border-t flex justify-between">
          <Pagination pageSize={pageSize} setPageSize={setPageSize} />
          <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber} />
        </div>
      )}
    </div>
  );
};

export default TableFactor;
