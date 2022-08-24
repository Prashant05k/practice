import { useEffect } from "react";

export default function FetchPostF() {
  const listData = {
    title: "foo",
    body: "bar",
    userId: 1,
  };
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(listData),
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <div>FetchPostF</div>
    </>
  );
}
