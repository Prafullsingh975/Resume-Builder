import React from "react";
import useDarkMode from "../Hooks/useDarkMode";
import useMode from "../Hooks/useMode";

const DarkModeBtn = () => {
  const darkMode = useDarkMode();
  const toggle = useMode();

  return (
    <>
      <button onClick={toggle} className="darkmodebtn" style={{color:darkMode?"#fff":null}}>
        <i className={darkMode ? "ri-toggle-fill" : "ri-toggle-line"}></i>
      </button>
    </>
  );
};

export default DarkModeBtn;
