import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Axios
import axios from "axios";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";
axios.defaults.headers.common["Content-Type"] = "application/json";

let token = localStorage.getItem("token");
if (token) axios.defaults.headers.common["jwt-token"] = token;

// Routes
import { BrowserRouter as Router } from "react-router-dom";

// Styles
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

// Toast
import { ToastContainer } from "react-toastify";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <App />
    <ToastContainer theme="colored" />
  </Router>
);
