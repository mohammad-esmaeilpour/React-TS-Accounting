import { ReactNode } from "react";
import CloseCircleIcon from "./icons/CloseCircleIcon";

type Props = {
  children: ReactNode;
  title: string;
  modalsRef:any
  className?:string
};

const Modal = ({ children, title,modalsRef,className }: Props) => {
  return (
    <dialog ref={modalsRef} className="modal">
      <div className={`modal-box max-w-[690px] pt-5 pb-11 px-7 ${className}`}>
        <div className="flex w-full justify-between border-b pb-5 mb-8">
          <div className="family-bold text-xl">{title}</div>
          <form method="dialog">
            <button>
              <CloseCircleIcon size={29} color="gray" />
            </button>
          </form>
        </div>
        {children}
      </div>
    </dialog>
  );
};

export default Modal