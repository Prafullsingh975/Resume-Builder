import React from "react";
import DeleteBtn from "./DeleteBtn";

const Skill = ({ skill, layout, line,id }) => {
  return (
    <>
      <div className="edu skill" style={{display:"inline-block"}}>
        <span className="head">
          {skill}
          {line}
        </span>
        <DeleteBtn objName = {"skills"} id={id}></DeleteBtn>
      </div>
    </>
  );
};

export default Skill;
