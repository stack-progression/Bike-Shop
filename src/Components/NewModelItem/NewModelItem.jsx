import React from "react";
import "./NewModelItem.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";

const NewModelItem = (item) => {
  const { scrollToTop } = useContext(ShopContext);

  return (
    <div className="new-model-item">
      <img loading="lazy" src={item.img} alt={item.name} />
      <div className="item">
        <div className="description">
          <h2>{item.name}</h2>
          <p>{item.description}</p>
        </div>
        <Link onClick={scrollToTop} to={`/product/${item.id}`}>
          VIZUALIZEAZĂ
        </Link>
      </div>
    </div>
  );
};

export default NewModelItem;
