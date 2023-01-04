
import React from "react";

class PassingMultiplePropsClass extends React.Component {
  constructor() {
    super();
    this.name = "Prashant";
  }

  getName = (name) => {
    return name;
  };

  render() {
    return (
      <>
        <div>
          <Example1 details={{ name: this.name, getName: this.getName }} />
        </div>
      </>
    );
  }
}

class Example1 extends React.Component {
  render() {
    const {name, getName} = this.props.details;
    console.log(name, getName('Gupta'))
    return (
      <>
        <div>Child</div>
      </>
    );
  }
}

export default PassingMultiplePropsClass;
