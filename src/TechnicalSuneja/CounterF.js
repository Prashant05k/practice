import React, { useState } from "react";

function CounterF() {
  const array = useState("Prashant");
  const myName = array[0];
  const myNewName = array[1];
  console.log(array);
  const [name, setName] = useState("Prash Gup");
  const [count, setCount] = useState(0);
  const [Increment, setIncrement] = useState(0);
  const handleCounter = () => {
    setCount(count + 1);
    setName("Prashant Gupta");
    myNewName("Gupta");
  };
  const incrementBy10 = () => {
    for (let i = 0; i < 10; i++) {
      console.log("For loop is not working for useState");
      setIncrement((preCount) => preCount + 1);
    }
  };
  return (
    <>
      <div>CounterF</div>
      <div>
        {name} {myName}
      </div>
      <button onClick={handleCounter}>Counter {count}</button>
      <div>
        <button onClick={incrementBy10}>Increment by 10: {Increment}</button>
      </div>
    </>
  );
}

export default CounterF;
