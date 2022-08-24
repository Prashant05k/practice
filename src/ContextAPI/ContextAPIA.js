import React, { Component } from 'react'
import { Provider } from './ContextAPI'
import ContextAPIB from './ContextAPIB'
import ContextAPIC from './ContextAPIC'

export default class ContextAPIA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        dataForB: 'This data is coming from A to B',
        dataForC: 'This data is coming from A to C',
        count: 0
      }
    }
    Counter = () => {
        this.setState({count: this.state.count + 1})
    }
    
  render() {
    const collection = {
        datas: this.state,
        fun: this.Counter
    }
    return (<>
      <div>ContextAPIA</div>
      <Provider value={collection}>
        <ContextAPIB/>
        <ContextAPIC/>
      </Provider>
      </>)
  }
}


// import React, { Component } from 'react'
// import { Provider } from './ContextAPI'
// import ContextAPIB from './ContextAPIB'
// import ContextAPIC from './ContextAPIC'

// export default class ContextAPIA extends Component {
//     constructor(props) {
//       super(props)
    
//       this.state = {
//         dataForB: 'This data is coming from A to B',
//         dataForC: 'This data is coming from A to C'
//       }
//     }
//   render() {
//     return (<>
//       <div>ContextAPIA</div>
//       <Provider value={this.state}>
//         <ContextAPIB/>
//         <ContextAPIC/>
//       </Provider>
//       </>)
//   }
// }


// import React, { Component, createContext } from 'react'
// import ContextAPIB from './ContextAPIB';
// import ContextAPIC from './ContextAPIC';
// export const myContext = createContext();

// export default class ContextAPIA extends Component {
//     constructor(props) {
//       super(props)
    
//       this.state = {
//         dataB: 'Transfer this data to B',
//         dataC: 'Transfer this data to C'
//       }
//     }
//   render() {
//     return (<>
//       <div>ContextAPIA</div>
//       <myContext.Provider value={this.state}>
//         <ContextAPIB/>
//         <ContextAPIC/>
//       </myContext.Provider>
//       </>)
//   }
// }
