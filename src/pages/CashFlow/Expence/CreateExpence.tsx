import { Fragment, MouseEvent, useRef, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import DropdownMinimalList from "src/components/Dropdown/DropdownMinimalList";
import DatePickerLocal from "src/components/Forms/DatePickerLocal";
import InputsForm from "src/components/Forms/InputsForm";
import SaveIcon from "src/components/icons/SaveIcon";
import Modal from "src/components/Modal";
import { DataProps } from "src/data/fa";
import { parsedData } from "src/functions/ParseData";
import DynamicService from "src/service/DynamicService";
import { useAppSelector } from "src/store/store";
import CreateExpenseKind from "../CreateExpenseKind";
import PlusIcon from "src/components/icons/PlusIcon";
import DropdownWithUpdate from "src/components/Dropdown/DropdownWithUpdate";
import UpdateExpenseKind from "../UpdateExpenseKind";
import { TAllAccounts } from "src/types/Bank.types";


const CreateExpence = () => {
  const [accountId, setAccountId] = useState<number | null>(null);
  const [account, setAccount] = useState<TAllAccounts | null>(null);
  const [date, setDate] = useState<string | null>(null);
  const [expenseKindId, setExpenseKindId] = useState<number | null>(null);
  const [expenseKind, setExpenseKind] = useState<string | null>(null);
  const data: DataProps = useAppSelector((state) => state.dataReducer);

  const params = useParams();
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    setValue,
    watch,
    formState: { errors },
  } = useForm();
  const createExpenseKindRef = useRef<HTMLDialogElement | null>(null);
  const updateExpenseKindRef = useRef<HTMLDialogElement | null>(null);

  const onSubmit = (datas: FieldValues) => {
    const parsingData = parsedData({
      inputs: data.expence.create.inputs,
      submitData: datas,
    });

    DynamicService({
      method: "post",
      service: `cashflow/expense/${params.bid}`,
      payload: {
        ...parsingData,
        account_id: accountId,
        is_accepted: true,
        flow_kind: expenseKind,
        account_type: account?.account_type,
        date,
      },
      params,
    }).then((response: any) => {
      if (response.status === 201) {
        navigate(`/${params.bid}/cash-flow/expense`);
      }
    });
  };

  
  return (
    <Fragment>
      <form onSubmit={handleSubmit(onSubmit)} className="panel">
        <div className="flex z-20 sticky top-0 bg-white w-full justify-between items-center border-b py-5 px-5 mb-7">
          <h1 className="family-regular text-xl">
            {data.expence.create.title}
          </h1>

          <button
            type="submit"
            className="btn-primary rounded-[10px] family-regular h-[28px] py-0 px-3.5 text-[11px]"
          >
            <SaveIcon size={13} />
            {data.expence.create.saveButton}
          </button>
        </div>

        <div className="p-6">
          <div className="flex gap-8">
            <div className="grid gap-x-4 gap-y-8 grid-cols-3 flex-1">
              {data.expence.create.inputs.map((item) =>
                item.key === "account_id" ? (
                  <DropdownMinimalList
                    queryKey={["accounts"]}
                    service={`bank/${params.bid}`}
                    serviceKey={"accounts"}
                    key={item.key}
                    label={item.label}
                    setSelectedItemId={setAccountId}
                    showTitleKey={"account_name"}
                    onloadSelect={true}
                    setSelectedItem={setAccount}
                  />
                ) : item.key === "date" ? (
                  <DatePickerLocal
                    label={item.label}
                    setGregorianDate={setDate}
                    key={item.key}
                  />
                ) : item.key === "flow_kind" ? (
                  <div key={item.key}>
                    <DropdownWithUpdate
                      queryKey={["expenseKinds"]}
                      service={`cashflow/expense/kind/${params.bid}`}
                      serviceKey={"expenseKinds"}
                      key={item.key}
                      label={item.label}
                      setSelectedItemId={setExpenseKindId}
                      setSelectedItem={setExpenseKind}
                      showTitleKey={"title"}
                      onloadSelect={true}
                      modalsRef={updateExpenseKindRef}
                    />
                    <button
                      className="btn-success h-9 px-2 py-0 family-light rounded-lg mt-1"
                      onClick={(e: MouseEvent<HTMLButtonElement>) => {
                        e.preventDefault();
                        createExpenseKindRef.current &&
                          createExpenseKindRef.current.showModal();
                      }}
                    >
                      {data.expence.create.createFlowKind.title}
                      <PlusIcon size={12} />
                    </button>
                  </div>
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
              )}
            </div>
          </div>
        </div>
      </form>

      <Modal
        modalsRef={createExpenseKindRef}
        title={data.expence.create.createFlowKind.title}
        className="max-w-lg"
      >
        <CreateExpenseKind
          modalsRef={createExpenseKindRef}
          data={data.expence.create.createFlowKind}
        />
      </Modal>

      <Modal
        modalsRef={updateExpenseKindRef}
        title={data.expence.create.updateFlowKind.title}
        className="max-w-lg"
      >
        <UpdateExpenseKind
          modalsRef={updateExpenseKindRef}
          data={data.expence.create.updateFlowKind}
          flowKindId={expenseKindId}
          flowKind={expenseKind}
        />
      </Modal>
    </Fragment>
  );
};

export default CreateExpence;
