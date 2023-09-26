import React from "react";
import './DropDown.css';

const DropDown = (name, onClick, children) => {
    return (
      <div className="drop-down">
        <select className="select-city" name={name} onClick={onClick}>{children}</select>
      </div>
    );
}
export default DropDown;