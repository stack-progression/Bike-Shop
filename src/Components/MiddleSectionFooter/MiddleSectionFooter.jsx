import React, { useContext } from "react";
import "./MiddleSectionFooter.css";
import { useCategories } from "../../Hooks/useCategories";
import { useBrands } from "../../Hooks/useBrands";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

const MiddleSectionFooter = () => {
  const { data: category, isPending: categoryLoading } = useCategories();
  const { data: brands, isPending: brandsLoading } = useBrands();
  const { scrollToTop } = useContext(ShopContext);
  if (categoryLoading || brandsLoading) return "Loading...";
  return (
    <div className="middle-section-footer">
      <div className="category-footer">
        <h2>Categorii</h2>
        <Link onClick={scrollToTop} to="shop">
          Biciclete
        </Link>
        {category.map((item) => {
          return (
            <Link
              onClick={scrollToTop}
              key={item.id}
              to={`shop/category/${item.slug}`}
            >
              {item.name}
            </Link>
          );
        })}
      </div>
      <div className="brands-footer">
        <h2>Brand</h2>
        {brands.map((item) => {
          return (
            <Link
              onClick={scrollToTop}
              key={item.id}
              to={`shop/brand/${item.slug}`}
            >
              {item.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default MiddleSectionFooter;
