import React, { useState } from "react";
import course from "./HOCF";


function VikasF(props) {
  const [marks, setMarks] = useState(0);
  const handleMarks = (e) => {
    setMarks(marks + 1);
  };
  console.log(props)
  return (
    <div>
      <h4 onMouseOver={handleMarks}>VikasF {marks} {props.subject}</h4>
    </div>
  );
}

export default course(VikasF);
