function Throttle() {
  const btn = document.querySelector;
  //   function throttle (callback, limit) {
  //       let waiting = false;                      // Initially, we're not waiting
  //       return function () {                      // We return a throttled function
  //           if (!waiting) {                       // If we're not waiting
  //             //   callback.apply(this);  // Execute users function
  //               waiting = true;                   // Prevent future invocations
  //               setTimeout(function () {
  //                 callback();       // After a period of time
  //                   waiting = false;              // And allow future invocations
  //               }, limit);
  //           }
  //       }
  //   }

  function throttle(d) {
    let waiting = false;
    return function(){
        console.log('button clicked')
        if(!waiting){
            waiting = true
            setTimeout(()=>{
                waiting = false
                console.log('Throttled')
            },d)
        }
        
    }
  }

  const handleClick = throttle(2000);

  return (
    <>
      <button onClick={handleClick}>Throttle</button>
    </>
  );
}

export default Throttle;
