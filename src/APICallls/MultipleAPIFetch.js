import React from "react";
import { useEffect, useState } from "react";

function MultipleAPIFetch() {
  const [areas, setAreas] = useState([]);
  const [hosts, setHosts] = useState([]);

  function fetchData() {
    const userApiUrl = "https://jsonplaceholder.typicode.com/users";
    const hostApiUrl = "https://api.github.com/users";
    const userData = fetch(userApiUrl).then((res) => res.json());
    const hostData = fetch(hostApiUrl).then((res) => res.json());

    Promise.all([userData, hostData])
      .then((allData) => {
        const allAreaData = allData[0];
        const allHostData = allData[1];
        // console.log(allAreaData)
        setAreas(allAreaData);
        setHosts(allHostData);
      })
      .catch((err) => console.log(err));
  }
  useEffect(() => {
    fetchData();
  }, []);

  console.log(areas);
  console.log(hosts);

  return (
    <>
      <div>MultipleAPIFetch</div>
    </>
  );
}

export default MultipleAPIFetch;
