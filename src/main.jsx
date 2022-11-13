import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ListingsProvider } from "./context/context";
import "./assets/theme/./bootstrap.min (1).css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ListingsProvider>
    <App />
  </ListingsProvider>
);
