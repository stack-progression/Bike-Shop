import React from "react";
import "./HeaderFooter.css";
import { Link } from "react-router-dom";

const HeaderFooter = () => {
  return (
    <div className="header-footer">
      <Link to="/">
        <img
          className="logo"
          src="../../../public/image/logo/logo.png"
          alt="logo"
        />
      </Link>

      <div className="media-icon">
        <img
          src="https://bike-images.andrew-code.com/Bike%20Image/media-icon/icons8-instagram.svg"
          alt=""
        />
        <img
          src="https://bike-images.andrew-code.com/Bike%20Image/media-icon/icons8-facebook.svg"
          alt=""
        />
        <img
          src="https://bike-images.andrew-code.com/Bike%20Image/media-icon/icons8-youtube.svg"
          alt=""
        />
        <img
          src="https://bike-images.andrew-code.com/Bike%20Image/media-icon/tiktok-icon.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default HeaderFooter;
