import React, { Component } from "react";

export default class State extends Component {
  constructor(props) {
    super(props);

    this.state = {
      msg: "Demo for class based state",
    };
  }
  handleSetState = () => {
    this.setState({ msg: "I get changed with the help of this.setState fn called inside a fn" });
  };
  render() {
    return (
      <div>
        <div>{this.state.msg}</div>

        <button onClick={this.handleSetState}>Get Demo For setState</button>
        <button onClick={() => this.setState({msg: 'I am changed.'})}>Get Demo for setstate without calling another fn</button>
      </div>
    );
  }
}
