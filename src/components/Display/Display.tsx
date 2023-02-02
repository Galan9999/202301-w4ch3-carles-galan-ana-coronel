import { useContext } from "react";
import PhoneContext from "../../contexts/PhoneContext/PhoneContext";

const Display = () => {
  const { number } = useContext(PhoneContext);
  return <span className="number">{number}</span>;
};
export default Display;
