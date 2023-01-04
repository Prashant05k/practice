import React from "react";

class UpdateStateInRenderClass extends React.Component {
  state = {
    flag: true,
  };

  render() {
    console.log(this.state.flag);
    if (this.state.flag) {
      this.setState({ flag: false }, () => {
        this.setState({ flag: true });
      });
    }

    return <>{}</>;
  }
}

export default UpdateStateInRenderClass;
