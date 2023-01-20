import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar } from './componentes/appNavbar';
import { Carousel } from './componentes/appCarousel';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
      </header>
      <body>
        <Carousel/>
      </body>
    </div>
  );
}

export default App;
