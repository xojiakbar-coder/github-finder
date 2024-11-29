import React from "react";
import Logo from "./Logo";
import Items from "./Items";
import closeIcon from "../../assets/icons/closeIcon.svg";

const Drawer = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed top-0 right-0 w-full h-screen min-h-screen bg-background transform transition duration-[370ms] ease-in-out ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
      style={{ zIndex: 1000 }}
    >
      <div className="flex flex-row w-full items-center justify-between py-[15px] px-[20px]">
        <div>
          <Logo onClose={onClose} />
        </div>
        <div>
          <button onClick={onClose} className="py-4 w-[40px]">
            <img
              src={closeIcon}
              alt="Close Drawer"
              className="w-[50px] select-none font-mont transition duration-105 ease-in-out"
            />
          </button>
        </div>
      </div>
      <div className="py-5 px-[20px]">
        <Items dir="col" w="full" onClose={onClose} />
      </div>
    </div>
  );
};

export default Drawer;
