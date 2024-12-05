import { Fragment, useEffect, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import CheckCircleIcon from "src/components/icons/CheckCircleIcon";
import LeftArrowIcon from "src/components/icons/LeftArrowIcon";
import { DataProps } from "src/data/fa";
import FillData from "src/functions/FillData";
import { parsedData } from "src/functions/ParseData";
import DynamicService from "src/service/DynamicService";
import { useAppSelector } from "src/store/store";
import { TSingleBusiness } from "src/types/Business.type";
import { TInputs } from "src/types/global.types";
import { TSingleSubUser } from "src/types/subUser.types";
import InputsForm from "./InputsForm";
import getApi from "src/react-query/services/getApi";
import DatePickerLocal from "./DatePickerLocal";

type Props = {
  service: string;
  defaultService: string;
  name: "business" | "subuser";
  readService: string;
  object: TSingleBusiness | TSingleSubUser;
  setObject: Function;
  inputs: TInputs[];
  setActiveStep: Function;
  activeStep: number;
};

const StepForm = ({
  defaultService,
  object,
  setObject,
  readService,
  inputs,
  setActiveStep,
  activeStep,
  service,
  name,
}: Props) => {
  const data: DataProps = useAppSelector((state) => state.dataReducer);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const {
    handleSubmit,
    register,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const { data: objectResponse, isLoading } = getApi<TSingleBusiness>({
    queryKey: ["readSingle", name, object?.id],
    service: readService,
    serviceKey: name,
    enable: object?.id ? true : false,
  });

  useEffect(() => {
    object?.id
      ? objectResponse &&
        FillData({
          inputs,
          response: objectResponse,
          setValue,
        })
      : reset();
  }, [objectResponse, object?.id, name]);

  const onSubmit = (datas: FieldValues) => {
    const parsingData = parsedData({
      inputs: inputs,
      submitData: datas,
    });

    DynamicService({
      method: object?.id ? "put" : "post",
      service: object?.id ? service : defaultService,
      payload: service.includes("step3")
        ? {
            ...parsingData,
            financial_year_start_date: startDate,
            financial_year_end_date: endDate,
          }
        : parsingData,
    }).then((response: any) => {
      if (response.status === 200 || response.status === 201) {
        !object?.id && setObject(response.data[name]);
        setActiveStep((prev: number) => prev + 1);
      }
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-2 w-full gap-x-2 gap-y-6">
        {isLoading ? (
          <div className="col-span-2 flex justify-center">
            <div className="loading loading-dots m-auto"></div>
          </div>
        ) : (
          inputs.map((item) =>
            item.key === "financial_year_start_date" ? (
              <DatePickerLocal
                key={item.key}
                label={item.label}
                setGregorianDate={setStartDate}
                calendarType={objectResponse?.calendar_type}
                initialData={objectResponse?.financial_year_start_date}
                position="bottom-end"
              />
            ) : item.key === "financial_year_end_date" ? (
              <DatePickerLocal
                key={item.key}
                label={item.label}
                setGregorianDate={setEndDate}
                calendarType={objectResponse?.calendar_type}
                initialData={objectResponse?.financial_year_end_date}
              />
            ) : (
              <InputsForm
                errors={errors}
                watch={watch}
                setValue={setValue}
                item={item}
                register={register}
                key={item.key}
              />
            )
          )
        )}
      </div>

      <div
        className={`w-full flex ${
          activeStep === 0 ? "justify-end" : "justify-between"
        } mt-8`}
      >
        {activeStep !== 0 && (
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              setActiveStep((prev: number) => prev - 1);
            }}
            className="btn-secondary"
          >
            {data.business.addStepper.prevButton}
          </button>
        )}
        {activeStep <= data.business.addStepper.steps.length - 1 && (
          <button
            onClick={(e) => isLoading && e.preventDefault()}
            className="btn-primary gap-6"
          >
            {activeStep === data.business.addStepper.steps.length - 1 ? (
              <Fragment>
                {data.business.addStepper.finalButton}
                <CheckCircleIcon size={25} color="white" />
              </Fragment>
            ) : (
              <Fragment>
                {data.business.addStepper.nextButton}
                <span className="rotate-0 ltr:rotate-180">
                  <LeftArrowIcon size={20} color="white" />
                </span>
              </Fragment>
            )}
          </button>
        )}
      </div>
    </form>
  );
};

export default StepForm;
