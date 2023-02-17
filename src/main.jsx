import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Routes
import { BrowserRouter as Router } from "react-router-dom";

// Styles
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <App />
  </Router>
);
