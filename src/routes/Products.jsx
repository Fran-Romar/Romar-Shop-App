import React, { useContext } from "react";

import { Row } from "react-bootstrap";

import Card from "../components/Card";
import { useButton } from "../hooks/useButton";
import { ProductoContext } from "../context/ProductoContext";

import "../css/Products.css";

export default function Products() {
  const { products } = useContext(ProductoContext);
  const { handleAgregar, handleQuitar } = useButton();

  return (
    <div className="container">
      <h4 className="productos-title">ALL OUR PRODUCTS</h4>
      <div className="cards-container">
        <Row>
          {products.map((product) => (
            <Card
              key={product.id}
              title={product.title}
              image={product.image}
              price={product.price}
              rating={product.rating}
              col={"3"}
              handleAgregar={() => handleAgregar(product)}
              handleQuitar={() => handleQuitar(product.id)}
            ></Card>
          ))}
        </Row>
      </div>
    </div>
  );
}
