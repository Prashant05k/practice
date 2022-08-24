import React, { useState } from 'react'

export default function UseStateHookWithObject() {
    const [name, setName] = useState({first: '', last: ''})
   
  return (
    <div>UseStateHookWithObject
    <div>
        <input type='text' onChange={(e) => setName({...name, first: e.target.value})}/>
        <input type='text' onChange={e => setName({...name, last: e.target.value})}/>
    </div>
    <div>
        {name.first} {name.last}

    </div>
    {JSON.stringify(name)}</div>
  )
}
