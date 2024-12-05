import {
  TCreateProductData,
  TFindProductsData,
  TProductsData,
} from "src/types/Product.types";

export const CreateGoodData: TCreateProductData = {
  title: "Add Product",
  saveButton: "Save",
  searchPlaceholder: "Search Products",
  notFound:
    "To create a product or service, please go to the Add Service or Product page.",
  imageUpload: {
    key: "image_src",
    label: "Select Product Image",
    alt: "Select Product Image",
  },
  inputs: [
    {
      key: "product_code",
      label: "Product Code",
      generator: "Generate Product Code",
      required: false,
    },
    {
      key: "product_name",
      label: "Product Name",
      required: true,
    },
    {
      key: "barcode",
      label: "Barcode",
      required: true,
    },
    {
      key: "category_id",
      label: "Category",
      required: true,
    },
  ],
  tabs: [
    {
      id: 0,
      title: "Product Price",
      inputs: [
        {
          key: "sell_price",
          label: "Selling Price",
          currency: true,
          type: "number",
          required: true,
        },
        {
          key: "purchase_price",
          label: "Purchase Price",
          currency: true,
          type: "number",
          required: true,
        },
        {
          key: "wholesale_price",
          label: "Wholesale Price",
          currency: true,
          type: "number",
          required: true,
        },
        {
          key: "retail_price",
          label: "Retail Price",
          currency: true,
          type: "number",
          required: true,
        },
      ],
    },
    {
      id: 1,
      title: "General Information",
      inputs: [
        {
          key: "unit",
          label: "Unit",
          required: true,
        },
        {
          key: "manufacturer",
          label: "Manufacturer",
          required: false,
        },
        {
          key: "product_model",
          required: false,
          label: "Product Model",
        },
      ],
    },
    {
      id: 2,
      title: "Inventory",
      inputs: [
        {
          key: "inventory_control",
          label: "Inventory Control",
          checkbox: "Control Warehouse Inventory",
          type: "boolean",
          required: false,
          dependentOnInput: "order_point",
        },
        {
          key: "order_point",
          label: "Order Point",
          type: "number",
          required: false,
          dependentOnCheckbox: "inventory_control",
        },
        {
          key: "base_count",
          label: "Initial Inventory Amount/Count",
          type: "number",
          required: false,
        },
        {
          key: "base_warehouse",
          label: "Initial Inventory Warehouse",
          required: false,
        },
      ],
    },
    {
      id: 3,
      title: "Product Tax",
      inputs: [
        {
          key: "subject_to_sales_tax",
          label: "Sales Tax",
          checkbox: "Product Subject to Sales Tax",
          type: "boolean",
          required: false,
          dependentOnInput: "sales_tax_percent",
        },
        {
          key: "sales_tax_percent",
          label: "Sales Tax Percentage",
          placeholder: "%",
          type: "number",
          required: false,
          dependentOnCheckbox: "subject_to_sales_tax",
        },
        {
          key: "subject_to_purchase_tax",
          label: "Purchase Tax",
          checkbox: "Product Subject to Purchase Tax",
          type: "boolean",
          required: false,
          dependentOnInput: "purchase_tax_percent",
        },
        {
          key: "purchase_tax_percent",
          label: "Purchase Tax Percentage",
          placeholder: "%",
          type: "number",
          required: false,
          dependentOnCheckbox: "subject_to_purchase_tax",
        },
      ],
    },
  ],
};

export const CreateServiceData: TCreateProductData = {
  title: "Add Services",
  saveButton: "Save",
  searchPlaceholder: "Search Products",

  notFound: "Product not found.",
  imageUpload: {
    key: "image_src",
    label: "Select Service Image",
    alt: "Select Service Image",
  },
  inputs: [
    {
      key: "product_code",
      label: "Service Code",
      generator: "Generate Service Code",
      required: false,
    },
    {
      key: "product_name",
      label: "Service Name",
      required: true,
    },
    {
      key: "category_id",
      label: "Category",
      required: true,
    },
  ],
  tabs: [
    {
      id: 0,
      title: "Service Price",
      inputs: [
        {
          key: "sell_price",
          label: "Selling Price",
          required: true,
          type: "number",
          currency: true,
        },
        {
          key: "purchase_price",
          required: true,
          label: "Purchase Price",
          type: "number",
          currency: true,
        },
      ],
    },
    {
      id: 1,
      title: "General Information",
      inputs: [
        {
          key: "unit",
          label: "Main Unit",
          required: true,
        },
        {
          key: "manufacturer",
          label: "Service Manufacturer",
          required: false,
        },
        {
          key: "product_model",
          required: false,
          label: "Service Model",
        },
      ],
    },
    {
      id: 2,
      title: "Service Tax",
      inputs: [
        {
          key: "subject_to_sales_tax",
          label: "Sales Tax",
          checkbox: "Service Subject to Sales Tax",
          type: "boolean",
          required: false,
          dependentOnInput: "sales_tax_percent",
        },
        {
          key: "sales_tax_percent",
          label: "Sales Tax Percentage",
          placeholder: "%",
          type: "number",
          required: false,
          dependentOnCheckbox: "subject_to_sales_tax",
        },
        {
          key: "subject_to_purchase_tax",
          label: "Purchase Tax",
          checkbox: "Service Subject to Purchase Tax",
          type: "boolean",
          required: false,
          dependentOnInput: "purchase_tax_percent",
        },
        {
          key: "purchase_tax_percent",
          label: "Purchase Tax Percentage",
          placeholder: "%",
          type: "number",
          required: false,
          dependentOnCheckbox: "subject_to_purchase_tax",
        },
      ],
    },
  ],
};

export const ProductsData: TProductsData = {
  title: "Product and Service List",
  saveButton: "Save",
  excelButton: "Excel Import",
  searchPlaceholder: "Search Products",
  notFound: "Product not found.",
  sort: [
    { title: "Show Services", key: "services" },
    { title: "Show Products", key: "goods" },
  ],
  filter: {
    title: "Product Filter",
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
      {
        key: "category",
        label: "Select Category",
        required: false,
      },
    ],
    submitFilter: "Apply Filter",
  },
  table: {
    thead: [
      "#",
      "Code",
      "Name",
      "Category",
      "Barcode",
      "Selling Price",
      "Purchase Price",
      "Quantity",
      "Unit",
    ],
    tbody: [
      "product_code",
      "product_name",
      "category_title",
      "barcode",
      "sell_price",
      "purchase_price",
      "inventory_count",
      "unit",
    ],
  },
};

export const FindProductsData: TFindProductsData = {
  title: "Add Product",
  counter: "Number",
  add_to_quick: "Add to Quick Access",
  remove_from_quick: "Remove from Quick Access",
  add_to_product: "Add to Product List",
  remove_from_product: "Remove from Product List",
  tabs: [
    {
      id: 0,
      title: "Quick Access",
    },
    {
      id: 1,
      title: "Category",
    },
    {
      id: 2,
      title: "Search",
    },
  ],
  quick_access: {
    id: 0,
    default_view: "To select a product, please proceed to the category or search section.",
    addButton: "Register Products in Invoice",
  },
  category: {
    id: 1,
    category_goods: "Goods",
    category_services: "Services",
  },
  search: {
    id: 2,
    inputs: [
      {
        key: "productCode",
        label: "Product Code",
        required: false,
      },
      {
        key: "productName",
        label: "Product Name",
        required: false,
      },
      {
        key: "barcode",
        label: "Barcode",
        required: false,
      },
      {
        key: "category_id",
        label: "Category",
        required: false,
      },
    ],
    searchButton: "Search Products",
  },
};
