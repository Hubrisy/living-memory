import { useState } from "react";
import { ReactComponent as Arrow } from "../../assets/imgs/icons/arrow.svg";

import clsx from "clsx";
import { data } from "./data";

export const Questions = () => {
  const [openIndexes, setOpenIndexes] = useState([]);

  const toggle = (index) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    );
  };

  return (
    <div className="mt-20 max-w-[800px] m-auto" id="questions">
      <div className="text-center uppercase">
        <div className="text-[22px] sm:text-4xl lg:text-3xl font-bold">
          Часті запитання
        </div>
        <div className="text-[16px] sm:text-[20px] font-medium mt-1">
          Відповіді на найпоширеніші запитання щодо наших послуг
        </div>
      </div>

      <div className="mt-10">
        {data.map((item, index) => {
          const isOpen = openIndexes.includes(index);

          return (
            <div
              key={index}
              className="w-full bg-big-stone text-white p-4 mt-4 rounded-lg"
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggle(index)}
              >
                <div className="text-xl">{item.title}</div>

                <Arrow
                  className={clsx(
                    "transition-transform duration-300",
                    isOpen && "rotate-180",
                  )}
                />
              </div>

              <div
                className={clsx(
                  "overflow-hidden transition-all duration-300 ease-in-out",
                  isOpen ? "max-h-40 opacity-100 mt-3" : "max-h-0 opacity-0",
                )}
              >
                <div className="text-sm leading-relaxed">{item.answer}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
