import React, { Component } from "react";

export default class CounterC extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  handleCounter = () => {
    this.setState({ count: this.state.count + 1 }, () => {console.log('setState call back fn executed')});
  };
  componentDidUpdate(prevProps, prevState){//it holds the previous value of state and props
    console.log('prevProps: ', prevProps, 'prevState: ', prevState)
    if(this.state.count !== prevState.count){
      console.log('State Updated')
    }
  }
  render() {
    return (
      <>
        <div>CounterC</div>
        <button onClick={this.handleCounter}>Counter {this.state.count}</button>
      </>
    );
  }
}
