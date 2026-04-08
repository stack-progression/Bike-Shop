import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import { ShopContext } from "../../Context/ShopContext";
const Header = () => {
  const { setOpenSearch, openSearch, setOpenFilter, scrollToTop, cart } =
    useContext(ShopContext);
  const [scroll, setScroll] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  console.log(cart);

  useEffect(() => {
    function handleScroll() {
      const currentPosition = window.scrollY;
      if (currentPosition > lastScroll && currentPosition > 0) {
        setScroll(false);
      } else {
        setScroll(true);
      }
      // console.log(currentPosition);
      // console.log(lastScroll);
      setLastScroll(currentPosition);
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, [lastScroll]);

  return (
    <div className={`header ${scroll || openSearch ? "appears" : "hide"}`}>
      <Link onClick={scrollToTop} to="/">
        <img
          loading="eager"
          className="logo"
          src="https://bike-images.andrew-code.com/Bike%20Image/logo/f0d600aa-7f19-4aed-bf2b-d9c35d16cbc2.png"
          alt="Logo Velaro"
        />
      </Link>
      <div className="about-contact">
        <NavLink onClick={scrollToTop} to="/about">
          Despre
        </NavLink>
        <NavLink onClick={scrollToTop} to="/contact">
          Contact
        </NavLink>
      </div>
      <div className="header-options">
        <button
          onClick={() => {
            setOpenSearch(true);
          }}
        >
          <img
            loading="eager"
            src="https://bike-images.andrew-code.com/Bike%20Image//icons/loupe.png"
            alt="loupe"
          />
        </button>
        <Link className="cart-link" onClick={scrollToTop} to="/cart">
          <p className="cart-quantity">{cart.length}</p>
          <img
            loading="eager"
            src="https://bike-images.andrew-code.com/Bike%20Image/icons/shopping-cart.png"
            alt="shopping-cart"
          />
        </Link>
        <Link onClick={scrollToTop} to="/autentification">
          <img
            loading="eager"
            src="https://bike-images.andrew-code.com/Bike%20Image/icons/people.png"
            alt="User"
          />
        </Link>
        <button
          onClick={() => {
            setOpenFilter(true);
            setOpenSearch(false);
          }}
        >
          <img
            loading="eager"
            src="https://bike-images.andrew-code.com/Bike%20Image/icons/menu.png"
            alt="bars"
          />
        </button>
      </div>
    </div>
  );
};

export default Header;
