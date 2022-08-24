import React, { Component } from "react";

export default class LifeCycleD extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    console.log("LifeCycleD: Constructor");
  }
  static getDerivedStateFromProps() {
    console.log("LifeCycleD: getDerivedStateFromProps");
    return null
  }
  componentDidMount() {
    console.log("LifeCycleD: componentDidMount");
  }
  render() {
    console.log("LifeCycleD: render");
    return <div>LifeCycleD</div>;
  }
}
