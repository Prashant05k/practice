import React, { useState } from "react";
import MemoF2 from "./MemoF2";

function MemoF1() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(1);
  console.log('Parent')
  return (
    <>
      <div>MemoF1</div>
      <div>
        <button onClick={() => setCount1(count1 + 1)}>
          Update count1: {count1}
        </button>
        <button onClick={() => setCount2(count2 + 1)}>
          Update count2: {count2}
        </button>
      </div>
      
      <MemoF2 value={count2} />
    </>
  );
}

export default MemoF1;
