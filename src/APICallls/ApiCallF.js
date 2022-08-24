import React, { useEffect, useState } from "react";
import axios from "axios";

export default function ApiCallF() {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/postss")
      .then()
      .catch((err) => setError("URL not found"));

    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setData(res.data);
        console.log(res);
      })
      .catch((err) => setError("URL not found"));
  }, []);

  const sty = {
    color: "red",
  };
  return (
    <>
      <div>ApiCallF</div>
      <div>{error ? <h3 style={sty}>{error}</h3> : null}</div>
      <div>
        {data ? data.map((ele) => <li key={ele.id}>{ele.title}</li>) : null}
      </div>
    </>
  );
}
