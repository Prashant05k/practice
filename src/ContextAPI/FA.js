import React, { useState } from "react";
import { Provider } from "./ContextAPI";
import FB from "./FB";
import FD from "./FD";

function FA() {
  const [details, setDetails] = useState({
    dataForB: "This data is coming from A to B",
    dataForD: "This data is coming from A to D",
    count: 0,
  });
  const handleCount = () => {
    setDetails({...details, count: details.count + 1 });
  };
  const moreDetails = {
    data: details,
    fun: handleCount,
  };
  return (
    <>
      <div>FA</div>
      <Provider value={details}>
        <FB />
      </Provider>
      <Provider value={moreDetails}>
        <FD />
      </Provider>
    </>
  );
}

export default FA;
