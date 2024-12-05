import { Fragment } from "react";
import { useAppSelector } from "src/store/store";
import CheckImg from "/img/check-icon.png";
import { DataProps } from "src/data/fa";
import SuccessForm from "src/components/Forms/SuccessForm";
import StepForm from "../../../components/Forms/StepForm";
import { TSingleBusiness } from "src/types/Business.type";

type Props = {
  business: TSingleBusiness;
  activeStep: any;
  setActiveStep: any;
  setBusiness: any;
};

const BusinessStepper = ({
  business,
  activeStep,
  setActiveStep,
  setBusiness,
}: Props) => {
  const data: DataProps = useAppSelector((state) => state.dataReducer);

  return (
    <div className="flex flex-col bg-white h-full">
      {activeStep !== 4 && (
        <div className="flex justify-evenly relative">
          <div className="flex w-full max-w-md h-[1px] bc-primary absolute top-1/3 -translate-y-0.5"></div>
          {data.business.addStepper.steps.map((item, index) => (
            <Fragment key={item.id}>
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
            name="business"
            defaultService="business"
            readService={`business/${business?.id}`}
            service={`business/step1/${business?.id}`}
            activeStep={activeStep}
            object={business}
            setActiveStep={setActiveStep}
            setObject={setBusiness}
            inputs={data.business.addStepper.steps[0].inputs}
          />
        )}
        {activeStep === 1 && (
          <StepForm
            name="business"
            defaultService="business"
            readService={`business/${business?.id}`}
            service={`business/step2/${business?.id}`}
            activeStep={activeStep}
            object={business}
            setActiveStep={setActiveStep}
            setObject={setBusiness}
            inputs={data.business.addStepper.steps[1].inputs}
          />
        )}
        {activeStep === 2 && (
          <StepForm
            name="business"
            defaultService="business"
            readService={`business/${business?.id}`}
            service={`business/step3/${business?.id}`}
            activeStep={activeStep}
            object={business}
            setActiveStep={setActiveStep}
            setObject={setBusiness}
            inputs={data.business.addStepper.steps[2].inputs}
          />
        )}
        {activeStep === 3 && (
          <StepForm
            name="business"
            defaultService="business"
            readService={`business/${business?.id}`}
            service={`business/step4/${business?.id}`}
            activeStep={activeStep}
            object={business}
            setActiveStep={setActiveStep}
            setObject={setBusiness}
            inputs={data.business.addStepper.steps[3].inputs}
          />
        )}
        {activeStep === 4 && (
          <SuccessForm
            refetchQuery="businesses"
            title={data.business.addStepper.successfull.title}
            link={{
              title: data.business.addStepper.successfull.link.title,
              url: data.business.addStepper.successfull.link.url,
            }}
          />
        )}
      </div>
    </div>
  );
};

export default BusinessStepper;
