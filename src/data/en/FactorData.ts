import { TFactorData } from "src/types/Factor.types";

export const PurchaseFactorData: TFactorData = {
  title: "Purchase Invoices",
  add_btn: "Add Invoice",
  input_placeholder: "Search Invoice",
  not_found: "Invoice not found.",
  filter: {
    title: "Filter Invoices",
    inputs: [
      {
        key: "start_issue_date",
        label: "Start Invoice Date",
        required: false,
        type: "date",
      },
      {
        key: "end_issue_date",
        label: "End Invoice Date",
        required: false,
        type: "date",
      },
      {
        key: "start_due_date",
        label: "Start Due Date",
        required: false,
        type: "date",
      },
      {
        key: "end_due_date",
        label: "End Due Date",
        required: false,
        type: "date",
      },
      {
        key: "customer",
        label: "Seller",
        required: false,
      },
    ],
    submit_btn: "Apply Filter",
  },
  sort: [
    {
      title: "Show All",
      status: null,
      is_delivered: null,
      is_payed_fully: null,
    },
    {
      title: "Delivered",
      status: 3,
      is_delivered: null,
      is_payed_fully: null,
    },
    {
      title: "Paid",
      status: 3,
      is_delivered: null,
      is_payed_fully: null,
    },
    {
      title: "Draft",
      status: 1,
      is_delivered: null,
      is_payed_fully: null,
    },
    {
      title: "Issued",
      status: 3,
      is_delivered: null,
      is_payed_fully: null,
    },
    {
      title: "Canceled",
      status: 1,
      is_delivered: null,
      is_payed_fully: null,
    },
    {
      title: "Pending Delivery",
      status: 3,
      is_delivered: false,
      is_payed_fully: null,
    },
    {
      title: "Pending Payment",
      status: 3,
      is_payed_fully: false,
      is_delivered: null,
    },
  ],
  table: {
    thead: [
      "#",
      "Invoice Title",
      "Invoice Number",
      "Seller",
      "Total Invoice Amount",
      "Paid Amount",
      "Remaining Amount",
      "Date",
      "Status",
    ],
    tbody: [
      "title",
      "factor_number",
      "sub_user",
      "final_amount",
      "payed_amount",
      "remaining_amount",
      "due_date",
      "status",
    ],
    status_0: "Canceled",
    status_1: "Draft",
    status_2: "Approved",
    status_3: "Completed",
  },
  table_setting: {
    title: "Table Settings",
    inputs: [
      {
        key: "",
        label: "Row",
        required: false,
        type: "checkbox",
      },
      {
        key: "",
        label: "Invoice Date",
        required: false,
        type: "checkbox",
      },
      {
        key: "",
        label: "Invoice Number",
        required: false,
        type: "checkbox",
      },
      {
        key: "",
        label: "Due Date",
        required: false,
        type: "checkbox",
      },
      {
        key: "",
        label: "Seller",
        required: false,
        type: "checkbox",
      },
      {
        key: "",
        label: "Paid Amount",
        required: false,
        type: "checkbox",
      },
    ],
    submit_btn: "Save Settings",
  },

  // create
  create: {
    title: "Add Purchase Invoice",
    pickWarehouse: "Select Warehouse",
    saveButton: "Save",
    notFound: "Please search for the desired product.",
    inputs: [
      {
        key: "factor_number",
        label: "Invoice Number",
        required: false,
        generator: "Generate Invoice Number",
      },
      {
        key: "customer",
        label: "Customer",
        placeholder: "Miscellaneous",
        required: false,
      },
      {
        key: "title",
        label: "Title",
        required: true,
      },
      {
        key: "account_id",
        label: "Related Account or Fund",
        placeholder: "Select Account or Fund",
        required: false,
      },
    ],
    more_details: [
      {
        key: "payment_method",
        label: "Payment Method",
        required: false,
        options: {
          list: [
            {
              key: "check",
              title: "Check",
            },
            {
              key: "cash",
              title: "Cash",
            },
            {
              key: "transfer",
              title: "Bank Transfer",
            },
            {
              key: "ATM",
              title: "ATM",
            },
          ],
        },
      },
      {
        key: "payment_kind",
        label: "Payment Type",
        options: {
          list: [
            {
              key: "full",
              title: "Full",
            },
          ],
        },
        required: false,
      },
      {
        key: "sub_user_id",
        label: "Product Seller",
        required: false,
      },
      {
        key: "referral",
        label: "Referral",
        type: "number",
        required: false,
      },
      {
        key: "issue_date",
        label: "Issue Date",
        type: "date",
        required: false,
      },
      {
        key: "due_date",
        label: "Due Date",
        type: "date",
        required: false,
      },
      {
        key: "is_payed_fully",
        label: "Product Cost",
        type: "boolean",
        required: false,
        options: {
          list: [
            {
              key: "true",
              title: "Paid",
            },
            {
              key: "false",
              title: "Unpaid",
            },
          ],
        },
      },
      {
        key: "is_delivered",
        label: "Product Delivery Status",
        type: "boolean",
        required: false,
        options: {
          list: [
            {
              key: "true",
              title: "Delivered",
            },
            {
              key: "false",
              title: "Not Delivered",
            },
          ],
        },
      },
      {
        key: "description",
        label: "Description",
        required: false,
      },
    ],
    more_details_button: "Apply More Details",
    less_details_button: "Apply Less Details",
    proudctsTable: {
      count: "Count",
      number_unit: "Unit",
      total_price: "Total Price",
      tax: "Tax",
      discount: "Discount",
      final_price: "Final Amount",
      table: {
        thead: [
          "#",
          "Product or Service",
          "Barcode",
          "Unit",
          "Count",
          "Warehouse",
          "Unit Price",
          "Tax",
          "Discount",
          "Total Price",
        ],
        tbody: [
          "product_name",
          "barcode",
          "unit",
          "count",
          "warehouse_id",
          "unit_price",
          "tax_price",
          "discount_price",
          "total_price",
        ],
      },
      add_product_btn: "Search Product",
      discount_btn: "Apply Discount",
      tax_btn: "Apply Tax",
      sell_price_btn: {
        title: "Selling Price",
        options: [
          {
            key: "sell_price",
            title: "Selling Price",
          },
          {
            key: "purchase_price",
            title: "Purchase Price",
          },
        ],
      },
      file_btn: "Upload Attached File",
      print_btn: "Print for Customer",
      expence_btn: "Record Expense",
      publish_btn: "Issue",
      save_demo: "Save as Draft",
    },
  },
};

