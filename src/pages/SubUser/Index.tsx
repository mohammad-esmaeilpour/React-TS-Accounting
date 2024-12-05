import { createRef, useState } from "react";
import { DataProps } from "src/data/fa";
import { useAppSelector } from "src/store/store";
import PlusIcon from "src/components/icons/PlusIcon";
import Modal from "src/components/Modal";
import SubUserStepper from "./_components/SubUserStepper";
import AllSubUsers from "./_components/AllSubUsers";

const SubUser = () => {
  const [subUser, setSubUser] = useState<any>();
  const data: DataProps = useAppSelector((state) => state.dataReducer);
    const [activeStep, setActiveStep] = useState<number>(0);
  const modalsRef: any = createRef();

  const handleModal = () => {
    modalsRef.current.showModal();
  };

  return (
    <div className="panel px-0">
      <div className="flex sticky top-0 bg-white w-full justify-between items-center border-b py-5 px-5 mb-7">
        <h1 className="family-regular text-xl">{data.subUser.title}</h1>

        <button
          className="btn-success h-[31px] rounded-[10px] px-3"
          onClick={() => {
            handleModal();
            setActiveStep(0);
            setSubUser({});
          }}
        >
          <PlusIcon size={10} />
          {data.subUser.addButton}
        </button>
      </div>

      <AllSubUsers
        activeStep={activeStep}
        setActiveStep={setActiveStep}
        handleModal={handleModal}
        setSubUser={setSubUser}
        subUser={subUser}
      />

      <Modal title={data.subUser.addStepper.title} modalsRef={modalsRef}>
        <SubUserStepper
          subUser={subUser}
          activeStep={activeStep}
          setActiveStep={setActiveStep}
          setSubUser={setSubUser}
        />
      </Modal>
    </div>
  );
};

export default SubUser;
