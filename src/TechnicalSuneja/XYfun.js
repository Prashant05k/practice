import React, { useEffect, useState } from "react";

function XYfun() {
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });
  const { x, y } = coordinates;
  const handleCoordinates = (e) => {
    setCoordinates({ x: e.clientX, y: e.clientY });
  };
  useEffect(() => {
    window.addEventListener("mousemove", handleCoordinates);
  }, []);
  return (
    <>
      <div>XYfun</div>
      <h1>
        X: {x} Y: {y}
      </h1>
    </>
  );
}

export default XYfun;
