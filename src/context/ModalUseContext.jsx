import { useContext } from "react";
import { ModalContext } from "./ModalContext";

export const useModalContext = () => {
  const value = useContext(ModalContext);

  if (!value) {
    throw new Error(
      "useModalContext should be called inside AppStateContextProvider"
    );
  }

  return value;
};
