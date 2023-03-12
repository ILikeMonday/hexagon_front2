import React, { useState } from "react";

function Player() {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  function handleClick() {
    setShowOptions(true);
  }

  function handleOptionSelect(event) {
    setSelectedOption(event.target.value);
  }

  function handleSubmit() {
    alert("You selected " + selectedOption);
    setShowOptions(false);
  }

  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  return (
    <div>
      <button onClick={handleClick}>Select an option</button>
      {showOptions && (
        <div>
          <p>Choose one:</p>
          {options.map((option) => (
            <label key={option.value}>
              <input
                type="radio"
                name="option"
                value={option.value}
                checked={selectedOption === option.value}
                onChange={handleOptionSelect}
              />{" "}
              {option.label}
            </label>
          ))}
          <button onClick={handleSubmit}>Submit</button>
        </div>
      )}
    </div>
  );
}

export default Player;
