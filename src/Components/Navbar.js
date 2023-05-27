import React from "react";
import "./navbar.css"
import DarkModeBtn from "./DarkModeBtn";

const Navbar = () => {
  return (
    <div className="navbar">
        <h1>Resume Builder</h1>
        <DarkModeBtn/>
    </div>
  );
};

export default Navbar;
