import { TInputs } from "./global.types";

export type TBusiness = {
  title: string;
  editButton: string;
  userButton: string;
  addButton: string;
  permission: string;
  addStepper: {
    title: string;
    steps: {
      id: number;
      method: "post" | "get" | "put" | "delete";
      service: string;
      title: string;
      inputs: TInputs[];
    }[];
    nextButton: string;
    prevButton: string;
    finalButton: string;
    successfull: {
      title: string;
      link: {
        title: string;
        url: string;
      };
    };
  };
};


export type TSingleBusiness = {
  id: number;
  name: string;
  legal_name: string;
  business_class: string;
  activity_field: string;
  currency: string;
  calendar_type: string;
  value_added_tax_percent: number;
  national_license: string;
  economic_license: string;
  registration_number: string;
  financial_year_title: string;
  financial_year_start_date: any;
  financial_year_end_date: any;
  country: string;
  province: string;
  city: string;
  postal_code: string;
  address: string;
  fax1: string;
  website: string;
  fax2: string;
  email: string;
  nosubusers: number;
  has_warehouse: boolean;
  created_at: any;
  updated_at: any;
  admin: number;
  associated_users: any;
  sub_users: any;
};

