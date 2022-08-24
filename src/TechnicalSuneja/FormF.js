import React, { Fragment, useState } from "react";

function FormF() {
  const [userDetails, setuserDetails] = useState({
    username: "",
    address: "",
  });
  const { username, address } = userDetails;
  const handleUsername = (e) => {
    setuserDetails({ ...userDetails, username: e.target.value });
  };
  const handleAddress = (e) => {
    setuserDetails({ ...userDetails, address: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`${username} ${address}`);
    console.log(userDetails.username, userDetails.address);
  };

  return (
    <Fragment>
      <div>
        {username} {address}
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username: </label>
          <input type="text" onChange={handleUsername}></input>
        </div>
        <div>
          <label>Address: </label>
          <input type="text" onChange={handleAddress}></input>
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    </Fragment>
  );
}

export default FormF;
