import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter
import App from "./App";
import { ThemeProvider } from "./context/ThemeContext"; // Keep this correct
import "./styles/App.css"; // ✅ Import global styles here


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter> {/* ✅ Wrap App inside BrowserRouter */}
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>
);
