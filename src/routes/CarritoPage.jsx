import React, { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";

import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";

import "../css/Carrito.css";

export default function CarritoPage() {
  const { listaCompras, aumentarCantidad, disminuirCantidad, eliminarCompra } =
    useContext(CarritoContext);
  console.log(listaCompras);

  const totalPrice = () => {
    return listaCompras
      .reduce((total, item) => total + item.price * item.cantidad, 0)
      .toFixed(2);
  };

  return (
    <>
      {listaCompras.length === 0 ? (
        <div className="no-items-container">
          <div className="container">
            <h5>SHOP CART</h5>
          </div>
          <h6>NO PRODUCTS IN THE CART</h6>
          <Link to="/all-products">
            <button type="button">KEEP BUYING</button>
          </Link>
        </div>
      ) : (
        <div className="items-container">
          <div className="container">
            <h5>SHOP CART</h5>
            <Row>
              <Col md="7">
                {listaCompras.map((item) => (
                  <Col md="12" key={item.id}>
                    <div className="item-card-container">
                      <Row>
                        <Col md="4" className="item-card-img-container">
                          <img
                            className="item-card-img"
                            src={item.image}
                            alt={item.title}
                          />
                        </Col>
                        <Col md="6">
                          <div className="item-card-content">
                            <p>{item.title}</p>
                            <p>Price: {item.price}$</p>
                            <div className="item-cant-button-container">
                              <button
                                type="button"
                                className="button-suma-resta"
                                onClick={() => disminuirCantidad(item.id)}
                              >
                                -
                              </button>
                              <button className="button-cant" disabled>
                                {item.cantidad}
                              </button>
                              <button
                                type="button"
                                className="button-suma-resta"
                                onClick={() => aumentarCantidad(item.id)}
                              >
                                +
                              </button>
                              <button
                                type="button"
                                className="button-delete"
                                onClick={() => eliminarCompra(item.id)}
                              >
                                Delete
                              </button>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                ))}
              </Col>
              <Col md="5">
                <div className="cart-pay-container">
                  <h6>
                    <i className="fa fa-shopping-cart"></i> CART
                  </h6>
                  <hr />
                  <div className="items-title">
                    <p>PRODUCTS IN THE CART</p>
                    <ul>
                      {listaCompras.map((item) => (
                        <li key={item.id}>
                          {item.cantidad} - {item.title}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p>
                    <b>TOTAL PRICE: {totalPrice()}$</b>
                  </p>
                  <hr />
                  <div className="button-pay-container">
                    <button
                      className="button-pay"
                      disabled={listaCompras < 1}
                      onClick={() => alert("Comprado!")}
                    >
                      Buy
                    </button>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      )}
    </>
  );
}
