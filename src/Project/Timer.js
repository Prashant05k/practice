import { useState } from "react";

function Timer() {
  const [timer, setTimer] = useState();
  const [count, setCount] = useState(0);

  function btnStart() {
    const time = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);

    setTimer(time);
  }

  function btnStop() {
    console.log("stop");
    clearInterval(timer);
    // setCount(count);
  }
  console.log(timer, count);
  return (
    <>
      <div>Count {count}</div>
      <button onClick={btnStart}>Start</button>
      <button onClick={btnStop}>Stop</button>
    </>
  );
}

export default Timer;