import React from "react";
import { Col } from "react-bootstrap";
import Rating from "@mui/material/Rating";

import Arrow from "./Arrow";

export default function SliderContent({ toSlide, product, index }) {
  return (
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
          <p className="slider-count">+{product.rating.count} vendidos</p>
        </div>
        <div className="slider-button-container">
          <button className="slider-button" type="button">
            Ver Producto
          </button>
        </div>
      </div>
      <div className="second-arrows-container">
        <Arrow direction="left" type="second" toSlide={toSlide}></Arrow>
        <Arrow direction="right" type="second" toSlide={toSlide}></Arrow>
      </div>
    </Col>
  );
}
