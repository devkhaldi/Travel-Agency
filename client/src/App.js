import React from 'react'
import Home from './Home/Home'
import Error from './Pages/Error'
import Tours from './Tours/Tours'
import Gallery from './Gallery/Gallery'
import Contact from './Contact/Contact'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/tours' component={Tours} />
        <Route exact path='/gallery' component={Gallery} />
        <Route exact path='/contact' component={Contact} />
        <Route component={Error} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
