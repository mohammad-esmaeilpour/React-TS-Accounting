import { Navigate, useParams } from "react-router-dom";
import { checkPermission } from "./CheckPermission";
import useUser from "src/react-query/useUser";
import { TPermissions } from "src/types/Role.types";
import { TUser } from "src/types/User";
import getApi from "src/react-query/services/getApi";

type props = {
  element: any;
  requiredPermissions: any;
};

const ProtectedRoute = ({ element: Component, requiredPermissions }: props) => {
  const params = useParams();
  const { data: user } = useUser<TUser>();

  const { data: userPermissions, isPending } = getApi<TPermissions>({
    queryKey: ["businessRole"],
    service: `business/role/${params.bid}`,
    serviceKey: "data",
    enable: user?.id && params.bid ? true : false,
  });

  if (isPending)
    return (
      <div className="panel flex items-center justify-center">
        <div className="loading loading-dots"></div>
      </div>
    );

  const hasAccess = checkPermission(requiredPermissions, userPermissions);
  return hasAccess ? <Component /> : <Navigate to="/" />;
};

export default ProtectedRoute;
