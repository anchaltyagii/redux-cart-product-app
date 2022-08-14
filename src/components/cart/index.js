import React from "react";
import { useSelector } from "react-redux";

import CartItem from "./cartItem";
import "./index.scss";

const Index = (props) => {
  const cartItem = useSelector((state) => state.cart.item);

  return (
    <div className="cart-main-div">
      <h1>Your Cart Page</h1>
      <div className="cart-div">
        {cartItem.map((item) => {
          return (
            <CartItem
              id={item.id}
              name={item.name}
              price={item.price}
              quantity={item.quantity}
              totalPrice={item.totalPrice}
              description={item.description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Index;
