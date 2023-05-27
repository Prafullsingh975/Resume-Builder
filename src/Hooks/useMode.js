import { useContext } from "react";
import ModeContext from "../Context/ModeContext";

const useMode = () => {
  return useContext(ModeContext);
};

export default useMode;
