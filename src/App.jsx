import React, { useState } from 'react';
import './App.css'

import Sidebar from './components/sidebar/Sidebar'
import Home from './components/home/Home';
import About from "./components/about/About.jsx";
import Services from "./components/services/Services.jsx";
import Resume from './components/resume/Resume';
import Portfolio from './components/portfolio/Portfolio';

 const App = () => {
  return (
    <>
        <Sidebar/>
        <main className='main'>
          <Home/>
          <About/>
          <Services/>
          <Resume/>
          <Portfolio/>
        </main>
    </>
  )
}


export default App;

