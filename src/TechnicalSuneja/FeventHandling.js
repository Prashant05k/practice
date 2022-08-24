import React from 'react'

export default function FeventHandling() {
    const handleEvent = e => {
      
        e.preventDefault()
        console.log('fn is called after an onclick event from button')
    } 
    
  return (
    <div>
        <button onClick={handleEvent}>Call Fn</button>
        <div>
            <a href='https://www.youtube.com/' onClick={(e) => handleEvent(e)}>Ex of Prevent Default</a>
        </div>
    </div>
  )
}
