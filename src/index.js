import React from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App"
import * as serviceWorker from "./serviceWorker"
import "animate.css"

// Change navbar background on scroll
// And animation classes from animate.css to navbar
window.onscroll = () => {
  const navbar = document.querySelector(".navbar")
  if (!navbar) return // Prevent error if .navbar not found
  let classList = navbar.classList

  if (window.scrollY === 0) {
    classList.remove("navbar-scrolling")
    // classList.add('slideInRight');
  } else {
    // classList.remove('slideInRight');
    classList.add("navbar-scrolling")
  }
}

const root = createRoot(document.getElementById("root"))
root.render(<App />) // ✅ This renders your app

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
