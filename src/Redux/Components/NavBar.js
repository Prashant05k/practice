import React from "react";
import {useSelector} from 'react-redux'

function NavBar() {
  const balance = useSelector(state => state.amount)
  const count = useSelector(state => state.count)

  // console.log('state')

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Bank
          </a>
          <button className="btn btn-outline-success">
            Balance: {balance}
          </button>
          <button className="btn btn-outline-success">
            Cart Items: {count}
          </button>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
