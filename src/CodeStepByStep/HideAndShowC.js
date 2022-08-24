import React, { Component } from "react";

export default class HideAndShowC extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: true,
    };
  }
  render() {
    return (
      <>
        <button onClick={() => this.setState({value: !this.state.value})}>
          Hide/Show
        </button>
        {this.state.value ? <div>HideAndShowC</div> : null}
      </>
    );
  }
}
