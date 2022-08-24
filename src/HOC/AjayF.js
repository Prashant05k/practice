import React, { useState } from "react";
import course from "./HOCF";


function AjayF(props) {
  const [marks, setMarks] = useState(0);
  const handleMarks = (e) => {
    setMarks(marks + 1);
  };
  console.log(props)
  return (
    <div>
      <h4 onMouseOver={handleMarks}>AjayF {marks} {props.subject}</h4>
    </div>
  );
}

export default course(AjayF);
