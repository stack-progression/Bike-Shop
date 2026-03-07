import React from "react";
import "./ShopCategory.css";
import ShopCategoryItem from "../ShopCategoryItem/ShopCategoryItem";
import {useCategories} from "../../Hooks/useCategories";

const ShopCategory = () => {
  const {data: category, isPending: categoryLoading} = useCategories();
  if(categoryLoading) return "Loading..."
  console.log(category)
  return (
    <div className="shop-category">
      <h2>Magazin</h2>
      <div className="shop-category-container">
        {
          category.map((ctgry) =>{
            return(
              <ShopCategoryItem key={ctgry.id} id={ctgry.id} img={ctgry.image} name={ctgry.name}/>
            )
          })
        }
        {/* <ShopCategoryItem
          id=""
          img={"../../../public/image/category/Road.jpg"}
          name={"Biciclete rutiere"}
        />
        <ShopCategoryItem
          id=""
          img={"../../../public/image/category/Electric.avif"}
          name={"Biciclete electrice"}
        />
        <ShopCategoryItem
          id=""
          img={"../../../public/image/category/Mountain.jpg"}
          name={"Biciclete de munte"}
        />
        <ShopCategoryItem
          id=""
          img={"../../../public/image/category/City.jpg"}
          name={"Biciclete de oras"}
        />
        <ShopCategoryItem
          id=""
          img={"../../../public/image/category/Gravel.jpg"}
          name={"Biciclete de teren"}
        />
        <ShopCategoryItem
          id=""
          img={"../../../public/image/category/Kid.jpg"}
          name={"Biciclete de copii"}
        />
        <ShopCategoryItem
          id=""
          img={"../../../public/image/category/Bmx.jpg"}
          name={"Biciclete BMX"}
        /> */}
      </div>
    </div>
  );
};

export default ShopCategory;
