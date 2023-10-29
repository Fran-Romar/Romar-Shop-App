import React, { useContext, useRef } from "react";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { NavLink } from "react-router-dom";

import { CarritoContext } from "./context/CarritoContext";
import Dropdown from "./components/Dropdown";

import "./css/Navbar.css";

export default function Navbar() {
  const { listaCompras } = useContext(CarritoContext);
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive-nav");
  };

  return (
    <header className="container">
      <NavLink className="navbar-navlink-h1" to="/">
        <h1 className="navbar-title">STYLESHOP</h1>
      </NavLink>
      <nav ref={navRef}>
        <NavLink
          to="/all-products"
          className="navbar-navlink"
          onClick={showNavbar}
        >
          PRODUCTS
        </NavLink>
        <Dropdown showNavbar={showNavbar}></Dropdown>
        <NavLink to="/" className="navbar-navlink" onClick={showNavbar}>
          SEARCH
        </NavLink>
        <NavLink
          className="navbar-navlink-cart"
          to="/carrito"
          onClick={showNavbar}
        >
          <Badge badgeContent={listaCompras.length} color="warning" max={99}>
            <ShoppingCartIcon color="action" />
          </Badge>
        </NavLink>
        <button className="nav-btn nav-close-btn">
          <i className="fa fa-times" onClick={showNavbar}></i>
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <i className="fa fa-bars"></i>
      </button>
    </header>
  );
}
