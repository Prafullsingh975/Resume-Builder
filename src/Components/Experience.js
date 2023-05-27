import React from "react";
import DeleteBtn from "./DeleteBtn";

const Experience = ({ experience, layout, isLast }) => {
  const { companyName, position, from, to, profileDesc,id } = experience;
  
  const fromDate = new Date(from).toString();
  const fromMonth = fromDate.substring(4, 8);
  const fromYear = fromDate.substring(11, 15);

  const toDate = new Date(to).toString();
  const toMonth = toDate.substring(4, 8);
  const toYear = toDate.substring(11, 15);

  return (
    <>
      <div className="edu">
      <h5 className="institute">
        {companyName} | <span className="head">{position}</span>
        <span className="duration">
          {fromMonth}
          {fromYear}
          {to ? (
            <>
              -{toMonth}
              {toYear}
            </>
          ) : (
            ""
          )}
        </span>
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
        <p className="head">{profileDesc}</p>
      </li>
      <DeleteBtn objName = {"experience"} id={id}></DeleteBtn>
      {isLast ? null : <br />}
      </div>
    </>
  );
};

export default Experience;
