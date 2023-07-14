import { useContext } from "react";
import { DarkModeContext } from "../../context/DarkModeContext";

const DarkModeButton = ({ children }) => {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <button className="" onClick={toggleDarkMode}>
      {children}
    </button>
  );
};
export default DarkModeButton;
