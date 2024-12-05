import { DataProps } from "src/data/fa";
import { useAppSelector } from "src/store/store";
import Skeleton from "../Bank/Skeleton";
import NotFoundItem from "src/components/NotFoundItem";
import NotifIcon from "src/components/icons/vectors/NotifIcon";
import { Link } from "react-router-dom";
import PlusCircleIcon from "src/components/icons/PlusCircleIcon";
import useProductsLogs from "src/react-query/dashboard/useProductsLogs";
import { formatNumbers } from "src/functions/formatNumbers";

const ProductsLogs = () => {
  const data: DataProps = useAppSelector((state) => state.dataReducer);
  const { data: products, error, isPending } = useProductsLogs();

  const skeleton = [1, 2, 3, 4];
  

  return (
    <div className="panel pt-7 pb-5 px-3 flex flex-col gap-3 h-[480px]">
      <div className="mx-5">{data.productsLog.title}</div>
      <div className="flex-1 overflow-auto mb-3">
        {isPending ? (
          skeleton.map((count) => <Skeleton key={count} />)
        ) : !products || products?.length === 0 ? (
          <div className="text-center px-4">
            <NotFoundItem title={error?.message || data.createGood.notFound} />
          </div>
        ) : (
          products?.map((item) => (
            <div className="my-2 mx-4 flex justify-between items-center px-2 py-1.5 rounded-2xl bc-secondary">
              <div className="flex items-center gap-2.5">
                <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-white">
                  {item.image_src ? (
                    <img
                      className="w-full h-full object-contain object-center"
                      src={`https://capital-compass-server.liara.run/${item.image_src}`}
                    />
                  ) : (
                    <NotifIcon size={28} />
                  )}
                </div>
                <div className="flex flex-col gap-2.5">
                  <span className="family-bold text-sm">
                    {item.product_name}
                  </span>
                  <span className="text-xs text-opacity-70 text-color">
                    {data.productsLog.kind} :{" "}
                    {item.type === "goods"
                      ? data.productsLog.good
                      : data.productsLog.service}
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-end text-sm gap-2 pe-2">
                <div className="bg-red-200 c-red text-opacity-80 rounded-lg px-1.5 text-xs py-1 family-bold ">
                  {formatNumbers(item?.sales)} {data.productsLog.sale}
                </div>
                <div className="bg-red-200 c-red text-opacity-80 rounded-lg px-1.5 text-xs py-1 family-bold ">
                  {formatNumbers(item.purchases)} {data.productsLog.purchase}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      <div className="flex">
        <Link
          to={"products/goods/create"}
          className="btn py-2 h-10 flex-1 rounded-2xl bg-opacity-50 mx-2 hover:bg-opacity-5"
        >
          <PlusCircleIcon />
          <span className="block text-color text-opacity-60 family-regular">
            {" "}
            {data.createGood.title}
          </span>
        </Link>
        <Link
          to={"products/services/create"}
          className="btn py-2 h-10 flex-1 rounded-2xl bg-opacity-50 mx-2 hover:bg-opacity-5"
        >
          <PlusCircleIcon />
          <span className="block text-color text-opacity-60 family-regular">
            {" "}
            {data.createService.title}
          </span>
        </Link>
      </div>
    </div>
  );
};

export default ProductsLogs;
