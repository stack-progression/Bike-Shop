import React from "react";
import "./CSS/RootLayout.css";
import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import Search from "../Components/Search/Search";
import FilterBar from "../Components/FilterBar/FilterBar";

const RootLayout = () => {
  return (
    <div className="root-layout">
      <Header />
      <Search />
      <FilterBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
