import { useEffect } from "react";
import { useState } from "react";
import React from "react";

function UpdateStateInRenderFun() {
  const [flag, setFlag] = useState(true);

  useEffect(() => {
    setFlag(true);
  });

  console.log(flag);
  return (
    <>
      <div>{flag ? setFlag(false) : null}</div>
    </>
  );
}

export default UpdateStateInRenderFun;