export const SalesFactorData: TFactorData = {
  title: "Sales Invoices",
  add_btn: "Add Invoice",
  input_placeholder: "Search Invoice",
  not_found: "Invoice not found.",
  filter: {
    title: "Filter Invoices",
    inputs: [
      {
        key: "start_issue_date",
        label: "Start Invoice Date",
        required: false,
        type: "date",
      },
      {
        key: "end_issue_date",
        label: "End Invoice Date",
        required: false,
        type: "date",
      },
      {
        key: "start_due_date",
        label: "Start Due Date",
        required: false,
        type: "date",
      },
      {
        key: "end_due_date",
        label: "End Due Date",
        required: false,
        type: "date",
      },
      {
        key: "customer",
        label: "Seller",
        required: false,
      },
    ],
    submit_btn: "Apply Filter",
  },
  sort: [
    {
      title: "Show All",
      status: null,
      is_delivered: null,
      is_payed_fully: null,
    },
    {
      title: "Delivered",
      status: 3,
      is_delivered: null,
      is_payed_fully: null,
    },
    {
      title: "Paid",
      status: 3,
      is_delivered: null,
      is_payed_fully: null,
    },
    {
      title: "Draft",
      status: 1,
      is_delivered: null,
      is_payed_fully: null,
    },
    {
      title: "Issued",
      status: 3,
      is_delivered: null,
      is_payed_fully: null,
    },
    {
      title: "Canceled",
      status: 1,
      is_delivered: null,
      is_payed_fully: null,
    },
    {
      title: "Pending Delivery",
      status: 3,
      is_delivered: false,
      is_payed_fully: null,
    },
    {
      title: "Pending Payment",
      status: 3,
      is_payed_fully: false,
      is_delivered: null,
    },
  ],
  table: {
    thead: [
      "#",
      "Invoice Title",
      "Invoice Number",
      "Seller",
      "Total Invoice Amount",
      "Paid Amount",
      "Remaining Amount",
      "Date",
      "Status",
    ],
    tbody: [
      "title",
      "factor_number",
      "sub_user",
      "final_amount",
      "payed_amount",
      "remaining_amount",
      "due_date",
      "status",
    ],
    status_0: "Canceled",
    status_1: "Draft",
    status_2: "Approved",
    status_3: "Completed",
  },
  table_setting: {
    title: "Table Settings",
    inputs: [
      {
        key: "",
        label: "Row",
        required: false,
        type: "checkbox",
      },
      {
        key: "",
        label: "Invoice Date",
        required: false,
        type: "checkbox",
      },
      {
        key: "",
        label: "Invoice Number",
        required: false,
        type: "checkbox",
      },
      {
        key: "",
        label: "Due Date",
        required: false,
        type: "checkbox",
      },
      {
        key: "",
        label: "Seller",
        required: false,
        type: "checkbox",
      },
      {
        key: "",
        label: "Paid Amount",
        required: false,
        type: "checkbox",
      },
    ],
    submit_btn: "Save Settings",
  },

  // create
  create: {
    title: "Add Sales Invoice",
    pickWarehouse: "Select Warehouse",
    saveButton: "Save",
    notFound: "Please search for the desired product.",
    inputs: [
      {
        key: "factor_number",
        label: "Invoice Number",
        required: false,
        generator: "Generate Invoice Number",
      },
      {
        key: "customer",
        label: "Customer",
        placeholder: "Miscellaneous",
        required: false,
      },
      {
        key: "title",
        label: "Title",
        required: true,
      },
      {
        key: "account_id",
        label: "Related Account or Fund",
        placeholder: "Select Account or Fund",
        required: false,
      },
    ],
    more_details: [
      {
        key: "payment_method",
        label: "Payment Method",
        required: false,
        options: {
          list: [
            {
              key: "check",
              title: "Check",
            },
            {
              key: "cash",
              title: "Cash",
            },
            {
              key: "transfer",
              title: "Bank Transfer",
            },
            {
              key: "ATM",
              title: "ATM",
            },
          ],
        },
      },
      {
        key: "payment_kind",
        label: "Payment Type",
        options: {
          list: [
            {
              key: "full",
              title: "Full",
            },
          ],
        },
        required: false,
      },
      {
        key: "sub_user_id",
        label: "Product Seller",
        required: false,
      },
      {
        key: "referral",
        label: "Referral",
        type: "number",
        required: false,
      },
      {
        key: "issue_date",
        label: "Issue Date",
        type: "date",
        required: false,
      },
      {
        key: "due_date",
        label: "Due Date",
        type: "date",
        required: false,
      },
      {
        key: "is_payed_fully",
        label: "Product Cost",
        type: "boolean",
        required: false,
        options: {
          list: [
            {
              key: "true",
              title: "Paid",
            },
            {
              key: "false",
              title: "Unpaid",
            },
          ],
        },
      },
      {
        key: "is_delivered",
        label: "Product Delivery Status",
        type: "boolean",
        required: false,
        options: {
          list: [
            {
              key: "true",
              title: "Delivered",
            },
            {
              key: "false",
              title: "Not Delivered",
            },
          ],
        },
      },
      {
        key: "description",
        label: "Description",
        required: false,
      },
    ],
    more_details_button: "Apply More Details",
    less_details_button: "Apply Less Details",
    proudctsTable: {
      count: "Count",
      number_unit: "Unit",
      total_price: "Total Price",
      tax: "Tax",
      discount: "Discount",
      final_price: "Final Amount",
      table: {
        thead: [
          "#",
          "Product or Service",
          "Barcode",
          "Unit",
          "Count",
          "Unit Price",
          "Tax",
          "Discount",
          "Total Price",
        ],
        tbody: [
          "product_name",
          "barcode",
          "unit",
          "count",
          "unit_price",
          "tax_price",
          "discount_price",
          "total_price",
        ],
      },
      add_product_btn: "Search Product",
      discount_btn: "Apply Discount",
      tax_btn: "Apply Tax",
      sell_price_btn: {
        title: "Selling Price",
        options: [
          {
            key: "sell_price",
            title: "Selling Price",
          },
          {
            key: "purchase_price",
            title: "Purchase Price",
          },
        ],
      },
      file_btn: "Upload Attached File",
      print_btn: "Print for Customer",
      expence_btn: "Record Expense",
      publish_btn: "Issue",
      save_demo: "Save as Draft",
    },
  },
};
