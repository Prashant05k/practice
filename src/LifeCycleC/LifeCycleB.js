import React, { Component } from "react";

export default class LifeCycleB extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    console.log("LifeCycleB: Constructor");
  }
  static getDerivedStateFromProps() {
    console.log("LifeCycleB: getDerivedStateFromProps");
    return null
  }
  componentDidMount() {
    console.log("LifeCycleB: componentDidMount");
  }
  render() {
    console.log("LifeCycleB: render");
    return <div>LifeCycleB</div>;
  }
}
