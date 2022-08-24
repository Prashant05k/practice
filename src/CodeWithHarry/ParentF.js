import React, { useState } from 'react'
import ChildF from './ChildF'

function ParentF() {
    const [count, setCount] = useState(0)
    const handleCount = () => {
        setCount(count + 1)
        
    }
  return (<>
    <div>ParentF</div>
    <div><h1>Count: {count}</h1></div>
    
    <ChildF fun={handleCount}/>
    </>)
}

export default ParentF


// import React from 'react'
// import ChildF from './ChildF'

// export default function ParentF() {
//     const printData = (data) => {
//         console.log(data)
//     }
//   return (<>
//     <div>ParentF</div>
//     <ChildF value={printData}/>
//     </>)
// }
