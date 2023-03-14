// import React, { useState } from "react";

// export default function Player(props) {
//   const { number } = props;
//   const [Players, setPlayers] = useState("");
//   return (
//     <div>
//       <p className="Topic">Player {number}</p>
//       <input
//         type="number"
//         inputMode="numeric"
//         pattern="[0-9]+"
//         placeholder="players amount..."
//         onChange={(e) => setPlayers(e.target.value)}
//         value={Players}
//         onKeyUp={(e) => {
//           if (e.key === "Enter") {
//             PlayerAdder();
//           }
//         }}
//         style={{
//           alignItems: "center",
//           marginLeft: "10vh",
//           marginRight: "10vh",
//           minWidth: "100vh",
//           textAlign: "center",
//           fontSize: "10vh",
//         }}
//       />
//     </div>
//   );
// }
