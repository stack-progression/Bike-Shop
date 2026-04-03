import React, { useContext } from "react";
import "./ShopCategoryItem.css";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

const ShopCategoryItem = (i) => {
  const { scrollToTop } = useContext(ShopContext);

  return (
    <Link
      onClick={scrollToTop}
      to={`shop/category/${i.id}`}
      className="shop-category-items"
    >
      <img loading="lazy" src={i.img} alt={i.name} />
      <p>{i.name}</p>
    </Link>
  );
};

export default ShopCategoryItem;
