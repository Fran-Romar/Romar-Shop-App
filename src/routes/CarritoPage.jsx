import React, { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";

import { Row, Col } from "react-bootstrap";

import "../css/Carrito.css";
import EmptyCart from "../components/EmptyCart";
import CartCard from "../components/CartCard";
import CartPay from "../components/CartPay";

export default function CarritoPage() {
  const { listaCompras } = useContext(CarritoContext);

  return (
    <>
      {listaCompras.length === 0 ? (
        <EmptyCart></EmptyCart>
      ) : (
        <div className="items-container">
          <div className="container">
            <h5>SHOP CART</h5>
            <Row>
              <Col md="7">
                {listaCompras.map((item) => (
                  <CartCard key={item.id} item={item}></CartCard>
                ))}
              </Col>
              <Col md="5">
                <CartPay listaCompras={listaCompras}></CartPay>
              </Col>
            </Row>
          </div>
        </div>
      )}
    </>
  );
}
