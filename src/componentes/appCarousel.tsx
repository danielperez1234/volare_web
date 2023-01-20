import { useState } from "react"

export const Carousel = () => {

    let imagenes: string[] = [
        "resources/Dron",
        "resources/Dron",
        "resources/Dron"
    ]



    const [imagen, setImagen] = useState("resources/Dron");

    //const cambiarImagen = ()

    return (
        <div className='carousel-general' id="carousel-general">
            <div className='carousel-inner'>
                {
                        imagenes.map((imagenes, index) => {
                            return (
                                <div className='carousel-item' key={index}>
                                    <img src={ imagenes + (index + 1) + ".jpg" } className="imagen" alt={"Dron image" + index} />
                                </div>
                            )
                        })
                }
            </div>
            <button className='btn-carousel-prev' type='button'>
                <h1> Anterior </h1>
            </button>
            <button className='btn-carousel-prev' type='button'>
                <h1> Siguiente </h1>
            </button>
        </div>
    )
}