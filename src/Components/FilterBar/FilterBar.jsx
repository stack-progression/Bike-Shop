import React, { useContext } from "react";
import "./FilterBar.css";
import { useBrands } from "../../Hooks/useBrands";
import { useCategories } from "../../Hooks/useCategories";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

const Filter = () => {
  const { openFilter, setOpenFilter, scrollToTop } = useContext(ShopContext);
  // console.log(openFilter);
  const { data: brands, isPending: brandsLoading } = useBrands();
  const { data: category, isPending: categoryLoading } = useCategories();
  if (brandsLoading || categoryLoading) return "Loading...";
  //   console.log(brands);
  //   console.log(category);

  return (
    <div className="filter" style={{ display: openFilter ? "flex" : "none" }}>
      <div className={`filter-container ${openFilter ? "appears-search" : ""}`}>
        <div className="name-close">
          <p>Filtru</p>
          <button
            onClick={() => {
              setOpenFilter(false);
            }}
          >
            <img
              loading="lazy"
              src="https://bike-images.andrew-code.com/Bike%20Image/icons/close.png"
              alt="close"
            />
          </button>
        </div>
        <div className="filter-categories">
          <p>Biciclete</p>
          <Link
            onClick={() => {
              scrollToTop();
              setOpenFilter(false);
            }}
            className="all"
            to="shop"
          >
            Toate Bicicletele
          </Link>
          <div className="filter-link">
            {category.map((item) => {
              return (
                <Link
                  onClick={() => {
                    scrollToTop();
                    setOpenFilter(false);
                  }}
                  key={item.id}
                  to={`shop/category/${item.slug}`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
          <hr />
          <p>Brand</p>
          <div className="filter-link">
            {brands.map((item) => {
              return (
                <Link
                  onClick={() => {
                    scrollToTop();
                    setOpenFilter(false);
                  }}
                  key={item.id}
                  to={`shop/brand/${item.slug}`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
