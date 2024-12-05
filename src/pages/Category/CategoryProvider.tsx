import { Fragment, ReactNode } from "react";
import { Link, useParams } from "react-router-dom";
import { DataProps } from "src/data/fa";
import { useAppSelector } from "src/store/store";

type Props = {
  children: ReactNode;
};

const CategoryProvider = ({ children }: Props) => {
  const data: DataProps = useAppSelector((state) => state.dataReducer);
  const params = useParams();

  return (
    <Fragment>
      <div>
        <div className="panel justify-center flex py-7">
          <div className="flex flex-col">
            <div className="bc-secondary rounded-2xl mb-6 flex w-auto mx-6">
              {data.category.tabs.map((item) => (
                <Link
                  key={item.id}
                  to={`/${params.bid}/categories/${item.key}`}
                  className={`flex w-[180px] h-[40px] items-center rounded-2xl justify-center last-of-type:border-0 cursor-pointer transition-all ${
                    item.key === params.ct && "btn-primary text-white"
                  }`}
                >
                  {item.title}
                </Link>
              ))}
            </div>
            <div className="bg-base-200 px-5 flex-1 overflow-auto rounded-xl">
              {children}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CategoryProvider;
