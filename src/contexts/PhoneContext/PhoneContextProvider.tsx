import { useState } from "react";
import PhoneContext from "./PhoneContext";

interface PhoneContextProviderProp {
  children: JSX.Element | JSX.Element[];
}

export const PhoneContextProvider = ({
  children,
}: PhoneContextProviderProp): JSX.Element => {
  const [number, setNumber] = useState("");

  const modifyNumber = (newNumber: string): void => {
    if (newNumber === "delete") {
      setNumber("");
      return;
    }
    if (number.length === 9) {
      return;
    }
    setNumber(`${number}${newNumber}`);
  };

  return (
    <PhoneContext.Provider value={{ number, modifyNumber }}>
      {children}
    </PhoneContext.Provider>
  );
};
