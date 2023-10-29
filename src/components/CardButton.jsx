import React from "react";

export default function CardButton({ estado, funcion }) {
  return (
    <button
      type="button"
      className={`boton-${estado === "quitar" ? "quitar" : "agregar"}`}
      onClick={() => funcion()}
    >
      {estado === "quitar" ? (
        <i className="fa fa-check"></i>
      ) : (
        "Añadir al carrito"
      )}
    </button>
  );
}
