import React, { useState } from "react";

import { Row } from "react-bootstrap";

import Arrow from "./Arrow";
import SliderImg from "./SliderImg";
import SliderContent from "./SliderContent";

export default function SliderTrends({ trendsProducts }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const toSlide = (direction) => {
    if (direction === "prev") {
      currentIndex === 0
        ? setCurrentIndex(0)
        : setCurrentIndex(currentIndex - 1);
    } else {
      currentIndex === trendsProducts.length - 1
        ? setCurrentIndex(trendsProducts.length - 1)
        : setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <>
      <h4 className="productos-title">TOP 10 TREND PRODUCTS</h4>
      <div className="slider-container">
        <Arrow direction="left" type="primary" toSlide={toSlide}></Arrow>
        {trendsProducts &&
          trendsProducts.map((product, index) => (
            <div
              key={index}
              className={`slider-card-container ${
                currentIndex === index ? "" : "hidden"
              }`}
            >
              <Row>
                <SliderImg product={product}></SliderImg>
                <SliderContent
                  toSlide={toSlide}
                  product={product}
                  index={index}
                ></SliderContent>
              </Row>
            </div>
          ))}
        <Arrow direction="right" type="primary" toSlide={toSlide}></Arrow>
      </div>
    </>
  );
}
