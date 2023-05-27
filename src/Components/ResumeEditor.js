import React, { useEffect, useReducer, useRef} from "react";
import Button from "./Button";

import "./resumeEditor.css";

import basicReducer, { basicInitial } from "../Reducer/basicReducer";
import educationReducer, { eduInitial } from "../Reducer/educationReducer";
import experienceReducer, { expInitial } from "../Reducer/experienceReducer";
import projectsReducer, { projectsInitial } from "../Reducer/projectsReducer";
import skillsReducer, { skillsInitial } from "../Reducer/skillsReducer";
import achivementReducer, { achivInitial } from "../Reducer/achivementReducer";
import useEditData from "../Hooks/useEditData";
import useDarkMode from "../Hooks/useDarkMode";

const ResumeEditor = ({ editor, updater }) => {
  // Hooks
  const nameInputRef = useRef(null);
  const darkMode = useDarkMode();
  // Reducers
  const [basic, basicDispatch] = useReducer(basicReducer, basicInitial);
  const [edu, eduDispatch] = useReducer(educationReducer, eduInitial);
  const [skills, skillsDispatch] = useReducer(skillsReducer, skillsInitial);
  const [exp, expDispatch] = useReducer(experienceReducer, expInitial);
  const [projects, projectsDispatch] = useReducer(
    projectsReducer,
    projectsInitial
  );
  const [achivement, achivementDispatch] = useReducer(
    achivementReducer,
    achivInitial
  );
  const editableData = useEditData();

  useEffect(()=>{
    nameInputRef.current.focus();
    if(editableData){
      switch (editableData.fieldName) {
        case "education":eduDispatch({type:"EDIT",payload:editableData})
          break;
        
          case "experience":expDispatch({type:"EDIT",payload:editableData})
          break;

          case "projects":projectsDispatch({type:"EDIT",payload:editableData})
          break;

          case "achivements":achivementDispatch({type:"EDIT",payload:editableData})
          break;

          case "skills":skillsDispatch({type:"EDIT",payload:editableData})
          break;

        default: throw Error ("Unknown action: Edit in" + editableData.fieldName);
      }
    }
    
    },[editableData])
  const add = (e) => {
    const id = e.target.id;
    if (id === "education") {
      updater(edu, id);
      eduDispatch({ type: "CLEAR" });
    }
    if (id === "skills") {
      updater(skills, id);
      skillsDispatch({ type: "CLEAR" });
    }
    if (id === "experience") {
      updater(exp, id);
      expDispatch({ type: "CLEAR" });
    }
    if (id === "projects") {
      updater(projects, id);
      projectsDispatch({ type: "CLEAR" });
    }
    if (id === "achivements") {
      updater(achivement, id);
      achivementDispatch({ type: "CLEAR" });
    }
  };
  const edit = (e)=>{
    e.stopPropagation();
    e.preventDefault();
    const id = e.target.id;
    if (id === "education") {
      editor(edu, id);
      eduDispatch({ type: "CLEAR" });
    }

    if (id === "skills") {
      editor(skills, id);
      skillsDispatch({ type: "CLEAR" });
    }
    if (id === "experience") {
      editor(exp, id);
      expDispatch({ type: "CLEAR" });
    }
    if (id === "projects") {
      editor(projects, id);
      projectsDispatch({ type: "CLEAR" });
    }
    if (id === "achivements") {
      editor(achivement, id);
      achivementDispatch({ type: "CLEAR" });
    }

  }

  const changeHandeler = (e) => {
    e.stopPropagation();
    const { name, value } = e.target;
    basicDispatch({
      type: "ADD",
      name: name,
      value: value,
    });
  };
  const changeHandelerEdu = (e) => {
    e.stopPropagation();
    const { name, value } = e.target;
    eduDispatch({
      type: "ADD",
      name: name,
      value,
    });
  };
  const changeHandelerSkills = (e) => {
    e.stopPropagation();
    const { value } = e.target;
    skillsDispatch({
      type: "ADD",
      value,
    });
  };
  const changeHandelerExp = (e) => {
    e.stopPropagation();
    const { name, value } = e.target;
    expDispatch({
      type: "ADD",
      name,
      value,
    });
  };
  const changeHandelerProjects = (e) => {
    e.stopPropagation();
    const { name, value } = e.target;
    projectsDispatch({
      type: "ADD",
      name,
      value,
    });
  };
  const changeHandelerAchivemet = (e) => {
    e.stopPropagation();
    const { value } = e.target;
    achivementDispatch({
      type: "ADD",
      value,
    });
  };

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="basic">

          <h2 className="heading">Basic</h2>
          <hr style={{border:darkMode?"0.15rem solid #fff":null}} />
          <fieldset>
            <legend>Full Name</legend>
            <input className={darkMode?"darkMode":null}
            ref={nameInputRef}
              onChange={changeHandeler}
              type="text"
              name="fullName"
              required
              placeholder="Prafulla Kumar"
            />
          </fieldset>

          <fieldset>
            <legend>Email</legend>
            <input
              onChange={changeHandeler}
              className={darkMode?"darkMode bigSpace":"bigSpace"}
              type="email"
              name="email"
              placeholder="prafullsingh975@gmail.com"
              required
            />
          </fieldset>

          <fieldset>
            <legend>Website</legend>
            <input className={darkMode?"darkMode":null}
              onChange={changeHandeler}
              type="text"
              name="website"
              placeholder="URL"
            />
          </fieldset>

          <fieldset>
            <legend>LinkedIn</legend>
            <input className={darkMode?"darkMode":null}
              onChange={changeHandeler}
              type="text"
              name="linkedIN"
              placeholder="URL"
            />
          </fieldset>

          <fieldset>
            <legend>GitHub</legend>
            <input className={darkMode?"darkMode":null}
              onChange={changeHandeler}
              type="text"
              name="github"
              placeholder="Profile Link"
            />
          </fieldset>
          <Button
            id={"basic"}
            onClick={(e) => {
              updater(basic, e.target.id);
            }}
            type={"Add"}
          />
        </div>

        <div className="education">
          <h2 className="heading">Education</h2>
          <hr style={{border:darkMode?"0.15rem solid #fff":null}} />
          <fieldset>
            <legend>Institute Name</legend>
            <input
              value={edu.institute}
              onChange={changeHandelerEdu}
              className={darkMode?"darkMode bigSpace":"bigSpace"}
              type="text"
              name="institute"
              placeholder="Oriental College Of Technology,Bhopal"
            />
          </fieldset>

          <fieldset>
            <legend>Course Name</legend>
            <input className={darkMode?"darkMode":null}
              value={edu.course}
              onChange={changeHandelerEdu}
              type="text"
              name="course"
              placeholder="B.Tech"
            />
          </fieldset>

          <fieldset>
            <legend>Branch</legend>
            <input className={darkMode?"darkMode":null}
              value={edu.branch}
              onChange={changeHandelerEdu}
              type="text"
              name="branch"
              placeholder="CSE"
            />
          </fieldset>

          <fieldset>
            <legend>Session</legend>
            <input className={darkMode?"darkMode":null}
              value={edu.session}
              onChange={changeHandelerEdu}
              type="text"
              name="session"
              placeholder="2021-2025"
            />
          </fieldset>

          <fieldset>
            <legend>CGPA</legend>
            <input className={darkMode?"darkMode":null}
              value={edu.cgpa}
              onChange={changeHandelerEdu}
              type="text"
              name="cgpa"
              placeholder="8.5"
            />
          </fieldset>
          <Button id={"education"} onClick={editableData?edit:add} type={editableData?"Edit":"Add"} />
        </div>

        <div className="skills">
          <h2 className="heading">Skills</h2>
          <hr style={{border:darkMode?"0.15rem solid #fff":null}} />
          <fieldset>
            <legend>Skills</legend>
            <input className={darkMode?"darkMode":null}
              onChange={changeHandelerSkills}
              type="text"
              name="skill"
              placeholder="React"
              value={skills}
            />
          </fieldset>

          <Button id={"skills"} onClick={editableData?edit:add} type={editableData?"Edit":"Add"} />
        </div>

        <div className="experience">
          <h2 className="heading">Work Experience</h2>
          <hr style={{border:darkMode?"0.15rem solid #fff":null}} />
          <fieldset>
            <legend>Orginasition Name</legend>
            <input className={darkMode?"darkMode":null}
              value={exp.companyName}
              onChange={changeHandelerExp}
              type="text"
              name="companyName"
              placeholder="Amazon"
            />
          </fieldset>

          <fieldset>
            <legend>Position</legend>
            <input className={darkMode?"darkMode":null}
              onChange={changeHandelerExp}
              value={exp.position}
              type="text"
              name="position"
              placeholder="Full Stack Developer "
            />
          </fieldset>

          <fieldset>
            <legend>From</legend>
            <input className={darkMode?"darkMode":null}
              onChange={changeHandelerExp}
              name="from"
              type="month"
              min={"2000-01"}
              value={exp.from}
            />
          </fieldset>

          <fieldset>
            <legend>To</legend>
            <input className={darkMode?"darkMode":null}
              onChange={changeHandelerExp}
              name="to"
              type="month"
              max={"2026-01"}
              value={exp.to}
            />
          </fieldset>
          <fieldset>
            <legend>Description</legend>
            <textarea
              className={darkMode?"darkMode":null}
              name="profileDesc"
              cols="100"
              rows="4"
              onChange={changeHandelerExp}
              value={exp.profileDesc}
              placeholder="Built and Developed responsive frontend UI components with well-designed, server-side code and APIs using NodeJs and implemented an admin panel to manage all data of clients, interns, and upcoming events."
            ></textarea>
          </fieldset>
          <Button id={"experience"} onClick={editableData?edit:add} type={editableData?"Edit":"Add"} />
        </div>

        <div className="projects">
          <h2 className="heading">Projects</h2>
          <hr style={{border:darkMode?"0.15rem solid #fff":null}} />
          <fieldset>
            <legend>Title</legend>
            <input className={darkMode?"darkMode":null}
              onChange={changeHandelerProjects}
              type="text"
              value={projects.titel}
              name="titel"
              placeholder="ShopMart"
            />
          </fieldset>

          <fieldset>
            <legend>Description</legend>
            <textarea
              className={darkMode?"darkMode":null}
              name="desc"
              placeholder="Full-stack E-Commerce application with cart, ordering, payment gateway, refund, etc. features."
              cols="100"
              rows="4"
              value={projects.desc}
              onChange={changeHandelerProjects}
            ></textarea>
          </fieldset>

          <fieldset>
            <legend>Tec Used</legend>
            <input className={darkMode?"darkMode":null}
              onChange={changeHandelerProjects}
              type="text"
              value={projects.tec}
              name="tec"
              placeholder="React | NodeJS"
            />
          </fieldset>

          <fieldset>
            <legend>Link</legend>
            <input className={darkMode?"darkMode":null}
              onChange={changeHandelerProjects}
              type="text"
              value={projects.projectLink}
              name="projectLink"
              placeholder="Hosted Link"
            />
          </fieldset>

          <Button id={"projects"} onClick={editableData?edit:add} type={editableData?"Edit":"Add"} />
        </div>

        <div className="achivements">
          <h2 className="heading">Academic and Extracurricular Achievements</h2>
          <hr style={{border:darkMode?"0.15rem solid #fff":null}} />
          <fieldset>
            <legend>Achivement</legend>
            <textarea
              className={darkMode?"darkMode":null}
              name="achivement"
              cols="100"
              rows="4"
              onChange={changeHandelerAchivemet}
              value={achivement}
              placeholder="Solved 900+ Problems on : GeeksforGeeks , Leetcode ,CodeChef , Codeforces , HackerRank ."
            ></textarea>
          </fieldset>
          <Button id={"achivements"} onClick={editableData?edit:add} type={editableData?"Edit":"Add"} />
        </div>
      </form>
    </>
  );
};

export default ResumeEditor;
