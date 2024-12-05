import React, { useState } from "react";
import { FieldValues, UseFormRegister, UseFormSetValue } from "react-hook-form";

type Props = {
  checkboxTitle: string;
  type: string;
  register: UseFormRegister<FieldValues>;
  name: string;
  setValue: UseFormSetValue<FieldValues>;
};

// React component
const CodeInputWithCheckbox: React.FC<Props> = ({
  checkboxTitle,
  type,
  name,
  register,
  setValue,
}) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    setIsChecked(checked);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setValue(name, value);
  };

  return (
    <div className="flex flex-col">
      <input
        {...register(name)}
        id={name}
        type={type}
        autoComplete="off"
        onChange={handleInputChange}
        className="pe-10 placeholder:text-xs placeholder:text-gray-500"
        placeholder={`${checkboxTitle} ...`}
        disabled={!isChecked} // Disable input when checkbox is unchecked
      />

      {/* Checkbox */}
      <label className="inline-flex w-min gap-2.5 mb-4 mt-2">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
          className="w-3 h-3 p-2 checkbox checkbox-primary rounded-md"
        />
        <span className="text-[11px] family-regular cursor-pointer text-nowrap">
          {checkboxTitle}
        </span>
      </label>
    </div>
  );
};

export default CodeInputWithCheckbox;
