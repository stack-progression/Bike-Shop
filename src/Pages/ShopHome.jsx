import React, { useContext } from "react";
import "./CSS/ShopHome.css";
import { useProducts } from "../Hooks/useProducts.js";
import ItemProducts from "../Components/ItemProducts/ItemProducts";
import { ShopContext } from "../Context/ShopContext.jsx";

const ShopHome = () => {
  const { searchResults } = useContext(ShopContext);
  const { data: products, isPending: productLoading } = useProducts();
  if (productLoading) return "Loading...";
  // const getSearch = products.filter((f) => searchResults === f.name);
  const getSearch = products.filter((product) =>
    product.shortDescription
      .toLowerCase()
      .includes(searchResults.toLowerCase()),
  );
  // console.log(searchResults);
  // console.log(getSearch);
  // console.log(products);
  return (
    <div className="shop">
      <h2>
        Biciclete {`(${getSearch > 0 ? products.length : getSearch.length})`}
      </h2>
      <div className="shop-container">
        {getSearch.length > 0
          ? getSearch.map((p) => {
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
            })
          : products.map((p) => {
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
      </div>
    </div>
  );
};

export default ShopHome;
