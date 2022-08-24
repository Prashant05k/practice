import React from 'react'
import { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { bindActionCreators } from 'redux';
import {Actions} from '../actions/index'

function Home() {
  const [num, setNum] = useState(0)
  const dispatch = useDispatch();
  const {Withdraw, Deposit} = bindActionCreators(Actions, dispatch)
  const balance = useSelector(state => state.amount)
  // console.log(typeof(num))
  // console.log(balance)
  // console.log(Withdraw, Deposit)
  return (
    <div className="container">
    <div>
      <input type='number' onChange={(e) => {
        const n = parseInt(e.target.value)
        setNum(n)
        }}/>
    </div>
          <button className="btn btn-outline-success  mx-4" onClick={() => Withdraw(num)}>Withdraw</button>
          <button className="btn btn-outline-success" onClick={() => Deposit(num)}>Deposit</button>
          <div>
            <h1>Your Current Balance is {balance}</h1>
          </div>

    </div>
  )
}

export default Home