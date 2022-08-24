import React, { Component } from "react";
import { Consumer } from "./ContextAPI";

export default class ContextAPIB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        count: 0
      }
    }
  render() {
    return (
      <>
        <div>ContextAPIB</div>
        <div><h2>Counter ContextAPIB: {this.state.count}</h2></div>
        <Consumer>
          {({ datas, fun }) => {
            console.log(datas, fun);
            return <>
            <h3>Count: {datas.count}</h3>
            <div><button onClick={fun}>Increase Count</button></div>
            </>}}
        </Consumer>
      </>
    );
    //   <Consumer>{(data) => {console.log(data)
    //     return (<>
    //       <h3>Count: {data.datas.count}</h3>
    //       <h3>{data.dataForB}</h3>
    //       <div><button onClick={() => data.datas.fun()}>Increase count</button></div>
    //       </>)}}</Consumer>
    //     </>)
  }
}

// import React, { Component } from 'react'
// import { Consumer } from './ContextAPI'

// export default class ContextAPIB extends Component {
//   render() {
//     return (<>
//       <div>ContextAPIB</div>
//       <Consumer>{(data) => {console.log(data)
//       return <h3>{data.dataForB}</h3>}}</Consumer>
//       </>)
//   }
// }

// import React, { Component } from 'react'
// import { myContext } from './ContextAPIA'

// export default class ContextAPIB extends Component {

//   render() {

//     return (<>
//       <div>ContextAPIB</div>
//       <myContext.Consumer>
//         {(data) => {
//             console.log(data.dataB)
//             return <h3>Success: {data.dataB}</h3>
//         }}
//       </myContext.Consumer>
//       </>)
//   }
// }
