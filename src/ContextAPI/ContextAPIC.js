import React, { Component } from 'react'
import { Consumer } from './ContextAPI'

export default class ContextAPIC extends Component {
  render() {
    return (<>
      <div>ContextAPIC</div>
      <Consumer>{(data) => {console.log(data)
      return <h3>{data.dataForC}</h3>}}</Consumer>
      </>)
  }
}


// import React, { Component } from 'react'
// import { myContext } from './ContextAPIA'

// export default class ContextAPIC extends Component {
//   render() {
//     return (<>
//       <div>ContextAPIC</div>
//       <myContext.Consumer>{(data) => {console.log(data)
//       return <h3>Success: {data.dataC}</h3>}}</myContext.Consumer>
//       </>)
//   }
// }
