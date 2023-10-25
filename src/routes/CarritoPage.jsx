import React, { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";

export default function CarritoPage() {
  const { listaCompras, aumentarCantidad, disminuirCantidad, eliminarCompra } =
    useContext(CarritoContext);

  const totalPrice = () => {
    return listaCompras
      .reduce((total, item) => total + item.price * item.cantidad, 0)
      .toFixed(2);
  };

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Precio</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {listaCompras.map((item) => (
            <tr key={item.id}>
              <th scope="row">{item.title}</th>
              <th>{item.price}</th>
              <th>
                <button
                  type="button"
                  className="btn btn-ouline-warning"
                  onClick={() => disminuirCantidad(item.id)}
                >
                  -
                </button>
                <button className="btn btn-warning">{item.cantidad}</button>
                <button
                  type="button"
                  className="btn btn-ouline-warning"
                  onClick={() => aumentarCantidad(item.id)}
                >
                  +
                </button>
              </th>
              <th>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => eliminarCompra(item.id)}
                >
                  Eliminar
                </button>
              </th>
            </tr>
          ))}
          <tr>
            <th>
              <b>TOTAL: {totalPrice()}$</b>
            </th>
          </tr>
        </tbody>
      </table>
      <div className="d-grid gap-2">
        <button
          className="btn btn-warning"
          disabled={listaCompras < 1}
          onClick={() => alert("Comprado!")}
        >
          Comprar
        </button>
      </div>
    </>
  );
}
