import axios from "axios";
import React, { Component } from "react";

export default class ApiCallC extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        details: [], error: ''
      }
    }
  componentDidMount() {

    axios.get('https://jsonplaceholder.typicode.com/postss')
    .then(res => {
        this.setState({details: res.data})
    })
    .catch(err => this.setState({error: 'URL not found'}))

    //Async
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res => {
        this.setState({details: res.data})
        console.log(res)
    })
    .catch(err => 
        this.setState({error: 'URL not found'}));

    //Sync
    console.log(this.state.details)
}
  render() {
    console.log(this.state.details)
    const {details, error} = this.state
    const styErr = {
        color: 'red'
    }
    return <>
    <div>ApiCall</div>
    <div>{error ? <h3 style={styErr}>{error}</h3> : null}</div>
    <div>{details.length ? details.map(data => <li key={data.id}>{data.title}</li>) : null}</div>
    
    </>;
  }
}
