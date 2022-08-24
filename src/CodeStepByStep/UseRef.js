import React, { useRef } from 'react'

function UseRef() {
  const refForFocus = useRef()
  const handleButtonClick = () => {
    refForFocus.current.focus()
    // refForFocus.current.value = 'Enter something'
    console.log(refForFocus.current.value)
  }
  return (<>
    <div>UseRef</div>
    <input type='text' ref={refForFocus}/>
    <button onClick={handleButtonClick}>Update</button>
    </>)
}

export default UseRef