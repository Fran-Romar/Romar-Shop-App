import React from "react";

import { Row, Col } from "react-bootstrap";

import CardCartButtons from "./CardCartButtons";

export default function CartCard({ item }) {
  return (
    <Col md="12" key={item.id}>
      <div className="item-card-container">
        <Row>
          <Col lg="4">
            <img className="item-card-img" src={item.image} alt={item.title} />
          </Col>
          <Col lg="8">
            <div className="item-card-content">
              <p className="item-card-title">{item.title}</p>
              <p className="item-card-price">
                Best price: <strong>{item.price}$</strong>
              </p>
              <CardCartButtons item={item}></CardCartButtons>
            </div>
          </Col>
        </Row>
      </div>
    </Col>
  );
}
