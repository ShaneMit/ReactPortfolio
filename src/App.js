import React from 'react';
import { Switch, Link, Route, BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
   <> 
    <Navbar/>
    <Footer/>
   </>
  )
}


export default App;
