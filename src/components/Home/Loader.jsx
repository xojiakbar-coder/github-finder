import React from "react";
import loaderIcon from "../../assets/icons/loading.svg";

const Loader = () => {
  return (
    <div className="mt-[200px]">
      <img
        src={loaderIcon}
        alt="loader icon not found"
        className="animate-spin duration-500 w-[70px] h-[70px]"
      />
    </div>
  );
};

export default Loader;
