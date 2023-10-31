import React, { useContext, useState, useEffect } from "react";

import { Row } from "react-bootstrap";

import Card from "../components/Card";
import { ProductoContext } from "../context/ProductoContext";

import "../css/Products.css";

export default function CategoryPage({ category }) {
  const [catProducts, setcatProducts] = useState(null);
  const { products } = useContext(ProductoContext);

  useEffect(() => {
    if (products && category) {
      const filtroCatProducts = (list, category) => {
        setcatProducts(list.filter((product) => product.category === category));
      };
      filtroCatProducts(products, category);
    }
  }, [products, category]);

  return (
    <div className="container">
      <h4 className="productos-title">{category.toUpperCase()}</h4>
      <div className="cards-container">
        <Row>
          {catProducts &&
            catProducts.map((product) => (
              <Card key={product.id} product={product}></Card>
            ))}
        </Row>
      </div>
    </div>
  );
}
