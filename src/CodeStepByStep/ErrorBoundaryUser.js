import React, { Component } from 'react'

export default class ErrorBoundaryUser extends Component {
  render() {
    if(true){
        throw new Error('Error found')
    }
    return (
      <div>ErrorBoundaryUser</div>
    )
  }
}
