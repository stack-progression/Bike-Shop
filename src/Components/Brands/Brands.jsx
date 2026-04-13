import React, { useState } from "react";
import "./Brands.css";
import { useBrands } from "../../Hooks/useBrands";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";

const Brands = () => {
  const [count, setCount] = useState(6);
  const { scrollToTop } = useContext(ShopContext);
  const { data: brands, isPending: brandsLoading } = useBrands();

  if (brandsLoading) return "Loading...";
  const handleCount = () => {
    setCount(count + 6);
  };
  const handleBack = () => {
    setCount(6);
  };
  // console.log(brands.length);
  // console.log(buttonText);
  // console.log(count);
  return (
    <div className="brands">
      <div className="brand-links">
        {brands.slice(0, count).map((brand) => {
          return (
            <Link
              onClick={scrollToTop}
              className="brands-link"
              to={`shop/brand/${brand.slug}`}
              key={brand.id}
            >
              <img
                loading="lazy"
                className="brands-img"
                src={brand.image}
                alt={brand.name}
              />
            </Link>
          );
        })}
      </div>
      {brands && count < brands.length ? (
        <button className="brands-control-btn" onClick={handleCount}>
          <p>Vezi mai mult</p>
          <img
            loading="lazy"
            src="https://bike-images.andrew-code.com/Bike%20Image/icons/down-arrow.png"
            alt="down-arrow"
          />
        </button>
      ) : (
        <button className="brands-control-btn" onClick={handleBack}>
          <img
            loading="lazy"
            src="https://bike-images.andrew-code.com/Bike%20Image/icons/up-arrow.png"
            alt="up-arrow"
          />
          <p>Vezi mai puțin</p>
        </button>
      )}
      <hr />
    </div>
  );
};

export default Brands;
