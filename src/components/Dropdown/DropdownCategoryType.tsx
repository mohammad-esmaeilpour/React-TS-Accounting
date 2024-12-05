import { useState } from "react";
import ChevronDown from "../icons/ChevronDown";
import { DataProps } from "src/data/fa";
import { useAppSelector } from "src/store/store";

type Props = {
  setSelectedCatType: Function;
};

type listProps = {
  key: "goods" | "services";
  title: string;
};

const DropdownCategoryType = ({ setSelectedCatType }: Props) => {
  const mainData: DataProps = useAppSelector((state) => state.dataReducer);
  const [value, setValue] = useState<string>(
    mainData.category.category_type[0].title
  );

  const handleClick = (item: listProps) => {
    setSelectedCatType(item.key);
    setValue(item.title);
    const elem: any = document.activeElement;
    if (elem) {
      elem?.blur();
    }
  };

  return (
    <div className="w-full">
      <div className="text-xs family-regular mb-1 block">
        {mainData.category.dropown.kind}
      </div>
      <details className="dropdown dropdown-bottom dropdown-end w-full">
        <summary
          tabIndex={0}
          role="button"
          className="input-instance text-xs  flex items-center justify-between my-1 family-regular"
        >
          {value || (
            <div className="loading loading-dots loading-sm c-primary me-auto"></div>
          )}
          <ChevronDown size={9} color="black" />
        </summary>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-[1] w-full p-2 shadow"
        >
          {mainData.category.category_type.map((item) => (
            <li key={item.key}>
              <span
                className="family-regular"
                onClick={() => handleClick(item)}
              >
                {item.title}
              </span>
            </li>
          ))}
        </ul>
      </details>
    </div>
  );
};

export default DropdownCategoryType;
