import Cookies from "js-cookie";
import { Navigate, Outlet } from "react-router";

const ProtectAuth = () => {
  const cookie = Cookies.get("Authorization");
  if (cookie) {
    return <Navigate to={"/"} />;
  }
  return <Outlet />;
};

export default ProtectAuth;
