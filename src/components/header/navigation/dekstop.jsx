import { Link } from "react-router-dom";
import { navigationItems } from "./data";
import { ReactComponent as Logo } from "../../../assets/imgs/icons/logo.svg";

export const NavigationDekstop = () => {

  const handleScroll = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="flex justify-between items-center lg:max-w-[90%] p-4 m-auto">
      <div className="ml-10 flex items-center gap-2">
        <div>
          <Logo className="h-8 w-8" />
        </div>
        <div className="text-2xl logo leading-none">Живі спогади</div>
      </div>

      <div className="flex gap-2 md:gap-4 justify-between items-end xl:min-w-[700px] leading-none">
        {navigationItems.map((item, index) => (
          <div className="cursor-pointer text-[18px]" key={index}>
            {item.link === "/" ? (
              <Link to={item.link}>
                <div className="navi transition-transform duration-200 ease-out hover:scale-110">
                  {item.title}
                </div>
              </Link>
            ) : (
              <div
                onClick={() => handleScroll(item.link)}
                className="navi transition-transform duration-200 ease-out hover:scale-110"
              >
                {item.title}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
