import React, { Component } from "react";

const course = (ELEMENT) => {
  class HOC extends Component {
    render() {
      return (
        <div>
          <ELEMENT hocSub='JAVA'/>
        </div>
      );
    }
  }

  return HOC;
};

export default course;
