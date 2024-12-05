import ProtectedRoute from "src/hooks/ProtectPermission";
import CreateBankAccount from "src/pages/Bank/BankAccount/Create";
import BankAccount from "src/pages/Bank/BankAccount/Index";
import UpdateBankAccount from "src/pages/Bank/BankAccount/Update";
import CashRegister from "src/pages/Bank/CashRegister";
import CreateCashRegister from "src/pages/Bank/CashRegister/Create";
import UpdateCashRegister from "src/pages/Bank/CashRegister/Update";
import Slanderer from "src/pages/Bank/Slanderer";
import CreateSlanderer from "src/pages/Bank/Slanderer/Create";
import UpdateSlanderer from "src/pages/Bank/Slanderer/Update";
import Business from "src/pages/Business";
import BusinessInformation from "src/pages/Business/Information";
import Expence from "src/pages/CashFlow/Expence";
import CreateExpence from "src/pages/CashFlow/Expence/CreateExpence";
import Income from "src/pages/CashFlow/Income";
import CreateIncome from "src/pages/CashFlow/Income/CreateIncome";
import SubCategories from "src/pages/Category/SubCategories";
import TopLevelCategories from "src/pages/Category/TopLevelCategories";
import Dashboard from "src/pages/Dashboard";
import CreatePurchaseFactor from "src/pages/Factor/Purchase/Create";
import ListPurchaseFactor from "src/pages/Factor/Purchase/Read";
import UpdatePurchaseFactor from "src/pages/Factor/Purchase/Update";
import CreateSalesFactor from "src/pages/Factor/Sales/Create";
import ListSalesFactor from "src/pages/Factor/Sales/Read";
import UpdateSalesFactor from "src/pages/Factor/Sales/Update";
import Inventory from "src/pages/Inventory";
import Customer from "src/pages/People/Customer";
import CreateCustomer from "src/pages/People/Customer/Create";
import UpdateCustomer from "src/pages/People/Customer/Update";
import Provider from "src/pages/People/Provider";
import CreateProvider from "src/pages/People/Provider/Create";
import UpdateProvider from "src/pages/People/Provider/Update";
import Products from "src/pages/Products";
import CreateProduct from "src/pages/Products/_components/Create";
import UpdateProduct from "src/pages/Products/_components/Update";
import Remittance from "src/pages/Remittance";
import CreateRemittance from "src/pages/Remittance/Create";
import Role from "src/pages/Role";
import SubUser from "src/pages/SubUser/Index";
import CreateWarehouse from "src/pages/Warehouse/Create";
import Warehouse from "src/pages/Warehouse/Index";
import UpdateWarehouse from "src/pages/Warehouse/Update";

