import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./app/App";
import { initAppLanguage } from "./utils/language";
import "./styles/main.scss";

window.toggleSidebar = function () {
  const lpPage = document.querySelector(".lp-page");
  if (lpPage) {
    lpPage.classList.toggle("sidebar-collapsed");
  }
};

window.initSidebar = function () {
  const lpPage = document.querySelector(".lp-page");
  if (lpPage && window.innerWidth <= 1100) {
    lpPage.classList.add("sidebar-collapsed");
  }
};

document.addEventListener("click", (event) => {
  const target = event.target;
  if (target instanceof Element && target.classList.contains("sidebar-overlay")) {
    window.toggleSidebar?.();
  }
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

window.initSidebar?.();
initAppLanguage();
