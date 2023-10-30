import React, { useState } from "react";

import { Link } from "react-router-dom";

export default function Dropdown({ categories, showNavbar }) {
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
          {categories &&
            categories.map((category, index) => (
              <Link
                key={index}
                to={`/${category.replace(/\s/g, "")}`}
                onClick={functions}
              >
                {category}
              </Link>
            ))}
        </div>
      )}
    </div>
  );
}
