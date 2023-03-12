import React, { useState } from "react";

function Dropdown(props) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleDropdown() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="dropdown">
      <button
        className="dropdown-toggle"
        type="button"
        onClick={toggleDropdown}
      >
        <span>&#8230;</span>
      </button>
      {isOpen && (
        <div className="dropdown-menu">
          {props.options.map((option) => (
            <a key={option} className="dropdown-item" href="#">
              {option}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
export default Dropdown;
