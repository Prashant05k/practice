import React, { Component, createRef } from "react";

export default class CreateRef extends Component {
  constructor(props) {
    super(props);

    this.userRef = createRef();
  }

  handleClick = () => {
    this.userRef.current.focus()
    // this.userRef.current.value='Enter your name'
    console.log(this.userRef.current.value);
  };
  render() {
    return (
      <>
        <div>CreateRef</div>
        <div>
          <input ref={this.userRef} type="text" name="user" />
          <button onClick={this.handleClick}>Click Me</button>
        </div>
      </>
    );
  }
}
