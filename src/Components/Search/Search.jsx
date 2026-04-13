import React, { useContext, useEffect, useState } from "react";
import "./Search.css";
import { useCategories } from "../../Hooks/useCategories";
import { Link, useLocation } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

const Search = () => {
  const location = useLocation();
  const {
    openSearch,
    setOpenSearch,
    scrollToTop,
    search,
    setSearch,
    setSearchResults,
    // searchResults
  } = useContext(ShopContext);
  useEffect(() => {
    setOpenSearch(false);
  }, [location.pathname, setOpenSearch]);
  const { data: category, isPending: categoryLoading } = useCategories();

  const [link, setLink] = useState("");

  const searchHandler = () => {
    if (search === "") {
      alert("Completati campul de cautare");
      setLink("");
    } else if (search !== "") {
      setLink("shop");
    }
  };

  if (categoryLoading) return "Loading...";

  // console.log(search);
  // console.log(searchResults);

  return (
    <div className="search" style={{ display: openSearch ? "" : "none" }}>
      <div className="search-display">
        <div className="search-container">
          <div className="search-input-btn">
            <img
              loading="lazy"
              src="https://bike-images.andrew-code.com/Bike%20Image/icons/loupe.png"
              alt="search icon"
            />
            <input
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              placeholder="Cauta"
            />
            <Link
              to={link}
              onClick={() => {
                searchHandler();
                setSearchResults(search);
                setOpenSearch(false);
                scrollTo(0, 0);
              }}
            >
              <img
                loading="lazy"
                src="https://bike-images.andrew-code.com/Bike%20Image/icons/right-arrow.png"
                alt="right arrow"
              />
            </Link>
          </div>
          <button
            onClick={() => {
              setOpenSearch(false);
            }}
          >
            Închide
          </button>
        </div>
        <p>Explorați după categorie</p>
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
