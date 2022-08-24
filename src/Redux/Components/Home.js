import React from "react";
import {useSelector, useDispatch} from 'react-redux'
import { Actions } from "../State/Actions";

import {bindActionCreators} from 'redux'
import CartHome from "./CartHome";

function Home() {
    // console.log(Actions)
    // const {withdrawMoney, depositMoney} = Actions
    const dispatch = useDispatch()
    const balance = useSelector(state => {
        console.log(state)
        return state.amount})

    const {depositMoney, withdrawMoney} = bindActionCreators(Actions, dispatch)
    // console.log(withdrawMoney, depositMoney)
  return (
    <>
      <div className="container">
        {/* <button className="btn btn-outline-success mx-4" onClick={() => dispatch(withdrawMoney(100))}>
          Withdraw: 100
        </button>
        <button className="btn btn-outline-success" onClick={() => dispatch(depositMoney(100))}>
          Deposit: 100
        </button> */}
        <button className="btn btn-outline-success mx-4" onClick={() => (withdrawMoney(100))}>
          Withdraw: 100
        </button>
        <button className="btn btn-outline-success" onClick={() => (depositMoney(100))}>
          Deposit: 100
        </button>
        <div>
          <h1>Current Balance: {balance}</h1>
        </div>
      </div>
      <CartHome/>
    </>
  );
}

export default Home;
