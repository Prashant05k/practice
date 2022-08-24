import React, { Component } from "react";

export default class Product extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ProductID: "",
      qty: 0,
    };
  }

  addToCart = (pid) => {
    this.setState({
      ProductID: pid,
      qty: this.state.qty + 1,
    });
  };

  render() {
    return (
      <div>
        <button onClick={() => this.addToCart(1)}>Add To Cart</button>
        <Cart ProductID={this.state.ProductID} qty={this.state.qty} />
      </div>
    );
  }
}

class Cart extends Component {
  constructor(props) {
    super(props);
    console.log("Constructor");
    this.state = {
      qty: this.props.qty,
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps1: ", props, state);
    if (props.qty !== state.qty) {
      return { qty: props.qty };
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(
      "prevProps: ",
      prevProps,
      "prevState: ",
      prevState,
      "thisState: ",
      this.state.qty
    );
    console.log("Compment Updated: componentDidUpdate");
    if (this.state.qty !== prevState.qty) {
      console.log("State Updated");
    }
  }
  updateQty = () => {
    this.setState({
      qty: this.state.qty + 1,
    });
  };

  componentDidMount() {
    console.log("Compment mounted: componentDidMount");
  }

  render() {
    console.log("Compment Rendered", this.props);
    return (
      <div>
        <h1>Cart: {this.state.qty}</h1>
        {/* <button onClick={this.updateQty}>Update</button> */}
      </div>
    );
  }
}
