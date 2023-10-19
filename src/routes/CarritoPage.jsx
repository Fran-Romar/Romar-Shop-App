import React from "react";

export default function CarritoPage() {
  return (
    <>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Precio</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Eliminar</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Nombre</th>
            <td>Precio</td>
            <td>Cantidad</td>
            <td>Eliminar</td>
          </tr>
        </tbody>
      </table>
      <div className="d-grid gap-2">
        <button className="btn btn-warning">Comprar</button>
      </div>
    </>
  );
}
