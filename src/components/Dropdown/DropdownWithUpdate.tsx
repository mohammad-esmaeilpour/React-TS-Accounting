import { MouseEvent, RefObject, useEffect, useRef, useState } from "react";
import ChevronDown from "../icons/ChevronDown";
import getApi from "src/react-query/services/getApi";
import EditIcon from "../icons/EditIcon";
import { DataProps } from "src/data/fa";
import { useAppSelector } from "src/store/store";

type Props = {
  setSelectedItemId: Function;
  label?: string;
  showTitleKey: string;
  queryKey: string[];
  service: string;
  serviceKey: string;
  defaultValue?: string;
  selectedItemId?: number | null;
  onloadSelect?: boolean;
  updateNotFound?: string;
  modalsRef?: RefObject<HTMLDialogElement>;
  setSelectedItem: Function;
};

const DropdownWithUpdate = ({
  setSelectedItemId,
  selectedItemId,
  label,
  defaultValue,
  showTitleKey,
  queryKey,
  service,
  serviceKey,
  onloadSelect,
  updateNotFound,
  modalsRef,
  setSelectedItem
}: Props) => {
  const [render, setRender] = useState(false);
  const { data, isPending } = getApi<any[]>({
    queryKey,
    service,
    serviceKey,
    enable: render,
  });

  const mainData : DataProps = useAppSelector((state)=> state.dataReducer)

  const [value, setValue] = useState<string>();
  const dropdownRef = useRef<HTMLDetailsElement | null>(null);

  useEffect(() => {
    if (selectedItemId) {
      setRender(true);
      const existItem = data?.find((item) => item?.id === selectedItemId);
      setValue(existItem && existItem[showTitleKey]);
      setSelectedItemId(selectedItemId);
    } else {
      setValue(updateNotFound);
    }

    if (onloadSelect) {
      setRender(true);

      setValue(
        data && data.length !== 0
          ? data[0][showTitleKey]
          : label + mainData.word.notFound
      );
      setSelectedItemId(data && data[0]?.id);
      setSelectedItem(data && data[0]?.title);
    }

    if (defaultValue) {
      setValue(defaultValue);
      setSelectedItemId(null);
      setSelectedItem(null)
    }
  }, [selectedItemId, data]);

  const handleClick = (item: any) => {
    setValue(item[showTitleKey] && item[showTitleKey]);
    setSelectedItemId(item?.id);
    setSelectedItem(item?.title);
    dropdownRef.current && dropdownRef.current.removeAttribute("open");
  };

  return (
    <div className="col-auto">
      <div className="flex flex-col">
        {label && <div className="text-xs family-regular mb-1">{label}</div>}
        <details
          className="dropdown"
          onClick={() => setRender(true)}
          ref={dropdownRef}
        >
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
            className="dropdown-content w-full menu bg-base-100 rounded-box z-[1] p-2 shadow"
          >
            {isPending ? (
              <div className="loading loading-dots loading-sm c-primary mx-auto"></div>
            ) : data?.length === 0 || !data ? (
              <p className="text-center py-1">{label + mainData.word.notFound}</p>
            ) : (
              data?.map((item, index) => (
                <li key={index} onClick={() => handleClick(item)}>
                  <div className="flex justify-between">
                    {item[showTitleKey] && item[showTitleKey]}
                    <button
                      onClick={(e: MouseEvent<HTMLButtonElement>) => {
                        e.preventDefault();
                        e.stopPropagation();
                        modalsRef?.current && modalsRef.current.showModal();
                        setSelectedItemId(item?.id);
                        setSelectedItem(item?.title);
                      }}
                      className="btn py-0 px-2 h-8 rounded-md"
                    >
                      <EditIcon size={16} color="black" />
                    </button>
                  </div>
                </li>
              ))
            )}
          </ul>
        </details>
      </div>
    </div>
  );
};

export default DropdownWithUpdate;
