import React, { Component } from "react";

export default class FormC extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: 'd', address: 'd'
    };
  }
  
  handleUsername = (e) => {
    // console.log(e.target.value)
    this.setState({username: e.target.value})
  };

  handleAddress = (e) => {
    this.setState({address: e.target.value})
  };

  handleSubmit = (e) => {
    const {username, address} = this.state
    e.preventDefault()
    console.log(this.state.username, this.state.address);
    alert(`${username} ${address}`)
  };
  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Username: </label>
            <input type="text" onChange={this.handleUsername} />
          </div>
          <div>
            <label>Address: </label>
            <input type="text" onChange={this.handleAddress} />
          </div>
          <div>
            <button>Submit</button>
          </div>
        </form>
      </>
    );
  }
}
