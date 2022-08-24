import React, { Component } from "react";

export default class ComponentDidUpdate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      value: "",
    };
  }
  //   handleCount = () => {
  //     this.setState({ count: this.state.count + 1 });
  //   };
  componentDidUpdate(prevProps, prevState) {//this method is running for both text change and button click. we can restrict that by giving conditions.
    // console.log(prevState, prevState, this.state.count);
    if(prevState.value != this.state.value){
        console.log("componentDidUpdate called for text change");
    }
    if (prevState.count != this.state.count) {
      console.log("componentDidUpdate called for counter");
    }
  }
  render() {
    return (
      <div>
        ComponentDidUpdate
        <div>
          <input
            type="text"
            onChange={(e) => this.setState({ value: e.target.value })}
          />
        </div>
        <div>
          <button
            onClick={() => this.setState({ count: this.state.count + 1 })}
          >
            Counter {this.state.count}
          </button>
        </div>
      </div>
    );
  }
}
