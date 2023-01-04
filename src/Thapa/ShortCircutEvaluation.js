import React, { useState } from "react";

function ShortCircutEvaluation() {
  const [arr, setArr] = useState(['elem1']);

  return (
    <>
      <div>{
      arr.length > 0 && (<h1>Array is not empty</h1>)
      }</div>
    </>
  );
}

export default ShortCircutEvaluation;