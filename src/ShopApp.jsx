// import React, { useContext, useState, useEffect } from "react";
// import { Routes, Route, Navigate } from "react-router-dom";
// import CarritoPage from "./routes/CarritoPage";
// import HomePage from "./routes/HomePage";
// import Products from "./routes/Products";
// import Search from "./routes/Search";
// import TrendPage from "./routes/TrendPage";
// import Navbar from "./Navbar";

// import { ProductosProvider } from "./context/ProductosProvider";
// import { CarritoProvider } from "./context/CarritoProvider";
// import { ProductoContext } from "./context/ProductoContext";

// import "./css/General.css";

// export default function ShopApp() {
//   const [categories, setCategories] = useState(null);
//   const { products } = useContext(ProductoContext);

//   const calculateCategories = (list) => {
//     setCategories([...new Set(list.map((item) => item.category))]);
//   };

//   useEffect(() => {
//     calculateCategories(products);
//   }, [products]);

//   return (
//     <ProductosProvider>
//       <CarritoProvider>
//         <Navbar categories={categories}></Navbar>
//         <Routes>
//           <Route path="/" element={<HomePage />}></Route>
//           <Route path="/carrito" element={<CarritoPage />}></Route>
//           <Route path="/all-products" element={<Products />}></Route>
//           <Route path="/search" element={<Search />}></Route>
//           <Route
//             path="/trend-products"
//             element={<TrendPage></TrendPage>}
//           ></Route>
//           {categories &&
//             categories.map((category, index) => (
//               <Route path={`/${category}`} key={index}></Route>
//             ))}
//           <Route path="/*" element={<Navigate to="/" />}></Route>
//         </Routes>
//       </CarritoProvider>
//     </ProductosProvider>
//   );
// }

import React, { useEffect, useContext, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import CarritoPage from "./routes/CarritoPage";
import HomePage from "./routes/HomePage";
import Products from "./routes/Products";
import Search from "./routes/Search";
import TrendPage from "./routes/TrendPage";
import CategoryPage from "./routes/CategoryPage";
import Navbar from "./Navbar";

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
      console.log(categories);
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
    </>
  );
}
