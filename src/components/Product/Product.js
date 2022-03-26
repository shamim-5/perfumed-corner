import React from "react";
import "./Product.css";

const Product = ({ product }) => {
  const { id, name, price, ratings, img } = product;

  return (
    <div className="product">
      <img src={img} alt=""></img>
      <div className="product-info">
        <h3 className="product-name">{name}</h3>
        <p>
          Price: <span>$</span>
          {price}{" "}
        </p>
        <p>
          <small>Ratings: {ratings} stars</small>
        </p>
      </div>
      <button className="btn-cart">
        <p className="btn-text">Add to Cart</p>
      </button>
    </div>
  );
};

export default Product;
