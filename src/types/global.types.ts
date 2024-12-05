export type TInputs = {
  key: string;
  label: string;
  required: boolean;
  errorMessage?:string;
  placeholder?: string;
  type?: string;
  dateType?: string;
  justCreateStep?: boolean;
  generator?: string;
  checkbox?: string;
  currency?: boolean;
  dependentOnCheckbox?: string;
  dependentOnInput?: string;
  options?: {
    label?: string;
    list: { title: string; key: string }[];
  };
};

export type IconProps = {
  size: number;
  color?: string;
};


// data
export type TWords = {
  notFound: string;
  selectCustomer: string;
  removeFile: string;
  selectData: string;
  requiredFields: string;
  patternError: string;
};

export type TFilterDateData = {
  label: string;
  inputs: TInputs[];
  submit: string;
};

