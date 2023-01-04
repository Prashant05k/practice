import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Home from "../Redux/Components/Home";
import NavBar from "../Redux/Components/NavBar";

function Deposit() {
  const navigate = useNavigate();

  const navigateToHomePage = () => {
    navigate("/");
  };

  return (
    <>
      <div>Deposit</div>
      <div className="container">
        <NavBar />
        <Home />
      </div>
      <button onClick={navigateToHomePage}>
        Navigate to Home page using useNavigate hook
      </button>
      <Link to="/">Home</Link>
      <br></br>
      <Link to="/bank/withdraw">Withdraw</Link>
    </>
  );
}

export default Deposit;
