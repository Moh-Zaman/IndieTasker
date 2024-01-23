import React from "react";
import ReactDOM from "react-dom/client";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import * as bootstrap from "bootstrap";

ReactDOM.createRoot(document.getElementById("root")).render(
    // Commenting out React.StrictMode because it causes the DOM to render twice
    // Feel free to uncomment if you need to.

    // <React.StrictMode>
    <Router>
        <App />
    </Router>
    // </React.StrictMode>
);
