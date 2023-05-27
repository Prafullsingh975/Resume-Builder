import { useContext } from "react";
import EditModeContext from "../Context/EditModeContext";

const useEditMode = () => {
  return useContext(EditModeContext);
};

export default useEditMode;
