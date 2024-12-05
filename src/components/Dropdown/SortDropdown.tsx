import { useRef, useState } from "react";
import ChevronDown from "../icons/ChevronDown";

type Props = {
  list: { status: number | null; title: string }[];
  setObject: Function;
};

const SortDropdown = ({ list, setObject }: Props) => {
  const [value, setValue] = useState(list[0].title);
  const dropdownRef = useRef<HTMLDetailsElement | null>(null);

  const handleDropdown = (item: { status: number | null; title: string }) => {
    setObject(item);
    setValue(item.title);
    dropdownRef.current && dropdownRef.current.removeAttribute("open");
  };

  return (
    <details
      ref={dropdownRef}
      className="dropdown dropdown-bottom dropdown-end w-full"
    >
      <summary className="btn-primary h-11 justify-between" tabIndex={0}>
        <div className="text-xs family-light">{value}</div>
        <ChevronDown size={10} color="white" />
      </summary>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-100 rounded-box z-[1] w-full p-2 shadow"
      >
        {list.map((item) => (
          <li key={item.title}>
            <span
              className="family-regular text-[13px]"
              onClick={() => handleDropdown(item)}
            >
              {item.title}
            </span>
          </li>
        ))}
      </ul>
    </details>
  );
};

export default SortDropdown;
