import React from "react";
import DeleteBtn from "./DeleteBtn";

const Education = ({ education, layout,isLast}) => {
  const { institute, course, branch, cgpa, session,id } = education;
  return (
    <>
      <div className="edu">
      <h5 className="institute">
        {institute} <span className="session">{session}</span>
      </h5>
      <li
        style={
          layout === "number"
            ? { listStyle: "decimal" }
            : layout === "alphabet"
            ? { listStyle: "lower-alpha" }
            : { listStyle: "initial" }
        }
      >
        <p className="head">
          {course}, {branch} {cgpa === "" ? "" : " | CGPA: "}
          <span className="cgpa">{cgpa}</span>
        </p>
      </li>
      <DeleteBtn objName = {"education"} id={id}></DeleteBtn>
      {isLast?null:<br />}
      </div>
    </>
  );
};

export default Education;
