import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import CartItem from "../Components/CartItem/CartItem";
import "./CSS/Cart.css";

const Cart = () => {
  const { cart } = useContext(ShopContext);
  console.log(cart);
  // console.log(cart[0]);
  // console.log(cart[0].id);
  // console.log(cart[0].variants[0].images[0]);
  // console.log(cart[0].name);
  // console.log(cart[0].shortDescription);
  // console.log(cart[0].brand);
  // console.log(cart[0].price);
  // console.log(cart[0].currency);
  // console.log(cart[0].quantity);

  return (
    <div className="cart">
      <div className="cart-header">
        <p>Cos de cumparaturi</p>
        <p>({cart.length}) Produse</p>
      </div>
      <div className="cart-list-items">
        {cart?.map((i) => {
          return (
            <CartItem
              key={i.id}
              item={i}
              id={i.id}
              image={i?.variants[0]?.images[0]}
              name={i.name}
              description={i.shortDescription}
              brand={i.brand}
              price={i.price}
              currency={i.currency}
              quantity={i.quantity}
            />
          );
        })}
      </div>
      <div>
        <div>
          <p>Acceptam</p>
          <img
            src="https://www.pngall.com/wp-content/uploads/5/Visa-Logo-PNG-Picture.png"
            alt="Visa"
          />
        </div>
        <button>Comanda</button>
      </div>
    </div>
  );
};

export default Cart;
