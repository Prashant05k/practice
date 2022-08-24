import React, { createContext, useContext } from 'react'
const myContext = createContext()

export default function UseContext() {
  return (<>
    <div>UseContext</div>
    <myContext.Provider value={{name: 'Prashant', age: 24}}>
        <Consumer1 />
        <Consumer2 />
    </myContext.Provider>
    </>)
}


function Consumer1(){
    const receivedValue = useContext(myContext)
    console.log(receivedValue)
    return <>
        <div>
            My name is {receivedValue.name}.
        </div>
    </>
}

function Consumer2(){
    const receivedValue = useContext(myContext)
    return <>
        <div>
            I am {receivedValue.age} years old.
            {/* <div><myContext.Consumer>{({name, age}) => <h4>{name}, {age}</h4>}</myContext.Consumer></div> */}
        </div>
    </>
}




























// import React, { useContext } from "react";

// const themes = {
//     light: {
//       foreground: "#000000",
//       background: "#eeeeee"
//     },
//     dark: {
//       foreground: "#ffffff",
//       background: "#222222"
//     }
//   };
  
//   const ThemeContext = React.createContext();
  
//   export default function UseContext() {
//     return (
//       <ThemeContext.Provider value={themes.dark}>
//         <Toolbar />
//       </ThemeContext.Provider>
//     );
//   }
  
//   function Toolbar(props) {
//     return (
//       <div>
//         <ThemedButton />
//       </div>
//     );
//   }
  
//   function ThemedButton() {
//     const theme = useContext(ThemeContext); 
//     return (
//       <button style={{ background: theme.background, color: theme.foreground }}>
//         I am styled by theme context!
//       </button>
//     );
//   }

  