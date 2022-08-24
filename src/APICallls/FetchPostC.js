import React from "react";

export default class FetchPostC extends React.Component {
  state = {
    listData: {
      title: "foo",
      body: "bar",
      userId: 1,
    },
  };
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(this.state.listData),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }
  render() {
    return (
      <>
        <div>GetPostC</div>
      </>
    );
  }
}
