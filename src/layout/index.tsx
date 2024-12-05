import { useState } from "react";
import Header from "./Header";
import { Outlet, useLocation} from "react-router-dom";
import Sidebar from "./Sidebar";
const Layout = () => {
  const location = useLocation();
  const [toggle, setToggle] = useState<boolean>(true);
  const lanugage = "fa";

  return (
    <div
      dir={lanugage === "fa" || lanugage === 'ar' ? "rtl" : "ltr"}
      className={`main-section relative font-nunito text-sm font-normal`}
    >
      <div>
        {location.pathname !== "/" && (
          <Sidebar toggle={toggle} setToggle={setToggle} />
        )}
        <div
          className={`transition-all ${
            toggle && location.pathname !== "/"
              ? "lg:w-[calc(100vw_-_270px)]"
              : "w-full"
          } ms-auto`}
        >
          <Header toggle={toggle} setToggle={setToggle} />
          <div className={`p-6 overflow-auto`}>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
