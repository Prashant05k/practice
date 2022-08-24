import React, { useState } from "react";
import axios from "axios";

function ApiPostF() {
  const [details, setDetails] = useState({ id: null, title: "" });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(details);
    axios
      .post("https://jsonplaceholder.typicode.com/postss", details)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    axios
      .post("https://jsonplaceholder.typicode.com/posts", details)
      .then((res) => console.log('Success', res))
      .catch((err) => console.log(err));
  };

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div>ApiPostF</div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>User Id: </label>
          <input type="text" name="id" onChange={handleChange} />
        </div>
        <div>
          <label>Title: </label>
          <input type="text" name="title" onChange={handleChange} />
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    </>
  );
}

export default ApiPostF;
