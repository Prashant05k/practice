import React from "react";

export default class ShouldComponentUpdate extends React.Component {
  state = {
    count: 0,
  };


  shouldComponentUpdate(nextProps, nextState) {
    console.log(this.state.count, nextState);
    if(this.state.count !== nextState){
        return true;
        // return false;
    }
    // console.log("shouldComponentUpdate");
    return false;
  }
  //   componentDidUpdate() {
  //     console.log("componentDidUpdate");
  //   }
  render() {
    console.log('render')
    return (
      <>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Count: {this.state.count}
        </button>
      </>
    );
  }
}
