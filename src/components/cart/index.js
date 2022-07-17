import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice';
import './index.scss';

const Index = () => {
  const cartItem = useSelector((state) => state.cart.item)
  console.log("Cart Page",cartItem[0]);

  const dispatch = useDispatch();

  const removeHandler = () => {
    dispatch(cartActions.removeFromCart())
    console.log("remove clciked");
  }

  return (
    <div className='cart-main-div'>
      <h1>Your Cart Page</h1>
      <div className='cart-div'>{
          cartItem.map((item) => {
            return(
              <div className="product-item">
              <h2>{item.name}</h2>
              <h3>Price: ₹{item.price}</h3>
              <h3>{item.description}</h3>
              <button>+</button>
              <button onClick={removeHandler}>-</button>
            </div>
          )})
        }</div>
    </div>
  )
}

export default Index
