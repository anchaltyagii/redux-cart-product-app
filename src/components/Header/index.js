import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../../store/ui-slice';
import './index.scss';

const Index = () => {

  const cartCount = useSelector((state) => state.cart.isCountVisible)
  console.log("cartCount = ",cartCount);
  
  const dispatch = useDispatch();

  const cartHandler = () => {
    console.log("clicked");
     dispatch(uiActions.toggle());
  }

  return (
    <div className='header-div'>
      <h2>Redux-Cart</h2>
      <button className='header-button' onClick={cartHandler}>My Cart <span>{cartCount}</span></button>
    </div>
  )
}

export default Index;
