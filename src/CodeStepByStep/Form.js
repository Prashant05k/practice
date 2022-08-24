import React, { Component } from "react";

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      city: "",
    };
  }
  handleSubmit = () => {
    console.log(this.state);
  };
  render() {
    return (
      <>
        <div>Form</div>
        <div>
          <label>Username: </label>
          <input
            type="text"
            onChange={(e) => this.setState({ username: e.target.value })}
          />
        </div>
        <div>
          <label>City: </label>
          <input
            type="text"
            onChange={(e) => this.setState({ city: e.target.value })}
          />
        </div>
        <button onClick={this.handleSubmit}>Submit</button>
      </>
    );
  }
}
