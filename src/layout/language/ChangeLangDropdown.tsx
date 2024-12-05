/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, ReactNode, useEffect, useRef, useState } from "react";
import { useAppSelector } from "../../store/store";


interface childrenProps {
  children: ReactNode;
  event: "onClick" | "onMouseOver" | "onDoubleClick";
  flageSize: number;
}

const ChangeLangDropdown: FC<childrenProps> = ({ event, children }) => {
  const data: any = useAppSelector((state) => state.dataReducer);
  const [isOpen, setIsOpen] = useState(false);
  const selectedLanguage = useAppSelector((state) => state.languageReducer);

  useEffect(() => {
    document.addEventListener("click", handleClickOutSide);

    return () => {
      document.removeEventListener("click", handleClickOutSide);
    };
  }, [isOpen]);

  const dropButton = useRef<HTMLButtonElement>(null);

  // every where except button clicked, drop in close
  const handleClickOutSide = (event: MouseEvent) => {
    if (
      dropButton.current &&
      !dropButton.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const currentLanguage = selectedLanguage;

  return (
    <div className="inline-block relative">
      <button
        ref={dropButton}
        {...{
          [event as string]: handleClick,
        }}
        type="button"
        className="flex items-center justify-center w-9 h-9 rounded-md bg-white dark:bg-dark/40 hover:text-primary hover:bg-white-light/90 dark:hover:bg-dark/60 relative"
      >
        {data?.__language?.map(
          (item: any, index: any) =>
            item.locale === currentLanguage && (
              <div key={index}>{item.flag}</div>
            )
        )}
      </button>
      {isOpen && children}
    </div>
  );
};

export default ChangeLangDropdown;
