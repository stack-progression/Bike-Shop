import React from "react";
import "./NewModel.css";
import NewModelItem from "../NewModelItem/NewModelItem";

const NewModel = () => {
  return (
    <div className="new-model">
      <div className="items">
        <NewModelItem
          id="100"
          name="S-Works Turbo Creo 2"
          description="SRAM RED / XX1 Eagle AXS"
          img="../../../public/image/new-bike/s-works-turbo-creo-2-sram-red.webp"
        />
        <NewModelItem
          id="154"
          name="S-Works Turbo Creo 2 Red"
          description="SRAM RED / XX1 Eagle"
          img="../../../public/image/new-bike/s-works-turbo-creo-2-sram-red-2.webp"
        />
      </div>
    </div>
  );
};

export default NewModel;
