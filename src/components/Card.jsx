import React, { useState } from "react";

import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import CardButton from "./CardButton";
import Rating from "@mui/material/Rating";

export default function Card({ product, handleAgregar, handleQuitar }) {
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
    <Col md="3 col-6" id="product-col">
      <div className="product-card">
        <Link to={`/all-products/${product.id}`}>
          <img src={product.image} alt={product.title} className="card-image" />
        </Link>
        <div className="card-content">
          <Link className="card-link" to={`/all-products/${product.id}`}>
            <h3 title={product.title} className="card-title">
              {product.title}
            </h3>
          </Link>
          <div className="card-rating">
            <Rating
              name="half-rating-read"
              defaultValue={product.rating.rate}
              precision={0.5}
              readOnly
            />
            <p className="card-count">+{product.rating.count} vendidos</p>
          </div>
          <p className="card-price">
            <b>{product.price}$</b>
          </p>
        </div>
        <div className="card-buttons">
          {added ? (
            <CardButton estado={"quitar"} funcion={quitar}></CardButton>
          ) : (
            <CardButton estado={"agregar"} funcion={agregar}></CardButton>
          )}
        </div>
      </div>
    </Col>
  );
}
