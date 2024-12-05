import { TInputs } from "./global.types";

export type TCashFlowData = {
  title: string;
  filter: {
    title: string;
    submitFilter: string;
    inputs: TInputs[];
  };
  addButton: string;
  sort: { status: number | null; title: string }[];
  searchPlaceholder: string;
  notFound: string;
  table: {
    thead: string[];
    tbody: string[];
  };
  create: {
    title: string;
    saveButton: string;
    inputs: TInputs[];
    createFlowKind: {
      kind: string;
      title: string;
      inputs: TInputs[];
      saveBtn: string;
    };
    updateFlowKind: {
      kind: string;
      title: string;
      inputs: TInputs[];
      saveBtn: string;
    };
  };
};

type TCashFlow = {
  id: string;
  document_number: number;
  date: string;
  status: number;
  amount: number;
  description: string;
  flow_kind: string;
  account_type: string;
  account_id: number;
  circulation_id: number;
  sub_user_id: number;
  business_id: number;
  created_at: string;
  updated_at: string;
};

export interface TExpence extends TCashFlow {
  expense_number: string;
}

export interface TIncome extends TCashFlow {
  income_number: string;
}

