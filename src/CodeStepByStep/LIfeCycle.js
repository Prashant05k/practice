import React, { Component } from "react";

export default class LIfeCycle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
    };
    console.log("Constructor");
  }
  static getDerivedStateFromProps() {
    console.log("getDerivedStateFromProp");
    return null;
  }
  componentDidMount() {
    this.setState({ data: "Updated" });
    console.log("componentDidMount");
  }
  componentDidUpdate(prevProps, prevStates) {
    console.log('prevProps',prevProps,'prevStates',prevStates, 'currentState', this.state.data)
    console.log("componentDidUpdate");
  }
  componentWillUnmount(){
    console.log('componentWillUnmount')
  }
  render() {
    console.log("render");
    return <div>LIfeCycle</div>;
  }
}
