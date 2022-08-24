import React, { Component, createRef } from "react";

export default class UncontrolledComponentC extends Component {
  constructor(props) {
    super(props);

    this.name = createRef();
    this.password = createRef();
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.name.current.value, this.password.current.value);
  };
  slowness = () => {
    let i=0;
    // while(i<200000000){
    //   i++
    // }
  }
  render() {
    return (
      <>
      {
        this.slowness()
      }
        <div>UncontrolledComponentC</div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input type="text" placeholder="Enter your name" ref={this.name} />
          </div>
          <div>
            <input
              type="text"
              placeholder="Enter your password"
              required
              ref={this.password}
            />
          </div>
          <button>Submit</button>
        </form>
      </>
    );
  }
}
