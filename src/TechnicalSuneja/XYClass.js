import React, { Component } from "react";

export default class XYClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      x: 0,
      y: 0,
    };
  }
  handleMoverOver = (e) => {
    // console.log(e)
    this.setState({ x: e.clientX, y: e.clientY });
  };
  componentDidMount() {
    window.addEventListener("mousemove", this.handleMoverOver);
  }
  render() {
    const { x, y } = this.state;
    return (
      // <div onMouseMove={this.handleMoverOver}>
      <div>
        XYClass
        <div>
          <h1>
            X: {x} Y: {y}
          </h1>
        </div>
      </div>
    );
  }
}
