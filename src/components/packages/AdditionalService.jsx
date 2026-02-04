import { ReactComponent as Tool } from "../../assets/imgs/icons/tool.svg";


import "./styled.css";

export const AdditionalService = () => {
  return (
    <div className="mt-10 bg-big-stone text-white max-w-[800px] m-auto p-6 rounded-lg shadow-lg">
      <div className="">
        <Tool className="adt-svg h-10 w-10 m-auto" />
      </div>
      <div className="text-center">
        <div className="mt-4 font-semibold text-2xl">Додаткові послуги</div>
        <div className="text-xl">
          Покращте якість своїх фотографій за допомогою додаткових професійних
          послуг
        </div>
      </div>
      <div className="bg-smth rounded-xl py-4 px-8 mt-4">
        <div className="text-center font-semibold text-xl">Професійна реставрація та фарбування</div>
        <div className="mt-2">
          Для сильно пошкоджених фотографій або фотографій зі спеціальними
          вимогами до реставрації
        </div>
        <div>Доступно для будь-якого пакету - додається до кінцевої ціни</div>
        <div className="mt-2 text-2xl font-semibold text-center">Від 100 гривень за фото</div>
      </div>
    </div>
  );
};
