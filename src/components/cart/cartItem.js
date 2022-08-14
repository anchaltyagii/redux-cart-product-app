import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";

const CartItem = (props) => {

  const {id, name, price, description, totalPrice, quantity} = props;
  console.log("total",totalPrice);
  const dispatch = useDispatch();

  const addHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        name,
        price,
      })
    );
  };

  const removeHandler = () => {
    dispatch(cartActions.removeFromCart({ id, price}));
  };

  return (
    <div className="product-item">
      <div>
        <h2>{name}</h2>
        <h3>Price: ₹{totalPrice}</h3>
      </div>
      <h3>{description}</h3>
      <div>
        <h3>Quantity: {quantity}</h3>
        <button onClick={addHandler}>+</button>
        <button onClick={removeHandler}>-</button>
      </div>
    </div>
  );
};

export default CartItem;
