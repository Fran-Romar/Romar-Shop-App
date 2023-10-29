import React from "react";

import { Row, Col } from "react-bootstrap";

import CardCartButtons from "./CardCartButtons";

export default function CartCard({ item }) {
  return (
    <Col md="12" key={item.id}>
      <div className="item-card-container">
        <Row>
          <Col md="4" className="item-card-img-container">
            <img className="item-card-img" src={item.image} alt={item.title} />
          </Col>
          <Col md="6">
            <div className="item-card-content">
              <p>{item.title}</p>
              <p>Price: {item.price}$</p>
              <CardCartButtons item={item}></CardCartButtons>
            </div>
          </Col>
        </Row>
      </div>
    </Col>
  );
}
