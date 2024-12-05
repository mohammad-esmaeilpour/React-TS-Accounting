import { FC, Fragment, ReactElement, useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import Logo from "../components/Logo";
import { useAppSelector } from "../store/store";
import { DataProps } from "src/data/fa";
import SearchIcon from "src/components/icons/SearchIcon";
import _ from "lodash";
import BankIcon from "src/components/icons/BankIcon";
import HomeIcon from "src/components/icons/HomeIcon";
import BagIcon from "src/components/icons/BagIcon";
import CoinIcon from "src/components/icons/CoinIcon";
import ProductIcon from "src/components/icons/ProductIcon";
import CashStackIcon from "src/components/icons/CashStackIcon";
import CashIcon from "src/components/icons/CashIcon";
import BuildingDownIcon from "src/components/icons/BuildingDownIcon";
import CardCheckList from "src/components/icons/CardCheckList";
import PeopleIcon from "src/components/icons/PeopleIcon";
import GearIcon from "src/components/icons/GearIcon";
import useBusiness from "src/react-query/useBusiness";
import { TUser } from "src/types/User";
import getApi from "src/react-query/services/getApi";
import DatePickerLocal from "src/components/Forms/DatePickerLocal";
import useUser from "src/react-query/useUser";
import { TPermissions } from "src/types/Role.types";

interface SidebarProps {
  toggle: boolean;
  setToggle: Function;
}

const icons: {
  key: string;
  icon: ReactElement;
}[] = [
  {
    key: "home",
    icon: <HomeIcon size={16} />,
  },
  {
    key: "bag",
    icon: <BagIcon />,
  },
  {
    key: "coin",
    icon: <CoinIcon />,
  },
  {
    key: "product",
    icon: <ProductIcon />,
  },
  {
    key: "cash-stack",
    icon: <CashStackIcon />,
  },
  {
    key: "cash",
    icon: <CashIcon />,
  },
  {
    key: "building-down",
    icon: <BuildingDownIcon />,
  },
  {
    key: "card-check-list",
    icon: <CardCheckList />,
  },
  {
    key: "people",
    icon: <PeopleIcon />,
  },
  {
    key: "bank",
    icon: <BankIcon />,
  },
  {
    key: "gear",
    icon: <GearIcon size={16} />,
  },
];

const Sidebar: FC<SidebarProps> = ({ toggle }) => {
  const data: DataProps = useAppSelector((state) => state.dataReducer);
  const [searchTerm, setSearchTerm] = useState("");
  const [sideBar, setSideBar] = useState<any[]>([]);
  const [filteredNav, setFilteredNav] = useState<any[]>([]);
  const params = useParams();
  const {} = useBusiness();
  const { data: user } = useUser<TUser>();

  const { data: permissions, isPending } = getApi<any>({
    queryKey: ["businessRole"],
    service: `business/role/${params.bid}`,
    serviceKey: "data",
    enable: user?.id && params.bid ? true : false,
  });


  useEffect(() => {
    if (permissions && !isPending && data.layout.sidebar.navItems) {
      const filteredSidebar = data.layout.sidebar.navItems
        .map((item) => {
          // Check if the top-level role exists in permissions
          if (permissions[item.role!]) {
            // Filter dropdown items based on permissions for each role
            const filteredDropdown = item.dropdown?.filter((dropdownItem) =>
              permissions[item.role as keyof TPermissions]?.includes(
                dropdownItem.role
              )
            );

            // Return item with filtered dropdown if dropdown exists, otherwise return item as is
            return filteredDropdown?.length
              ? { ...item, dropdown: filteredDropdown }
              : item;
          }
          return null; // Return null for items without permissions
        })
        .filter(Boolean); // Remove null values

      // Set the sidebar with the filtered items, including the dashboard if necessary
      setSideBar([data.layout.sidebar.navItems[0], ...filteredSidebar]);
    }
  }, [permissions]);

  useEffect(() => {
    // Filter products based on the search term
    const filtered: any = sideBar?.filter((sideBar) =>
      _.some(
        [sideBar.title, sideBar.dropdown?.map((val:any) => val.title)],
        (value: any) => _.includes(_.toLower(value), _.toLower(searchTerm))
      )
    );
    setFilteredNav(filtered);
  }, [searchTerm, sideBar]);

  return (
    <nav
      className={`sidebar fixed ${
        toggle ? "start-0" : "start-[-100%]"
      } top-0 w-[270px] z-20 transition-all`}
    >
      <div className="bg-white flex flex-col h-screen pb-2">
        <div className="flex justify-center py-3.5 border-b bg-white">
          <Logo size={142} />
        </div>
        <div className="flex bc-secondary items-center ps-5">
            <SearchIcon color="gray" size={23} />

          <input
            type="text"
            className="rounded-none flex ps-5"
            placeholder={data.layout.sidebar.searchPlaceholder}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex-1 overflow-auto">
          {isPending ? (
            <div className="flex items-center justify-center h-full">
              <div className="loading loading-dots"></div>
            </div>
          ) : (
            filteredNav?.map((item) => (
              <div key={item.title} className="ps-6">
                {item.dropdown ? (
                  <div
                    className={`collapse collapse-arrow rounded-none relative`}
                  >
                    <input type="checkbox" className="min-h-12" />
                    <div
                      className={`collapse-title min-h-12 py-1 gap-2.5 flex items-center text-sm px-0`}
                    >
                      {icons.map(
                        (icon) =>
                          icon.key === item.icon && (
                            <Fragment key={item.title}>{icon.icon}</Fragment>
                          )
                      )}
                      {item.title}
                    </div>
                    <div className="collapse-content text-[13px] family-regular ms-2 border-s">
                      {item.dropdown.map((dropdown: any) => (
                        <NavLink
                          key={dropdown.title}
                          className={"mb-3 last-of-type:mb-0 block"}
                          to={`/${params.bid}${dropdown.url}`}
                        >
                          {dropdown.title}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                ) : (
                  <NavLink
                    className={"text-sm flex h-12 items-center gap-3 mt-4"}
                    to={`/${params.bid}`}
                  >
                    <HomeIcon color="black" size={16} />
                    {item.title}
                  </NavLink>
                )}
              </div>
            ))
          )}
        </div>

        <div className="w-full flex justify-center">
          <DatePickerLocal label="" setGregorianDate={() => true} offInputUi={true} />
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
