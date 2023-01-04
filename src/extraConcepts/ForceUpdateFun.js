import { useState } from "react";

function ForceUpdateFun() {
  const [flag, setFalg] = useState(true);

  function reRender() {
    setFalg(!flag);
  }

  console.log("Rendered");

  return (
    <>
      <div>
        <button onClick={reRender}>Click Me</button>
      </div>
    </>
  );
}

export default ForceUpdateFun;
