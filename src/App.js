import React from "react";
import Home from "./pages/Home";
import About from './pages/About';
import Portfolio from "./pages/Portfolio";
import Service from './pages/Services';
import Contact from './pages/Contact';


function App() {
  return (
    <>
      <div className="Home" id='home'>
        <Home />
      </div>
      <div className="About" id='about'>
        <About />
      </div>
      <div className="Service" id='service'>
        <Service />
      </div>
      <div className="Portfolio" id='portfolio'>
        <Portfolio />
      </div>
      <div className="Contact" id='contact'>
        <Contact />
      </div>
    </>
  );
}

export default App;
