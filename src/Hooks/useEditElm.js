import { useContext } from "react";
import EditElemContext from "../Context/EditElemContext";

const useEditElm = () => {
  return useContext(EditElemContext);
};

export default useEditElm;
