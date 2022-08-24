import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { CartActions } from '../State/Actions';
import {bindActionCreators} from 'redux'

function CartHome() {
    const dispatch = useDispatch();
    // console.log(CartActions)
    const {addToCart, removeFromCart} = bindActionCreators(CartActions, dispatch)

  return (
    <div><div>
    <button className="btn btn-outline-success my-2 mx-4" onClick={() => addToCart(1)}>Add To Cart</button>
    <button className="btn btn-outline-success my-2" onClick={() => removeFromCart(1)}>Remove From Cart</button>
  </div></div>
  )
}

export default CartHome