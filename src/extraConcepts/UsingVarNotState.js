import { useState } from "react";

function UsingVarNotState() {
  const [name, setName] = useState('Prashant');
  const [flag, setFlag] = useState(true)
  let newName = 'Rit'

  return (
    <>
      <div>{name}</div>
      <div>{newName}</div>
      <div>{flag ? 'true' : 'false'}</div>
      <button onClick={() => {
        newName = 'Sai'
        setName('Akash')}}>Change</button>
      <button onClick={() => setFlag(!flag)}>Change</button>
    </>
  );
}

export default UsingVarNotState;

//if we do not use state to store data and use var then this var data will not rerender even through we are force rerendering using another state.