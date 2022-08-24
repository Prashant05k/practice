import React, { Component } from "react";
import LifeCycleB from "./LifeCycleB";

export default class LifeCycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
    console.log("LifeCycleA: constructor");
  }

  static getDerivedStateFromProps(props, state) {//it receives props and state //usage: if state is dependent on props value then this method is used | if props value are receiving and state is being changed with respect to props value
    console.log("LifeCycleA: getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("LifeCycleA: componentDidMount");
  }

  handleCount = () => {
    this.setState({count: this.state.count + 1})
  }

  componentDidUpdate(prevProps, prevState){//it receives prevProps, prevState
    console.log("LifeCycleA: componentDidUpdate");
  }

  componentWillUnmount(){
    console.log("LifeCycleA: componentWillUnmount");
  }
  render() {
    console.log("LifeCycleA: render");
    return (<>
    <div>LifeCycleA</div>
    <div><button onClick={this.handleCount}>Count: {this.state.count}</button></div>
    <LifeCycleB/>
    </>);
  }
}
