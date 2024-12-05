import { MouseEvent, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";
import DropdownMinimalList from "src/components/Dropdown/DropdownMinimalList";
import DropdownWithUpdate from "src/components/Dropdown/DropdownWithUpdate";
import DatePickerLocal from "src/components/Forms/DatePickerLocal";
import InputsForm from "src/components/Forms/InputsForm";
import PlusIcon from "src/components/icons/PlusIcon";
import Modal from "src/components/Modal";
import { DataProps } from "src/data/fa";
import CreateExpenseKind from "src/pages/CashFlow/CreateExpenseKind";
import UpdateExpenseKind from "src/pages/CashFlow/UpdateExpenseKind";
import { useAppSelector } from "src/store/store";

type Props = {
  registerExpense: any;
  errorsExpense: any;
  handleSubmitExpense: any;
  setValueExpense: any;
  watchExpense: any;
  onSubmitExpense: Function;
  setAccountId: Function;
  setAccount: Function;
  setDate: Function;
};

const CreateExpenceFactor = ({
  handleSubmitExpense,
  registerExpense,
  errorsExpense,
  setValueExpense,
  watchExpense,
  onSubmitExpense,
  setAccountId,
  setAccount,
  setDate,
}: Props) => {
  const [expenseKindId, setExpenseKindId] = useState<number | null>(null);
  const [expenseKind, setExpenseKind] = useState<string | null>(null);
  const data: DataProps = useAppSelector((state) => state.dataReducer);
  const createExpenseKindRef = useRef<HTMLDialogElement | null>(null);
  const updateExpenseKindRef = useRef<HTMLDialogElement | null>(null);
  const params = useParams();

  return (
    <Fragment>
      <form onSubmit={handleSubmitExpense(onSubmitExpense)} className="panel">
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
                    errors={errorsExpense}
                    watch={watchExpense}
                    setValue={setValueExpense}
                    item={item}
                    register={registerExpense}
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

export default CreateExpenceFactor;
