import React, { useState } from "react";

import Rating from "@mui/material/Rating";

export default function TrendCardContent({
  title,
  price,
  rating,
  description,
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
    <div className="trend-card-content">
      <h3 className="trend-card-title">{title}</h3>
      <div className="trend-card-rating">
        <Rating
          name="half-rating-read"
          defaultValue={rating.rate}
          precision={0.5}
          readOnly
        />
        <p className="trend-card-count">+{rating.count} vendidos</p>
      </div>
      <p className="trend-card-price">
        <b>{price}$</b>
      </p>
      <p className="trend-card-description">{description}</p>
      <div className="trend-card-button-container">
        {added ? (
          <button
            type="button"
            className="trend-boton-quitar"
            onClick={() => quitar()}
          >
            <i className="fa fa-check"></i>
          </button>
        ) : (
          <button
            type="button"
            className="trend-boton-agregar"
            onClick={() => agregar()}
          >
            Agregar al carrito
          </button>
        )}
      </div>
    </div>
  );
}
