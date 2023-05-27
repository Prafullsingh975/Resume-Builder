import { useContext } from "react";
import DarkModeContext from "../Context/DarkModeContext";

const useDarkMode = () => {
  return useContext(DarkModeContext);
};

export default useDarkMode;
