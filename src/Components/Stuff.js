import React from "react";

import "./stuff.css";
import Skill from "./Skill";
import Education from "./Education";
import Experience from "./Experience";
import Projects from "./Projects";
import Achivements from "./Achivements";

const Stuff = ({ data}) => {
  const { basic, experience, education, projects, skills, achivements } = data;
  return (
    <>
      <div className="stuff">
        <br />
        <h1 className="name">{basic.fullName}</h1>
        <div className="basicData">
          <span>
            <a href= {"mailto:"+basic.email}>{basic.email}</a>
            {basic.linkedIN === undefined ? "" : " | "}
          </span>
          <span>
            <a href={basic.linkedIN} target="_blank" rel="noreferrer">{basic.linkedIN ? "LinkedIn" : null}</a>
            {basic.website === undefined ? "" : " | "}
          </span>
          <span>
            <a href={basic.website} target="_blank" rel="noreferrer">{basic.website? "Portfolio":null}</a>
            {basic.github === undefined ? "" : " | "}
          </span>
          <span><a href={basic.github} target="_blank">{basic.github?"GitHub":null}</a></span>
        </div>
        <br />

        {education.length > 0 ? (
          <>
            <h2 className="heading">Education</h2> <hr />
          </>
        ) : null}
        <ul>
          {education.map((val, index) => {
            return (
              <Education
                key={val.id}
                layout={"bullets"}
                education={val}
                isLast={index === education.length - 1 ? true : false}
              />
            );
          })}
        </ul>

        {skills.length > 0 ? (
          <>
            <h2 className="heading">Skills</h2>
            <hr />
          </>
        ) : null}
        {skills.map((val, index) => (
          <Skill
            skill={val}
            key={index}
            layout={"bullets"}
            id = {index}
            line={
              skills.length === 1 || skills.length - 1 === index ? "" : " | "
            }
          />
        ))}

        {experience.length > 0 ? (
          <>
            <h2 className="heading">Experience</h2>
            <hr />
          </>
        ) : null}
        <ul>
          {experience.map((val, index) => {
            return (
              <Experience
                key={val.id}
                id={val.id}
                layout={"bullets"}
                experience={val}
                isLast={index === experience.length - 1 ? true : false}
              />
            );
          })}
        </ul>

        {projects.length > 0 ? (
          <>
            <h2 className="heading">Projects</h2>
            <hr />
          </>
        ) : null}
        <ul>
          {projects.map((val, index) => {
            return (
              <Projects
                key={val.id}
                id={val.id}
                layout={"bullets"}
                projects={val}
                isLast={index === projects.length - 1 ? true : false}
              />
            );
          })}
        </ul>

        {achivements.length > 0 ? (
          <>
            <h2 className="heading">Achivements</h2>
            <hr />
          </>
        ) : null}
        <ul>
          {achivements.map((val, index) => {
            return (
              <Achivements key={index} id = {index} layout={"bullets"} achivements={val} />
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Stuff;
