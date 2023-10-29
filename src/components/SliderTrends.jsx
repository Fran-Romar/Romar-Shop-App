import React, { useState } from "react";

import Rating from "@mui/material/Rating";

import { Col, Row } from "react-bootstrap";

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
        <button
          className="left-arrow"
          type="button"
          onClick={() => toSlide("prev")}
        >
          &#x2329;
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
                    <p className="slider-price">
                      <b>Best Price: {product.price}$</b>
                    </p>
                    <div className="slider-rating-container">
                      <Rating
                        name="half-rating-read"
                        defaultValue={product.rating.rate}
                        precision={0.5}
                        readOnly
                      />
                      <p className="slider-count">
                        +{product.rating.count} vendidos
                      </p>
                    </div>
                    <div className="slider-button-container">
                      <button className="slider-button" type="button">
                        Ver Producto
                      </button>
                    </div>
                  </div>
                  <div className="second-arrows-container">
                    <button
                      className="left-second-arrow"
                      type="button"
                      onClick={() => toSlide("prev")}
                    >
                      &#x2329;
                    </button>
                    <button
                      className="right-second-arrow"
                      type="button"
                      onClick={() => toSlide("next")}
                    >
                      &#x232a;
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
          &#x232a;
        </button>
      </div>
    </>
  );
}
