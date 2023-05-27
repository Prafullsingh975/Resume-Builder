import React, { Children } from "react";
import "./border.css";

const Border = ({children}) => {
  return (
    <>
    <div className="border">
      {children}
    </div>
      {/* <div className="header"></div>
      <div className="left"></div>
      {children}
      <div className="right"></div>
      <div className="footer"></div> */}
    </>
  );
};

export default Border;
