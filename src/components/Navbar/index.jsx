import Logo from "./Logo";
import Items from "./Items";
import Drawer from "./Drawer";
import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import useSize from "./../../hooks/useSize";
import menuIcon from "../../assets/icons/menuIcon.svg";

const Navbar = () => {
  const { width } = useSize();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen((prev) => !prev);
  };

  useEffect(() => {
    if (width > 1050) {
      setIsDrawerOpen(false);
    }
  }, [width]);

  return (
    <div className="border-b-[0.4px] border-b-gray-700 z-[999]">
      <div className="flex items-center justify-between w-full h-[10vh] min-h-[10vh] max-h-[10vh] bg-navbar_bg px-[2%]">
        <Logo />
        <div className="flex flex-row items-center gap-[25px]">
          {width > 1050 && (
            <div className="flex flex-row items-center gap-[25px]">
              <Items dir="row" />
            </div>
          )}
          {width <= 1050 && (
            <div
              className="select-none py-[7px] px-[20px] hover:bg-hover cursor-pointer rounded-[8px]"
              onClick={toggleDrawer}
            >
              <img
                src={menuIcon}
                alt="Menu icon"
                className="w-[40px] select-none font-mont transition duration-105 ease-in-out"
              />
            </div>
          )}
        </div>
      </div>
      <Drawer isOpen={isDrawerOpen} onClose={toggleDrawer} />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Navbar;
