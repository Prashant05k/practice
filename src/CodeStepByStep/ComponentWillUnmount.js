import React, { Component } from "react";
import LifeCycleAF from "../LifeCycleF/LifeCycleAF";
import LIfeCycle from "./LIfeCycle";

export default class ComponentWillUnmount extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toggleC: true,
      toggleF: true,
    };
  }
  render() {
    return (
      <>
        <div>ComponentWillUnmount</div>
        {this.state.toggleC ? <LIfeCycle /> : null}
        {this.state.toggleF ? <LifeCycleAF /> : null}
        
        <button onClick={() => this.setState({ toggleC: !this.state.toggleC })}>
          Hide/Show Class
        </button>
        <div>
          <button onClick={() => this.setState({ toggleF: !this.state.toggleF })}>
            Hide/Show Fn
          </button>
        </div>
      </>
    );
  }
}
