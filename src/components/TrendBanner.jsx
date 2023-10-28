import React from "react";

import TrendCard from "./TrendCard";
import TrendCardContent from "./TrendCardContent";

import { Col, Row } from "react-bootstrap";

export default function TrendBanner({
  trendProduct,
  handleAgregar,
  handleQuitar,
}) {
  return (
    <>
      <div className="trend-card-container">
        {trendProduct && (
          <Row>
            <Col md="6">
              <TrendCard
                title={trendProduct.title}
                image={trendProduct.image}
              ></TrendCard>
            </Col>
            <Col md="6">
              <TrendCardContent
                title={trendProduct.title}
                price={trendProduct.price}
                rating={trendProduct.rating}
                description={trendProduct.description}
                handleAgregar={handleAgregar}
                handleQuitar={handleQuitar}
              ></TrendCardContent>
            </Col>
          </Row>
        )}
      </div>
    </>
  );
}
