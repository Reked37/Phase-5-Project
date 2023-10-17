import React from "react";
import App from "./components/App";
import ReactDOM from 'react-dom/client'
import "./index.css";
// import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

const container = document.getElementById("root");
const root =ReactDOM.createRoot(container);
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);

