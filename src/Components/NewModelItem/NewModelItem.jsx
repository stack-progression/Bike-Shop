import React from "react";
import "./NewModelItem.css";
import { Link } from "react-router-dom";

const NewModelItem = (item) => {
  return (
    <div className="new-model-item">
      <img src={item.img} alt={item.name} />
      <div className="item">
        <div className="description">
          <h2>{item.name}</h2>
          <p>{item.description}</p>
        </div>
        <Link to={`/product/${item.id}`}>VIZUALIZEAZA</Link>
      </div>
    </div>
  );
};

export default NewModelItem;
