import React from "react";
import { Consumer } from "./ContextAPI";

function FB() {
  return (
    <>
      <div>FB</div>
      <Consumer>{(receivedData) => {
        console.log(receivedData)
        return <>
            <h3>{receivedData.dataForB}</h3>
        </>
      }}</Consumer>
    </>
  );
}

export default FB;
