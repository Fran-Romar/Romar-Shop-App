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
        CATEGORIES &#x25bc;
      </button>
      {isOpen && (
        <div className="dropdown-content">
          <Link to="/trend-products" onClick={toggleDropdown}>
            Trend Products
          </Link>
          <hr />
          <Link to="#" onClick={toggleDropdown}>
            Jewelery
          </Link>
          <Link to="#" onClick={toggleDropdown}>
            Electronics
          </Link>
          <Link to="#" onClick={toggleDropdown}>
            Men's Clothing
          </Link>
          <Link to="#" onClick={toggleDropdown}>
            Women's Clothing
          </Link>
        </div>
      )}
    </div>
  );
}
