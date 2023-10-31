import React, { useContext } from "react";

import { Row, Container } from "react-bootstrap";

import Card from "../components/Card";
import { ProductoContext } from "../context/ProductoContext";

import "../css/Products.css";

export default function Products() {
  const { products } = useContext(ProductoContext);

  return (
    <Container>
      <h4 className="productos-title">ALL OUR PRODUCTS</h4>
      <div className="cards-container">
        <Row>
          {products.map((product) => (
            <Card key={product.id} product={product}></Card>
          ))}
        </Row>
      </div>
    </Container>
  );
}
