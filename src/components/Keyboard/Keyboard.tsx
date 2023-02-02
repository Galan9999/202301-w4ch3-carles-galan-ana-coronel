import { useContext } from "react";
import PhoneContext from "../../contexts/PhoneContext/PhoneContext";
import Key from "../Key/Key";
import "./Keyboard.css";

const Keyboard = (): JSX.Element => {
  const { modifyNumber } = useContext(PhoneContext);
  const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "delete"];
  return (
    <ol className="keyboard">
      {numbers.map((listItem) => (
        <Key number={listItem} action={modifyNumber} />
      ))}
    </ol>
  );
};

export default Keyboard;
