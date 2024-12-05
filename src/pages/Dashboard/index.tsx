import getApi from "src/react-query/services/getApi";
import useUser from "src/react-query/useUser";
import { TPermissions } from "src/types/Role.types";
import { TUser } from "src/types/User";
import BanksLogs from "./Bank";
import ExpensesLog from "./Expense";
import IncomesLog from "./Income";
import CustomersLog from "./Peoples/Customers";
import ProvidersLog from "./Peoples/Providers";
import ProductsLogs from "./Products";
import ProfitLogs from "./Profit";
import PurchaseLog from "./Purchase/PurchaseLog";
import RemittancesLogs from "./Remittance";
import SalesLog from "./Sales/SalesLog";
import WarehouseLogs from "./Warehouse";
import { useParams } from "react-router-dom";

const Dashboard = () => {
  const params = useParams()
  const { data: user } = useUser<TUser>();

  const { data: userPermissions } = getApi<TPermissions>({
    queryKey: ["businessRole"],
    service: `business/role/${params.bid}`,
    serviceKey: "data",
    enable: user?.id && params.bid ? true : false,
  });
  return (
    <div className="grid grid-cols-3 gap-5 panel rounded-none bg-transparent">
      {userPermissions?.purchase &&
        userPermissions.purchase.find((value) => value === "readAll") && (
          <PurchaseLog />
        )}

      {userPermissions?.sales &&
        userPermissions.sales.find((value) => value === "readAll") && (
          <SalesLog />
        )}

      {userPermissions?.expense &&
        userPermissions.expense.find((value) => value === "readAll") && (
          <ExpensesLog />
        )}

      {userPermissions?.income &&
        userPermissions.income.find((value) => value === "readAll") && (
          <IncomesLog />
        )}

      {userPermissions?.products &&
        userPermissions.products.find((value) => value === "readProducts") && (
          <ProductsLogs />
        )}

      {userPermissions?.sales &&
        userPermissions?.purchase &&
        userPermissions?.income &&
        userPermissions?.expense && <ProfitLogs />}

      {userPermissions?.bankAndAccount &&
        userPermissions.bankAndAccount.find(
          (value) => value === "readAccounts"
        ) && <BanksLogs />}

      {userPermissions?.providers &&
        userPermissions.providers.find((value) => value === "readAll") && (
          <ProvidersLog />
        )}

      {userPermissions?.customers &&
        userPermissions.customers.find((value) => value === "readAll") && (
          <CustomersLog />
        )}

      {userPermissions?.warehouse &&
        userPermissions.warehouse.find(
          (value) => value === "readRemittances"
        ) && <RemittancesLogs />}

      {userPermissions?.warehouse &&
        userPermissions.warehouse.find(
          (value) => value === "readWarehouses"
        ) && <WarehouseLogs />}
    </div>
  );
};

export default Dashboard;
