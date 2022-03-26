import "./Cart.css";
import ShowProduct from "../ShowProduct/ShowProduct";

const Cart = ({ cart, products, showRandomProduct }) => {
  // cart clear button event handler
  const clearCart = () => {
    document.getElementById("clear-cart").textContent = "";
  };

  return (
    <div className="cart-heading">
      <h3>Selected Products: </h3>
      <div className="cart">
        <div className="cart-items" id="clear-cart">
          {cart.map((item) => (
            <ShowProduct key={item.id} item={item}></ShowProduct>
          ))}
        </div>

        <div className="btn-choose">
          <button onClick={() => showRandomProduct(products)} className="choose-one">
            <p>Choose 1 for me</p>
          </button>
          <button className="choose-again" onClick={() => clearCart()}>
            <p>Choose again</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
