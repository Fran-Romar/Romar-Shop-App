import React, { useContext } from "react";

import { ProductoContext } from "../context/ProductoContext";
import TrendBanner from "../components/TrendBanner";
import SliderTrends from "../components/SliderTrends";
import ShopBanner from "../components/ShopBanner";

import {
  f10trendproducts,
  ftrendProduct,
} from "../helpers/trendProcutsFunctions";
import { useButton } from "../hooks/useButton";

export default function ComprasPage() {
  const { products } = useContext(ProductoContext);

  const { handleAgregar, handleQuitar } = useButton();

  const trendProduct = ftrendProduct(products);
  const trendsProducts = f10trendproducts(products);

  return (
    <>
      <ShopBanner></ShopBanner>
      <TrendBanner
        trendProduct={trendProduct}
        handleAgregar={() => handleAgregar(trendProduct)}
        handleQuitar={() => handleQuitar(trendProduct.id)}
      ></TrendBanner>
      <SliderTrends trendsProducts={trendsProducts}></SliderTrends>
    </>
  );
}
