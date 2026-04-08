import React, { useContext } from "react";
import "./ProductImage.css";
import { ShopContext } from "../../Context/ShopContext";

const ProductImageDetails = (p) => {
  const { image } = useContext(ShopContext);
  const item = p?.p;
  // console.log(item);
  return (
    <div className="product-image-details">
      <div className="product-image-details-container">
        <div className="images">
          {item?.variants[image]?.images.map((i, index) => {
            return <img loading="lazy" key={index} src={i} alt={item?.name} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductImageDetails;
