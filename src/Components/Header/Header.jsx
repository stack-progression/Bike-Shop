import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import { ShopContext } from "../../Context/ShopContext";
const Header = () => {
  const { setOpenSearch, openSearch, setOpenFilter, scrollToTop } =
    useContext(ShopContext);
  const [scroll, setScroll] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

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
          src="../../public/image/logo/f0d600aa-7f19-4aed-bf2b-d9c35d16cbc2.png"
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
            src="../../../public/image/icons/loupe.png"
            alt="loupe"
          />
        </button>
        <Link onClick={scrollToTop} to="/cart">
          <img
            loading="eager"
            src="../../../public/image/icons/shopping-cart.png"
            alt="shopping-cart"
          />
        </Link>
        <Link onClick={scrollToTop} to="/autentification">
          <img
            loading="eager"
            src="../../../public/image/icons/people.png"
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
            src="../../../public/image/icons/menu.png"
            alt="bars"
          />
        </button>
      </div>
    </div>
  );
};

export default Header;
