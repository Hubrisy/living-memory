import { Link } from "react-router-dom";
import { ReactComponent as Telegram } from "../../assets/imgs/icons/telegram.svg";
import { ReactComponent as Viber } from "../../assets/imgs/icons/viber.svg";
import { ReactComponent as Instagram } from "../../assets/imgs/icons/instagram.svg";

export const Footer = () => {
  return (
    <div className="mt-10 bg-big-stone text-white">
      <div className="max-w-[85%] sm:max-w-[75%] lg:max-w-[85%] xl:max-w-[75%] m-auto pt-10 pb-10">
        <div>
          <div className="uppercase">Як з нами зв'язатись?</div>
          <div className="flex gap-4 mt-4">
            <a
              href="http://t.me/manager_vlad_spogady"
              target="_blank"
              rel="noreferrer"
            >
              <Telegram className="w-8 h-8 cursor-pointer" />
            </a>
            <a
              href="https://www.instagram.com/zhyvi.spohady?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
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
          <div className="mt-4 font-semibold text-[18px]">
            zivispogadi@gmail.com
          </div>
          <div className="mt-6 max-w-[500px]">
            <div>
              Потрібна допомога або маєте пропозицію? Ми прагнемо дружніх
              стосунків із нашими клієнтами, тож із радістю відповімо на всі
              ваші запитання.
            </div>
          </div>
          <div className="mt-6">
            <div className="uppercase">Правова інформація</div>
            <div className="mt-4">
              <div className="mt-2">
                <Link to="/rights">Умови та положення</Link>
              </div>
              <div className="mt-2">
                <Link to="/privacy">Політика конфідеційності</Link>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <div className="h-px w-full bg-gray-500" />
            <div className="mt-4">
              2026 live-memories.vercel.app | Усі права захищені.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
