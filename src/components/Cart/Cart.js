import React from "react";
import "./Cart.css";

const Cart = () => {
  return (
    <div className="cart-heading">
      <h3>Selected Products: </h3>
      <div className="cart">
        <div className="cart-items">
          <p>name1</p>
          <p>name1</p>
          <p>name1</p>
          <p>name1</p>
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
