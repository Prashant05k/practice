import React from "react";
import { Link } from "react-router-dom";
import Home from "../Redux/Components/Home";
import NavBar from "../Redux/Components/NavBar";

function Withdraw() {
  return (
    <>
      <div>Withdraw</div>
      <div className="container">
        <NavBar />
        <Home />
      </div>
      <Link to="/">Home</Link>
      <br></br>
      <Link to="/bank/deposit">Deposit</Link>
    </>
  );
}

export default Withdraw;
