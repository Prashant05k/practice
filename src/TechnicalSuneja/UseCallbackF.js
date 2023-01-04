import React from "react";
import { useMemo } from "react";
import { useCallback } from "react";
import { useState } from "react";
import UseCallBackChild from "./UseCallBackChild";

function UseCallbackF() {
  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0);
  const handleCountOne = () => {
    setCountOne(countOne + 1);
  };
  const func = useCallback(() => {
    console.log("func called");
  }, [countTwo]);
  // const func = useMemo(() => {
  //     console.log('func called')
  //   },[countOne])

  console.log(func);
  return (
    <>
      <div>UseCallbackF</div>
      <div></div>
      <div>
        <button onClick={() => setCountOne(countOne + 1)}>
          CountOne: {countOne}
        </button>
        <button onClick={() => setCountTwo(countTwo + 1)}>
          CountTwo: {countTwo}
        </button>
      </div>
      <UseCallBackChild fun={func} />
    </>
  );
}

export default UseCallbackF;
