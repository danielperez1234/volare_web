import { useEffect, useState } from "react";
import '../style/appCarousel.css';

export const Carousel = () => {

    const [index, setIndex] = useState(1);
    const [imagen, setImagen] = useState("resources/Dron" + index + ".jpg");


    //Variable independiente
    var timer: string | number | NodeJS.Timeout | undefined;

    //Botones del carousel
    const siguiente = () => {
        if (index > 2) {
            setIndex(1);
        } else {
            setIndex(index + 1);
        }
    }

    const anterior = () => {
        if (index < 2) {
            setIndex(3);
        } else {
            setIndex(index - 1);
        }
    }

    //Use effect para cambiar imagenes
    useEffect(() => {
        setImagen("resources/Dron" + index + ".jpg");
    }, [siguiente,anterior])

    clearTimeout(timer);
    timer = setTimeout(() => siguiente(), 6000);

    return (
        <div id="carousel_container_id" className="carousel-container">
            <div id="carousel-centro" className="carousel-centro">
                <div id="carousel-item" className="carousel-item">
                    <img id="carousel-imagen" className="carousel-imagen" src={imagen} alt={"Volaré Dron imagen " + index} />
                </div>
            </div>
            <div id="carousel-boton-siguiente" className="carousel-boton-siguiente">
                <button className="boton-siguiente" onClick={siguiente}>Siguiente</button>
            </div>
            <div id="carousel-boton-anterior" className="carousel-boton-anterior">
                <button className="boton-anterior" onClick={anterior}>Anterior</button>
            </div>
        </div>
    )
}