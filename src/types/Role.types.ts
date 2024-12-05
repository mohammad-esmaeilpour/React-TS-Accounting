import { TInputs } from "./global.types";

export type TRoleData = {
  title: string;
  notFound: string;
  addButton: string;
  addPermissionButton: string;
  permissionLabel: string;
  permissionTitle: string;
  permissionsTranslate: { key: string; title: string }[];
  create: {
    title: string;
    saveButton: string;
    inputs: TInputs[];
  };
  update: {
    title: string;
    saveButton: string;
  };
};

export type TRoles = {
  id: number;
  name: string;
  description: string;
  accesses: TPermissions;
  created_at: string;
  updated_at: string;
  business_id: number;
};

export type TPermissions = {
  bankAndAccount?: [
    "register",
    "readAccounts",
    "readCirculations",
    "activateAndDeactivate",
    "closeFinantialYear"
  ];
  customers?: ["create", "readAll"];
  expense?: ["register", "readAll"];
  income?: ["register", "readAll"];
  products?: [
    "createGoods",
    "createServices",
    "activateAndDeactivate",
    "readProducts",
    "createCategory"
  ];
  providers?: ["create", "readAll"];
  purchase?: ["register", "readAll", "cancel"];
  sales?: ["register", "readAll", "cancel"];
  settings?: ["manageUsers", "manageRoles", "manageBusinessInfo"];
  warehouse?: [
    "readWarehouses",
    "createWarehouses",
    "activateAndDeactivate",
    "readInventory",
    "readRemittances",
    "createRemittances"
  ];
};
