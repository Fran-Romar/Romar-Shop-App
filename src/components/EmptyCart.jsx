import React from "react";

import { Link } from "react-router-dom";

export default function EmptyCart() {
  return (
    <div className="no-items-container">
      <div className="container">
        <h5>SHOP CART</h5>
      </div>
      <div className="no-items-content">
        <h6>NO PRODUCTS IN THE CART</h6>
        <Link to="/all-products">
          <button type="button">KEEP BUYING</button>
        </Link>
      </div>
    </div>
  );
}
