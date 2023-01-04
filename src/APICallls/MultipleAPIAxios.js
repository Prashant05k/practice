import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

function MultipleAPIAxios() {
  const [areas, setAreas] = useState([]);
  const [hosts, setHosts] = useState([]);

  const fetchData = () => {
    const areasUrl = "https://jsonplaceholder.typicode.com/users";
    const hostsUrl = "https://api.github.com/users";
    const getAreas = axios.get(areasUrl);
    const getHosts = axios.get(hostsUrl);

    axios.all([getAreas, getHosts]).then(
      // res => console.log(res[0].data, res[1].data)
      //axios.spread because it's used to spread the array of arguments into multiple arguments. This prevents errors when you are making multiple ajax requests with axios.all.
      axios.spread((...allData) => { 
        console.log(allData.data)
        const allAreaData = allData[0].data;
        const allHostData = allData[1].data;

        setAreas(allAreaData);
        setHosts(allHostData);
      })
    ).catch(errors => {
      // react on errors.F
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(areas);
  console.log(hosts);
  return <></>;
}

export default MultipleAPIAxios;
