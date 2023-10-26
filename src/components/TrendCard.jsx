import React from "react";

export default function TrendCard({ title, image }) {
  return (
    <>
      <div className="container">
        <h4 className="trend-product-title">
          <i className="fa fa-bolt"></i> TREND PRODUCT
        </h4>
      </div>
      <div className="trend-card-img-container">
        <img src={image} alt={title} className="trend-card-img" />
      </div>
    </>
  );
}
