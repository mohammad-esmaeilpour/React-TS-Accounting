import { TPeopleData } from "src/types/People.types";

export const CustomerData: TPeopleData = {
  title: "Customer List",
  searchPlaceholder: "Search Customer",
  notFound: "Customer not found.",
  finationalNumber: "Accounting Number",
  table: {
    thead: [
      "#",
      "First Name",
      "Last Name",
      "Nickname",
      "Country",
      "Province",
      "City",
      "Economic Code",
      "Company",
      "Mobile",
      "Account List",
    ],
  },
  accounts: {
    title: "Account List",
    notFound: "Account not found",
    saveButton: "Add Account",
    create: {
      title: "Add New Account",
      inputs: [
        {
          key: "bank",
          label: "Bank",
          required: false,
        },
        {
          key: "account_number",
          label: "Account Number",
          required: false,
        },
        {
          key: "card_number",
          label: "Card Number",
          required: false,
        },
        {
          key: "shaba_number",
          label: "Shaba Number",
          required: false,
        },
      ],
    },
  },
  create: {
    title: "Add Customer",
    saveButton: "Save",
    imageUpload: {
      key: "image_src",
      label: "Customer Image",
      alt: "Select Customer Image",
    },
    inputs: [
      {
        key: "finantial_code",
        label: "Accounting Code",
        required: false,
        generator: "Generate code manually",
        type: "number",
      },
      {
        key: "nick_name",
        label: "Nickname",
        required: false,
      },
      {
        key: "first_name",
        label: "First Name",
        required: false,
      },
      {
        key: "last_name",
        label: "Last Name",
        required: false,
      },
      {
        key: "description",
        label: "Description",
        required: false,
      },
    ],
    tabs: [
      {
        id: 0,
        title: "Personal Information",
        inputs: [
          {
            label: "National ID",
            key: "national_code",
            required: false,
          },
          {
            key: "company",
            label: "Company Name",
            required: false,
          },
          {
            key: "branch_code",
            label: "Branch Code",
            required: false,
          },
          {
            key: "economic_code",
            label: "Economic Code",
            required: false,
          },
          {
            key: "registration_number",
            label: "Registration Number",
            required: false,
          },
        ],
      },
      {
        id: 1,
        title: "Address Information",
        inputs: [
          {
            label: "Country",
            key: "country",
            required: false,
          },
          {
            label: "Province",
            key: "province",
            required: false,
          },
          {
            label: "City",
            key: "city",
            required: false,
          },
          {
            label: "Postal Code",
            key: "postal_code",
            required: false,
          },
          {
            label: "Address",
            key: "address",
            required: false,
          },
        ],
      },
      {
        id: 2,
        title: "Contact Information",
        inputs: [
          {
            label: "Landline Phone",
            key: "telephone",
            required: false,
          },
          {
            label: "Mobile Phone",
            key: "phone_number",
            required: false,
          },
          {
            label: "Second Mobile Phone",
            key: "second_phone_number",
            required: false,
          },
          {
            label: "Email",
            key: "email",
            required: false,
          },
          {
            label: "Website",
            key: "website",
            required: false,
          },
        ],
      },
    ],
  },
  update: {
    title: "Update Customer",
    edit: "Edit",
  },
};

export const ProviderData: TPeopleData = {
  title: "Supplier List",
  searchPlaceholder: "Search Supplier",
  notFound: "Supplier not found.",
  finationalNumber: "Accounting Number",
  table: {
    thead: [
      "#",
      "First Name",
      "Last Name",
      "Nickname",
      "Country",
      "Province",
      "City",
      "Economic Code",
      "Company",
      "Mobile",
      "Account List",
    ],
  },
  accounts: {
    title: "Account List",
    notFound: "Account not found",
    saveButton: "Add Account",
    create: {
      title: "Add New Account",
      inputs: [
        {
          key: "bank",
          label: "Bank",
          required: false,
        },
        {
          key: "account_number",
          label: "Account Number",
          required: false,
        },
        {
          key: "card_number",
          label: "Card Number",
          required: false,
        },
        {
          key: "shaba_number",
          label: "Shaba Number",
          required: false,
        },
      ],
    },
  },
  create: {
    title: "Add Supplier",
    saveButton: "Save",
    imageUpload: {
      key: "image_src",
      label: "Supplier Image",
      alt: "Select Supplier Image",
    },
    inputs: [
      {
        key: "finantial_code",
        label: "Accounting Code",
        required: false,
        generator: "Generate code manually",
        type: "number",
      },
      {
        key: "nick_name",
        label: "Nickname",
        required: false,
      },
      {
        key: "first_name",
        label: "First Name",
        required: false,
      },
      {
        key: "last_name",
        label: "Last Name",
        required: false,
      },
      {
        key: "description",
        label: "Description",
        required: false,
      },
    ],
    tabs: [
      {
        id: 0,
        title: "Personal Information",
        inputs: [
          {
            label: "National ID",
            key: "national_code",
            required: false,
          },
          {
            key: "company",
            label: "Company Name",
            required: false,
          },
          {
            key: "branch_code",
            label: "Branch Code",
            required: false,
          },
          {
            key: "economic_code",
            label: "Economic Code",
            required: false,
          },
          {
            key: "registration_number",
            label: "Registration Number",
            required: false,
          },
        ],
      },
      {
        id: 1,
        title: "Address Information",
        inputs: [
          {
            label: "Country",
            key: "country",
            required: false,
          },
          {
            label: "Province",
            key: "province",
            required: false,
          },
          {
            label: "City",
            key: "city",
            required: false,
          },
          {
            label: "Postal Code",
            key: "postal_code",
            required: false,
          },
          {
            label: "Address",
            key: "address",
            required: false,
          },
        ],
      },
      {
        id: 2,
        title: "Contact Information",
        inputs: [
          {
            label: "Landline Phone",
            key: "telephone",
            required: false,
          },
          {
            label: "Mobile Phone",
            key: "phone_number",
            required: false,
          },
          {
            label: "Second Mobile Phone",
            key: "second_phone_number",
            required: false,
          },
          {
            label: "Email",
            key: "email",
            required: false,
          },
          {
            label: "Website",
            key: "website",
            required: false,
          },
        ],
      },
    ],
  },
  update: {
    title: "Update Supplier",
    edit: "Edit",
  },
};
