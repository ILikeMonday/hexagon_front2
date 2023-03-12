// import React, { useState } from "react";

// function Player() {
//   const [showOptions, setShowOptions] = useState(false);
//   const [selectedOption, setSelectedOption] = useState(null);

//   function handleClick() {
//     setShowOptions(true);
//   }

//   function handleOptionSelect(event) {
//     setSelectedOption(event.target.value);
//   }

//   function handleSubmit() {
//     alert("You selected " + selectedOption);
//     setShowOptions(false);
//   }

//   const options = [
//     { value: "2 players", label: "2 players" },
//     { value: "3 players", label: "3 players" },
//     { value: "4 players", label: "4 players" },
//   ];

//   return (
//     <div>
//       <button onClick={handleClick}>Select an option</button>
//       {showOptions && (
//         <div
//           style={{ margin: "0 auto", fontSize: "40px", padding: "10px 20px" }}
//         >
//           <p>Choose one:</p>
//           {options.map((option) => (
//             <label key={option.value}>
//               <input
//                 type="radio"
//                 name="option"
//                 value={option.value}
//                 checked={selectedOption === option.value}
//                 onChange={handleOptionSelect}
//               />{" "}
//               {option.label}
//             </label>
//           ))}
//           <br />
//           <button onClick={handleSubmit}>Submit</button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Player;
