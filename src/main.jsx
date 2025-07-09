import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import MoneyState from "./components/UseContext/MoneyState.jsx";

createRoot(document.getElementById("root")).render(
  // <MoneyState>
  <App />
  // </MoneyState>
);
