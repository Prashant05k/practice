import React, { useEffect, useState } from "react";

function Cleanup() {
  const [currentWidth, setCurrentWidth] = useState(window.innerWidth);

  function updateWidth() {
    console.log("updateWidth called");
    setCurrentWidth(window.innerWidth);
  }

  useEffect(() => {
    console.log("event added");
    window.addEventListener("resize", updateWidth);

    return () => {
      console.log("event removed");
      window.removeEventListener("resize", updateWidth);
    };

    // return function cleanup(){
    //   console.log('remove');
    //   window.removeEventListener("resize", updateWidth);
    // }

    // return function (){
    //   console.log('remove');
    //   window.removeEventListener("resize", updateWidth);
    // }
  }, []);

  return (
    <>
      <div>{currentWidth}</div>
    </>
  );
}

export default Cleanup;

// class Cleanup extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       windowWidth: window.innerWidth,
//     };
//   }

//   updateWidth = () => {
//     console.log("added");
//     this.setState({ windowWidth: window.innerWidth });
//   };

//   componentDidMount() {
//     window.addEventListener("resize", this.updateWidth);
//   }

//   componentDidUpdate() {
//     window.addEventListener("resize", this.updateWidth);
//   }

//   componentWillUnmount() {
//     console.log("remove");
//     window.removeEventListener("resize", this.updateWidth);
//   }

//   render() {
//     return (
//       <>
//         <div>{this.state.windowWidth}</div>
//       </>
//     );
//   }
// }

// export default Cleanup;
