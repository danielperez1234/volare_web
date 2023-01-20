import { useEffect, useState } from "react";

export const Carousel = () => {

    const [index, setIndex] = useState(1);
    const [imagen, setImagen] = useState("resources/Dron" + index + ".jpg");

    useEffect(() => {
        setImagen("resources/Dron" + index + ".jpg");
    }, [index])

    var timer;

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

    clearTimeout(timer);
    timer = setTimeout(() => siguiente() , 6000);

    return (
        <div id="carousel-container" className="carousel-container">
            <div id="carousel-centro" className="carousel-centro">
                <div id="carousel-item" className="carousel-item">
                    <img id="carousel-imagen" src={imagen} alt={"Volaré Dron imagen " + index} />
                </div>
            </div>
            <div id="carousel-boton-siguiente" className="carousel-boton-siguiente">
                <button className="boton-siguiente" onClick={siguiente}>Siguiente</button>
            </div>
            <div id="carousel-boton-anterior" className="carousel-boton-siguiente">
                <button className="boton-siguiente" onClick={anterior}>Anterior</button>
            </div>
        </div>
    )
}


/*<div id="carouselExampleDark" className="carousel carousel-dark slide">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="2000">
                    <img src="resources/Dron1.jpg" className="d-block w-100" alt="Dron Volaré"/>
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                    <img src="resources/Dron2.jpg" className="d-block w-100" alt="Dron de Volaré"/>
                </div>
                <div className="carousel-item">
                    <img src="resources/Dron3.jpg" className="d-block w-100" alt="Dron de Volaré"/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>*/