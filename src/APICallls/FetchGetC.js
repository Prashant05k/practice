import React from "react";

export default class FetchGetC extends React.Component {
  constructor() {
    super();
    this.state = {
      listData: [],
    };
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => {
        this.setState({listData: data})
    })
    .catch(err => console.log(err))
  }
  render() {
    console.log(this.state.listData)
    return (
      <>
        <div>FetchGetC</div>
      </>
    );
  }
}
