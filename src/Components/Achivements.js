import React from "react";
import DeleteBtn from "./DeleteBtn";

const Achivements = ({ achivements,id}) => {
  return (
    <>
      <div className="edu">
      <li className="head">{achivements}</li>
      <DeleteBtn objName = {"achivements"} id={id}></DeleteBtn>
      </div>
    </>
  );
};

export default Achivements;
