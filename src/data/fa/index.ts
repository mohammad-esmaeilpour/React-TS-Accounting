import { TBusiness } from "src/types/Business.type";
import { ConfirmCodeData, LoginData, RegisterData } from "./AuthData";
import { BusinessData } from "./BusinessData";
import { TLayout } from "src/types/Layout.types";
import { CategoryData } from "./CategoryData";
import { layoutData } from "./LayoutData";
import {
  TCreateWarehouseData,
  TWarehouseData,
} from "src/types/Warehouse.types";
import { CreateWarehouseData, WarehouseData } from "./WarehouseData";
import {
  TCreateRemittanceData,
  TRemittanceData,
} from "src/types/Remittance.types";
import { CreateRemittanceData, RemittanceData } from "./RemittanceData";
import { TInventoryData } from "src/types/Inventory.type";
import { inventoryData } from "./InventoryData";
import {
  TCreateProductData,
  TFindProductsData,
  TProductsData,
} from "src/types/Product.types";
import {
  CreateGoodData,
  CreateServiceData,
  FindProductsData,
  ProductsData,
} from "./ProductData";
import {
  TBankAccountData,
  TCashRegisterData,
  TCirculationData,
  TSlandererData,
} from "src/types/Bank.types";
import {
  BankAccountData,
  CashRegisterData,
  CirculationData,
  SlandererData,
} from "./BankData";
import { TPeopleData } from "src/types/People.types";
import { CustomerData, ProviderData } from "./PeopleData";
import { TCashFlowData } from "src/types/CashFlow.type";
import { ExpenceData, IncomeData } from "./CashFlowData";
import { TFactorData } from "src/types/Factor.types";
import { PurchaseFactorData, SalesFactorData } from "./FactorData";
import { TCategoryData } from "src/types/Category.types";
import {
  TBankLogsData,
  TCashFlowsLogData,
  TFactorsLogData,
  TPeopleLogsData,
  TProductsLogData,
  TRemittancesLogsData,
} from "src/types/Dashboar.types";
import {
  BankLogsData,
  ExpenseLogsData,
  IncomeLogsData,
  PeopleLogsData,
  ProductsLogData,
  ProfitLogsData,
  PurchaseLogData,
  RemittanceLogsData,
  SalesLogData,
  WarehouseLogsData,
} from "./DashboardData";
import { TRoleData } from "src/types/Role.types";
import { RoleData } from "./RoleData";
import { TConfirm, TLogin, TRegister } from "src/types/auth.types";
import { TSubUser } from "src/types/subUser.types";
import { SubUserData } from "./SubUserData";
import { globalData, TGlobalData } from "./globalData";
import { TWords } from "src/types/global.types";
import { WordData } from "./WordData";

export type DataProps = {
  word: TWords;
  global: TGlobalData;
  layout: TLayout;
  login: TLogin;
  register: TRegister;
  confirm: TConfirm;
  business: TBusiness;
  subUser: TSubUser;
  products: TProductsData;
  findProducts: TFindProductsData;
  createGood: TCreateProductData;
  createService: TCreateProductData;
  category: TCategoryData;
  warehouse: TWarehouseData;
  createWarehouse: TCreateWarehouseData;
  remittance: TRemittanceData;
  createRemittance: TCreateRemittanceData;
  inventory: TInventoryData;
  bankAccount: TBankAccountData;
  circulation: TCirculationData;
  cashRegister: TCashRegisterData;
  slanderer: TSlandererData;
  customer: TPeopleData;
  provider: TPeopleData;
  expence: TCashFlowData;
  income: TCashFlowData;
  purchaseFactor: TFactorData;
  salesFactor: TFactorData;
  bankLogs: TBankLogsData;
  peopleLogs: TPeopleLogsData;
  remittanceLogs: TRemittancesLogsData;
  profitLogs: TRemittancesLogsData;
  expesesLogs: TCashFlowsLogData;
  incomesLogs: TCashFlowsLogData;
  warehouseLogs: TRemittancesLogsData;
  salesLog: TFactorsLogData;
  purchaseLog: TFactorsLogData;
  productsLog: TProductsLogData;
  role: TRoleData;
};

export const faData: DataProps = {
  word: WordData,
  global: globalData,
  layout: layoutData,
  login: LoginData,
  register: RegisterData,
  confirm: ConfirmCodeData,
  business: BusinessData,
  subUser: SubUserData,
  products: ProductsData,
  findProducts: FindProductsData,
  createGood: CreateGoodData,
  createService: CreateServiceData,
  category: CategoryData,
  warehouse: WarehouseData,
  createWarehouse: CreateWarehouseData,
  remittance: RemittanceData,
  createRemittance: CreateRemittanceData,
  inventory: inventoryData,
  bankAccount: BankAccountData,
  circulation: CirculationData,
  cashRegister: CashRegisterData,
  slanderer: SlandererData,
  customer: CustomerData,
  provider: ProviderData,
  expence: ExpenceData,
  income: IncomeData,
  purchaseFactor: PurchaseFactorData,
  salesFactor: SalesFactorData,
  bankLogs: BankLogsData,
  peopleLogs: PeopleLogsData,
  remittanceLogs: RemittanceLogsData,
  profitLogs: ProfitLogsData,
  expesesLogs: ExpenseLogsData,
  incomesLogs: IncomeLogsData,
  warehouseLogs: WarehouseLogsData,
  salesLog: SalesLogData,
  purchaseLog: PurchaseLogData,
  productsLog: ProductsLogData,
  role: RoleData,
};