export const permissionsRouters = [
  { element: <Business />, index: true },
  {
    element: <Dashboard />,
    path: "/:bid/",
  },
  {
    element: (
      <ProtectedRoute
        element={BusinessInformation}
        requiredPermissions={{
          settings: "manageBusinessInfo",
        }}
      />
    ),
    path: "/:bid/info",
  },
  {
    element: (
      <ProtectedRoute
        element={SubUser}
        requiredPermissions={{
          settings: "manageUsers",
        }}
      />
    ),
    path: "/:bid/sub-user",
  },
  {
    element: (
      <ProtectedRoute
        element={Role}
        requiredPermissions={{
          settings: "manageRoles",
        }}
      />
    ),
    path: "/:bid/roles",
  },

  // Products Routes
  {
    element: (
      <ProtectedRoute
        element={Products}
        requiredPermissions={{
          products: "readProducts",
        }}
      />
    ),
    path: "/:bid/products/:pt",
  },
  {
    element: (
      <ProtectedRoute
        element={CreateProduct}
        requiredPermissions={{
          products: "createGoods",
        }}
      />
    ),
    path: "/:bid/products/:pt/create",
  },
  {
    element: (
      <ProtectedRoute
        element={UpdateProduct}
        requiredPermissions={{
          products: "createGoods",
        }}
      />
    ),
    path: "/:bid/products/:pt/:pid",
  },

  // Categories Routes
  {
    element: (
      <ProtectedRoute
        element={TopLevelCategories}
        requiredPermissions={{
          products: "createCategory",
        }}
      />
    ),
    path: "/:bid/categories/:ct",
  },
  {
    element: (
      <ProtectedRoute
        element={SubCategories}
        requiredPermissions={{
          products: "createCategory",
        }}
      />
    ),
    path: "/:bid/categories/:ct/*",
  },

  // Warehouse Routes
  {
    element: (
      <ProtectedRoute
        element={Warehouse}
        requiredPermissions={{
          warehouse: "readWarehouses",
        }}
      />
    ),
    path: "/:bid/warehouse",
  },
  {
    element: (
      <ProtectedRoute
        element={UpdateWarehouse}
        requiredPermissions={{
          warehouse: "createWarehouses",
        }}
      />
    ),
    path: "/:bid/warehouse/:wid",
  },
  {
    element: (
      <ProtectedRoute
        element={CreateWarehouse}
        requiredPermissions={{
          warehouse: "createWarehouses",
        }}
      />
    ),
    path: "/:bid/warehouse/create",
  },
  {
    element: (
      <ProtectedRoute
        element={Inventory}
        requiredPermissions={{
          warehouse: "readInventory",
        }}
      />
    ),
    path: "/:bid/inventory",
  },

  // Remittances Routes
  {
    element: (
      <ProtectedRoute
        element={Remittance}
        requiredPermissions={{
          warehouse: "readRemittances",
        }}
      />
    ),
    path: "/:bid/remittance",
  },
  {
    element: (
      <ProtectedRoute
        element={CreateRemittance}
        requiredPermissions={{
          warehouse: "createRemittances",
        }}
      />
    ),
    path: "/:bid/remittance/create",
  },

  // Bank/Account Routes
  {
    element: (
      <ProtectedRoute
        element={BankAccount}
        requiredPermissions={{
          bankAndAccount: "readAccounts",
        }}
      />
    ),
    path: "/:bid/bank/account",
  },
  {
    element: (
      <ProtectedRoute
        element={CreateBankAccount}
        requiredPermissions={{
          bankAndAccount: "register",
        }}
      />
    ),
    path: "/:bid/bank/account/create",
  },
  {
    element: (
      <ProtectedRoute
        element={UpdateBankAccount}
        requiredPermissions={{
          bankAndAccount: "register",
        }}
      />
    ),
    path: "/:bid/bank/account/:baid",
  },

  // Bank/Cash Register Routes
  {
    element: (
      <ProtectedRoute
        element={CashRegister}
        requiredPermissions={{
          bankAndAccount: "readAccounts",
        }}
      />
    ),
    path: "/:bid/bank/cash-register",
  },
  {
    element: (
      <ProtectedRoute
        element={CreateCashRegister}
        requiredPermissions={{
          bankAndAccount: "register",
        }}
      />
    ),
    path: "/:bid/bank/cash-register/create",
  },
  {
    element: (
      <ProtectedRoute
        element={UpdateCashRegister}
        requiredPermissions={{
          bankAndAccount: "register",
        }}
      />
    ),
    path: "/:bid/bank/cash-register/:crid",
  },

  // Bank/Slanderer Routes
  {
    element: (
      <ProtectedRoute
        element={Slanderer}
        requiredPermissions={{
          bankAndAccount: "readAccounts",
        }}
      />
    ),
    path: "/:bid/bank/slanderer",
  },
  {
    element: (
      <ProtectedRoute
        element={CreateSlanderer}
        requiredPermissions={{
          bankAndAccount: "register",
        }}
      />
    ),
    path: "/:bid/bank/slanderer/create",
  },
  {
    element: (
      <ProtectedRoute
        element={UpdateSlanderer}
        requiredPermissions={{
          bankAndAccount: "register",
        }}
      />
    ),
    path: "/:bid/bank/slanderer/:slid",
  },

  // People/Customer Routes
  {
    element: (
      <ProtectedRoute
        element={Customer}
        requiredPermissions={{
          customers: "readAll",
        }}
      />
    ),
    path: "/:bid/people/customer",
  },
  {
    element: (
      <ProtectedRoute
        element={CreateCustomer}
        requiredPermissions={{
          customers: "create",
        }}
      />
    ),
    path: "/:bid/people/customer/create",
  },
  {
    element: (
      <ProtectedRoute
        element={UpdateCustomer}
        requiredPermissions={{
          customers: "create",
        }}
      />
    ),
    path: "/:bid/people/customer/:cuid",
  },

  // People/Provider Routes
  {
    element: (
      <ProtectedRoute
        element={Provider}
        requiredPermissions={{
          providers: "readAll",
        }}
      />
    ),
    path: "/:bid/people/provider",
  },
  {
    element: (
      <ProtectedRoute
        element={CreateProvider}
        requiredPermissions={{
          providers: "create",
        }}
      />
    ),
    path: "/:bid/people/provider/create",
  },
  {
    element: (
      <ProtectedRoute
        element={UpdateProvider}
        requiredPermissions={{
          providers: "create",
        }}
      />
    ),
    path: "/:bid/people/provider/:prid",
  },

  // Cashflow/Expense Routes
  {
    element: (
      <ProtectedRoute
        element={Expence}
        requiredPermissions={{
          expense: "readAll",
        }}
      />
    ),
    path: "/:bid/cash-flow/expense",
  },
  {
    element: (
      <ProtectedRoute
        element={CreateExpence}
        requiredPermissions={{
          expense: "register",
        }}
      />
    ),
    path: "/:bid/cash-flow/expense/create",
  },

  // Cashflow/Income Routes
  {
    element: (
      <ProtectedRoute
        element={Income}
        requiredPermissions={{
          income: "readAll",
        }}
      />
    ),
    path: "/:bid/cash-flow/income",
  },
  {
    element: (
      <ProtectedRoute
        element={CreateIncome}
        requiredPermissions={{
          income: "register",
        }}
      />
    ),
    path: "/:bid/cash-flow/income/create",
  },

  // Factor/Purchase Routes
  {
    path: "/:bid/factor/purchase",
    element: (
      <ProtectedRoute
        element={ListPurchaseFactor}
        requiredPermissions={{
          purchase: "readAll",
        }}
      />
    ),
  },
  {
    path: "/:bid/factor/purchase/create",
    element: (
      <ProtectedRoute
        element={CreatePurchaseFactor}
        requiredPermissions={{
          purchase: "register",
        }}
      />
    ),
  },
  {
    path: "/:bid/factor/purchase/:fid",
    element: (
      <ProtectedRoute
        element={UpdatePurchaseFactor}
        requiredPermissions={{
          purchase: "register",
        }}
      />
    ),
  },

  // Factor/Sales Routes
  {
    path: "/:bid/factor/sales",
    element: (
      <ProtectedRoute
        element={ListSalesFactor}
        requiredPermissions={{ sales: "readAll" }}
      />
    ),
  },
  {
    path: "/:bid/factor/sales/create",
    element: (
      <ProtectedRoute
        element={CreateSalesFactor}
        requiredPermissions={{
          sales: "register",
        }}
      />
    ),
  },
  {
    path: "/:bid/factor/sales/:fid",
    element: (
      <ProtectedRoute
        element={UpdateSalesFactor}
        requiredPermissions={{
          sales: "register",
        }}
      />
    ),
  },
];
