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
import AppMap from './componentes/appMap';
function App() {
  return (
    
    <div className="App">
      <Navbar />
      <Carousel slides={appSliderData}/>
      <Video/>
      <Section/>
      <Iconos/>
      <Footer />
      <DropDownCard title="Quieres saber mas?" body="Volaré es el nuevo lider en entregas de todo tipo: comida, bebidas, paquetes, medicamentos, libros, juguetes; cualquier cosa dentro del margen de los 5 kilos y el tamañoa decuado, Volaré puede etregarlo en 5 minutos. Todo al alcance de un solo click a tu cocina, entrada, patio o techo."/>
      <DropDownCard title="Que nos distingue?" body="Bueno, ademas de claramente un servicio totalmente nuevo, Volaré resalta por su velocidad de entrega de paquetes; los cuales pueden ser entregados, a partir de que estos ya estan en el dron, en hasta un minimo de 2 minuos, a una distancia aproximada de 3 km."/>
      <DropDownCard title="Con el ambiente?" body="En Volaré amamos nuestro planeta, ahi vives tú, y tu nos importas; los drones de Volaré no producen emisiones de CO2 que otros metodos utilizadas por otras compañias de entrega si. Lo que para el transporte tradicional sería media hora en el trafico, producioendo emisiones de CO2 nosivas para el ambiente, para nosotros son 5 minutos de vuelo libre de emisiones. Quitamos lo malo y contaminante, y te brindamos una comida caliente como recien salida del horno."/>
      <DropDownCard title="Sabias que?" body="Al año cada persona producimos aproximadamente 3.09 toneladas de CO2? Con Volaré puedes contribuir a reducir aun mas este gran numero para el sigueinte año"/>
      <AppMap/>
    </div>
  );
}

export default App;
