import React, { useReducer } from "react";
import { CarritoContext } from "./CarritoContext";

const initialState = [];

export const CarritoProvider = ({ children }) => {
  const agregarCompra = (compra) => {
    compra.cantidad = 1;
    const action = {
      type: "[CARRITO] Compra",
      payload: compra,
    };
    dispatch(action);
  };
  const aumentarCantidad = (id) => {
    const action = {
      type: "[CARRITO] Aumentar cantidad",
      payload: id,
    };
    dispatch(action);
  };
  const disminuirCantidad = (id) => {
    const action = {
      type: "[CARRITO] Disminuir cantidad",
      payload: id,
    };
    dispatch(action);
  };
  const eliminarCompra = (id) => {
    const action = {
      type: "[CARRITO] Eliminar compra",
      payload: id,
    };
    dispatch(action);
  };

  const comprasReducer = (state = initialState, action = {}) => {
    switch (action.type) {
      case "[CARRITO] Compra":
        return [...state, action.payload];

      case "[CARRITO] Aumentar cantidad":
        return state.map((item) => {
          const cant = item.cantidad + 1;
          if (item.id === action.payload) return { ...item, cantidad: cant };
          return item;
        });

      case "[CARRITO] Disminuir cantidad":
        return state.map((item) => {
          const cant = item.cantidad - 1;
          if (item.id === action.payload && item.cantidad > 1)
            return { ...item, cantidad: cant };
          return item;
        });

      case "[CARRITO] Eliminar compra":
        return state.filter((compra) => compra.id !== action.payload);

      default:
        return state;
    }
  };

  const [listaCompras, dispatch] = useReducer(comprasReducer, initialState);

  return (
    <CarritoContext.Provider
      value={{
        listaCompras,
        agregarCompra,
        aumentarCantidad,
        disminuirCantidad,
        eliminarCompra,
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
};
