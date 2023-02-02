import { useContext } from "react";
import PhoneContext from "../../contexts/PhoneContext/PhoneContext";

import "./Display.css";
const Display = (): JSX.Element => {
  const { number } = useContext(PhoneContext);
  return <span className="number">{number}</span>;
};
export default Display;
