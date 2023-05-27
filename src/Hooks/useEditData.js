import { useContext } from "react";
import EditableObjContext from "../Context/EditableObjContext";

const useEditData = () => {
    return useContext(EditableObjContext);
  
};

export default useEditData;
