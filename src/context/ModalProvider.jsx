import { useEffect, useState } from "react";
import { ModalContext } from "./ModalContext";

export const ModalContextProvider = ({ children }) => {
  const [isModal, setIsModal] = useState(false);

  useEffect(() => {
    if (isModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModal]);

  return (
    <ModalContext.Provider value={{ isModal, setIsModal }}>
      {children}
    </ModalContext.Provider>
  );
};
