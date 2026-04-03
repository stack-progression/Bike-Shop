import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import "./CartItem.css";

const CartItem = (item) => {
  const { addToCart, removeFromCart, deleteProduct } = useContext(ShopContext);

  return (
    <div key={item.id} className="cart-item">
      <button className="close" onClick={() => deleteProduct(item.id)}>
        <i class="fa-solid fa-xmark"></i>
      </button>
      <img className="bike-image" src={item.image} alt={item.name} />
      <div className="item-details">
        <p className="name">{item.name}</p>
        <hr />
        <h2 className="title">Detalii</h2>
        <p className="text">{item.description}</p>
        <h2 className="title">Brand</h2>
        <p className="text"> {item.brand}</p>
        <div className="price-quantity">
          <div className="price-quantity-container">
            <button
              className="quantity-button"
              onClick={() => removeFromCart(item.id)}
            >
              <i class="fa-solid fa-minus"></i>
            </button>
            <p className="quantity">{item.quantity}</p>
            <button
              className="quantity-button"
              onClick={() => addToCart(item.item)}
            >
              <i class="fa-solid fa-plus"></i>
            </button>
          </div>
          <p className="price">
            {item.price} {item.currency}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
