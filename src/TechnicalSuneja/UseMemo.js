import React, { useState, useMemo } from "react";

function UseMemo() {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);
  const handlecounterOne = () => {
    setCounterOne(counterOne + 1);
  };
  const handlecounterTwo = () => {
    setCounterTwo(counterTwo + 1);
  };
  const isEven = useMemo(() => {
    let i = 0;
    console.time()
    while (i < 2000000000) {
      i++;
    }
    console.timeEnd()
    return counterTwo % 2 === 0;
  }, [counterTwo]);
  // useMemo(() => {
  //   console.log("UseMemo is called");
  // });
  return (
    <>
      <div>useMemo</div>
      <button onClick={handlecounterOne}>counterOne: {counterOne}</button>
      <button onClick={handlecounterTwo}>counterTwo: {counterTwo}</button>
      <div>
        <h3>{`Is ${isEven ? "EVEN" : "ODD"} number`}</h3>
      </div>
    </>
  );
}

export default UseMemo;

