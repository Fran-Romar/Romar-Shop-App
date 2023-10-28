import React, { useContext } from "react";

import TrendBanner from "../components/TrendBanner";
import SliderTrends from "../components/SliderTrends";
import { ProductoContext } from "../context/ProductoContext";

import {
  f10trendproducts,
  ftrendProduct,
} from "../helpers/trendProcutsFunctions";

import { useButton } from "../hooks/useButton";

import "../css/Trend.css";
import "../css/Slider.css";

export default function TrendPage() {
  const { products } = useContext(ProductoContext);

  const { handleAgregar, handleQuitar } = useButton();

  const trendProduct = ftrendProduct(products);
  const trendsProducts = f10trendproducts(products);

  return (
    <div className="container">
      <h4 className="productos-title">TREND PRODUCTS</h4>
      <TrendBanner
        trendProduct={trendProduct}
        handleAgregar={() => handleAgregar(trendProduct)}
        handleQuitar={() => handleQuitar(trendProduct.id)}
      ></TrendBanner>
      <SliderTrends trendsProducts={trendsProducts}></SliderTrends>
    </div>
  );
}
