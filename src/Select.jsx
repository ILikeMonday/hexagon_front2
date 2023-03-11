import React from "react";
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

  return (
    <div>
      <h1>Select charecter !!!</h1>
      <div style={circleStyle}>
        <img src={Myimage1} alt={alt} style={imageStyle} />
        <img src={Myimage2} alt={alt} style={imageStyle} />
        <img src={Myimage3} alt={alt} style={imageStyle} />
        <img src={Myimage4} alt={alt} style={imageStyle} />
        <img src={Myimage5} alt={alt} style={imageStyle} />
      </div>
    </div>
  );
}

export default Select;
