import { Routes, Route, Navigate } from "react-router-dom";
import CarritoPage from "./routes/CarritoPage";
import HomePage from "./routes/HomePage";
import Products from "./routes/Products";
import Search from "./routes/Search";
import TrendPage from "./routes/TrendPage";
import Navbar from "./Navbar";

import { ProductosProvider } from "./context/ProductosProvider";
import { CarritoProvider } from "./context/CarritoProvider";

import "./css/General.css";

export default function ShopApp() {
  return (
    <ProductosProvider>
      <CarritoProvider>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/carrito" element={<CarritoPage />}></Route>
          <Route path="/all-products" element={<Products />}></Route>
          <Route path="/search" element={<Search />}></Route>
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
