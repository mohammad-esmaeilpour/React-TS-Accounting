/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from "react";
import { useDispatch } from "react-redux";
import { updateLanguage } from "../../store/slice/language-slice";
import { useAppSelector } from "../../store/store";


interface ChangeLangProps {
  flageSize: number;
  flexDir: "flex-col" | "flex-row";
  event: "onClick" | "onMouseOver" | "onDoubleClick";
  position: "relative" | "absolute";
}

const ChangeLang: FC<ChangeLangProps> = ({ flexDir, event, position }) => {
  const data: any = useAppSelector((state) => state.dataReducer);

  const dispatch = useDispatch();
  const ChangeLanguage = (event: any) => {
    dispatch(updateLanguage(event.target.getAttribute("data-target")));
    localStorage.setItem("language", event.target.getAttribute("data-target"));
  };

  return (
    <div
      className={`${flexDir} ${position} top-[100%] w-full flex p-2 rounded-md bg-white dark:bg-gray-800 `}
    >
      {data?.__language?.map((item: any, index: any) => (
        <button
          {...{
            [event as string]: ChangeLanguage,
          }}
          data-target={item.locale}
          key={index}
          className={`flex justify-center items-center py-2 text-sm transition hover:text-primary`}
        >
          <div className="pointer-events-none">{item.locale}</div>
        </button>
      ))}
    </div>
  );
};

export default ChangeLang;
