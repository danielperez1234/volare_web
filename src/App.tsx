import React from 'react';
import './App.css';
import { Navbar } from './componentes/appNavbar';
import { Carousel } from './componentes/appCarousel';
import { Footer } from './componentes/appFooter';
import { DropDownCard } from './componentes/appDropDownCard';
import { appSliderData } from './componentes/appSliderData';
import { Video } from './componentes/appVideo';
import { Iconos } from './componentes/appIconos';
import { Section } from './componentes/appSection';
import { Nav } from './componentes/nav';

function App() {
  return (
    
    <div className="App">
      <Navbar />
      <Carousel slides={appSliderData}/>
      <Video/>
      <Section/>
      <Iconos/>
      <Footer />
      <DropDownCard title="What's this about?" body='Volaré is the next leader in delivery of all sorts: food, beverages, packages, drugs(Medicina), books, toys, you tell.
Anything under 5KG, our drones can fly it directly to your kitchen, roof, porch or street.'/>
    </div>
  );
}

export default App;
