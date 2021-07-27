import React from 'react'
import './App.css';
import Services from './Component/Service';
import About from './Component/About';
import Expertie from './Component/Expertie';
import Contact from './Component/Contact';
import Home from './Component/Home';

function App() {

  return (
    <div >  
      <div className="container-fluid d-inline-flex fixed-top  justify-content-center">
        <a className="nav-link text-light text-uppercase" href='#home' >Home</a>
        <a className="nav-link text-light text-uppercase " href='#about'>About</a>
        <a className="nav-link text-light text-uppercase " href='#expertie' >Expertiese</a>
        <a className="nav-link text-light text-uppercase " href='#Services' >Services</a>
        <a className="nav-link text-light text-uppercase " href='#contact' >Contact</a>
      </div>
      <div className="mt-4" id="home"><Home /></div>
      <div id="about"> <About/></div>
      <div id="expertie"> <Expertie /></div>
      <div id="Services"> <Services /></div>
      <div id="contact"> <Contact /></div>
      <div className="border-top text-center border-success">
        <p class="mb-0 text-light">Copyright ©
            {new Date().getFullYear()}
        </p>

      </div>
    </div>
  );
}

export default App;
