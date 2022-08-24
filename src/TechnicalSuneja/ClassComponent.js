import React, { Component } from "react";
import ChildCompForClassStateEx from "./ChildCompForClassStateEx";

export default class ClassComponent extends Component {
  state = {
    users: [
      { id: 1, name: "Brian" },
      { id: 2, name: "Adrian" },
      { id: 3, name: "Fernando" },
    ],
  };

  render() {
    const { name, age, address } = this.props;
    const { street, city, pincode } = address;

    const allUsers = this.state.users.map((user) => {
      return <li key={user.id}>{user.name}</li>;
    });

    return (
      <div>
        ClassComponent by {name} age: {age}
        <div>
          {`Address: ${street}, ${city} `} {pincode}
        </div>
        <br></br>
        Displayed with the help of state: {allUsers}
        <br></br>
        Displayed by processing js map fn while rendering:
        {
            this.state.users.map(user => <li key={user.id}>{user.name}</li>)
        }
        <br></br>
        Displayed by calling child component:
        {
            this.state.users.map(user => <ChildCompForClassStateEx key={user.id} id = {user.id} name={user.name}/>)
        }
        {/* <ChildCompForClassStateEx/> */}
      </div>
    );
  }
}

// export default class ClassComponent extends Component {
//     render() {
//       return (
//         <div>ClassComponent by {this.props.name} age: {this.props.age}</div>
//       )
//     }
//   }
