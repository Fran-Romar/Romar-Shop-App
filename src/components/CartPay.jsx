import React from "react";

export default function CartPay({ listaCompras }) {
  const totalPrice = () => {
    return listaCompras
      .reduce((total, item) => total + item.price * item.cantidad, 0)
      .toFixed(2);
  };

  return (
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
  );
}
