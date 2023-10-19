import React, { useState, useEffect } from "react";

import Card from "../components/Card";

export default function ComprasPage() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const data = await fetch("https://fakestoreapi.com/products/").then((res) =>
      res.json()
    );
    console.log(data);
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

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
        ></Card>
      ))}
    </>
  );
}
