import React, { useState } from "react";
import "./Brands.css";
import { useBrands } from "../../Hooks/useBrands";
import { Link } from "react-router-dom";

const Brands = () => {
  const [count, setCount] = useState(6);
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
              className="brands-link"
              to={`brand/${brand.slug}`}
              key={brand.id}
            >
              <img className="brands-img" src={brand.image} alt={brand.name} />
            </Link>
          );
        })}
      </div>

      {brands && count < brands.length ? (
        <button className="brands-control-btn" onClick={handleCount}>
          <p>Vezi mai mult</p>
          <img src="../../../public/image/icons/down-arrow.png" alt="down-arrow" />
        </button>
      ) : (
        <button className="brands-control-btn" onClick={handleBack}>
          <img src="../../../public/image/icons/up-arrow.png" alt="up-arrow" />
          <p>Vezi mai putin</p>
        </button>
      )}
      <hr />
    </div>
  );
};

export default Brands;
