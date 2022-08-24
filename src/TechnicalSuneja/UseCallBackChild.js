import React, { memo } from "react";

function UseCallBackChild({ fun, setCountTwo }) {
  console.log("UseCallBackChild called");
  return (
    <>
      <div>UseCallBackChild: this child compo is dependent on countTwo</div>
      <button onClick={fun}>call fn</button>
      
    </>
  );
}

export default memo(UseCallBackChild);
// export default UseCallBackChild;
