import { Fragment } from "react";
import { useAppSelector } from "src/store/store";
import CheckImg from "/img/check-icon.png";
import { DataProps } from "src/data/fa";
import SuccessForm from "src/components/Forms/SuccessForm";
import StepForm from "src/components/Forms/StepForm";
import { TSingleSubUser } from "src/types/subUser.types";
import { useParams } from "react-router-dom";

type Props = {
  subUser: TSingleSubUser;
  activeStep: number;
  setActiveStep: Function;
  setSubUser: Function;
};

const SubUserStepper = ({
  setSubUser,
  subUser,
  activeStep,
  setActiveStep,
}: Props) => {
  const data: DataProps = useAppSelector((state) => state.dataReducer);
  const params = useParams()

  return (
    <div className="flex flex-col bg-white h-full">
      {activeStep !== 3 && (
        <div className="flex justify-evenly relative">
          <div className="flex w-full max-w-sm h-[1px] bc-primary absolute top-1/3 -translate-y-0.5"></div>
          {data.subUser.addStepper.steps.map((item, index) => (
            <Fragment key={index}>
              <div className="flex w-[120px] flex-col items-center gap-2 relative">
                <div className="flex flex-col">
                  <div
                    className={`bc-secondary flex items-center justify-center border br-primary rounded-full ${
                      activeStep === index && "border-[6px]"
                    } w-11 h-11 ${activeStep > index && "!bc-primary"}`}
                  >
                    {activeStep === index && (
                      <div className="bc-primary w-4 h-4 rounded-full"></div>
                    )}
                    {activeStep > index && <img src={CheckImg} />}
                  </div>
                </div>
                <div
                  className={`text-[15px] text-color mt-1.5 family-bold ${
                    activeStep === index ? "opacity-100" : "opacity-70"
                  } `}
                >
                  {item.title}
                </div>
              </div>
            </Fragment>
          ))}
        </div>
      )}

      {/* steps */}
      <div className="mt-14">
        {activeStep === 0 && (
          <StepForm
            name="subuser"
            defaultService={`subuser/${params.bid}`}
            readService={`subuser/${params.bid}/${subUser?.id}`}
            service={`subuser/step1/${params.bid}/${subUser?.id}`}
            activeStep={activeStep}
            object={subUser}
            setActiveStep={setActiveStep}
            setObject={setSubUser}
            inputs={data.subUser.addStepper.steps[0].inputs}
          />
        )}
        {activeStep === 1 && (
          <StepForm
            name="subuser"
            defaultService={`subuser/${params.bid}`}
            readService={`subuser/${params.bid}/${subUser?.id}`}
            service={`subuser/step2/${params.bid}/${subUser?.id}`}
            activeStep={activeStep}
            object={subUser}
            setActiveStep={setActiveStep}
            setObject={setSubUser}
            inputs={data.subUser.addStepper.steps[1].inputs}
          />
        )}
        {activeStep === 2 && (
          <StepForm
            name="subuser"
            defaultService={`subuser/${params.bid}`}
            readService={`subuser/${params.bid}/${subUser?.id}`}
            service={`subuser/step3/${params.bid}/${subUser?.id}`}
            activeStep={activeStep}
            object={subUser}
            setActiveStep={setActiveStep}
            setObject={setSubUser}
            inputs={data.subUser.addStepper.steps[2].inputs}
          />
        )}
        {activeStep === 3 && (
          <SuccessForm
            refetchQuery="subuser"
            title={data.subUser.addStepper.successfull.title}
            link={{
              title: data.subUser.addStepper.successfull.link.title,
              url: data.subUser.addStepper.successfull.link.url,
            }}
          />
        )}
      </div>
    </div>
  );
};

export default SubUserStepper;
