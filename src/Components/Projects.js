import React from "react";
import DeleteBtn from "./DeleteBtn";

const Projects = ({ projects, layout, isLast,id }) => {
  const { titel, tec, desc, projectLink } = projects;
  return (
    <>
      <div className="edu">
      <a href={projectLink}>
        <h5 className="institute">{titel}</h5>
      </a>
      <p className="head">Use: {tec}</p>
      <li
        style={
          layout === "number"
            ? { listStyle: "decimal" }
            : layout === "alphabet"
            ? { listStyle: "lower-alpha" }
            : { listStyle: "initial" }
        }
      >
        <p className="head">{desc}</p>
      </li>
      <DeleteBtn objName = {"projects"} id={id}></DeleteBtn>
      {isLast ? null : <br />}
      </div>
    </>
  );
};

export default Projects;
