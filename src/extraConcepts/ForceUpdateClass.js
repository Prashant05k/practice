import React, { Component } from "react";

export class ForceUpdateClass extends Component {
  reRender = () => {
    this.forceUpdate();
  };

  render() {
    console.log("Rendered");
    return (
      <div>
        <button onClick={this.reRender}>Click Me</button>
      </div>
    );
  }
}

export default ForceUpdateClass;
