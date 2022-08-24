import React, { useState } from "react";

export default function HideAndShow() {
  const [state, setState] = useState(false);
  const handleHideAndShow = () => {
    setState(!state)
  };
  return (
    <>
      
      <button onClick={handleHideAndShow}>Hide/Show</button>
      {state ? <div>HideAndShow</div> : null}
    </>
  );
}
