import React  from "react";
import "remixicon/fonts/remixicon.css";

import "./button.css";

import useDeleteMode from "../Hooks/useDeleteMode";
import useDeleteElm from "../Hooks/useDeleteElm";
import useEditMode from "../Hooks/useEditMode";
import useEditElm from "../Hooks/useEditElm";

const DeleteBtn = ({ id, objName }) => {
  //customize Hooks
  const deleteElm = useDeleteElm();
  const deleteMode = useDeleteMode();
  const editMode = useEditMode();
  const editElm = useEditElm();
  return (
    <button
      style={{display:deleteMode || editMode?"initial":"none"}}
      id={id}
      data-obj={objName}
      className="deletebutton"
      onClick={editMode?editElm:deleteElm}
    >
      <i className={deleteMode?"ri-delete-bin-2-line":"ri-pencil-line"}></i>
    </button>
  );
};

export default DeleteBtn;
