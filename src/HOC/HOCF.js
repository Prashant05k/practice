import React, { Component } from "react";

const course = (STUDENT) => {
  function HOCF() {
    return (
      <>
        <div>coming from HOCF</div>
        <STUDENT subject="JAVA" />
      </>
    );
  }

  return HOCF;
  //   class HOCF extends Component {
  //     render() {
  //       return (
  //         <>
  //           <div>coming from HOCF</div>
  //           <STUDENT subject="JAVA" />
  //         </>
  //       );
  //     }
  //   }
  //   return HOCF;
};

export default course;
