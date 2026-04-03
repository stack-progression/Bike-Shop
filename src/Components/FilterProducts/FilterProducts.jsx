import React, { useContext } from "react";
import "./FilterProducts.css";
import { useCategories } from "../../Hooks/useCategories";
import { useBrands } from "../../Hooks/useBrands";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

const FilterProducts = () => {
  const { scrollToTop } = useContext(ShopContext);
  const { data: category, isPending: categoryLoading } = useCategories();
  const { data: brands, isPending: brandsLoading } = useBrands();
  if (categoryLoading || brandsLoading) return "Loading...";

  return (
    <div className="filter-products">
      <div className="filter-products-container">
        <div className="filter-products-scroll">
          <h2>Biciclete</h2>
          <hr />
          <div className="filter-products-links">
            <Link to="/shop" onClick={scrollToTop} className="filter-products-item-link">
              Toate bicicletele
            </Link>
            {category.map((i) => {
              return (
                <Link
                  onClick={scrollToTop}
                  key={i.id}
                  className="filter-products-item-link"
                  to={`category/${i.slug}`}
                >
                  {i.name}
                </Link>
              );
            })}
          </div>
          <h2>Brand</h2>
          <hr />
          <div className="filter-products-links">
            {brands.map((i) => {
              return (
                <Link
                  onClick={scrollToTop}
                  key={i.id}
                  className="filter-products-item-link"
                  to={`brand/${i.slug}`}
                >
                  {i.name}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterProducts;
