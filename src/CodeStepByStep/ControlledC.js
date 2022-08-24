import React, { Component } from "react";

export default class ControlledC extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      age: null,
    };
  }
  //created for lazy loadint
  slowness = () => {
    // let i=0;
    // while(i<20000000000){
    //     i++
    // }
  }
  render() {
    return (
      <>
      {
            this.slowness()
        }
        <div>ControlledC</div>
        
        <div>
          <input
            type="text"
            placeholder="Enter your name"
            onChange={(e) => this.setState({ name: e.target.value })}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter your age"
            onChange={(e) => this.setState({ age: e.target.value })}
          />
        </div>
        <button onClick={() => console.log(this.state)}>Submit</button>
      </>
    );
  }
}
