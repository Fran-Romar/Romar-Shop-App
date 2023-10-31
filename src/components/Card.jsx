import React from "react";

import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import Rating from "@mui/material/Rating";

export default function Card({ product }) {
  return (
    <Col md="3 col-6" id="product-col">
      <div className="product-card">
        <Link to={`/all-products/${product.id}`}>
          <img src={product.image} alt={product.title} className="card-image" />
        </Link>
        <hr />
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
            <p className="card-count">+{product.rating.count} sold</p>
          </div>
          <p className="card-price">
            <b>${product.price}</b>
          </p>
        </div>
      </div>
    </Col>
  );
}
