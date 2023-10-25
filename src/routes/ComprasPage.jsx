import React, { useContext } from "react";

import Card from "../components/Card";
import { ProductoContext } from "../context/ProductoContext";
import { CarritoContext } from "../context/CarritoContext";

export default function ComprasPage() {
  const { products } = useContext(ProductoContext);
  const { agregarCompra, eliminarCompra } = useContext(CarritoContext);

  const handleAgregar = (compra) => {
    agregarCompra(compra);
  };
  const handleQuitar = (id) => {
    eliminarCompra(id);
  };

  return (
    <>
      <h1 className="text-center">Compras</h1>
      <hr />
      {products.map((product) => (
        <Card
          key={product.id}
          title={product.title}
          image={product.image}
          description={product.description}
          price={product.price}
          handleAgregar={() => handleAgregar(product)}
          handleQuitar={() => handleQuitar(product.id)}
        ></Card>
      ))}
    </>
  );
}
