import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import 'animate.css'

// Chnage navbar bacground on scroll
// And animation classes from animate.css to navbar
window.onscroll = () => {
  let classList = document.querySelector('.navbar').classList
  if (window.scrollY == 0) {
    classList.remove('navbar-scrolling')
    // classList.add('slideInRight')
  } else {
    // classList.remove('slideInRight')
    classList.add('navbar-scrolling')
  }
}

ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
