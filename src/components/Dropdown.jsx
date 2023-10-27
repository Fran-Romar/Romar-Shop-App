import React, { useState } from "react";

import { Link } from "react-router-dom";

export default function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="dropdown">
      <button onClick={toggleDropdown} className="dropdown-button">
        CATEGORIES <i className="fa fa-arrow-down"></i>
      </button>
      {isOpen && (
        <div className="dropdown-content">
          <Link to="/trend-products">Trend Products</Link>
          <Link to="#">Jewelery</Link>
          <Link to="#">Electronics</Link>
          <Link to="#">Men's Clothing</Link>
          <Link to="#">Women's Clothing</Link>
        </div>
      )}
    </div>
  );
}
