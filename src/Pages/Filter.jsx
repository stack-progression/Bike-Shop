import React from "react";
import { useParams } from "react-router-dom";
import { useProducts } from "../Hooks/useProducts";
import { useBrands } from "../Hooks/useBrands";
import ItemProducts from "../Components/ItemProducts/ItemProducts";

const Filter = () => {
  const params = useParams();
  const { data: products, isPending: productsLoading } = useProducts();
  const { data: brand, isPending: brandLoading } = useBrands();
  if (productsLoading || brandLoading) return "Loading...";
  const getBrand = brand.filter((b) => b.slug === params.brandSlug);
  const getBrandProduct = products.filter((p) => p.brand === getBrand[0].name);
  console.log(getBrandProduct);
  console.log(getBrand);
  console.log(params);
  return (
    <div className="shop">
      <h2>Biciclete {`(${products.length})`}</h2>
      <div className="shop-container">
        {getBrandProduct.map((p) => {
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

export default Filter;
