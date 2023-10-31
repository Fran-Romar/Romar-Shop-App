import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Rating from "@mui/material/Rating";
import CardButton from "../components/CardButton";
import { useButton } from "../hooks/useButton";

import { Row, Col } from "react-bootstrap";
import "../css/Product.css";

export default function Product({ products }) {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    if (products && id) {
      const p = products.filter((product) => product.id === parseInt(id))[0];
      setProduct(p);
    }
  }, [products, id]);

  const { handleAgregar, handleQuitar } = useButton();
  const [added, setAdded] = useState(false);

  const quitar = (id) => {
    handleQuitar(id);
    setAdded(false);
  };

  const agregar = (prod) => {
    handleAgregar(prod);
    setAdded(true);
  };

  return (
    <>
      <hr className="product-hr" />
      <div className="container product-container">
        <Row>
          <Col md="5" className="product-border">
            {product && (
              <div className="product-img-container">
                <img
                  className="product-img"
                  src={product.image}
                  alt={product.title}
                />
              </div>
            )}
          </Col>
          <Col md="7">
            {product && (
              <div className="product-content-container">
                <h4>{product.title}</h4>
                <div className="product-rating">
                  <Rating
                    name="half-rating-read"
                    defaultValue={product.rating.rate}
                    precision={0.5}
                    readOnly
                  />
                  <p className="product-count">+{product.rating.count} sold</p>
                </div>
                <p className="product-price">${product.price}</p>
                <p className="product-description">{product.description}</p>
                <div className="product-buttons">
                  {added ? (
                    <CardButton
                      estado={"quitar"}
                      funcion={() => quitar(product.id)}
                    ></CardButton>
                  ) : (
                    <CardButton
                      estado={"agregar"}
                      funcion={() => agregar(product)}
                    ></CardButton>
                  )}
                </div>
              </div>
            )}
          </Col>
        </Row>
      </div>
    </>
  );
}
