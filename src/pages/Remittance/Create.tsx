import { FieldValues, useForm } from "react-hook-form";
import InputsForm from "src/components/Forms/InputsForm";
import SaveIcon from "src/components/icons/SaveIcon";
import { DataProps } from "src/data/fa";
import { useAppSelector } from "src/store/store";
import { Fragment, MouseEvent, useRef, useState } from "react";
import DynamicService from "src/service/DynamicService";
import { useNavigate, useParams } from "react-router-dom";
import Modal from "src/components/Modal";
import PlusIcon from "src/components/icons/PlusIcon";
import FindProducts from "../Products/FindProducts";
import { parsedData } from "src/functions/ParseData";
import DropdownMinimalList from "src/components/Dropdown/DropdownMinimalList";
import TableCreateRemittance from "./TableCreate";
import DatePickerLocal from "src/components/Forms/DatePickerLocal";
import { useDispatch } from "react-redux";
import { replaceFactorProducts } from "src/store/slice/factorProducts-slice";
import { resetAllCounts } from "src/store/slice/productsCount-slice";
import ReadProductByBarcode from "src/components/ReadProductByBarcode";

const CreateRemittance = () => {
  // states
  const [originWarehouseId, setOriginWarehouseId] = useState<number>();
  const [subUserId, setSubUserId] = useState<number | null>(null);
  const [destinationWarehouseId, setDestinationWarehouseId] =
    useState<number>();
  const [date, setDate] = useState<string | null>(null);
  const [renderFind, setRenderFind] = useState<boolean>(false);

  // store
  const data: DataProps = useAppSelector((state) => state.dataReducer);
  const productCount = useAppSelector((state) => state.productCountReducer);
  const productsList = useAppSelector((state) => state.factorProductReducer);

  // hooks
  const pickProductRef = useRef<HTMLDialogElement | null>(null);
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      status: true,
      remittance_kind: "",
    },
  });
  const watchRemittanceKind = watch("remittance_kind");

  // services
  const onSubmit = (datas: FieldValues) => {
    const cleanedProductsList = productsList.map((product) => {
      const { product_id, count } = product;
      return {
        product_id,
        count,
      };
    });
    const formatData = parsedData({
      submitData: datas,
      inputs: data.createRemittance.inputs,
    });

    DynamicService({
      method: "post",
      service: `remittance/${params?.bid}`,
      payload: {
        ...formatData,
        products: cleanedProductsList,
        destination_warehouse: destinationWarehouseId,
        origin_warehouse: originWarehouseId,
        sub_user: subUserId,
        delivery_date: date,
      },
      params: {
        status: watch("status") === true ? "approved" : "disapproved",
      },
    }).then((response: any) => {
      console.log(response);

      if (response.status === 200) {
        dispatch(replaceFactorProducts([]));
        dispatch(resetAllCounts());
        navigate(`/${params.bid}/remittance`);
      }
    });
  };

  const handlePickProductModal = () => {
    pickProductRef.current && pickProductRef.current.showModal();
    setRenderFind(true);
  };

  return (
    <Fragment>
      <form onSubmit={handleSubmit(onSubmit)} className="panel">
        <div className="flex z-20 sticky top-0 bg-white w-full justify-between items-center border-b py-5 px-5 mb-7">
          <h1 className="family-regular text-xl">
            {data.createRemittance.title}
          </h1>
          <button
            type="submit"
            className="btn-primary rounded-[10px] family-regular h-[28px] py-0 px-3.5 text-[11px]"
          >
            <SaveIcon size={13} />
            {data.createRemittance.saveButton}
          </button>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-4 gap-y-7 gap-2.5">
            {data.createRemittance.inputs.map((item) =>
              item.key === "origin_warehouse" ? (
                watchRemittanceKind === "transfer" ||
                watchRemittanceKind === "fix" ||
                watchRemittanceKind === "waste" ||
                watchRemittanceKind === "essentialDeficits" ? (
                  <DropdownMinimalList
                    queryKey={["warehouses"]}
                    service={`warehouse/min/${params.bid}`}
                    serviceKey="warehouses"
                    key={item.key}
                    label={item.label}
                    setSelectedItemId={setOriginWarehouseId}
                    showTitleKey={"title"}
                    onloadSelect={true}
                  />
                ) : null
              ) : item.key === "destination_warehouse" ? (
                watchRemittanceKind === "transfer" ||
                watchRemittanceKind === "production" ||
                watchRemittanceKind === "essentialExtras" ? (
                  <DropdownMinimalList
                    queryKey={["warehouses"]}
                    service={`warehouse/min/${params.bid}`}
                    serviceKey="warehouses"
                    key={item.key}
                    label={item.label}
                    setSelectedItemId={setDestinationWarehouseId}
                    showTitleKey={"title"}
                    onloadSelect={true}
                  />
                ) : null
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

          <div className="collapse collapse-plus w-full mt-16 rounded-none px-1 overflow-visible">
            <input type="checkbox" className="max-w-48 h-10 min-h-10 ms-auto" />
            <button
              className="btn-success max-w-48 h-10 py-0 flex collapse-title rounded-xl ms-auto"
              onClick={(e: MouseEvent<HTMLButtonElement>) => e.preventDefault()}
            >
              {data.createRemittance.details_button}
            </button>
            <div className="collapse-content px-0 gap-2.5 grid grid-cols-3 pt-5">
              {data.createRemittance.more_details.map((item) =>
                item.key === "sub_user" ? (
                  <DropdownMinimalList
                    queryKey={["subusers"]}
                    service={`subuser/${params.bid}`}
                    serviceKey="subusers"
                    key={item.key}
                    label={item.label}
                    setSelectedItemId={setSubUserId}
                    defaultValue={item.placeholder}
                    showTitleKey={"nick_name"}
                    onloadSelect={true}
                  />
                ) : item.key === "delivery_date" ? (
                  <DatePickerLocal
                    label={item.label}
                    setGregorianDate={setDate}
                    key={item.key}
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

          <div className="mt-16">
            <ReadProductByBarcode />
            <TableCreateRemittance />

            <div className="bg-white mt-3.5 w-full py-2.5 px-3 flex justify-between">
              <button
                onClick={(e: MouseEvent<HTMLButtonElement>) => {
                  e.preventDefault();
                  handlePickProductModal();
                }}
                className="btn-success h-10 py-0 flex items-center gap-2"
              >
                <PlusIcon size={14} />
                {data.createRemittance.proudctsTable.add_button}
              </button>
              <div className="flex items-center rounded-xl overflow-hidden">
                <div className="bc-primary text-sm family-regular bg-opacity-15 w-28 h-10 flex items-center justify-center">
                  {data.createRemittance.proudctsTable.count}
                </div>
                <div className="bc-primary family-regular bg-opacity-5 w-44 h-10 flex gap-2 items-center ps-3">
                  {productCount.reduce(
                    (accumulator, currenValue) =>
                      accumulator + currenValue.count,
                    0
                  )}{" "}
                  <span className="text-xs text-color text-opacity-70">
                    {data.createRemittance.proudctsTable.number_unit}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>

      <Modal
        modalsRef={pickProductRef}
        title={data.findProducts.title}
        className="max-w-xl"
      >
        {renderFind && <FindProducts />}
      </Modal>
    </Fragment>
  );
};

export default CreateRemittance;
