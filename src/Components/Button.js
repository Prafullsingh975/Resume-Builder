import React from "react";

import "./button.css"
import useDarkMode from "../Hooks/useDarkMode";

const Button = ({type,onClick,id}) => {
    const darkMode = useDarkMode();
  return (
    <button id={id} className="resumebtn" onClick={onClick} style={{color:darkMode?"#000":"#fff",backgroundColor:darkMode?"#fff":"#000"}}>{type}</button>
  );
};

export default Button;
