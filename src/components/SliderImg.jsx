import React from "react";
import { Col } from "react-bootstrap";

export default function SliderImg({ product }) {
  return (
    <Col md="6" className="slider-col-img">
      <img className="slider-img" src={product.image} alt={product.title} />
    </Col>
  );
}
