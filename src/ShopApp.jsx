import { Routes, Route, Navigate } from "react-router-dom";
import CarritoPage from "./routes/CarritoPage";
import HomePage from "./routes/HomePage";
import Navbar from "./Navbar";

import { ProductosProvider } from "./context/ProductosProvider";
import { CarritoProvider } from "./context/CarritoProvider";
import Products from "./routes/Products";

import "./css/General.css";
import TrendPage from "./routes/TrendPage";

export default function ShopApp() {
  return (
    <ProductosProvider>
      <CarritoProvider>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/carrito" element={<CarritoPage />}></Route>
          <Route path="/all-products" element={<Products />}></Route>
          <Route
            path="/trend-products"
            element={<TrendPage></TrendPage>}
          ></Route>
          <Route path="/*" element={<Navigate to="/" />}></Route>
        </Routes>
      </CarritoProvider>
    </ProductosProvider>
  );
}
