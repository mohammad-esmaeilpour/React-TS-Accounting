/* eslint-disable @typescript-eslint/no-explicit-any */
import Cookies from "js-cookie";
import { Navigate, Outlet } from "react-router";

const ProtectRoute = () => {
  const cookie = Cookies.get('Authorization')
  if (!cookie) {
    return <Navigate to={'/login'} />;
  }
  return <Outlet />;
};

export default ProtectRoute;
