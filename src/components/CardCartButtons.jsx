import React, { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";

export default function CardCartButtons({ item }) {
  const { aumentarCantidad, disminuirCantidad, eliminarCompra } =
    useContext(CarritoContext);
  return (
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
  );
}
