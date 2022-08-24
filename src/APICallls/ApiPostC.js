import React, { Component } from "react";
import axios from "axios";

export default class ApiPostC extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: null,
      title: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);

    axios
      .post("https://jsonplaceholder.typicode.com/postss")
      .then()
      .catch((err) => console.log(err));

    axios
      .post("https://jsonplaceholder.typicode.com/posts", this.state)
      .then((res) => {
        console.log("Success", res);
      })
      .catch((err) => console.log(err));
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { id, title } = this.state;
    return (
      <>
        <div>ApiPostC</div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>User Id: </label>
            <input type="text" name="id" onChange={this.handleChange} />
          </div>
          <div>
            <label>Title: </label>
            <input type="text" name="title" onChange={this.handleChange} />
          </div>
          <div>
            <button>Submit</button>
          </div>
        </form>
      </>
    );
  }
}
