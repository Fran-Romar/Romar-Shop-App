import React, { useState, useContext } from "react";

import { ProductoContext } from "../context/ProductoContext";
import { useButton } from "../hooks/useButton";
import Card from "../components/Card";

import { Row } from "react-bootstrap";

import "../css/Search.css";
import "../css/Products.css";

export default function Search() {
  const [cabezera, setCabezera] = useState("SEARCH PRODUCTS");
  const [value, setValue] = useState("");
  const [filterProducts, setFilterProducts] = useState([]);

  const { products } = useContext(ProductoContext);
  const { handleAgregar, handleQuitar } = useButton();

  const handleSubmit = (e) => {
    e.preventDefault();
    filtroProductos(products, value);
  };

  const filtroProductos = (lista, nombre) => {
    setFilterProducts(
      lista.filter((product) =>
        product.title.toLowerCase().includes(nombre.toLowerCase())
      )
    );
    filterProducts.length >= 1
      ? setCabezera("")
      : setCabezera(`NO "${nombre}" PRODUCTS FOUND`);
  };

  return (
    <div className="container">
      <h4 className="productos-title">SEARCH OUR PRODUCTS</h4>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit">
          <i className="fa fa-search"></i>
        </button>
      </form>
      {filterProducts.length >= 1 ? (
        <div className="cards-container">
          <Row>
            {filterProducts.map((product) => (
              <Card
                key={product.id}
                product={product}
                handleAgregar={() => handleAgregar(product)}
                handleQuitar={() => handleQuitar(product.id)}
              ></Card>
            ))}
          </Row>
        </div>
      ) : (
        <div className="search-cabezera">{cabezera}</div>
      )}
    </div>
  );
}
