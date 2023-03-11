import { motion } from "framer-motion";
import Grid from "./component/Grid.jsx";
import { useState, useRef, useEffect } from "react";

function Motion() {
  const gridRef = useRef(null);
  const [gridDimensions, setGridDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (gridRef.current) {
      setGridDimensions({
        width: gridRef.current.offsetWidth,
        height: gridRef.current.offsetHeight,
      });
    }
  }, []);

  return (
    <Grid ref={gridRef}>
      <motion.div
        drag
        dragConstraints={{
          left: 0,
          right: gridDimensions.width,
          top: 0,
          bottom: gridDimensions.height,
        }}
        style={{ width: 100, height: 100, background: "red" }}
      />
    </Grid>
  );
}
export default Motion;
