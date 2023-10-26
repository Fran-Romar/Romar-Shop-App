import React, { useContext } from "react";

import Card from "../components/Card";
import { ProductoContext } from "../context/ProductoContext";
import { CarritoContext } from "../context/CarritoContext";
import TrendBanner from "../components/TrendBanner";

import { Row } from "react-bootstrap";

export default function ComprasPage() {
  const { products } = useContext(ProductoContext);
  const { agregarCompra, eliminarCompra } = useContext(CarritoContext);

  const trendProduct = () => {
    let productoMasRating = null;

    if (products && products.length > 0) {
      productoMasRating = products[0];
      for (let i = 1; i < products.length; i++) {
        if (
          products[i].rating &&
          products[i].rating.rate > productoMasRating.rating.rate
        ) {
          productoMasRating = products[i];
        }
      }
    }
    return productoMasRating;
  };

  const handleAgregar = (compra) => {
    agregarCompra(compra);
  };
  const handleQuitar = (id) => {
    eliminarCompra(id);
  };

  return (
    <>
      <TrendBanner
        trendProduct={trendProduct()}
        handleAgregar={() => handleAgregar(trendProduct())}
        handleQuitar={() => handleQuitar(trendProduct().id)}
      ></TrendBanner>
      <div className="container productos-container">
        <h1 className="productos-title">ALL PRODUCTS</h1>
        <div className="cards-container">
          <Row>
            {products.map((product) => (
              <Card
                key={product.id}
                title={product.title}
                image={product.image}
                price={product.price}
                rating={product.rating}
                col={"3"}
                handleAgregar={() => handleAgregar(product)}
                handleQuitar={() => handleQuitar(product.id)}
              ></Card>
            ))}
          </Row>
        </div>
      </div>
    </>
  );
}
