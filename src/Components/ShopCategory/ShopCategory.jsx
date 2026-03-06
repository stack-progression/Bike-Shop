import React from "react";
import "./ShopCategory.css";
import ShopCategoryItem from "../ShopCategoryItem/ShopCategoryItem";

const ShopCategory = () => {
  return (
    <div className="shop-category">
      <h2>Magazin</h2>
      <div className="shop-category-container">
        <ShopCategoryItem
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
        />
      </div>
    </div>
  );
};

export default ShopCategory;
