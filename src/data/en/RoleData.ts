import { TRoleData } from "src/types/Role.types";

export const RoleData: TRoleData = {
  title: "Role Management",
  notFound: "Role not found.",
  addButton: "Add Role",
  addPermissionButton: "Edit Role",
  permissionLabel: "Access Levels",
  permissionTitle: "Level",
  permissionsTranslate: [
    {
      title: "Bank",
      key: "bankAndAccount",
    },
    {
      title: "Customer",
      key: "customers",
    },
    {
      title: "Expense",
      key: "expense",
    },
    {
      title: "Income",
      key: "income",
    },
    {
      title: "Products",
      key: "products",
    },
    {
      title: "Providers",
      key: "providers",
    },
    {
      title: "Purchase",
      key: "purchase",
    },
    {
      title: "Sales",
      key: "sales",
    },
    {
      title: "Settings",
      key: "setting",
    },
    {
      title: "Warehouse",
      key: "warehouse",
    },
  ],
  create: {
    title: "Add New Role",
    saveButton: "Save New Role",
    inputs: [
      {
        key: "name",
        label: "Role Name",
        required: true,
      },
      {
        key: "accesses",
        label: "Access Level",
        required: false,
        options: {
          label: "Select Access Level",
          list: [
            {
              title: "Bank",
              key: "bankAndAccount",
            },
            {
              title: "Customer",
              key: "customers",
            },
            {
              title: "Expense",
              key: "expense",
            },
            {
              title: "Income",
              key: "income",
            },
            {
              title: "Products",
              key: "products",
            },
            {
              title: "Providers",
              key: "providers",
            },
            {
              title: "Purchase",
              key: "purchase",
            },
            {
              title: "Sales",
              key: "sales",
            },
            {
              title: "Settings",
              key: "setting",
            },
            {
              title: "Warehouse",
              key: "warehouse",
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
  },
  update: {
    title: "Update Role",
    saveButton: "Update",
  },
};
