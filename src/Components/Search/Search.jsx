import React, { useContext, useEffect } from "react";
import "./Search.css";
import { useCategories } from "../../Hooks/useCategories";
import { Link, useLocation } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

const Search = () => {
  const location = useLocation();
  const { openSearch, setOpenSearch, scrollToTop } = useContext(ShopContext);
  useEffect(() => {
    setOpenSearch(false);
  }, [location.pathname, setOpenSearch]);
  const { data: category, isPending: categoryLoading } = useCategories();
  if (categoryLoading) return "Loading...";

  return (
    <div className="search" style={{ display: openSearch ? "" : "none" }}>
      <div className="search-display">
        <div className="search-container">
          <div className="search-input-btn">
            <img
              src="https://bike-images.andrew-code.com/Bike%20Image/icons/loupe.png"
              alt="search icon"
            />
            <input type="text" placeholder="Cauta" />
            <button>
              <img
                src="https://bike-images.andrew-code.com/Bike%20Image/icons/right-arrow.png"
                alt="right arrow"
              />
            </button>
          </div>
          <button
            onClick={() => {
              setOpenSearch(false);
            }}
          >
            Inchide
          </button>
        </div>
        <p>Explorati dupa categorie</p>
        <div className="search-category-container">
          {category.slice(0, 4).map((item) => {
            return (
              <Link
                onClick={scrollToTop}
                key={item.id}
                className="search-category"
                to={`shop/category/${item.slug}`}
              >
                <div className="gradient"></div>
                <img src={item.image} alt={item.name} />
                <p>{item.name}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Search;
