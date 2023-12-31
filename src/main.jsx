import React from "react";
import ReactDOM from "react-dom/client";
import ShopApp from "./ShopApp.jsx";
import { BrowserRouter } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ShopApp />
    </BrowserRouter>
  </React.StrictMode>
);
