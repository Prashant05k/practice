import React, { useEffect, useState } from "react";

function UseEffect() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("useEffect Called", count);
    return () => console.log('unmount')
  }, []); // if pass undefined and null it will run for didmount and didupdate
  //[null], [undefined] it will run only for didmount
  //[]: only for componentDidMount
  //[count]: only for componentDidUpdate
  //[count > 5]: conditional based
//   return () => console.log('unmount')

// }, []); as component will unmount
  return (
    <>
      <div>UseEffect</div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Count: {count}
      </button>
    </>
  );
}

export default UseEffect;
