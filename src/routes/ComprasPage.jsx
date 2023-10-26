import React, { useContext } from "react";

import Card from "../components/Card";
import { ProductoContext } from "../context/ProductoContext";
import { CarritoContext } from "../context/CarritoContext";

import { Row } from "react-bootstrap";

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
      <div className="cards-container">
        <Row>
          {products.map((product) => (
            <Card
              key={product.id}
              title={product.title}
              image={product.image}
              price={product.price}
              rating={product.rating}
              handleAgregar={() => handleAgregar(product)}
              handleQuitar={() => handleQuitar(product.id)}
            ></Card>
          ))}
        </Row>
      </div>
    </>
  );
}
