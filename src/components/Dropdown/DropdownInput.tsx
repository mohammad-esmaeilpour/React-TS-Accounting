import { useEffect, useRef, useState } from "react";
import ChevronDown from "../icons/ChevronDown";
import {
  FieldValues,
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
} from "react-hook-form";

type Props = {
  label?: string;
  list: { title: string; key: string }[];
  itemKey: string;
  register: UseFormRegister<FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
  watch: UseFormWatch<FieldValues>;
  isRequired?: boolean;
};

const DropdownInput = ({
  list,
  itemKey,
  register,
  setValue,
  watch,
  label,
  isRequired,
}: Props) => {
  const [changed, setChanged] = useState<string>();

  const dropdownRef = useRef<HTMLDetailsElement | null>(null);
  const watchInput = watch(itemKey);

  useEffect(() => {
    setValue(itemKey, list[0].key);
  }, []);

  useEffect(() => {
    const filter = list?.find((val) => watchInput?.toString() === val?.key);

    setChanged(filter ? filter?.title : label ? label : list[0].title);
  }, [watchInput]);

  const handleClick = (item: { title: string; key: string }) => {
    setValue(itemKey, item.key);
    setChanged(item.title);
    dropdownRef.current && dropdownRef.current.removeAttribute("open");
  };

  return (
    <details ref={dropdownRef} className="dropdown dropdown-bottom dropdown-end w-full">
      <summary
        tabIndex={0}
        role="button"
        className="input-instance text-xs flex items-center justify-between my-1 family-regular"
      >
        <input
          {...register(itemKey, { required: isRequired })}
          autoComplete="off"
          className="input-instance text-start cursor-pointer text-xs family-regular text-transparent hidden"
          type="button"
        />
        <span className="absolute top-1/2 start-5 -translate-y-1/2 family-regular cursor-pointer text-xs pointer-events-none">
          {changed}
        </span>
        <div className="absolute end-3 top-1/2 -translate-y-1/2">
          <ChevronDown size={9} color="black" />
        </div>
      </summary>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-100 rounded-box z-[1] w-full p-2 shadow"
      >
        {list.map((item) => (
          <li key={item.key}>
            <span className="family-regular" onClick={() => handleClick(item)}>
              {item.title}
            </span>
          </li>
        ))}
      </ul>
    </details>
  );
};

export default DropdownInput;
