import { useState } from "react";
import PhoneContext from "./PhoneContext";

interface PhoneContextProviderProp {
  children: JSX.Element | JSX.Element[];
}

export const PhoneContextProvider = ({
  children,
}: PhoneContextProviderProp): JSX.Element => {
  const [number, setNumber] = useState("");

  const addNumber = (newNumber: string) => {
    setNumber(`${number}${newNumber}`);
  };

  return (
    <PhoneContext.Provider value={{ number, addNumber }}>
      {children}
    </PhoneContext.Provider>
  );
};
