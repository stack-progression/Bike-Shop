import React, { useState } from "react";
import "./ItemProducts.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";

const ItemProducts = (item) => {
  const [colorIndex, setColorIndex] = useState(0);
  const { scrollToTop } = useContext(ShopContext);
  //   console.log(item);
  return (
    <div key={item.id} className="item-products">
      <Link
        onClick={scrollToTop}
        to={"/"+`product/${item.id}`}
        className="img-container"
      >
        <img loading="lazy" src={item.item.variants[colorIndex].images[0]} alt="bikes" />
      </Link>
      <div className="colors-dteails-container">
        <div className="colors">
          {item.item.variants.map((v, index) => {
            //   console.log(index);
            return (
              <button
                onClick={() => {
                  setColorIndex(index);
                }}
                key={index}
                className="color"
                style={{ background: v.hex[0] }}
              ></button>
            );
          })}
        </div>
        <p className="name">{item.name}</p>
        <p className="short-description">
          Bicicletă electrică ultra-ușoară pentru navetă urbană și ture rapide.
        </p>
        <p className="price">
          {item.price} {item.currency}
        </p>
      </div>
    </div>
  );
};

export default ItemProducts;
