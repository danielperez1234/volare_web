import React from 'react';
import './App.css';
import { Navbar } from './componentes/appNavbar';
import { Carousel } from './componentes/appCarousel';
import { Footer } from './componentes/appFooter';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Carousel />
      <Footer />
    </div>
  );
}

export default App;
