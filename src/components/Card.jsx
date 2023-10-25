import React, { useState } from "react";

import "../css/Card.css";

export default function Card({
  title,
  image,
  description,
  price,
  handleAgregar,
  handleQuitar,
}) {
  const [added, setAdded] = useState(false);

  const quitar = () => {
    handleQuitar();
    setAdded(false);
  };

  const agregar = () => {
    handleAgregar();
    setAdded(true);
  };

  return (
    <div className="tarjeta">
      <img src={image} alt={title} className="tarjeta-imagen" />
      <div className="tarjeta-contenido">
        <h3 className="tarjeta-titulo">{title}</h3>
        <p className="tarjeta-descripcion">{description}</p>
        <p className="tarjeta-precio">{price}</p>
      </div>
      {added ? (
        <button type="button" className="boton-quitar" onClick={() => quitar()}>
          Quitar del carrito
        </button>
      ) : (
        <button
          type="button"
          className="boton-agregar"
          onClick={() => agregar()}
        >
          Agregar al carrito
        </button>
      )}
    </div>
  );
}
