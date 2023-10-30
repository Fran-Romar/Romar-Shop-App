import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Product({ products }) {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    if (products && id) {
      const p = products.filter((product) => product.id === parseInt(id))[0];
      setProduct(p);
    }
  }, [products, id]);

  return (
    <div className="container">
      {product && <div>Product: {product.title}</div>}
    </div>
  );
}
