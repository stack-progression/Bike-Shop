import React, { useState } from "react";
import "./ProductDetailsSpecifications.css";

const ProductDetailsSpecifications = (p) => {
  const item = p.p;
  // console.log(item);
  // console.log(item.productDetails);
  // console.log(item.tehnicalSpecs);
  const [open, setOpen] = useState({
    button1: true,
    button2: true,
  });
  // console.log(open);
  return (
    <div className="product-details-specification">
      <div className="ds-container">
        <hr />
        <div className="title-button">
          <h2>Detaliile produsului</h2>
          <button
            onClick={() => {
              setOpen((e) => ({ ...e, button1: !e.button1 }));
            }}
          >
            <img
              src={
                open.button1
                  ? "https://bike-images.andrew-code.com/Bike%20Image/icons/down-arrow.png"
                  : "https://bike-images.andrew-code.com/Bike%20Image/icons/up-arrow.png"
              }
              alt=""
            />
          </button>
        </div>
        <div
          style={{ display: open.button1 ? "none" : "flex" }}
          className="details-paragraf"
        >
          {item?.productDetails?.map((i, index) => {
            return <p key={index}>{i}</p>;
          })}
        </div>
      </div>
      <hr />
      <div className="ds-container">
        <div className="title-button">
          <h2>Specificatii tehnice</h2>
          <button
            onClick={() => {
              setOpen((e) => ({ ...e, button2: !e.button2 }));
            }}
          >
            <img
              src={
                open.button2
                  ? "https://bike-images.andrew-code.com/Bike%20Image/icons/down-arrow.png"
                  : "https://bike-images.andrew-code.com/Bike%20Image/icons/up-arrow.png"
              }
              alt=""
            />
          </button>
        </div>
        <div
          style={{ display: open.button2 ? "none" : "flex" }}
          className="ds-tehnical-container"
        >
          {item?.tehnicalSpecs?.map((i, index) => {
            return (
              <div className="ds-tehnical-container-item" key={index}>
                <hr />
                <div className="ds-tehnical-container-item-name-value-container">
                  <h2>{i?.nameSpecification}</h2>
                  <div>
                    {i?.more?.map((t, index) => {
                      return (
                        <div
                          key={index}
                          className="ds-tehnical-container-item-name-value"
                        >
                          <p className="ds-tehnical-container-item-name">
                            {t.name}
                          </p>
                          <p
                            className="ds-tehnical-container-item-value"
                            key={index}
                          >
                            {t.value}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <hr />
    </div>
  );
};

export default ProductDetailsSpecifications;
