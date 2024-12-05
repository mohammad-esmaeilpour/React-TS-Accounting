import {
  TBankAccountData,
  TCashRegisterData,
  TCirculationData,
  TSlandererData,
} from "src/types/Bank.types";

export const BankAccountData: TBankAccountData = {
  title: "Bank List",
  seccondTitle: "Balance",
  addButton: "Add Bank",
  editButton: "Edit",
  modalTitle: "Cash Register Circulation",
  notFound: "To create a bank account, go to the Add Bank page.",
  circulationNotFound: "No account circulation found.",
  circulationsButton: "Account Circulation",
  table: {
    thead: ["#", "Code", "Circulation Description", "Debtor", "Creditor", "Balance"],
    tbody: ["circulation_code", "description", "debtor", "creditor", "balance"],
  },
  create: {
    title: "Add Bank",
    saveButton: "Save",
    imageUpload: {
      key: "image_src",
      label: "Bank Image",
      alt: "Select Bank Image",
    },
    inputsTop: [
      {
        key: "finantial_code",
        label: "Accounting Code",
        required: true,
        generator: "Generate Code Manually",
        type: "number",
      },
      {
        key: "bank_name",
        label: "Bank Name",
        required: true,
      },
      {
        key: "account_owner",
        label: "Account Owner Name",
        required: true,
      },
      // {
      //   key: "default",
      //   label: "Default",
      //   required: true,
      //   type: "boolean",
      // },
    ],
    inputsBottom: [
      {
        key: "account_number",
        label: "Account Number",
        required: true,
      },
      {
        key: "card_number",
        label: "Card Number",
        required: true,
      },
      {
        key: "shaba_number",
        label: "Shaba Number",
        required: true,
      },
      {
        key: "payment_switch_number",
        label: "Payment Switch Number",
        required: true,
      },
      {
        key: "payment_terminal_number",
        label: "Payment Terminal Number",
        required: true,
      },
      {
        key: "store_accepter_number",
        label: "Store Accepter Number",
        required: true,
      },
      {
        key: "description",
        label: "Description",
        required: true,
      },
    ],
  },
  update: {
    title: "Update Bank Account",
    edit: "Edit",
  },
};

export const CashRegisterData: TCashRegisterData = {
  title: "Cash Register List",
  seccondTitle: "Balance",
  addButton: "Add Cash Register",
  editButton: "Edit",
  modalTitle: "Cash Register Circulation",
  notFound: "To create a cash register, go to the Add Cash Register page.",
  circulationNotFound: "No account circulation found.",
  circulationsButton: "Account Circulation",
  table: {
    thead: ["#", "Code", "Circulation Description", "Project", "Debtor", "Creditor", "Balance"],
    tbody: ["circulation_code", "description", "debtor", "creditor", "balance"],
  },
  create: {
    title: "Add Cash Register",
    saveButton: "Save",
    imageUpload: {
      key: "image_src",
      label: "Cash Register Image",
      alt: "Select Cash Register Image",
    },
    inputsTop: [
      {
        key: "finantial_code",
        label: "Accounting Code",
        required: true,
        generator: "Generate Code Manually",
        type: "number",
      },
      {
        key: "cash_register_name",
        label: "Cash Register Name",
        required: true,
      },
      // {
      //   key: "default",
      //   label: "Default",
      //   required: true,
      //   type: "boolean",
      // },
    ],
    inputsBottom: [
      {
        key: "payment_switch_number",
        label: "Payment Switch Number",
        required: true,
      },
      {
        key: "payment_terminal_number",
        label: "Payment Terminal Number",
        required: true,
      },
      {
        key: "store_accepter_number",
        label: "Store Accepter Number",
        required: true,
      },
      {
        key: "description",
        label: "Description",
        required: true,
      },
    ],
  },
  update: {
    title: "Update Cash Register",
    edit: "Edit",
  },
};

export const SlandererData: TSlandererData = {
  title: "Petty Cash List",
  seccondTitle: "Balance",
  editButton: "Edit",
  addButton: "Add Petty Cash",
  modalTitle: "Cash Register Circulation",
  notFound: "To create petty cash, go to the Add Petty Cash page.",
  circulationNotFound: "No account circulation found.",
  circulationsButton: "Account Circulation",
  table: {
    thead: ["#", "Code", "Circulation Description", "Project", "Debtor", "Creditor", "Balance"],
    tbody: ["circulation_code", "description", "debtor", "creditor", "balance"],
  },
  create: {
    title: "Add Petty Cash",
    saveButton: "Save",
    imageUpload: {
      key: "image_src",
      label: "Petty Cash Image",
      alt: "Select Petty Cash Image",
    },
    inputsTop: [
      {
        key: "finantial_code",
        label: "Accounting Code",
        required: true,
        generator: "Generate Code Manually",
        type: "number",
      },
      {
        key: "slanderer_name",
        label: "Petty Cash Name",
        required: true,
      },
      // {
      //   key: "default",
      //   label: "Default",
      //   required: true,
      //   type: "boolean",
      // },
    ],
    inputsBottom: [
      {
        key: "description",
        label: "Description",
        required: true,
      },
    ],
  },
  update: {
    title: "Update Petty Cash",
    edit: "Edit",
  },
};

export const CirculationData: TCirculationData = {
  searchPlaceholder: "Search Account Circulation",
  thead: ["#", "Code", "Circulation Description", "Debtor", "Creditor", "Balance", "Status"],
  tbody: [
    "circulation_code",
    "description",
    "debtor",
    "creaditor",
    "balance",
    "status",
  ],
};

