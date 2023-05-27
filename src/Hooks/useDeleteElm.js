import { useContext } from "react";
import DeleteElemContext from "../Context/DeleteElemContext";

const useDeleteElm = () => {
  return useContext(DeleteElemContext)
};

export default useDeleteElm;
