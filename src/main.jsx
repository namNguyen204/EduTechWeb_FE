import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { initAppLanguage } from "./utils/language";
import "./index.css";

// Global sidebar toggle function
window.toggleSidebar = function () {
  const lpPage = document.querySelector(".lp-page");
  if (lpPage) {
    lpPage.classList.toggle("sidebar-collapsed");
  }
};

// Initialize sidebar state based on screen size
window.initSidebar = function () {
  const lpPage = document.querySelector(".lp-page");
  if (lpPage && window.innerWidth <= 1100) {
    lpPage.classList.add("sidebar-collapsed");
  }
};

// Close sidebar when clicking overlay (for mobile)
document.addEventListener("click", function (e) {
  if (e.target.classList.contains("sidebar-overlay")) {
    window.toggleSidebar();
  }
});

// Initialize on load
window.addEventListener("load", window.initSidebar);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

initAppLanguage();
