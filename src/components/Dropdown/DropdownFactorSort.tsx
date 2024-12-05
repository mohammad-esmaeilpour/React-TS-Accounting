import { useRef, useState } from "react";
import ChevronDown from "../icons/ChevronDown";


type TList = {
  title: string;
  status: number | null;
  is_payed_fully: boolean | null;
  is_delivered: boolean | null;
};

type Props = {
  setSelectedStatus: Function;
  setPayed: Function;
  setDelivered:Function
  list: TList[];
};

const DropdownFactorSort = ({
  setSelectedStatus,
  list,
  setPayed,
  setDelivered,
}: Props) => {
  const [value, setValue] = useState<string>(list[0].title);
  const dropdownRef = useRef<HTMLDetailsElement | null>(null);
  const handleClick = (item: TList) => {
    setValue(item.title);
    setSelectedStatus(item.status);
    setPayed(item.is_payed_fully);
    setDelivered(item.is_delivered)
    dropdownRef.current && dropdownRef.current.removeAttribute("open");
  };

  return (
    <details className="dropdown min-w-36" ref={dropdownRef}>
      <summary
        tabIndex={0}
        role="button"
        className="btn-primary text-xs h-11 flex items-center justify-between my-1"
      >
        {value}
        <ChevronDown size={12} color="white" />
      </summary>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-100 rounded-box z-[1] p-2 shadow min-w-44"
      >
        {list?.map((item) => (
          <li key={item.title} onClick={() => handleClick(item)}>
            <span>{item.title}</span>
          </li>
        ))}
      </ul>
    </details>
  );
};

export default DropdownFactorSort;
