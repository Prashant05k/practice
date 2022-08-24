import React from 'react'
import reactDOM from 'react-dom'

function Portal() {
  return reactDOM.createPortal(
    <h1>Portal</h1>, document.getElementById('other-root')
  )
}

export default Portal



