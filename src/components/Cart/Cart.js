import React, { useState } from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
  const { name } = cart;

  let newCart = [];
  console.log(newCart);
  for (const item of cart) {
    newCart.push(item);
  }

  return (
    <div className="cart-heading">
      <h3>Selected Products: </h3>
      <div className="cart">
        <div className="cart-items">
          {newCart.map((item) => (
            <p>{item.name}</p>
          ))}
        </div>

        <div className="btn-choose">
          <button className="choose-one">
            <p>Choose 1 for me</p>
          </button>
          <button className="choose-again">
            <p>Choose again</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
