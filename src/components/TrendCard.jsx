import React from "react";
import Card from "../components/Card";

import { Col, Row } from "react-bootstrap";
import "../css/TrendCard.css";

export default function TrendCard({
  trendProduct,
  handleAgregar,
  handleQuitar,
}) {
  console.log(trendProduct);
  return (
    <div className="trend-card-container">
      <div className="container">
        <Row>
          {trendProduct ? (
            <Col md="6">
              <Card
                title={trendProduct.title}
                image={trendProduct.image}
                price={trendProduct.price}
                rating={trendProduct.rating}
                col={"10"}
                handleAgregar={handleAgregar}
                handleQuitar={handleQuitar}
              ></Card>
            </Col>
          ) : (
            <p>No hay producto disponible</p>
          )}
          <Col md="6"></Col>
        </Row>
      </div>
    </div>
  );
}
