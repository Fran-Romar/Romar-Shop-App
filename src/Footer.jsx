import React from "react";

import "./css/Footer.css";

export default function Footer() {
  return (
    <>
      <footer className="shop-footer">
        <div className="container">
          <div className="footer-rrss">
            <ul>
              <li>
                <a href="https://instagram.com" target="_blank">
                  <i className="fa fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="https://twitter.com" target="_blank">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="https://youtube.com" target="_blank">
                  <i className="fa fa-youtube"></i>
                </a>
              </li>
              <li>
                <a href="https://facebook.com" target="_blank">
                  <i className="fa fa-facebook"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-politics">
            <ul>
              <li>
                <small>Privacy Policy</small>
              </li>
              <li>
                <small>Refund Policy</small>
              </li>
              <li>
                <small>Terms of Service</small>
              </li>
              <li>
                <small>Contact Information</small>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
