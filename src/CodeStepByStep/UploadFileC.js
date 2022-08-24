import React, { Component } from "react";
import axios from "axios";

export default class UploadFileC extends Component {
  handleFile = (e) => {
    console.log(e.target.files);
    const fileData = e.target.files;
    axios
      .post("https://jsonplaceholder.typicode.com/posts", fileData)
      .then((res) => console.log('Success', res))
      .catch((err) => console.log(err));
    
  };
  render() {
    return (
      <>
        <div>UploadFileC</div>
        <input type="file" onChange={this.handleFile} />
      </>
    );
  }
}
