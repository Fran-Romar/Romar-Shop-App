import React, { useState } from "react";

import { Link } from "react-router-dom";

export default function Dropdown({ showNavbar }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const functions = () => {
    showNavbar();
    toggleDropdown();
  };

  return (
    <div className="dropdown">
      <button onClick={toggleDropdown} className="dropdown-button">
        CATEGORIES &#x25bc;
      </button>
      {isOpen && (
        <div className="dropdown-content">
          <Link to="/trend-products" onClick={functions}>
            Trend Products
          </Link>
          <hr />
          <Link to="#" onClick={functions}>
            Jewelery
          </Link>
          <Link to="#" onClick={functions}>
            Electronics
          </Link>
          <Link to="#" onClick={functions}>
            Men's Clothing
          </Link>
          <Link to="#" onClick={functions}>
            Women's Clothing
          </Link>
        </div>
      )}
    </div>
  );
}
