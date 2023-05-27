import React, { useReducer, useState } from "react";
import Border from "./Border";
import Stuff from "./Stuff";
import Button from "./Button";
import ResumeEditor from "./ResumeEditor";

import "./resume.css";
import { resume } from "../data.js";

import DeleteElemContext from "../Context/DeleteElemContext";
import DeleteModeContext from "../Context/DeleteModeContext";
import EditModeContext from "../Context/EditModeContext";
import EditElemContext from "../Context/EditElemContext";
import EditableObjContext from "../Context/EditableObjContext";

import updateDataReducer from "../Reducer/updateDataReducer";
import Navbar from "./Navbar";
import DarkModeContext from "../Context/DarkModeContext";
import ModeContext from "../Context/ModeContext";


const Resume = () => {
  const initial = false;
  const [darkMode, setDarkMode] = useState(false);
  const [isEditable, setIsEditable] = useState(initial);
  const [isActive, setIsActive] = useState(initial);
  const [updateData, updateDataDispatch] = useReducer(
    updateDataReducer,
    resume
  );

  const updater = (data, id) => {
    updateDataDispatch({
      type: "ADD",
      id,
      data,
    });
  };
  const deleteElm = (e) => {
    e.stopPropagation();
    const id = Number(e.target.id);
    const obj = e.target.dataset.obj;
    updateDataDispatch({
      type: "DELETE",
      id: obj,
      objId: id,
    });
  };
  const finder = (e) => {
    e.stopPropagation();
    const id = Number(e.target.id);
    const obj = e.target.dataset.obj;
    updateDataDispatch({
      type: "FIND",
      id: obj,
      objId: id,
    });
  };
  const editor = (data, id) => {
    updateDataDispatch({
      type: "EDIT",
      id,
      data,
    });
    updateData.editableObj = null;
  };
  
  const print = (e) => {
    document.querySelector('.main').style.display = "block"
    document.querySelector('.main').style.padding = "0"
    document.querySelector('*').style.margin = "0 auto";
    document.querySelector('.border').style.border = "none";
    document.querySelector('form').style.maxWidth='700px'
    document.querySelector().style.maxWidth='700px'
    window.print();
  };
  const mode = () => {
    setDarkMode((prev)=>{
      return (!prev);
    });
    if (!darkMode) {
      document.querySelector("body").style.backgroundColor = "#212020";
      document.querySelector("body").style.color = "#fff";
    }
    else{
      document.querySelector("body").style.backgroundColor = "#fff";
      document.querySelector("body").style.color = "#000";
    }
  };

  return (
    <>
      <ModeContext.Provider value={mode}>
        <DarkModeContext.Provider value={darkMode}>
          <DeleteModeContext.Provider value={isActive}>
            <EditModeContext.Provider value={isEditable}>
              <EditableObjContext.Provider value={updateData.editableObj}>
                {/* {console.log(updateData)} */}
                <div className="main" style={{display:'flex',padding:"2.5rem",gap:"3rem"}}>
                <div>
                <Navbar />
                <ResumeEditor updater={updater} editor={editor} />
                </div>
                <div>
                <div className="btns">
                  <Button type={"Print"} onClick={print} />
                  <Button
                    type={"Edit Mode"}
                    onClick={(e) => {
                      setIsActive(initial);
                      setIsEditable(!isEditable);
                      // eslint-disable-next-line no-lone-blocks
                      {
                        e.target.innerText = isEditable ? "Edit Mode" : "Save";
                      }
                    }}
                  />
                  <Button
                    type={"Delete Mode"}
                    onClick={(e) => {
                      setIsEditable(initial);
                      setIsActive(!isActive);
                      // eslint-disable-next-line no-lone-blocks
                      {
                        e.target.innerText = isActive ? "Delete Mode" : "Save";
                      }
                    }}
                  />
                </div>
                <Border>
                  <DeleteElemContext.Provider value={deleteElm}>
                    <EditElemContext.Provider value={finder}>
                      <Stuff data={updateData} />
                    </EditElemContext.Provider>
                  </DeleteElemContext.Provider>
                </Border>
                </div>
                </div>
              </EditableObjContext.Provider>
            </EditModeContext.Provider>
          </DeleteModeContext.Provider>
        </DarkModeContext.Provider>
      </ModeContext.Provider>
    </>
  );
};

export default Resume;
