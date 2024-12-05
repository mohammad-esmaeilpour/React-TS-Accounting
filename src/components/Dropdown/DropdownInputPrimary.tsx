import { useState } from "react";
import ChevronDown from "../icons/ChevronDown";

type Props = {
  list: { title: string; key: string }[];
  setObject: Function;
};

const DropdownInputPrimary = ({ list, setObject }: Props) => {
  const [value, setValue] = useState(list[0].title);

  const handleClick = (item: { title: string; key: string }) => {
    setObject(item.key);
    setValue(item.title);
    const elem: any = document.activeElement;
    if (elem) {
      elem?.blur();
    }
  };

  return (
    <div className="dropdown dropdown-bottom dropdown-end w-full">
      <div className="relative">
        <input
          autoComplete="off"
          tabIndex={0}
          type="button"
          className="btn-primary text-start cursor-pointer text-[13px] !family-regular rounded-xl h-10"
          value={value}
        />
        <div className="absolute left-3 top-1/2 -translate-y-1/2">
          <ChevronDown size={10} color="white" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-100 rounded-box z-[1] w-full p-2 shadow"
      >
        {list.map((item) => (
          <li key={item.title}>
            <span
              className="family-regular text-[13px]"
              onClick={() => handleClick(item)}
            >
              {item.title}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropdownInputPrimary;
