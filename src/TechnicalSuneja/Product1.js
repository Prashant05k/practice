import React, { Component } from "react";

export default class Product1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productID: "",
      qty: 0,
    };
  }
  handleCart = (pid) => {
    this.setState({
      productID: pid,
      qty: this.state.qty + 1,
    });
  };
  render() {
    // console.log(this.state)
    return (
      <>
        <div>
          <button onClick={() => this.handleCart(1)}>Add To Cart</button>
        </div>
        <Cart productID={this.state.productID} qty={this.state.qty} />
      </>
    );
  }
}

class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      qty: this.props.qty,
    };
    // console.log(this.state);
  }
  static getDerivedStateFromProps(props, state) {
    console.log(props, state);
    if (props.qty !== state.qty) {
      return {qty: props.qty};
    }
    return null;
  }
  render() {
    console.log(this.state);
    return (
      <div>
        <h1>Cart: {this.state.qty}</h1>
      </div>
    );
  }
}
