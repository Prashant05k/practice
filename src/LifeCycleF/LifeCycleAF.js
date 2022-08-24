import React, { useEffect, useState } from "react";

function LifeCycleAF() {
  const [name, setName] = useState('Prashant');
  
  // Similar to componentDidMount
  useEffect(() => console.log("componentDidMount: useEffect with no dependency"),[]);

  // componentDidUpdate
  useEffect(() => console.log("componentDidUpdate: useEffect with name dependency"),[name]);

  //componentwillunmount
  // useEffect(() => {
  //   return () => console.log('useEffect: component will unmount')},[]);

  useEffect(() => () => console.log('useEffect: component will unmount'), []);

  return <div>
  {console.log('Rendered')}
  {name}
  <div><button onClick={() => {setName([...name, 'Gupta'])}}>Full Name</button></div></div>;
}

export default LifeCycleAF;                   
