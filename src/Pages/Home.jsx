import React from "react";
import NewModel from "../Components/NewModel/NewModel";
import "./CSS/Home.css";
import ShopCategory from "../Components/ShopCategory/ShopCategory";
import Brands from "../Components/Brands/Brands";
import OurStory from "../Components/OurStory/OurStory";

const Home = () => {
  return (
    <div className="home">
      <NewModel />
      <ShopCategory />
      <Brands />
      <OurStory />
    </div>
  );
};

export default Home;
