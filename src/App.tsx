import React from 'react';
import './App.css';
import { Navbar } from './componentes/appNavbar';
import { Carousel } from './componentes/appCarousel';
import { Footer } from './componentes/appFooter';
import { DropDownCard } from './componentes/appDropDownCard';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Carousel />
      <Footer />
      <DropDownCard title='Lorem Ipsum' body='Integer rutrum congue ipsum a ullamcorper. Phasellus laoreet hendrerit posuere. Fusce eu ipsum tincidunt, ullamcorper quam eget, mattis leo. Sed blandit lorem vitae eleifend consequat. Morbi mollis neque id dapibus iaculis. Aliquam ultrices ultricies lectus vel pharetra. Proin sed enim et neque sagittis tempus eu in turpis.
uwu'/>
    </div>
  );
}

export default App;
