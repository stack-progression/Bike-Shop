import React, { useContext } from "react";
import "../ProductImage/ProductImage.css";
import { ShopContext } from "../../Context/ShopContext";

const ProductDetails = (p) => {
  const item = p.p;
  const {
    setImage,
    stars,
    addToCart,
    // removeFromCart,
    // deleteProduct,
    // clearCart,
  } = useContext(ShopContext);
  return (
    <div>
      <div className="details">
        <div className="details-reverse">
          <p>{item.name}</p>
          <div className="details-container">
            <div className="colors">
              {item?.variants?.map((h, index) => {
                return (
                  <button
                    onClick={() => setImage(index)}
                    key={index}
                    style={{ background: h?.hex[0] }}
                  ></button>
                );
              })}
            </div>
            <div className="rating">
              <p>{item?.rating}</p>
              <div className="stars-list">{stars(item.rating)}</div>
              <p>({item?.reviewCount}) Recenzii</p>
            </div>
          </div>
        </div>
        <p className="details-short-details">{item?.shortDescription}</p>
        <div className="price">
          <p>
            {item?.price} {item?.currency}
          </p>
          <button onClick={() => addToCart(item)}>Cumpara</button>
          {/* <button onClick={() => removeFromCart(item.id)}>remove</button>
          <button onClick={() => deleteProduct(item.id)}>del</button>
          <button onClick={() => clearCart()}>clear</button> */}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
