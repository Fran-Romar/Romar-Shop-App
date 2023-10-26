import React, { useState, useEffect } from "react";
import { ProductoContext } from "./ProductoContext";

export function ProductosProvider({ children }) {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const data = await fetch("https://fakestoreapi.com/products/").then((res) =>
      res.json()
    );
    // console.log(data);
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductoContext.Provider value={{ products }}>
      {children}
    </ProductoContext.Provider>
  );
}
