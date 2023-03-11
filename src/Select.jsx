import React, { useState } from "react";
import Myimage1 from "./Picture/images.jpg";
import Myimage2 from "./Picture/pngwing.com.png";
import Myimage3 from "./Picture/bluefaces.png";
import Myimage4 from "./Picture/pinkface.png";
import Myimage5 from "./Picture/greenface.png";

function Select({ alt, size }) {
  const circleStyle = {
    width: size,
    height: size,
    borderRadius: "40%",
    overflow: "hidden",
  };

  const imageStyle = {
    width: "10%",
    height: "10%",
    objectFit: "cover",
    borderRadius: "50%",
  };

  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { id: 1, image: Myimage1 },
    { id: 2, image: Myimage2 },
    { id: 3, image: Myimage3 },
    { id: 4, image: Myimage4 },
    { id: 5, image: Myimage5 },
  ];

  function handleOptionClick(optionId) {
    setSelectedOption(optionId);
  }

  function handleSubmit() {
    alert(`You selected  ${selectedOption}`);
  }

  return (
    <div>
      <h1 style={{ color: "red", fontSize: "50px" }}>How many players?</h1>
      <h1 style={{ color: "#3E9DDE", fontSize: "50px" }}>Select character!</h1>
      <div style={circleStyle}>
        {options.map((option) => (
          <img
            key={option.id}
            src={option.image}
            alt={alt}
            style={{
              ...imageStyle,
              border: selectedOption === option.id ? "3px solid red" : "",
            }}
            onClick={() => handleOptionClick(option.id)}
          />
        ))}
      </div>
      <div>
        <button
          onClick={handleSubmit}
          style={{ margin: "0 auto", fontSize: "100px", padding: "10px 20px" }}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default Select;
