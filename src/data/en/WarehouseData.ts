import { TCreateWarehouseData, TWarehouseData } from "src/types/Warehouse.types";

export const WarehouseData: TWarehouseData = {
  title: "Warehouse List",
  addButton: "Add Warehouse",
  modalTitle: "Warehouse Goods List",
  notFound: "Warehouse not found.",
  warehuseKeeper: "Warehouse Keeper",
  inventorySearch: "Search Goods",
  searchPlaceholder: "Search Warehouse",
  table: {
    thead: [
      "#",
      "Code",
      "Name",
      "Category",
      "Barcode",
      "Sale Price",
      "Purchase Price",
      "Quantity",
      "Unit",
    ],
  },
};

export const CreateWarehouseData: TCreateWarehouseData = {
  title: "Register New Warehouse",
  saveButton: "Save",
  editButton: "Edit",
  viewButton: "View Goods",
  inputs: [
    {
      key: "barcode",
      label: "Warehouse Code",
      required: true,
      generator: "Create code manually",
    },
    {
      key: "title",
      label: "Warehouse Name",
      required: true,
    },
    {
      key: "maintainer",
      label: "Warehouse Keeper",
      required: true,
    },
  ],
};
