import { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";

export const useButton = () => {
  const { agregarCompra, eliminarCompra } = useContext(CarritoContext);

  const handleAgregar = (compra) => {
    agregarCompra(compra);
  };
  const handleQuitar = (id) => {
    eliminarCompra(id);
  };

  return {
    handleAgregar,
    handleQuitar,
  };
};
