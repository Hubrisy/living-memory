import { useEffect, useState } from "react";
import { ReactComponent as BurgerBtn } from "../../../assets/imgs/icons/burger.svg";
import { ReactComponent as CloseBtn } from "../../../assets/imgs/icons/close.svg";
import { ReactComponent as Telegram } from "../../../assets/imgs/icons/telegram.svg";
import { ReactComponent as Viber } from "../../../assets/imgs/icons/viber.svg";
import { ReactComponent as Instagram } from "../../../assets/imgs/icons/instagram.svg";
import { ReactComponent as Logo } from "../../../assets/imgs/icons/logo.svg";
import "./styled.css";
import { navigationItems } from "./data";
import { Link } from "react-router-dom";

export const NavigationMobile = () => {
  const [isModal, setIsModal] = useState(false);

  const toggleModal = () => setIsModal((prev) => !prev);

  const handleScroll = (id) => {
    setIsModal(false);

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  useEffect(() => {
    document.body.style.overflow = isModal ? "hidden" : "auto";
  }, [isModal]);

  return (
    <div className="flex justify-between items-center">
      <div className="ml-10 flex items-end gap-2">
        <div>
          <Logo className="h-8 w-8" />
        </div>
        <div className="text-2xl logo leading-none">Живі спогади</div>
      </div>
      <div>
        <div onClick={toggleModal} className="flex justify-end p-2">
          <BurgerBtn className="burger" />
        </div>

        <div
          className={`fixed inset-0 bg-black/50 z-10 transition-opacity duration-300 ${
            isModal ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={toggleModal}
        />

        <div
          className={`fixed top-0 right-0 z-20 h-screen w-[70%] bg-white text-black
              flex flex-col
        transform transition-transform duration-300 ease-in-out
        ${isModal ? "translate-x-0" : "translate-x-full"}`}
        >
          <div onClick={toggleModal} className="flex justify-end p-3">
            <CloseBtn />
          </div>
          <div className="text-2xl text-center flex flex-col gap-2 mt-10">
            {navigationItems.map((item, index) => (
              <div className="cursor-pointer text-[18px]" key={index}>
                {item.link === "/" ? (
                  <Link to={item.link}>
                    <div className="text-xl font-semibold">{item.title}</div>
                  </Link>
                ) : (
                  <div
                    onClick={() => handleScroll(item.link)}
                    className="text-xl font-semibold"
                  >
                    {item.title}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="mt-auto mb-20">
            <div className="text-center font-bold text-2xl">
              Як з нами зв'язатись?
            </div>
            <div className="flex justify-center gap-8 mt-2 bg-big-stone p-4 max-w-[80%] m-auto rounded-xl">
              <a
                href="http://t.me/manager_vlad_spogady"
                target="_blank"
                rel="noreferrer"
              >
                <Telegram className="w-8 h-8 cursor-pointer" />
              </a>
              <a
                href="https://www.instagram.com/zhyvi.spohady?igsh=MTZ1c25tYXJ4Ym95OA=="
                target="_blank"
                rel="noreferrer"
              >
                <Instagram className="w-8 h-8 cursor-pointer" />
              </a>
              <a
                href="viber://chat?number=%2B380998783497"
                target="_blank"
                rel="noreferrer"
              >
                <Viber className="w-8 h-8 cursor-pointer" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
