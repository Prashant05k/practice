import React, { useState } from "react";

export default function UseStateWithArray() {
  const [array, setArray] = useState([]);
  const handleNumber = (e) => {
    const num = Math.ceil(Math.random() * 10);
    console.log(num);
    setArray([...array, num]);
  };
  return (
    <div>
      UseStateWithArray
      <div>
        <button onClick={handleNumber}>Add a random number to an array</button>
      </div>
      <div>
        {array.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </div>
    </div>
  );
}
