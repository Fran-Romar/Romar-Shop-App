import React, { useEffect, useContext, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import CarritoPage from "./routes/CarritoPage";
import HomePage from "./routes/HomePage";
import Products from "./routes/Products";
import Search from "./routes/Search";
import TrendPage from "./routes/TrendPage";
import CategoryPage from "./routes/CategoryPage";
import Product from "./routes/Product";
import Navbar from "./Navbar";
import Footer from "./Footer";

import { ProductosProvider } from "./context/ProductosProvider";
import { CarritoProvider } from "./context/CarritoProvider";
import { ProductoContext } from "./context/ProductoContext";

import "./css/General.css";

export default function ShopApp() {
  return (
    <ProductosProvider>
      <CarritoProvider>
        <ShopAppContent />
      </CarritoProvider>
    </ProductosProvider>
  );
}

function ShopAppContent() {
  const { products } = useContext(ProductoContext);
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    if (products) {
      const calculateCategories = (list) => {
        setCategories(
          [...new Set(list.map((item) => item.category))].sort(
            (a, b) => b.length - a.length
          )
        );
      };
      calculateCategories(products);
    }
  }, [products]);

  return (
    <>
      <Navbar categories={categories}></Navbar>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/carrito" element={<CarritoPage />}></Route>
        <Route path="/all-products" element={<Products />}></Route>
        <Route path="/search" element={<Search />}></Route>
        <Route path="/trend-products" element={<TrendPage />}></Route>
        <Route
          path="/all-products/:id"
          element={<Product products={products} />}
        ></Route>
        {categories &&
          categories.map((category, index) => (
            <Route
              path={`/${category.replace(/\s/g, "")}`}
              key={index}
              element={<CategoryPage category={category}></CategoryPage>}
            ></Route>
          ))}
        <Route path="/*" element={<Navigate to="/" />}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}
