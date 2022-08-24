import React, { Component } from 'react'

export default class TopicsDone extends Component {
  state = {
    topicsDone: [
      'Routing Setup', 'Link: Displaying links on screen and redirecting to another component without refreshing page',
      'Functional component: props, children, object destructuring',
      
    ]
  }
  render() {
    
    return (
      <div><h2>TopicsDone</h2>
      <div>{
        this.state.topicsDone.map((ele, index) => <li key={index}>{ele}</li>)
      }
      </div></div>
    )
  }
}
