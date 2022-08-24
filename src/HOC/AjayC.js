import React, { Component } from "react";
import course from "./HOC";

class AjayC extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  handleMarks = () => {
    this.setState({ count: this.state.count + 1 });
  };
  
  render() {
    return <div><h3 onMouseOver={this.handleMarks}>AjayC marks's {this.state.count} {this.props.hocSub}</h3></div>;
  }
}

export default course(AjayC)