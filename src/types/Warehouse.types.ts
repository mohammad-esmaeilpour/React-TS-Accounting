import { TInputs } from "./global.types";

export type TWarehouseData = {
  title: string;
  addButton: string;
  warehuseKeeper: string;
  inventorySearch: string;
  modalTitle: string;
  notFound: string;
  searchPlaceholder: string;
  table: {
    thead: string[];
  };
};

export type TCreateWarehouseData = {
  title: string;
  saveButton: string;
  editButton: string;
  viewButton: string;
  inputs: TInputs[];
};

export type TWarehouses = {
  id: number;
  title: string;
  business: number;
};

export type TSingleWarehouse = {
  id: number;
  title: string;
  image_src: string;
  created_at: string;
  updated_at: string;
  is_active: boolean;
  maintainer: string;
  barcode: string;
  business: number;
};

