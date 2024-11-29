import hashIcon from "../../assets/icons/hash.svg";

const Footer = () => {
  return (
    <div className="border-t-[0.4px] border-t-gray-700 w-full">
      <div className="flex items-center justify-center w-full h-[10vh] min-h-[10vh] max-h-[10vh] bg-navbar_bg text-white">
        <img
          src={hashIcon}
          alt="hash icon not found"
          className="w-[35px] mt-[2px] cursor-pointer"
        />
        <h1 className="text-white md:text-[18px] select-none sm:text-[16px] text-[14px]">
          Copyright © 2024 Xojiakbar Isroilov
        </h1>
      </div>
    </div>
  );
};

export default Footer;
