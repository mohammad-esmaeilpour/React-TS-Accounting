import { TInventoryData } from "src/types/Inventory.type";

export const inventoryData: TInventoryData = {
  title: "Inventory of All Warehouses",
  not_found: "Warehouse not found.",
  search_placeholder: "Search Warehouse",
  filter: {
    title: "Warehouse Inventory Filter",
    submitButton: "Apply Filter",
    inputs: [
      {
        key: "category_id",
        label: "Category",
        required: false,
      },
      {
        key: "warehouse_id",
        label: "Select Warehouse",
        required: false,
      },
    ],
  },
  table: {
    thead: [
      "#",
      "Product Code",
      "Product Name",
      "Barcode",
      "Category",
      "Unit",
      "Purchase Price",
      "Selling Price",
      "Main Warehouse",
      "Count",
    ],
    tbody: [
      "product_code",
      "product_name",
      "product_barcode",
      "category_title",
      "product_unit",
      "product_purchase_price",
      "product_sell_price",
      "warehouse_id",
      "count",
    ],
  },
};
