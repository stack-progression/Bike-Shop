import React from "react";
import "./HeaderFooter.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";

const HeaderFooter = () => {
  const { scrollToTop } = useContext(ShopContext);
  return (
    <div className="header-footer">
      <Link onClick={scrollToTop} to="/">
        <img
          loading="lazy"
          className="logo"
          src="../../../public/image/logo/logo.png"
          alt="logo"
        />
      </Link>

      <div className="media-icon">
        <img
          loading="lazy"
          src="https://bike-images.andrew-code.com/Bike%20Image/media-icon/icons8-instagram.svg"
          alt=""
        />
        <img
          loading="lazy"
          src="https://bike-images.andrew-code.com/Bike%20Image/media-icon/icons8-facebook.svg"
          alt=""
        />
        <img
          loading="lazy"
          src="https://bike-images.andrew-code.com/Bike%20Image/media-icon/icons8-youtube.svg"
          alt=""
        />
        <img
          loading="lazy"
          src="https://bike-images.andrew-code.com/Bike%20Image/media-icon/tiktok-icon.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default HeaderFooter;
