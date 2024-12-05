import { createRef, useState } from "react";
import BusinessStepper from "./_components/BusinessStepper";
import PlusIcon from "src/components/icons/PlusIcon";
import Businesses from "./_components/Businesses";
import Modal from "src/components/Modal";
import { DataProps } from "src/data/fa";
import { useAppSelector } from "src/store/store";
import { TSingleBusiness } from "src/types/Business.type";

const Business = () => {
  const data: DataProps = useAppSelector((state) => state.dataReducer);
  const [business, setBusiness] = useState<TSingleBusiness | null>();
  const [activeStep, setActiveStep] = useState<number>(0);
  const modalsRef: any = createRef();

  const handleModal = () => {
    modalsRef.current.showModal();
  };

  return (
    <div className="panel px-0">
      <div className="flex sticky top-0 bg-white w-full justify-between items-center border-b py-5 px-5 mb-7">
        <h1 className="family-regular text-xl">{data.business.title}</h1>
        <button
          className="btn-success h-[31px] rounded-[10px] px-3"
          onClick={() => {
            handleModal();
            setActiveStep(0);
            setBusiness(null);
          }}
        >
          <PlusIcon size={10} />
          {data.business.addButton}
        </button>
      </div>

      <Businesses
        setActiveStep={setActiveStep}
        handleModal={handleModal}
        setBusiness={setBusiness}
      />

      <Modal title={data.business.addStepper.title} modalsRef={modalsRef}>
        <BusinessStepper
          business={business!}
          activeStep={activeStep}
          setActiveStep={setActiveStep}
          setBusiness={setBusiness}
        />
      </Modal>
    </div>
  );
};

export default Business;
