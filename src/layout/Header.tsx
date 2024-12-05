import { FC, Fragment } from "react";
import BarsIcon from "src/components/icons/BarsIcon";
import UserIcon from "src/components/icons/UserIcon";
import ChevronDown from "src/components/icons/ChevronDown";
import { useLocation, useNavigate } from "react-router-dom";
import DynamicService from "src/service/DynamicService";
import { DataProps } from "src/data/fa";
import { useAppSelector } from "src/store/store";
import Cookies from "js-cookie";
import { IonExitOutline } from "src/components/icons/ExitIcon";
import useUser from "src/react-query/useUser";
import { TUser } from "src/types/User";
import { useQueryClient } from "@tanstack/react-query";

interface HeaderProps {
  toggle: boolean;
  setToggle: Function;
}

const Header: FC<HeaderProps> = ({ setToggle, toggle }) => {
  const data: DataProps = useAppSelector((state) => state.dataReducer);
  const queryClient = useQueryClient();
  const location = useLocation();
  const navigate = useNavigate();

  const { data: user, isPending, error } = useUser<TUser>();

  const logOut = () => {
    DynamicService({
      method: "get",
      service: "user/logout",
    }).then((response: any) => {
      if (response.status === 200) {
        Cookies.remove("Authorization");
        navigate("/login");
        queryClient.removeQueries();
      }
    });
  };

  return (
    <Fragment>
      <header className="z-10 bg-white flex justify-between py-3.5 pe-7 border-b">
        <div className="flex items-center gap-4.5">
          {location.pathname !== "/" && (
            <button
              type="button"
              className="flex ltr:ml-2 rtl:mr-2 p-2"
              onClick={() => {
                setToggle(!toggle);
              }}
            >
              <BarsIcon size={18} />
            </button>
          )}
          {/* <div className="flex gap-2 ms-4">
            <LogoDashboard size={44} />

            <div className="flex flex-col">
              <h1 className="family-bold text-[15px]">
                {data.layout.header.title}
              </h1>
              <p className="text-[11px] family-regular">
                {data.layout.header.membership}
              </p>
            </div>
          </div> */}
        </div>

        <div className="flex items-center gap-3.5">
          {/* <div className="relative">
            <NotifIcon size={25} />
            <div className="absolute p-2 rounded-full flex h-[16px] w-[16px] items-center justify-center text-xs family-regular text-white -right-1 -top-2 bc-yellow ">
              n
            </div>
          </div> */}

          <div className="dropdown dropdown-bottom dropdown-end z-50">
            <div
              tabIndex={0}
              role="button"
              className="btn-primary rounded-3xl h-10 px-3 flex py-0 m-1"
            >
              <UserIcon size={17} color="white" />
              <div className="text-white text-xs family-regular">
                {isPending ? (
                  <div className="loading loading-dots loading-sm flex items-center justify-center"></div>
                ) : error ? (
                  <div>{error?.message}</div>
                ) : (
                  user?.first_name
                )}
              </div>
              <ChevronDown size={10} color="white" />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 text-sm rounded-box z-[1] w-52 p-2 shadow"
            >
              <li onClick={logOut}>
                <span className="text-xs flex items-center justify-between">
                  {data.layout.header.logout}
                  <IonExitOutline color="red" width={18} height={18} />
                </span>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
