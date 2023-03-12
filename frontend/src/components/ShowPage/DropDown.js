import React, { useState } from "react";

function Dropdown(props) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleDropdown() {
    setIsOpen(!isOpen);
  }

  function handleOptionSelected(option) {
    setIsOpen(false); // close the dropdown
    props.onOptionSelected(option); // call the onOptionSelected prop with the selected option
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
            <a
              key={option}
              className="dropdown-item"
              href="#"
              onClick={(e) => {
                e.preventDefault(); // prevent default behavior
                handleOptionSelected(option); // call the handleOptionSelected function with the selected option
              }}
            >
              {option}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
