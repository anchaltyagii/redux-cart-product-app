import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import Cart from "../cart/index";

const Item = (props) => {
  const dispatch = useDispatch();

  const countHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        name,
        price,
        description,
      })
    );
  };

  const { id, name, price, description } = props;
  return (
    <div className="product-item">
      <h2>{name}</h2>
      <h3>Price: ₹{price}</h3>
      <h3>{description}</h3>
      <button onClick={countHandler}>Add to cart</button>
    </div>
  );
};

export default Item;
