import { NavLink } from "react-router-dom";
import navbar_items from "../../utils/navbar";

const Items = ({ onClose, w = "full", dir = "row", center = false }) => {
  return (
    <div className={`flex flex-${dir} gap-[20px] w-${w} cursor-pointer`}>
      {navbar_items.map(({ id, href, title }) => {
        return (
          <NavLink
            key={id}
            to={href}
            onClick={onClose}
            className={`${
              center && "justify-center"
            } text-white text-[23px] font-[400] hover:bg-hover px-[16px] py-[12px] select-none cursor-pointer rounded-lg ${
              dir === "col" && "hover:text-blueHover duration-[200ms]"
            } w-full flex items-center transition duration-[460ms] ease-in-out select-none ${
              dir !== "col" && "hover:bg-hover"
            }`}
          >
            {title}
          </NavLink>
        );
      })}
    </div>
  );
};

export default Items;
