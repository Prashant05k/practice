import React, { Component } from "react";

export default class CeventHandling extends Component {
  constructor(props) {
    super(props);

    // this.handleEvent=this.handleEvent.bind(this)
    console.log(this)
    this.state = {
      course: "MCA",
      numbers: [1, 2, 3, 4, 5],
      age: this.props.age//props can be recieved in state and can be updated/modified using setState
    };
  }

//     handleEvent(){
//         console.log(this)
//   }
  
  handleEvent = () => {
    this.setState({ course: "BCA" });
    this.setState({age: 32})
  };

  
  render() {

    const {array} = this.props
    const data = array.map((ele, index) => <li key={index}>{ele}</li>)

    return (
      <div>
        <div>
          {this.state.course} {this.props.age} {this.state.age}
        </div>
        {/* <button onClick={this.handleEvent}>Change the state</button> */}
        <button onClick={this.handleEvent}>Change the state</button>
        <div>
            {
                this.state.numbers.map((element, index) => <li key={index}>{element}</li>)
            }
        </div>
        <div>
            {
                data
            }
        </div>
      </div>
    );
  }
}
