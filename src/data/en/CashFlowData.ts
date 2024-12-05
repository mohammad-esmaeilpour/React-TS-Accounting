import { TCashFlowData } from "src/types/CashFlow.type";

export const ExpenceData: TCashFlowData = {
  title: "Expenses List",
  filter: {
    title: "Expense Filter",
    inputs: [
      {
        key: "start_date",
        type: "date",
        label: "From Date",
        required: false,
      },
      {
        key: "end_date",
        type: "date",
        label: "To Date",
        required: false,
      },
    ],
    submitFilter: "Apply Filter",
  },
  addButton: "Add Expense",
  sort: [
    {
      status: null,
      title: "Show All",
    },
    {
      status: 1,
      title: "Approved",
    },
    {
      status: 0,
      title: "Cancelled",
    },
  ],
  searchPlaceholder: "Search Expense",
  notFound: "No expenses found.",
  table: {
    thead: [
      "#",
      "Expense Number",
      "Invoice Number",
      "Expense Type",
      "Description",
      "Amount",
      "Registration Date",
      "Status",
    ],
    tbody: [
      "expense_number",
      "factor_number",
      "flow_kind",
      "description",
      "amount",
      "created_at",
      "status",
    ],
  },

  create: {
    title: "Register Expense Document",
    saveButton: "Save",
    inputs: [
      {
        key: "expense_number",
        label: "Expense Number",
        required: false,
        generator: "Generate Manually",
      },
      {
        key: "date",
        type: "date",
        label: "Date",
        required: false,
      },
      {
        key: "document_number",
        type: "number",
        label: "Document Number",
        required: true,
      },
      {
        key: "flow_kind",
        label: "Expense Type",
        required: true,
      },
      {
        key: "account_id",
        label: "Select Account",
        required: false,
      },
      {
        key: "amount",
        label: "Amount",
        type: "number",
        required: true,
      },
      {
        key: "description",
        label: "Description",
        required: false,
      },
    ],
    createFlowKind: {
      kind: "expense",
      title: "Create Expense Type",
      inputs: [
        {
          key: "title",
          label: "Expense Type Name",
          required: true,
        },
      ],
      saveBtn: "Register Expense Type",
    },
    updateFlowKind: {
      kind: "expense",
      title: "Update Expense Type",
      inputs: [
        {
          key: "title",
          label: "Expense Type Name",
          required: true,
        },
      ],
      saveBtn: "Update Expense Type",
    },
  },
};

export const IncomeData: TCashFlowData = {
  title: "Income List",
  filter: {
    title: "Income Filter",
    inputs: [
      {
        key: "start_date",
        label: "From Date",
        required: false,
      },
      {
        key: "end_date",
        label: "To Date",
        required: false,
      },
    ],
    submitFilter: "Apply Filter",
  },
  addButton: "Add Income",
  sort: [
    {
      status: null,
      title: "Show All",
    },
    {
      status: 1,
      title: "Approved",
    },
    {
      status: 0,
      title: "Cancelled",
    },
  ],
  searchPlaceholder: "Search Income",
  notFound: "No income found.",
  table: {
    thead: [
      "#",
      "Income Number",
      "Document Number",
      "Income Type",
      "Description",
      "Amount",
      "Registration Date",
      "Status",
    ],
    tbody: [
      "income_number",
      "document_number",
      "flow_kind",
      "description",
      "amount",
      "created_at",
      "status",
    ],
  },

  create: {
    title: "Register Income Document",
    saveButton: "Save",
    inputs: [
      {
        key: "income_number",
        label: "Number",
        required: false,
        generator: "Generate Manually",
      },
      {
        key: "date",
        type: "date",
        label: "Date",
        required: false,
      },
      {
        key: "document_number",
        type: "number",
        label: "Document Number",
        required: true,
      },
      {
        key: "flow_kind",
        label: "Income Type",
        required: false,
      },
      {
        key: "account_id",
        label: "Select Account",
        required: true,
      },
      {
        key: "amount",
        label: "Amount",
        type: "number",
        required: true,
      },
      {
        key: "description",
        label: "Description",
        required: false,
      },
    ],
    createFlowKind: {
      kind: "income",
      title: "Create Income Type",
      inputs: [
        {
          key: "title",
          label: "Income Type Name",
          required: true,
        },
      ],
      saveBtn: "Register Income Type",
    },
    updateFlowKind: {
      kind: "income",
      title: "Update Income Type",
      inputs: [
        {
          key: "title",
          label: "Income Type Name",
          required: true,
        },
      ],
      saveBtn: "Update Income Type",
    },
  },
};
