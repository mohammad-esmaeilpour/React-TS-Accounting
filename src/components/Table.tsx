import { useNavigate } from "react-router-dom";
import Pagination from "./Pagination";
import NotFoundItem from "./NotFoundItem";
import { useQuery } from "@tanstack/react-query";
import { TSingleBusiness } from "src/types/Business.type";
import { formatNumbers } from "src/functions/formatNumbers";
import { useAppSelector } from "src/store/store";

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
};

const Table = ({
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
}: Props) => {
  const navigate = useNavigate();
  const data = useAppSelector((state) => state.dataReducer);

  const { data: business } = useQuery<TSingleBusiness>({
    queryKey: ["business"],
    staleTime: Infinity,
  });

  if (error) return <div>{error.message}</div>;

  return (
    <div className="flex flex-col flex-1 overflow-auto relative mx-2 border rounded-xl">
      <div className="h-full flex-1 overflow-auto">
        <table className="table family-regular text-sm text-color text-opacity-90">
          <thead className="bc-primary bg-opacity-10">
            <tr>
              {thead.map((item: any) => (
                <td
                  key={item}
                  className="py-4 border-e last-of-type:border-none border-[#d5d5d5]"
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
                  <td className="py-5 text-nowrap max-w-48 overflow-auto">
                    {formatNumbers(index + 1, false)}
                  </td>
                  {tbody.map((column) => (
                    <td
                      id={column}
                      className="border-s py-5 text-nowrap max-w-48 overflow-auto"
                    >
                      {column.includes("amount") ||
                      column.includes("price") ||
                      column.includes("count") ||
                      column.includes("debtor") ||
                      column.includes("creaditor") ||
                      column.includes("balance") ? (
                        formatNumbers(item[column])
                      ) : column === "status" ? (
                        item[column] === 0 ? (
                          <span className="text-red-500">
                            {data.purchaseFactor.table.status_0}
                          </span>
                        ) : item[column] === 1 ? (
                          <span className="text-blue-500">
                            {data.purchaseFactor.table.status_1}
                          </span>
                        ) : item[column] === 2 ? (
                          <span className="text-green-400">
                            {data.purchaseFactor.table.status_2}
                          </span>
                        ) : (
                          <span className="text-green-500">
                            {data.purchaseFactor.table.status_3}
                          </span>
                        )
                      ) : (
                        item[column]
                      )}
                      {column.includes("amount") ||
                      column.includes("price") ||
                      column.includes("debtor") ||
                      column.includes("creaditor") ||
                      column.includes("balance") ? (
                        <span className="text-xs ms-2">
                          {business?.currency}
                        </span>
                      ) : column.includes("count") ? (
                        <span className="text-xs ms-2">
                          {data.salesFactor.create.proudctsTable.number_unit}
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

export default Table;
