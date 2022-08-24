import React, { Component, PureComponent } from "react";

export default class PureComponentC extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
    };
  }
   handleCreateSlowness = () => {
    let i = 0;
    while (i < 2000000000) {
      i++;
    }
    console.log('handleCreateSlowness method called')
    if (this.state.value % 2 === 0) {
      return true;
    } else {
      return false;
    }
  };
  render() {
    console.log("Component Rendered");
    return (
      <>
        <div>PureComponentC</div>
        <h3>{this.handleCreateSlowness() ? "Even number" : "Odd NUmber"}</h3>
        <div>
          <button
            onClick={() => this.setState({ value: this.state.value + 0 })}
          >
            Update count: {this.state.value}
          </button>
          <button
            onClick={() => this.setState({ value: this.state.value + 1 })}
          >
            Update count: {this.state.value}
          </button>
        </div>
      </>
    );
  }
}
