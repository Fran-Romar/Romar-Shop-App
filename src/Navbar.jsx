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
      <NavLink className="navbar-navlink" to="/">
        <h1 className="navbar-title">
          <img className="shop-logo" src="s.png" alt="STYLESHOP" />
          STYLESHOP
        </h1>
      </NavLink>
      <ul className="navbar-ul">
        <li className="navbar-li">
          <NavLink to="/" className="navbar-navlink">
            COMPRAS
          </NavLink>
        </li>
        <li className="navbar-li">
          <NavLink to="/" className="navbar-navlink">
            COMPRAS
          </NavLink>
        </li>
        <li className="navbar-li">
          <NavLink to="/" className="navbar-navlink">
            COMPRAS
          </NavLink>
        </li>
      </ul>
      <NavLink to="/carrito" className="navbar-carrito">
        <Badge badgeContent={listaCompras.length} color="warning" max={99}>
          <ShoppingCartIcon color="action" />
        </Badge>
      </NavLink>
    </nav>

    // <nav className="navbar navbar-expand-lg bg-body-tertiary">
    //   <div className="container-fluid">
    //     <NavLink className="navbar-brand" to="/">
    //       ShopApp
    //     </NavLink>
    //     <button
    //       className="navbar-toggler"
    //       type="button"
    //       data-bs-toggle="collapse"
    //       data-bs-target="#navbarSupportedContent"
    //       aria-controls="navbarSupportedContent"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <span className="navbar-toggler-icon"></span>
    //     </button>
    //     <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    //         <li className="nav-item">
    //           <NavLink to="/">Compras</NavLink>
    //         </li>
    //       </ul>
    //       <NavLink to="/carrito">
    //         <Badge badgeContent={listaCompras.length} color="secondary">
    //           <ShoppingCartIcon color="action" />
    //         </Badge>
    //       </NavLink>
    //     </div>
    //   </div>
    // </nav>
  );
}
