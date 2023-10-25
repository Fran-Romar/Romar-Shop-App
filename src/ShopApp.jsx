import { Routes, Route, Navigate } from "react-router-dom";
import CarritoPage from "./routes/CarritoPage";
import ComprasPage from "./routes/ComprasPage";
import Navbar from "./Navbar";

import { ProductosProvider } from "./context/ProductosProvider";
import { CarritoProvider } from "./context/CarritoProvider";

export default function ShopApp() {
  return (
    <ProductosProvider>
      <CarritoProvider>
        <div className="container">
          <Navbar></Navbar>
          <Routes>
            <Route path="/" element={<ComprasPage />}></Route>
            <Route path="/carrito" element={<CarritoPage />}></Route>
            <Route path="/*" element={<Navigate to="/" />}></Route>
          </Routes>
        </div>
      </CarritoProvider>
    </ProductosProvider>
  );
}
