import React from 'react'
import Home from './Home/Home'
import Error from './Pages/Error'
import Tours from './Tours/Tours'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/tours' component={Tours} />
        <Route component={Error} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
