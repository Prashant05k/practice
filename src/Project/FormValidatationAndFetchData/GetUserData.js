import { useState } from "react";
import { useEffect } from "react";
import Table from "react-bootstrap/Table";

function GetUserData() {
  const [userDetails, setUserDetails] = useState([]);

  async function getDataFromServer() {
    const URL = "https://jsonplaceholder.typicode.com/users";
    const userData = await fetch(URL);
    const data = await userData.json();
    setUserDetails(data);
    console.log(data);
  }

  useEffect(() => {
    getDataFromServer();
  }, []);

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Username</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {userDetails.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.username}</td>
              <td>{item.phone}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default GetUserData;
