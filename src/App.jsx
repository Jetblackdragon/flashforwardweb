import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom';

// If new page is made import here
import About from './components/Navbar/pages/About/About';
import Home from './components/Navbar/pages/Home/Home';
import Donations from './components/Navbar/pages/Donations/Donations';

function App() {
  // This stuff will allways be showing, only one of the routes will be showing but this
  // file will always be visible
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Donations" element={<Donations />}></Route>
        </Routes>
      </div>
    </>
  )
}

export default App;
