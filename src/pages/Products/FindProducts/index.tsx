import { useState } from "react";
import { DataProps } from "src/data/fa";
import { useAppSelector } from "src/store/store";
import ProductsQuickAccess from "./ProductsQuickAccess";
import FindProductsByCategory from "./FindProductsByCategory";
import FindProductsBySearch from "./FindProductsBySearch";

const FindProducts = () => {
  const data: DataProps = useAppSelector((state) => state.dataReducer);
  const [tab, setTab] = useState<number>(0);

  return (
    <div className="flex flex-col items-center">
      <div className="bc-secondary rounded-2xl overflow-hidden mb-10 flex mx-6">
        {data.findProducts.tabs.map((item) => (
          <div
            key={item.id}
            onClick={() => setTab(item.id)}
            className={`flex text-xs family-bold w-32 h-10 !py-0 items-center rounded-none justify-center last-of-type:border-0 cursor-pointer transition-all ${
              item.id === tab && "btn-primary text-white"
            }`}
          >
            {item.title}
          </div>
        ))}
      </div>

      <div className="min-h-80 w-full">
        {tab === 0 && <ProductsQuickAccess />}

        {tab === 1 && <FindProductsByCategory />}

        {tab === 2 && <FindProductsBySearch />}
      </div>
    </div>
  );
};

export default FindProducts;
