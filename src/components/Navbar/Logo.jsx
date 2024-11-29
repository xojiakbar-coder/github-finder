import { useNavigate } from "react-router-dom";
import githubIcon from "../../assets/icons/github.svg";

const Logo = ({ onClose }) => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    if (onClose) {
      onClose();
    }
    navigate("/");
  };

  return (
    <div
      className="flex flex-row items-center select-none gap-[12px] px-[12px] py-[6px] rounded-lg hover:bg-hover cursor-pointer"
      onClick={handleNavigation}
    >
      <img
        src={githubIcon}
        alt="GitHub icon"
        className="md:w-[40px] cursor-pointer select-none sm:w-[30px] w-[25px]"
      />
      <h1 className="text-white lg:text-[32px] sm:text-[24px] text-[20px] font-bold">
        Github Finder
      </h1>
    </div>
  );
};

export default Logo;
