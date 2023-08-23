import React from "react";
import Home from "./pages/Home";
import About from './pages/About';
import Fashion from "./pages/Fashion";


function App() {
  return (
    <>
      <div className="Home" id='home'>
        <Home />
      </div>
      <div className="About" id='about'>
        <About />
      </div>
      <div className="Fashion" id='fashion'>
        <Fashion />
      </div>
    </>
  );
}

export default App;
