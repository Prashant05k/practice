import React from 'react'
import ProptypesF from './ProptypesF'

function ChildF(props) {
  return (<>
    <div>ChildF</div>
    <div><button onClick={props.fun}>Update count</button></div>
    </>)
}

export default ChildF

// import React from "react";

// function ChildF(props) {
//   props.value(
//     "I am a fn from Parent component but got executed from child component"
//   );
//   // console.log(props.value)
//   return <div>ChildF</div>;
// }

// export default ChildF;
