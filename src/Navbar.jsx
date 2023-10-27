import React, { useContext } from "react";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { NavLink } from "react-router-dom";

import { CarritoContext } from "./context/CarritoContext";

import "./css/Navbar.css";

export default function Navbar() {
  const { listaCompras } = useContext(CarritoContext);

  return (
    <nav className="container">
      <NavLink className="navbar-navlink-h1" to="/">
        <h1 className="navbar-title">
          <img className="shop-logo" src="s.png" alt="STYLESHOP" />
          STYLESHOP
        </h1>
      </NavLink>
      <ul className="navbar-ul">
        <li className="navbar-li">
          <NavLink to="/allproducts" className="navbar-navlink">
            ALL OUR PRODUCTS
          </NavLink>
        </li>
        <li className="navbar-li">
          <NavLink to="/" className="navbar-navlink">
            CATEGORIES
          </NavLink>
        </li>
        <li className="navbar-li">
          <NavLink to="/" className="navbar-navlink">
            SEARCH
          </NavLink>
        </li>
      </ul>
      <NavLink to="/carrito" className="navbar-carrito">
        <Badge badgeContent={listaCompras.length} color="warning" max={99}>
          <ShoppingCartIcon color="action" />
        </Badge>
      </NavLink>
    </nav>
  );
}
