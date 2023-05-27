import { useContext } from "react";
import DeleteModeContext from "../Context/DeleteModeContext";

const useDeleteMode = () => {
  return useContext(DeleteModeContext)
};

export default useDeleteMode;
