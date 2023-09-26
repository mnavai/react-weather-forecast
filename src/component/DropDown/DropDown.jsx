import React from "react";
import "./DropDown.css";

const DropDown = (className, name, onClick, children) => {
  return (
    <div className="drop-down">
      <select className={className} name={name} onClick={onClick}>
        {children}
      </select>
    </div>
  );
};
export default DropDown;
