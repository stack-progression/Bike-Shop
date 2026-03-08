import React from "react";
import "./ShopCategory.css";
import ShopCategoryItem from "../ShopCategoryItem/ShopCategoryItem";
import {useCategories} from "../../Hooks/useCategories";

const ShopCategory = () => {
  const {data: category, isPending: categoryLoading} = useCategories();
  if(categoryLoading) return "Loading..."
  // console.log(category)
  return (
    <div className="shop-category">
      <h2>Magazin</h2>
      <div className="shop-category-container">
        {
          category.map((ctgry) =>{
            return(
              <ShopCategoryItem key={ctgry.id} id={ctgry.slug} img={ctgry.image} name={ctgry.name}/>
            )
          })
        }
      </div>
    </div>
  );
};

export default ShopCategory;
