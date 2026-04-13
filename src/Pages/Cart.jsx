import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import CartItem from "../Components/CartItem/CartItem";
import "./CSS/Cart.css";
import { useCards } from "../Hooks/useCards.js";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { data: cards, isPending: cardsLoading } = useCards();

  const { cart, totalAmount, totalQuantity } = useContext(ShopContext);
  console.log(cart);
  const navigate = useNavigate();

  // console.log(cart[0]);
  // console.log(cart[0].id);
  // console.log(cart[0].variants[0].images[0]);
  // console.log(cart[0].name);
  // console.log(cart[0].shortDescription);
  // console.log(cart[0].brand);
  // console.log(cart[0].price);
  // console.log(cart[0].currency);
  // console.log(cart[0].quantity);

  if (cardsLoading) return "Loading...";
  console.log(cards);

  if (cart.length > 0) {
    return (
      <div className="cart">
        <div className="cart-header">
          <p>Coș de cumpărături</p>
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
        <div
          className="cart-header"
          style={{ maxWidth: "1000px", flexDirection: "row-reverse" }}
        >
          <p>
            Total: {totalAmount.toFixed(2)} {cart[0]?.currency}
          </p>
          <p>Cantitatea totală: {totalQuantity}</p>
        </div>
        <div className="cart-footer">
          <div className="cart-footer-payment">
            <p>Acceptăm</p>
            <div className="cart-footer-payment-cards">
              {cards?.map((i) => {
                return <img loading="lazy" src={i.image} alt={i.name} />;
              })}
            </div>
          </div>
          <button>Comandă</button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="cart cart-empty">
        <div className="cart-header">
          <div className="cart-header-container">
            <p>Coș de cumpărături</p>
            <p>Cosul dumneavoastră este gol</p>
            <button onClick={() => navigate("/shop")}>Spre Magazin</button>
          </div>
          <p>({cart.length}) Produse</p>
        </div>
        <div className="cart-list-items">
          <img
            loading="lazy"
            className="cart-empty-cart"
            src="https://bike-images.andrew-code.com/Bike%20Image/empty-cart.webp"
            alt=""
          />
        </div>
      </div>
    );
  }
};

export default Cart;
