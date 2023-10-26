import React, { useState } from "react";

import Rating from "@mui/material/Rating";

import { Col, Row } from "react-bootstrap";
import "../css/Slider.css";

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
    <div className="container">
      <h4 className="productos-title">TOP 10 TREND PRODUCTS</h4>
      <div className="slider-container">
        <button
          className="left-arrow"
          type="button"
          onClick={() => toSlide("prev")}
        >
          <i className="fa fa-arrow-left"></i>
        </button>
        {trendsProducts &&
          trendsProducts.map((product, index) => (
            <div
              key={index}
              className={`slider-card-container ${
                currentIndex === index ? "" : "hidden"
              }`}
            >
              <Row>
                <Col md="6" className="slider-col-img">
                  <img
                    className="slider-img"
                    src={product.image}
                    alt={product.title}
                  />
                </Col>
                <Col md="6">
                  <div className="slider-content">
                    <h4 className="slider-top">
                      <i className="fa fa-bolt"></i> TOP {index + 1}
                    </h4>
                    <h3 className="slider-title">{product.title}</h3>
                    <p className="slice-price">
                      <b>Best Price: {product.price}$</b>
                    </p>
                    <div className="slice-rating-container">
                      <Rating
                        name="half-rating-read"
                        defaultValue={product.rating.rate}
                        precision={0.5}
                        readOnly
                      />
                      <p className="slice-count">
                        +{product.rating.count} vendidos
                      </p>
                    </div>
                    <button className="slice-button" type="button">
                      Ver Producto
                    </button>
                  </div>
                </Col>
              </Row>
            </div>
          ))}
        <button
          className="right-arrow"
          type="button"
          onClick={() => toSlide("next")}
        >
          <i className="fa fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
}