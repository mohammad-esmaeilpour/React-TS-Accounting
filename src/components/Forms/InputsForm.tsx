import { TInputs } from "src/types/global.types";
import DropdownInput from "../Dropdown/DropdownInput";
import { ChangeEvent } from "react";
import {
  FieldErrors,
  FieldValues,
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
} from "react-hook-form";
import CodeGenerator from "../CodeGenerator";
import { useAppSelector } from "src/store/store";

type Props = {
  item: TInputs;
  register: UseFormRegister<any>;
  watch: UseFormWatch<any>;
  currency?: string;
  disabled?: boolean;
  setValue: UseFormSetValue<any>;
  errors: FieldErrors<FieldValues>;
};

const InputsForm = ({
  item,
  register,
  watch,
  currency,
  disabled,
  setValue,
  errors,
}: Props) => {
  const {word} =useAppSelector((state)=> state.dataReducer)
  const isCheckboxChecked = watch && watch(item?.dependentOnCheckbox || "");

  return (
    <div
      className={`${item.key === "description" ? "col-span-full" : "col-auto"}`}
    >
      <label className="text-xs family-regular mb-1 block" htmlFor={item.key}>
        {item.label}
      </label>
      <div className="relative">
        {item.checkbox ? (
          <div className="input-instance flex items-center justify-between gap-3">
            <label
              htmlFor={item.key}
              className="text-[11px] family-regular cursor-pointer"
            >
              {item.checkbox}
            </label>
            <input
              {...register(item.key)}
              disabled={disabled}
              autoComplete="off"
              id={item.key}
              type="checkbox"
              className="w-3 h-3 p-2 checkbox checkbox-primary rounded-md"
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                if (item.dependentOnInput) {
                  const depenElement = document.getElementById(
                    item.dependentOnInput
                  ) as HTMLInputElement | null;
                  if (depenElement) {
                    depenElement.value = "";
                    depenElement.disabled = !e.target.checked;
                  }
                }
              }}
            />
          </div>
        ) : item.options ? (
          <DropdownInput
            watch={watch}
            register={register}
            label={item.options.label}
            list={item.options.list}
            itemKey={item.key}
            setValue={setValue}
            isRequired={item.required}
          />
        ) : item.generator ? (
          <CodeGenerator
            setValue={setValue}
            register={register}
            name={item.key}
            checkboxTitle={item.generator}
            type={item.type!}
          />
        ) : item.key === "description" ? (
          <textarea
            {...register(item.key, { required: item.required })}
            disabled={disabled}
            autoComplete="off"
            id={item.key}
            className="h-auto py-5 placeholder:text-xs placeholder:text-gray-500"
            placeholder={`${item.label} ...`}
            rows={3}
            cols={3}
          />
        ) : (
          <input
            {...register(item.key, { required: item.required })}
            disabled={item.dependentOnCheckbox ? !isCheckboxChecked : false}
            autoComplete="off"
            id={item.key}
            type={item.type || "text"}
            className="pe-10 placeholder:text-xs placeholder:text-gray-500 mt-1"
            placeholder={`${item.label} ...`}
            onChange={(e: ChangeEvent<HTMLInputElement>) => e.preventDefault()}
          />
        )}
        {item.currency && (
          <span className="absolute flex items-center end-3 top-1/2 -translate-y-1/2 text-[10px] family-medium text-color">
            {currency}
          </span>
        )}

        {errors[item.key] && (
          <span className="c-red mt-3 block text-xs family-light">
            {errors[item.key]?.type === "required"
              ? word.requiredFields
              : errors[item.key]?.type === "pattern"
              ? word.patternError
              : "invalid data"}
          </span>
        )}
      </div>
    </div>
  );
};

export default InputsForm;
