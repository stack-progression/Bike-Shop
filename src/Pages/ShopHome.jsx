import React from "react";
import "./CSS/ShopHome.css";
import { useProducts } from "../Hooks/useProducts.js";
import ItemProducts from "../Components/ItemProducts/ItemProducts";

const ShopHome = () => {
  const { data: products, isPending: productLoading } = useProducts();
  if (productLoading) return "Loading...";
  // console.log(products);
  return (
    <div className="shop">
      <h2>Biciclete {`(${products.length})`}</h2>
      <div className="shop-container">
        {products.map((p) => {
          return (
            <ItemProducts
              item={p}
              key={p.id}
              id={p.id}
              name={p.name}
              shortDescription={p.shortDescription}
              price={p.price}
              currency={p.currency}
            />
          );
        })}
        {/* <div>
          
        </div> */}
      </div>
    </div>
  );
};

export default ShopHome;
