import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
const Header = () => {
  const [scroll, setScroll] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const currentPosition = window.scrollY;
      if (currentPosition > lastScroll && currentPosition > 0) {
        setScroll(true);
      } else {
        setScroll(false);
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
    <div className={`header ${scroll ? "hide" : "appears"}`}>
      <Link to="/">
        <img
          loading="eager"
          className="logo"
          src="../../public/image/logo/f0d600aa-7f19-4aed-bf2b-d9c35d16cbc2.png"
          alt="Logo Velaro"
        />
      </Link>
      <div className="about-contact">
        <NavLink to="/about">Despre</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
      <div className="header-options">
        <button>
          <img src="../../../public/image/icons/loupe.png" alt="loupe" />
        </button>
        <Link to="/cart">
          <img
            src="../../../public/image/icons/shopping-cart.png"
            alt="shopping-cart"
          />
        </Link>
        <Link to="/autentification">
          <img src="../../../public/image/icons/people.png" alt="User" />
        </Link>
        <button>
          <img src="../../../public/image/icons/menu.png" alt="bars" />
        </button>
      </div>
    </div>
  );
};

export default Header;
