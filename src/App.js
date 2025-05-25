import React from "react"
import Home from "./Home/Home"
import Error from "./Pages/Error"
import Tours from "./Tours/Tours"
import Gallery from "./Gallery/Gallery"
import Contact from "./Contact/Contact"
import SingleTour from "./SingleTour/SingleTour"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import "./App.css"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/tours' element={<Tours />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/tours/:id' element={<SingleTour />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
