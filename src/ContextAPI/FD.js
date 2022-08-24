import React from "react";
import { Consumer } from "./ContextAPI";

function FD() {
  return (
    <>
      <div>FD</div>
      <Consumer>{({data, fun}) => {
        {/* console.log(data, fun) */}
      return <>
        <h3>{data.dataForD}</h3>
        <h1>Count: {data.count}</h1>
        <button onClick={fun}>Increment Count</button>
      </>
      }}</Consumer>
    </>
  );
}

export default FD;
