import React, { useContext, useEffect, useState } from "react";
import "./CSS/Product.css";
import { useParams } from "react-router-dom";
import { useProducts } from "../Hooks/useProducts";
import ProductImage from "../Components/ProductImage/ProductImage";
import ProductDetails from "../Components/ProductDetails/ProductDetails";
import ProductDetailsSpecifications from "../Components/ProductDetailsSpecifications/ProductDetailsSpecifications";
import { ShopContext } from "../Context/ShopContext";
import Reviews from "../Components/Reviews/Reviews";

const Product = () => {
  const { getCategory } = useContext(ShopContext);
  const [widthWindows, setWidthWindows] = useState(true);
  useEffect(() => {
    const handleResize = () => {
      setWidthWindows(window.innerWidth >= 850);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const id = useParams();
  const { data: products, isPending: productsLoading } = useProducts();
  if (productsLoading) return "Loading...";
  const getProducts = products.filter((f) => f.id == id.id);
  // console.log(getProducts);
  // console.log(id);
  const p = getProducts[0];
  return (
    <div className="product">
      <p className="breadcrumbs">
        Bicicleta
        <img
          loading="lazy"
          src="https://bike-images.andrew-code.com/Bike%20Image/icons/chevron-right.png"
          alt="chevron-right"
        />
        {getCategory(p.categoryId)}
        <img
          loading="lazy"
          src="https://bike-images.andrew-code.com/Bike%20Image/icons/chevron-right.png"
          alt="chevron-right"
        />
        {p.name}
      </p>
      <div className="product-container">
        <div className="product-img-det-spec">
          <ProductImage p={p} />
          {/* <hr /> */}
          <div style={{ display: !widthWindows ? "none" : "" }}>
            <ProductDetailsSpecifications p={p} />
            <Reviews p={p} />
          </div>
        </div>
        <div className="main-product-details">
          <div className="main-product-details-container">
            <ProductDetails p={p} />
            {/* <hr /> */}
            <div style={{ display: widthWindows ? "none" : "" }}>
              <ProductDetailsSpecifications p={p} />
              <Reviews p={p} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
