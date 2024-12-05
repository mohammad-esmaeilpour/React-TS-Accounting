import { formatNumbers } from "src/functions/formatNumbers";

type Props = {
  setPageSize?: Function;
  setPageNumber?: Function;
  pageNumber?: number;
  pageSize?: number;
};

const Pagination = ({
  setPageSize,
  setPageNumber,
  pageNumber,
  pageSize,
}: Props) => {
  const pageSizeCount = [5, 10, 20, 30, 40, 50];
  const pageNumberCount = [1, 2, 3, 4, 5];

  return (
    <div className="bc-primary bg-opacity-5 rounded-lg overflow-hidden inline-flex items-center w-auto">
      {setPageSize &&
        pageSizeCount.map((item) => (
          <div
            key={item}
            onClick={() => setPageSize(item)}
            className={`transition-all cursor-pointer  py-2 px-3 bc-primary family-regular text-sm ${
              item === pageSize &&
              "text-primary rounded-md bg-opacity-10 text-opacity-90"
            }`}
          >
            {formatNumbers(item)}
          </div>
        ))}

      {setPageNumber &&
        pageNumberCount.map((item) => (
          <div
            key={item}
            onClick={() => setPageNumber(item)}
            className={`transition-all cursor-pointer py-2 px-3 bc-primary family-regular text-sm ${
              item === pageNumber &&
              "rounded-md text-primary bg-opacity-10 text-opacity-90"
            }
            `}
          >
            {formatNumbers(item)}
          </div>
        ))}
    </div>
  );
};

export default Pagination;
