import React, { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: false
    };
  }
  static getDerivedStateFromError(error) {
    return { error: true };
  }
  render() {
    // console.log(this)
    return (
      <>{this.state.error ? <div><h1>Something went wrong!</h1></div> : this.props.children}</>
    );
  }
}
