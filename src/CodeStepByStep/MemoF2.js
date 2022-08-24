import React, { memo } from "react";

function MemoF2(props) {
//   const [count1, count2] = props.value;
  console.log("Child component rendered", props.value);
  return <div>MemoF2 {props.value}</div>;
}

export default memo(MemoF2);
