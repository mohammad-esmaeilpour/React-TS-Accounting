import { TInputs } from "./global.types";

export type TSingleSubUser = {
  id: number;
  finantial_code: number;
  nick_name: string;
  first_name: string;
  last_name: string;
  national_code: string;
  description: string;
  country: string;
  province: string;
  city: string;
  postal_code: string;
  address: string;
  phone_number: string;
  second_phone_number: string;
  telephone: string;
  email: string;
  created_at: string;
  updated_at: string;
  business_id: number;
  user_id: number;
};

export type TSubUser = {
  title: string;
  addButton: string;
  notFound: string;
  editButton: string;
  permission: string;
  pickRole: string;
  save:string;
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
