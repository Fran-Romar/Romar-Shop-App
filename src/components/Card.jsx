import React, { useState } from "react";

import Rating from "@mui/material/Rating";

import "../css/Card.css";
import { Col } from "react-bootstrap";

export default function Card({
  title,
  image,
  price,
  rating,
  col,
  handleAgregar,
  handleQuitar,
}) {
  const [added, setAdded] = useState(false);

  const quitar = () => {
    handleQuitar();
    setAdded(false);
  };

  const agregar = () => {
    handleAgregar();
    setAdded(true);
  };

  return (
    <Col md={col} className="product-col">
      <div className="product-card">
        <img src={image} alt={title} className="card-image" />
        <div className="card-content">
          <h3 title={title} className="card-title">
            {title}
          </h3>
          <div className="card-rating">
            <Rating
              name="half-rating-read"
              defaultValue={rating.rate}
              precision={0.5}
              readOnly
            />
            <p className="card-count">+{rating.count} vendidos</p>
          </div>
          <p className="card-price">
            <b>{price}$</b>
          </p>
        </div>
        {added ? (
          <button
            type="button"
            className="boton-quitar"
            onClick={() => quitar()}
          >
            <i className="fa fa-check"></i>
          </button>
        ) : (
          <button
            type="button"
            className="boton-agregar"
            onClick={() => agregar()}
          >
            Agregar al carrito
          </button>
        )}
      </div>
    </Col>
  );
}
