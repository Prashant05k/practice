import React, { Component } from 'react'

export default class ChildCompForClassStateEx extends Component {
  render() {
    console.log('Props is not able to access key in child component',this.props)
    return (
      <div>ChildCompForClassStateEx: "{this.props.name}"</div>
    )
  }
}
