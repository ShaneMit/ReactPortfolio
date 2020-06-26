import React from 'react';
import { Switch, Link, Route, BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Project from './components/Project'

const App = () => {
  return (
    <Router>
      <div>
        <Navbar/>
        <Switch>

        </Switch>
        <Footer/>
      </div>
    </Router>
  )
}


export default App;
