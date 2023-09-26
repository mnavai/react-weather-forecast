import React from "react";
import './DropDown.css';

const DropDown = (className, name, onClick, text) => {
    return (
      <div className="drop-down">
        <select className={className} name={name} onClick={onClick}>{text}</select>
      </div>
    );
}
export default DropDown;