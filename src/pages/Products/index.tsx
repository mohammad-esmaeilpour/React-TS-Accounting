import { useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import PlusIcon from "src/components/icons/PlusIcon";
import { DataProps } from "src/data/fa";
import { useAppSelector } from "src/store/store";
import _ from "lodash";
import { TSingleCategory } from "src/types/Category.types";
import getApi from "src/react-query/services/getApi";
import { TProduct } from "src/types/Product.types";
import SearchForm from "src/components/Forms/SearchForm";
import Table from "src/components/Table";
import DropdonwProduct from "src/components/Dropdown/DropdownProduct";
import FilterProduct from "src/components/Filters/FilterProduct";
import UploadExcelFile from "src/components/Forms/UploadExcelFile";

const Products = () => {
  const data: DataProps = useAppSelector((state) => state.dataReducer);
  const [filteredProducts, setFilteredProducts] = useState<TProduct[] | null>();
  const [pageSize, setPageSize] = useState<number>(10);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [selectedCategory, setSelectedCategory] =
    useState<TSingleCategory | null>(null);

  const params = useParams();

  const {
    data: products,
    isPending,
    error,
  } = getApi<TProduct[]>({
    queryKey: ["products", params.pt, pageNumber, pageSize],
    service: `product/${params.bid}`,
    serviceKey: "products",
    params: {
      type: params.pt,
      pageNumber,
      pageSize,
      catID: selectedCategory?.id,
      start_date: startDate,
      end_date: endDate,
    },
    enable: params.pt === "services" || params.pt === "goods" ? true : false,
  });

  return (
    <div className="panel flex flex-col">
      <div className="flex sticky top-0 bg-white z-10 w-full justify-between items-center border-b py-5 px-5 mb-7">
        <h1 className="family-regular text-xl">{data.products.title}</h1>

        <div className="flex items-center gap-4">
          <FilterProduct
            data={data.products}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            setEndDate={setEndDate}
            setStartDate={setStartDate}
            pageNumber={pageNumber}
            pageSize={pageSize}
          />
          <NavLink
            to={`/${params.bid}/products/${params.pt}/create`}
            className="btn-primary rounded-[10px] family-regular h-[28px] py-0 px-3.5 text-[11px]"
          >
            <PlusIcon size={13} />
            {params.pt === "goods"
              ? data.createGood.title
              : data.createService.title}
          </NavLink>
        </div>
      </div>

      <div className="mx-4 justify-between flex mb-8">
        <div className="flex gap-2.5 flex-1">
          <div className="flex w-40 items-center">
            <DropdonwProduct list={data.products.sort} />
          </div>
          <div className="relative w-full flex">
            <SearchForm
              placeholder={data.products.searchPlaceholder}
              objectList={products!}
              searchKeys={["product_name", "product_code"]}
              setFilteredList={setFilteredProducts}
            />
          </div>
        </div>
        <UploadExcelFile />
      </div>

      <Table
        notFound={data.products.notFound}
        tbody={data.products.table.tbody}
        thead={data.products.table.thead}
        list={filteredProducts!}
        link={true}
        url={`/${params.bid}/products/${params.pt}`}
        pageNumber={pageNumber}
        pageSize={pageSize}
        setPageNumber={setPageNumber}
        setPageSize={setPageSize}
        isPending={isPending}
        error={error}
      />
    </div>
  );
};

export default Products;
