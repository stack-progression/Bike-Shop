import React from "react";
import { useParams } from "react-router-dom";
import { useProducts } from "../Hooks/useProducts";
import { useCategories } from "../Hooks/useCategories";
import ItemProducts from "../Components/ItemProducts/ItemProducts";
import { ShopContext } from "../Context/ShopContext";

const Category = () => {
  const params = useParams();
  const { data: products, isPending: productsLoading } = useProducts();
  const { data: category, isPending: categoryLoading } = useCategories();
  if (productsLoading || categoryLoading) return "Loading...";
  const getCategory = category.filter((f) => f.slug === params.categorySlug);

  // console.log(params);
  // console.log(getCategory);
  const categoryParams = products.filter(
    (p) => p.categoryId === getCategory[0].id,
  );
  // console.log(categoryParams);
  return (
    <div className="shop">
      <h2>
        {getCategory[0].name} {`(${categoryParams.length})`}
      </h2>
      <div className="shop-container">
        {categoryParams.map((p) => {
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

export default Category;
