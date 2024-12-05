import {
  TCreateRemittanceData,
  TRemittanceData,
} from "src/types/Remittance.types";

export const RemittanceData: TRemittanceData = {
  title: "Warehouse Receipts and Remittances",
  add_button: "Add Remittance",
  notFound: "No remittance found.",
  searchPlaceholder: "Search remittance",
  filter: {
    title: "Remittance Filter",
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
      {
        key: "originWarehouse",
        label: "Select Origin",
        placeholder: "Select Warehouse",
        required: false,
      },
      {
        key: "destinationWarehouse",
        label: "Select Destination",
        placeholder: "Select Destination",
        required: false,
      },
      {
        key: "remittanceKind",
        label: "Remittance Type",
        required: false,
        options: {
          label: "Select Remittance Type",
          list: [
            { title: "Purchase", key: "purchase" },
            { title: "Sale", key: "sell" },
            { title: "Transfer Remittance", key: "transfer" },
            { title: "Production Remittance", key: "production" },
            { title: "Repair Remittance", key: "fix" },
            { title: "Waste Remittance", key: "waste" },
            { title: "Essential Extras Remittance", key: "essentialExtras" },
            { title: "Essential Deficits Remittance", key: "essentialDeficits" },
          ],
        },
      },
      {
        key: "status",
        label: "Status",
        required: false,
        options: {
          label: "Select Status",
          list: [
            {
              key: "1",
              title: "Completed",
            },
            {
              key: "2",
              title: "Pending Approval",
            },
          ],
        },
      },
      {
        key: "sub_user_id",
        label: "Person",
        placeholder: "Select Person",
        required: false,
      },
    ],
  },
  sort: [
    {
      title: "Show All",
      key: "",
    },
    {
      title: "Incoming Remittances",
      key: "",
    },
    {
      title: "Outgoing Remittances",
      key: "",
    },
  ],
  table: {
    thead: [
      "#",
      "Code",
      "Warehouse",
      "Type",
      "Description",
      "Invoice",
      "Person",
      "Status",
      "Date",
    ],
    tbody: [
      "id",
      "origin_warehouse",
      "remittance_kind",
      "description",
      "factor",
      "sub_user",
      "delivery_date",
      "status",
    ],
  },
};

export const CreateRemittanceData: TCreateRemittanceData = {
  title: "Register Warehouse Remittance",
  saveButton: "Save",
  inputs: [
    // {
    //   key: "remittance_id",
    //   label: "Remittance Number",
    //   required: false,
    // },
    {
      key: "remittance_kind",
      label: "Remittance Type",
      required: true,
      options: {
        label: "Select Remittance Type",
        list: [
          { title: "Transfer Remittance", key: "transfer" },
          { title: "Production Remittance", key: "production" },
          { title: "Repair Remittance", key: "fix" },
          { title: "Waste Remittance", key: "waste" },
          { title: "Essential Extras Remittance", key: "essentialExtras" },
          { title: "Essential Deficits Remittance", key: "essentialDeficits" },
        ],
      },
    },
    {
      key: "origin_warehouse",
      label: "Origin Warehouse",
      placeholder: "Select Origin Warehouse",
      required: false,
    },
    {
      key: "destination_warehouse",
      label: "Destination Warehouse",
      placeholder: "Select Destination Warehouse",
      required: false,
    },
    {
      key: "description",
      label: "Warehouse Remittance Description",
      required: false,
    },
  ],
  more_details: [
    {
      key: "status",
      label: "Goods Delivery Status",
      checkbox: "Goods have been delivered",
      required: false,
      type: "boolean",
    },
    {
      key: "delivery_date",
      label: "Delivery Date",
      type: "date",
      required: false,
    },
    {
      key: "sub_user",
      label: "Responsible Person",
      required: false,
    },
  ],
  details_button: "Apply More Details",
  proudctsTable: {
    count: "Count",
    number_unit: "Units",
    table: {
      thead: ["#", "Code", "Product", "Unit", "Count", "Selling Price", "Purchase Price"],
      tbody: [
        "product_code",
        "product_name",
        "unit",
        "inventory_count",
        "unit_price",
        "tax_price",
        "discount_price",
        "total_price",
      ],
    },
    add_button: "Search Product",
  },
};
