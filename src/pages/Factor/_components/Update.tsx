import { FieldValues, useForm } from "react-hook-form";
import InputsForm from "src/components/Forms/InputsForm";
import {
  ChangeEvent,
  Fragment,
  MouseEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import DynamicService from "src/service/DynamicService";
import { useNavigate, useParams } from "react-router-dom";
import Modal from "src/components/Modal";
import FindProducts from "../../Products/FindProducts";
import { parsedData } from "src/functions/ParseData";
import DropdownMinimalList from "src/components/Dropdown/DropdownMinimalList";
import { DataProps } from "src/data/fa";
import { useAppSelector } from "src/store/store";
import SellPriceIcon from "src/components/icons/SellPriceIcon";
import CloudArrowUpIcon from "src/components/icons/CloudArrowUpIcon";
import PrinterIcon from "src/components/icons/PrinterIcon";
import BagPlusIcon from "src/components/icons/BagPlusIcon";
import CheckCircleIcon from "src/components/icons/CheckCircleIcon";
import FileArrowDownIcon from "src/components/icons/FileArrowDownIcon";
import ChevronDown from "src/components/icons/ChevronDown";
import { TCreateFactorData, TSingleFactor } from "src/types/Factor.types";
import { useDispatch } from "react-redux";
import {
  replaceFactorProducts,
  updateFactorProducts,
} from "src/store/slice/factorProducts-slice";
import AttachemntUpload from "src/components/Forms/AttachemntUpload";
import {
  resetAllCounts,
  setCounter,
} from "src/store/slice/productsCount-slice";
import { useQuery } from "@tanstack/react-query";
import { TSingleBusiness } from "src/types/Business.type";
import SearchIcon from "src/components/icons/SearchIcon";
import CreateExpenceFactor from "./CreateExpence";
import { useReactToPrint } from "react-to-print";
import PersianDatePicker from "src/components/Forms/DatePickerLocal";
import { TAllAccounts } from "src/types/Bank.types";
import { formatNumbers } from "src/functions/formatNumbers";
import getApi from "src/react-query/services/getApi";
import FillData from "src/functions/FillData";
import TableUpdateFactor from "./UpdateTable";

type Props = {
  factorKind: "purchase" | "sales";
  data: TCreateFactorData;
};

const UpdateFactor = ({ factorKind, data }: Props) => {
  // state
  const [peopleId, setPeopleId] = useState<number | null>(null);
  const [accountId, setAccountId] = useState<number | null>(null);
  const [account, setAccount] = useState<TAllAccounts | null>(null);
  const [subUserId, setSubUserId] = useState<number | null>(null);
  const [globalDiscount, setGlobalDiscount] = useState<number | null>(null);
  const [globalTax, setGlobalTax] = useState<number | null>(null);
  const [priceType, setPriceType] = useState<string>("purchase_price");
  const [finalProdcutPrice, setFinalProductPrice] = useState<number>(0);
  const [finalTax, setFinalTax] = useState<number>(0);
  const [finalDiscount, setFinalDiscount] = useState<number>(0);
  const [finalPrice, setFinalPrice] = useState<number>(0);
  const [taxes, setTaxes] = useState<{ [key: number]: number }>({});
  const [discounts, setDiscounts] = useState<{ [key: number]: number }>({});
  const [uploadedFile, setUploadedFile] = useState<string | null>(null);
  const [status, setStatus] = useState<string | null>(null);
  const [render, setRender] = useState<boolean>(false);
  const [expenseAccountId, setExpenseAccountId] = useState<number | null>(null);
  const [expenseAccount, setExpenseAccount] = useState<TAllAccounts | null>(
    null
  );
  const [expenseDate, setExpenseDate] = useState(null);
  const [issueDate, setIssueDate] = useState(null);
  const [dueDate, setDueDate] = useState(null);

  // store
  const mainData: DataProps = useAppSelector((state) => state.dataReducer);
  const productsList = useAppSelector((state) => state.factorProductReducer);
  const productCounts = useAppSelector((state) => state.productCountReducer);

  // hooks
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm();
  const {
    register: registerExpense,
    handleSubmit: handleSubmitExpense,
    setValue: setValueExpense,
    watch: watchExpense,
    formState: { errors: expenseErrors },
  } = useForm();

  const contentRef = useRef<HTMLDivElement>(null);
  const reactToPrintFn = useReactToPrint({ contentRef });

  const params = useParams();
  const pickProductRef = useRef<HTMLDialogElement | null>(null);
  const priceTypeRef = useRef<HTMLDetailsElement | null>(null);
  const expenceModal = useRef<HTMLDialogElement>();
  const attachementRef = useRef<HTMLDialogElement>();

  // services
  const { data: business } = useQuery<TSingleBusiness>({
    queryKey: ["business"],
    staleTime: Infinity,
  });

  const onSubmitExpense = (
    datas: FieldValues,
    factor_id: number,
    factor_number: number
  ) => {
    const parsingData = parsedData({
      inputs: mainData.expence.create.inputs,
      submitData: datas,
    });

    DynamicService({
      method: "post",
      service: `cashflow/expense/${params.bid}`,
      payload: {
        ...parsingData,
        account_id: expenseAccountId,
        account_type: expenseAccount?.account_type,
        factor_id,
        factor_number,
        date: expenseDate,
        is_accepted: status === "Accepted" ? true : false,
      },
    }).then((response: any) => console.log(response, "expense"));
  };

  const onSubmit = (datas: FieldValues) => {
    const cleanedProductsList = productsList.map((product) => {
      const {
        product_id,
        count,
        warehouse_id,
        type,
        product_name,
        unit,
        unit_price,
        tax_price,
        discount_price,
      } = product;
      return {
        product_id,
        count,
        warehouse_id,
        type,
        product_name,
        unit,
        unit_price,
        tax_price,
        discount_price,
      };
    });
    const formatData = parsedData({
      submitData: datas,
      inputs: [...data.inputs, ...data.more_details],
    });

    DynamicService({
      method: "post",
      service: `factor/${factorKind}/${params?.bid}`,
      payload: {
        ...formatData,
        attachment_src: uploadedFile,
        issue_date: issueDate,
        due_date: dueDate,
        status,
        account_id: accountId,
        account_type: account?.account_type,
        people_id: peopleId,
        sub_user_id: subUserId,
        products: cleanedProductsList,
      },
    }).then((response: any) => {
      if (response.status === 201) {
        dispatch(replaceFactorProducts([]));
        dispatch(resetAllCounts());
        handleSubmitExpense((datas: FieldValues) =>
          onSubmitExpense(
            datas,
            response.data[`${factorKind}_factor`].id,
            response.data[`${factorKind}_factor`].factor_number
          )
        )();
        navigate(`/${params.bid}/factor/${factorKind}`);
      }
    });
  };

  const { data: factorData } = getApi<TSingleFactor>({
    queryKey: ["factorData", params.fid],
    service: `factor/${factorKind}/${params.bid}/${params.fid}`,
    serviceKey: `${factorKind}_factor`,
  });

  useEffect(() => {
    dispatch(replaceFactorProducts([]));

    factorData?.products?.map((item) => {
      dispatch(updateFactorProducts(item));
      dispatch(
        setCounter({ id: item.id, value: item.count, inventory_count: 10 })
      );
    });

    factorData &&
      FillData({
        inputs: [...data.inputs, ...data.more_details],
        response: factorData,
        setValue,
      });
  }, [factorData]);

  // functions
  const handlePickProductModal = () => {
    pickProductRef.current && pickProductRef.current.showModal();
    setRender(true);
  };

  const handleExpenceModal = () => {
    expenceModal.current && expenceModal.current.showModal();
  };

  const handleAttachementModal = () => {
    attachementRef.current && attachementRef.current.showModal();
  };

  const handleFileUpload = (filePath: string | null) => {
    setUploadedFile(filePath);
    setValue("image_src", filePath);
  };

  return (
    <Fragment>
      <form onSubmit={handleSubmit(onSubmit)} className="panel">
        <div className="flex z-20 sticky top-0 bg-white w-full justify-between items-center border-b py-5 px-5 mb-7">
          <h1 className="family-regular text-xl">{data.title}</h1>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-4 gap-y-7 gap-2.5">
            {data.inputs.map((item) =>
              item.key === "customer" ? (
                <DropdownMinimalList
                  queryKey={["customers"]}
                  service={`people/customer/${params.bid}/min`}
                  serviceKey="customers"
                  key={item.key}
                  label={item.label}
                  setSelectedItemId={setPeopleId}
                  defaultValue={item.placeholder}
                  showTitleKey={"first_name"}
                />
              ) : item.key === "account_id" ? (
                <DropdownMinimalList
                  queryKey={["allAccounts"]}
                  service={`bank/${params.bid}`}
                  serviceKey="accounts"
                  key={item.key}
                  label={item.label}
                  setSelectedItemId={setAccountId}
                  showTitleKey={"account_name"}
                  onloadSelect={true}
                  setSelectedItem={setAccount}
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
            )}
          </div>

          <div className="collapse collapse-plus w-full  rounded-none px-1 overflow-visible">
            <input type="checkbox" className="max-w-48 h-10 min-h-10 ms-auto" />
            <button
              className="btn-success justify-start max-w-48 h-10 py-0 flex collapse-title rounded-xl ms-auto"
              onClick={(e: MouseEvent<HTMLButtonElement>) => e.preventDefault()}
            >
              {data.more_details_button}
            </button>
            <div className="collapse-content px-0 gap-y-10 gap-x-2.5 grid grid-cols-4 pt-5">
              {data.more_details.map((item) =>
                item.key === "sub_user_id" ? (
                  <DropdownMinimalList
                    queryKey={["subusers"]}
                    service={`subuser/${params.bid}`}
                    serviceKey="subusers"
                    key={item.key}
                    label={item.label}
                    onloadSelect={true}
                    setSelectedItemId={setSubUserId}
                    showTitleKey={"nick_name"}
                  />
                ) : item.key === "issue_date" ? (
                  <PersianDatePicker
                    key={item.key}
                    label={item.label}
                    setGregorianDate={setIssueDate}
                  />
                ) : item.key === "due_date" ? (
                  <PersianDatePicker
                    key={item.key}
                    label={item.label}
                    setGregorianDate={setDueDate}
                  />
                ) : (
                  <InputsForm
                    errors={errors}
                    watch={watch}
                    setValue={setValue}
                    key={item.key}
                    item={item}
                    register={register}
                  />
                )
              )}
            </div>
          </div>

          <div className="mt-16" ref={contentRef}>
            <button
              onClick={(e: MouseEvent<HTMLButtonElement>) => {
                e.preventDefault();
                handlePickProductModal();
              }}
              className="btn-success h-10 py-0 flex gap-2 my-3 mx-2"
            >
              <SearchIcon color="white" size={20} />
              {data.proudctsTable.add_product_btn}
            </button>

            <TableUpdateFactor
              factorType={factorKind}
              globalDiscount={globalDiscount}
              globalTax={globalTax}
              priceType={priceType}
              setFinalDiscount={setFinalDiscount}
              setFinalPrice={setFinalPrice}
              setFinalProductPrice={setFinalProductPrice}
              setFinalTax={setFinalTax}
              discounts={discounts}
              setDiscounts={setDiscounts}
              setTaxes={setTaxes}
              taxes={taxes}
            />

            <div className="bg-white mt-3.5 w-full py-2.5 px-3 flex justify-between items-start">
              <div className="flex flex-wrap max-w-3xl gap-4">
                <details className="dropdown">
                  <summary className="btn bc-red text-white hover:bc-red hover:bg-opacity-70 text-xs bg-opacity-80 h-10 py-0 flex items-center gap-2">
                    % {data.proudctsTable.discount_btn}
                    <ChevronDown size={13} color="white" />
                  </summary>
                  <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                    <input
                      placeholder={`${data.proudctsTable.discount_btn} ...`}
                      className="placeholder:text-gray-400"
                      type="number"
                      onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setGlobalDiscount(Number(e.target.value))
                      }
                    />
                  </ul>
                </details>

                <details className="dropdown">
                  <summary className="btn bc-red text-white hover:bc-red hover:bg-opacity-70 text-xs bg-opacity-80 h-10 py-0 flex items-center gap-2">
                    $ {data.proudctsTable.tax_btn}
                    <ChevronDown size={13} color="white" />
                  </summary>
                  <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                    <input
                      placeholder={`${data.proudctsTable.tax_btn} ...`}
                      className="placeholder:text-gray-400"
                      type="number"
                      onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setGlobalTax(Number(e.target.value))
                      }
                    />
                  </ul>
                </details>

                <details className="dropdown" ref={priceTypeRef}>
                  <summary className="btn bc-red text-white hover:bc-red hover:bg-opacity-70 text-xs bg-opacity-80 h-10 py-0 flex items-center gap-2">
                    <SellPriceIcon />
                    {data.proudctsTable.sell_price_btn.options.map(
                      (opt) => opt.key === priceType && opt.title
                    )}
                    <ChevronDown size={13} color="white" />
                  </summary>
                  <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                    {data.proudctsTable.sell_price_btn.options.map((opt) => (
                      <li
                        key={opt.key}
                        onClick={() => {
                          priceTypeRef.current?.removeAttribute("open");
                          setPriceType(opt.key);
                        }}
                      >
                        <span>{opt.title}</span>
                      </li>
                    ))}
                  </ul>
                </details>

                <button
                  onClick={(e: MouseEvent<HTMLButtonElement>) => {
                    e.preventDefault();
                    handleAttachementModal();
                  }}
                  className="btn btn-neutral text-white bg-opacity-95 text-xs h-10 py-0 flex items-center gap-2"
                >
                  <CloudArrowUpIcon /> {data.proudctsTable.file_btn}
                </button>

                <button
                  onClick={(e: MouseEvent<HTMLButtonElement>) => {
                    e.preventDefault();
                    handleExpenceModal();
                  }}
                  className="btn bc-red text-white hover:bc-red hover:bg-opacity-70 text-xs bg-opacity-80 h-10 py-0 flex items-center gap-2"
                >
                  <BagPlusIcon /> {data.proudctsTable.expence_btn}
                </button>

                <button
                  onClick={() => setStatus("Draft")}
                  type="submit"
                  className="btn-success h-10 py-0 flex items-center gap-2"
                >
                  <FileArrowDownIcon />
                  {data.proudctsTable.save_demo}
                </button>

                <button
                  onClick={() => {
                    setStatus("Accepted");
                  }}
                  className="btn btn-neutral text-white  bg-opacity-95 text-xs h-10 py-0 flex items-center gap-2"
                >
                  <CheckCircleIcon size={18} /> {data.proudctsTable.publish_btn}
                </button>

                <button
                  onClick={(e: MouseEvent<HTMLButtonElement>) => {
                    e.preventDefault();
                    reactToPrintFn();
                  }}
                  className="btn text-xs h-10 py-0 flex items-center gap-2"
                >
                  <PrinterIcon /> {data.proudctsTable.print_btn}
                </button>
              </div>

              <div className="flex flex-col gap-5">
                <div className="flex items-center rounded-xl overflow-hidden">
                  <div className="bc-primary text-sm family-regular bg-opacity-15 w-28 h-10 flex items-center justify-center">
                    {data.proudctsTable.count}{" "}
                  </div>
                  <div className="bc-primary family-regular bg-opacity-5 w-44 h-10 flex gap-2 items-center ps-3">
                    {formatNumbers(
                      productCounts.reduce(
                        (accumulator, currenValue) =>
                          accumulator + currenValue.count,
                        0
                      )
                    )}{" "}
                    <span className="text-xs text-color text-opacity-70">
                      {data.proudctsTable.number_unit}
                    </span>
                  </div>
                </div>
                <div className="flex items-center rounded-xl overflow-hidden">
                  <div className="bc-primary text-sm family-regular bg-opacity-15 w-28 h-10 flex items-center justify-center">
                    {data.proudctsTable.total_price}
                  </div>
                  <div className="bc-primary family-regular bg-opacity-5 w-44 h-10 flex gap-2 items-center ps-3">
                    {formatNumbers(finalProdcutPrice)}{" "}
                    <span className="text-xs text-color text-opacity-70">
                      {business?.currency}
                    </span>
                  </div>
                </div>
                <div className="flex items-center rounded-xl overflow-hidden">
                  <div className="bc-primary text-sm family-regular bg-opacity-15 w-28 h-10 flex items-center justify-center">
                    {data.proudctsTable.tax}
                  </div>
                  <div className="bc-primary family-regular bg-opacity-5 w-44 h-10 flex gap-2 items-center ps-3">
                    {formatNumbers(finalTax)}{" "}
                    <span className="text-xs text-color text-opacity-70">
                      {business?.currency}
                    </span>
                  </div>
                </div>
                <div className="flex items-center rounded-xl overflow-hidden">
                  <div className="bc-primary text-sm family-regular bg-opacity-15 w-28 h-10 flex items-center justify-center">
                    {data.proudctsTable.discount}
                  </div>
                  <div className="bc-primary family-regular bg-opacity-5 w-44 h-10 flex gap-2 items-center ps-3">
                    {formatNumbers(finalDiscount)}{" "}
                    <span className="text-xs text-color text-opacity-70">
                      {business?.currency}
                    </span>
                  </div>
                </div>
                <div className="flex items-center rounded-xl overflow-hidden">
                  <div className="bc-green text-sm family-regular bg-opacity-15 w-28 h-10 flex items-center justify-center">
                    {data.proudctsTable.final_price}
                  </div>
                  <div className="bc-green family-regular bg-opacity-10 w-44 h-10 flex gap-2 items-center ps-3">
                    {formatNumbers(finalPrice)}{" "}
                    <span className="text-xs text-color text-opacity-70">
                      {business?.currency}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>

      <Modal modalsRef={pickProductRef} title={data.title} className="max-w-xl">
        {render && <FindProducts />}
      </Modal>

      <Modal
        className="max-w-screen-xl"
        title={data.proudctsTable.expence_btn}
        modalsRef={expenceModal}
      >
        <CreateExpenceFactor
          errorsExpense={expenseErrors}
          handleSubmitExpense={handleSubmitExpense}
          onSubmitExpense={onSubmitExpense}
          registerExpense={registerExpense}
          setAccountId={setExpenseAccountId}
          setValueExpense={setValueExpense}
          watchExpense={watchExpense}
          setAccount={setExpenseAccount}
          setDate={setExpenseDate}
        />
      </Modal>

      <Modal title={data.proudctsTable.file_btn} modalsRef={attachementRef}>
        <div className="flex justify-center flex-col items-center gap-3">
          <AttachemntUpload
            title={data.proudctsTable.file_btn}
            kind={"factor"}
            onFileUpload={handleFileUpload}
          />
        </div>
      </Modal>
    </Fragment>
  );
};

export default UpdateFactor;
